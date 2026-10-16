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
      <div className="flex place-content-center pt-10">
        <input
          type="search"
          className="p-2 border rounded-md min-w-120"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-5 mt-5 ">
        {filterdData.length > 0 &&
          filterdData.map((paste) => {
            return (
              <div key={paste?._id} className="border text-center rounded-xl">
                <div className="mt-5">{paste.title}</div>
                <div className="mt-2">{paste.content}</div>
                <div className="flex mt-2 p-5 flex-row gap-5 place-content-evenly">
                  <button className="bg-black border px-2">
                      <a href={`/?pasteId=${paste?._id}`}>
                        Edit
                      </a>
                  </button>
                  <button 
                   className="bg-black border px-2">
                    <a href={`/viewpaste/${paste?._id}`}>
                           View
                    </a>
                    </button>

                  <button onClick={()=>handleDelete(paste?._id)}
                   className="bg-black border px-2">Delete</button>
                  <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("copied to clipboard");
                  }}
                   className="bg-black border px-2">Copy</button>
                  <button className="bg-black border px-2">Share</button>
                </div>
                <div className="mb-3">{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Paste;
