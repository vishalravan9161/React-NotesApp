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
  
     <div className="place-content-center flex ">

       <div className="mt-5 flex lg:gap-32 gap-5 p-5 lg:mx-5">
        <input
          className="p-3 bg-[#363840]  lg:h-12 lg:w-115  w-full h-12 outline-none rounded-md border-[#4D5156] border"
          type="text"
            disabled
        
          placeholder="Enter title here"
          value={paste.title}
          onChange={(e) => settitle(e.target.value)}
        />
        {/* <div className="outline-none lg:h-12 lg:w-32 h-10 w-57 ">
          <button
          onClick={createPaste}
          className="border-2 border-[#4D5156] cursor-pointer active:scale-95 active:bg-gray-500 px-4 rounded-xl bg-gray-900"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
        </div> */}
      </div>
     </div>
       <div className="p-3 flex place-content-center">
        <textarea
        
          className="border-[#4D5156] border-2 bg-[#363840] rounded-md outline-none p-3 w-115"
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