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
      <div className="p-10 flex gap-10">
        <input
          className="p-3 rounded-md border-white border"
          type="text"
          placeholder="Enter tile here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="border px-4 rounded-xl bg-gray-500"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="p-10">
        <textarea
          className="border p-3 w-115"
          placeholder="Enter content here "
          rows={8}
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Home;
