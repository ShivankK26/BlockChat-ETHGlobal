import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig, useAccount } from "wagmi";
import { mainnet, goerli, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const { chains, publicClient } = configureChains(
  [mainnet, goerli, sepolia],
  [
    //put api key in env
    infuraProvider({
      apiKey: process.env.INFURA_KEY,
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "block chat",
  // put project id and name in env as well.
  projectId: process.env.INFURA_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
// const { address } = useAccount();

export default function Home() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div>
            <ConnectButton />
            {/* <div>{address}</div> */}
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
