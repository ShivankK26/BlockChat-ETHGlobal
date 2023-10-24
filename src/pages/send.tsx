import React from 'react'
import Link from 'next/link'
// import AiFillFileText from "react-icons/ai"



const newSidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
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

    
      <div className='flex flex-col items-center justify-center h-screen pl-64'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <input type="text" placeholder='Enter The Wallet Address/ENS' className='bg-[#353A3F] border-2 border-black text-white rounded-md p-4 w-96' name="" />
            <input type="text" placeholder="Enter The Subject" className='bg-[#353A3F] border-2 border-black text-white rounded-md p-4 w-96' name="" />
            <input type="text" placeholder="Type Your Message..." className='bg-[#353A3F] border-2 border-black text-white rounded-md p-4 w-96' name="" />
        </div>
  
        <div className='flex flex-row gap-56 mt-4'>
            <div className="">
                {/* <img src="/ph_file.svg" alt="" className=''/> */} {/*<AiFillFileText /> */}
                <button type="button" className='text-[#353A3F] border-2 border-[#353A3F] bg-transparent p-2 rounded-md hover:bg-[#B0B0B0]'>Attach File</button>
            </div>
            <div>
                <button type="button" className='text-[#353A3F] border-2 border-[#353A3F] bg-transparent p-2 rounded-md hover:bg-[#B0B0B0]'>Send</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default newSidebar;
