import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchBar = () => {
  return (
    <div className="h-[35px] w-[35px]">
      <input type={"checkbox"} id="searchBar" className="peer hidden" />
      <label
        htmlFor="searchBar"
        className="h-full w-full bg-yellow-300 rounded-full flex justify-center items-center p-[5px]"
      >
        <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
      </label>
      <div className="backdrop-blur-xl bg-white/90 peer-checked:flex showDownBottomBar flex-col py-[20px] px-[10px] none lg:h-[500px] rounded-3xl lg:w-[400px] h-[100vh] w-screen border-2 border-solid border-[#000a5a]/50 left-0 lg:left-auto lg:right-[20px] top-[70px] lg:top-[80px] fixed ">
        <input
          type={"text"}
          placeholder="Megumi Katou xinh vch"
          className="px-[10px] h-[50px] w-full outline-none rounded-full border-4 border-solid border-[#000a5a]"
        ></input>
        <div className="flex justify-center items-center h-[500px] w-full">
          none
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
