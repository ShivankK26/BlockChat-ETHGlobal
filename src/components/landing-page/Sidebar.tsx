// This is the old Sidebar Code. The latest one is in the send.tsx file.

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-1/5 overflow-hidden text-center text-white">
      <div className="bg-[#353A3F]  px-4 py-8 flex flex-col items-center">
        <div className="">
          <h1 className="py-4 text-3xl font-extrabold">BlockChat</h1>
        </div>
        <div className="flex flex-col text-center items-left">
          <Link href="/">
            <div className="flex items-center px-4 py-2 focus:bg-[#4A5056] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
              <img src="home.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Home</p>
            </div>
          </Link>
          <Link href="login">
            <div className="flex items-center px-4 py-2 my-2">
              <img src="/mail.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Inbox</p>
            </div>
          </Link>
          <Link href="carrers">
            <div className="flex items-center px-4 py-2 my-2">
              <img src="/Send.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Send</p>
            </div>
          </Link>
          <Link href="help">
            <div className="flex items-center px-4 py-2 my-2">
              <img src="/video.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Video Call</p>
            </div>
          </Link>
          <div>
            <h1 className="py-48 text-6xl font-extrabold text-center -rotate-90 opacity-25">
              Block <span className="block ml-4">Chat</span>
            </h1>
          </div>
        </div>
        <div>
          <p>Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;