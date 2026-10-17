import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "./../Redux/pasteSlice.js";
import toast from 'react-hot-toast';
const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  // console.log(pastes)
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filterdData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));

  }


  return (
    <>
    <div className="h-full flex w-full place-content-center p-3">
      <div className=" mt-10 lg:w-120 w-full ">
        <input
          type="search"
          className="p-2 border rounded-md lg:min-w-120 w-full"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

    
      </div>
        <div className=" flex flex-col gap-5 mt-5 ">
        {filterdData.length > 0 &&
          filterdData.map((paste) => {
            return (
             <div className=" flex place-content-evenly p-5">
               <div key={paste?._id} className="border border-blue-700 w-full h-full lg:h-45 lg:w-120 text-center rounded-xl">
                <div className="mt-5">{paste.title}</div>
                <div className="mt-2">{paste.content}</div>
                <div className="lg:flex mt-2 p-3 lg:flex-row lg:gap-5 place-content-center">
                  <button className="bg-black border px-4 rounded-2xl">
                      <a href={`/?pasteId=${paste?._id}`}>
                        Edit
                      </a>
                  </button>
                  <button 
                   className="bg-black border px-4 rounded-2xl">
                    <a href={`/viewpaste/${paste?._id}`}>
                           View
                    </a>
                    </button>

                  <button onClick={()=>handleDelete(paste?._id)}
                   className="bg-black border px-4 rounded-2xl">Delete</button>
                  <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("copied to clipboard");
                  }}
                   className="bg-black border px-4 rounded-2xl">Copy</button>
                  <button className="bg-black border px-4 rounded-2xl">Share</button>
                </div>
                <div className="mb-3">{paste.createdAt}</div>
              </div>
             </div>
            );
          })}
      </div>
    </>
  );
};

export default Paste;
