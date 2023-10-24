import ConnectBtn from "../components/landing-page/ConnectBtn";
import Link from "next/link";



const Index = () => {
  return (
    <div className="flex">
      {/* Sidebar (Left Side) */}
      <div className="w-1/4 p-6 text-white bg-[#353A3F]">
        <h1 className="py-4 text-3xl font-extrabold">BlockChat</h1>
        <Link href="/">
          <div className="flex items-center px-4 py-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="home.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Home</p>
          </div>
        </Link>
        <Link href="inbox">
          <div className="flex items-center px-4 py-2 my-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="/mail.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Inbox</p>
          </div>
        </Link>
        <Link href="send">
          <div className="flex items-center px-4 py-2 my-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="/Send.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Send</p>
          </div>
        </Link>
        <Link href="videocall">
          <div className="flex items-center px-4 py-2 my-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="/video.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Video Call</p>
          </div>
        </Link>
        <div>
          <h1 className="py-48 text-6xl font-extrabold text-center -rotate-90 opacity-25">
            Block <span className="block ml-4">Chat</span>
          </h1>
        </div>
        <div>
          <p>Made with ❤️</p>
        </div>
      </div>

      {/* Main Content Area (Right Side) */}
      <div className="relative flex flex-1 p-4">
        <div className="flex-1">
          <Text />
        </div>
        <img src="/message.svg" alt="" className="mt-12 ml-20 mr-12 w-29 h-29 mb-80" />
      </div>

      {/* ConnectBtn at the Top Right (outside the flex-1 container) */}
      <div className="absolute top-4 right-4">
        <ConnectBtn />
      </div>
    </div>
  );
};

export default Index;


function Text(){
  return (
      <div className="ml-6">
        <div className='flex flex-col items-center justify-center mt-36'>
          <h1 className="mb-4 text-5xl font-semibold text-[#333]">BlockChat Features</h1>
        </div>

        <div className='flex flex-col items-center justify-center mt-8'>
          <div className="flex flex-row items-center mb-4"> 
            <img src="/flag.svg" alt="" className="w-8 h-8 mr-2" />
            <p className="px-2 text-lg font-medium text-[#444]">Experience the Web2 Messaging Way Better in Web3</p>
          </div>

          <div className="flex flex-row items-center gap-2 mb-4"> 
            <img src="/framer.svg" alt="" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium text-[#444] hover:text-[#0074E4] transition-colors">Enjoy The Video Calling Services in a Secure Manner</p>
          </div>

          <div className="flex flex-row items-center mr-16"> 
            <img src="/hexagon.svg" alt="" className="w-8 h-8 mr-2" />
            <p className="px-2 text-lg font-medium text-[#444]">Extremely Useful For DAOs</p>
          </div>
        </div>
      </div>

)}
