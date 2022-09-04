import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
const Menu = () => {
  return (
    <div className="h-[70px] w-full px-[100px] text-[18px] font-bold text-[#000a5a] justify-between flex items-center ">
      <Link href={"/"} className="">
        <a className="flex items-center">zenblog .</a>
      </Link>

      <div className="flex items-center">
        <div className="h-full w-[350px] py-[10px] mr-[100px] flex justify-between items-center">
          <Link href={"/"}>
            <a className=" px-[15px] hover:text-[#0058db] flex py-[5px] items-center rounded-2xl">
              <HomeIcon className="h-6 w-6 pr-[5px]" />
              Home
            </a>
          </Link>
          <Link href={"/"}>
            <a className=" px-[15px] hover:text-[#0058db] flex py-[5px] items-center rounded-2xl">
              <NewspaperIcon className="h-6 w-6 pr-[5px]" />
              News
            </a>
          </Link>
          <Link href={"/"}>
            <a className=" px-[15px] hover:text-[#0058db] flex py-[5px] items-center rounded-2xl">
              <UserIcon className="h-6 w-6 pr-[5px]" />
              About
            </a>
          </Link>
        </div>
        <div className="h-[35px] w-[35px] bg-yellow-300 rounded-full flex justify-center items-center p-[5px]">
          <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
