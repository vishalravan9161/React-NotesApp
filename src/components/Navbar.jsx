import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-full w-full flex place-content-center">
        <div className="flex gap-20 mt-5 outline-none place-content-between">
        <Link
          className="border border-[#4D5156] cursor-pointer active:scale-95 bg-gray-500 px-4 rounded-md"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border border-[#4D5156] cursor-pointer active:scale-95 bg-gray-500 px-4 rounded-md"
          to="/paste"
        >
          Pastes
        </Link>
      </div>
      </div>
    </>
  );
};

export default Navbar;
