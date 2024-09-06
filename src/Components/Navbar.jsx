import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-3 md:mb-5">
      <div className="text-center">
        <h3 className="text-xl text-gray-600  font-bold">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Parth Gajjar</h1>
      </div>
      <div>
        <input
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full mt-5 md:mt-4 lg:w-[30vw]"
          type="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
