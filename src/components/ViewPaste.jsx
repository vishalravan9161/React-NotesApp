import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector( (state)=>state.paste.pastes);
  const paste = allPastes.filter((p)=>p._id=== id)[0];
  // console.log("Final Paste",paste)
  return (
    <>
  
    <div className="p-10 flex gap-10">
        <input
          className="p-3 rounded-md border-white border"
          type="text"
          disabled
          placeholder="Enter tile here"
          value={paste.title}
          onChange={(e) => settitle(e.target.value)}
        />
        {/* <button
          onClick={createPaste}
          className="border px-4 rounded-xl bg-gray-500"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div className="p-10">
        <textarea
          className="border p-3 w-115"
          placeholder="Enter content here "
          rows={8}
          disabled
          value={paste.content}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
        </>
  )
}

export default ViewPaste