import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../Redux/pasteSlice";
const Home = () => {
  const [title, settitle] = useState("");
  const [Value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      settitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    // console.log('button is working')
    const paste = {
      title: title,
      content: Value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      //update paste
      dispatch(updateToPastes(paste));
    } else {
      //create paste
      dispatch(addToPastes(paste));
    }

    //after creation or updation
    settitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <>
     <div className="place-content-center flex ">

       <div className="mt-5 flex lg:gap-32 gap-5 p-5 lg:mx-5">
        <input
          className="p-3 bg-[#363840]  lg:h-12 lg:w-50  w-full h-12 outline-none rounded-md border-[#4D5156] border"
          type="text"
          required
          placeholder="Enter title here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <div className="outline-none lg:h-12 lg:w-32 h-10 w-57 ">
          <button
          onClick={createPaste}
          className="border-2 border-[#4D5156] cursor-pointer active:scale-95 active:bg-gray-500 px-4 rounded-xl bg-gray-900"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
        </div>
      </div>
     </div>
       <div className="p-3 flex place-content-center">
        <textarea
        
          className="border-[#4D5156] border-2 bg-[#363840] rounded-md outline-none p-3 w-115"
          placeholder="Enter content here "
          rows={8}
          required
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Home;
