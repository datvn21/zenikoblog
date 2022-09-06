import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
const Menu = () => {
  return (
    <div className="fixed z-50 backdrop-blur-xl bg-white/80 top-0 h-[70px] w-full px-[30px] sm:px-[100px] text-[18px] font-bold text-[#000a5a] justify-between flex items-center ">
      <Link href={"/"} className="">
        <a className="flex items-center text-[25px] select-none">
          zenblog <div className="text-yellow-500 text-[30px]">.</div>
        </a>
      </Link>

      <div className="flex  items-center">
        <div className="none lg:flex h-full w-[350px] py-[10px] mr-[100px] justify-between items-center">
          <Link href={"/"}>
            <a className=" px-[15px] hover:text-[#0058db] flex py-[5px] items-center rounded-2xl">
              <HomeIcon className="h-6 w-6 pr-[5px]" />
              Home
            </a>
          </Link>
          <Link href={"/news"}>
            <a className=" px-[15px] hover:text-[#0058db] flex py-[5px] items-center rounded-2xl">
              <NewspaperIcon className="h-6 w-6 pr-[5px]" />
              News
            </a>
          </Link>
          <Link href={"/about"}>
            <a className=" px-[15px] hover:text-[#0058db] flex py-[5px] items-center rounded-2xl">
              <UserIcon className="h-6 w-6 pr-[5px]" />
              About
            </a>
          </Link>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
