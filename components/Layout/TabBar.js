import React from "react";
import {
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const TabBar = () => {
  return (
    <div className="block lg:hidden w-[60px] fixed bottom-[10px] right-[10px] z-50">
      <input type={"checkbox"} id="bottomBar" className="peer hidden" />
      <div className="showUpBottomBar peer-checked:flex none flex-col-reverse items-center justify-around bg-yellow-400 rounded-full h-[200px] my-[5px] w-full ">
        <Link href={"/"}>
          <a>
            <HomeIcon className="h-[30px] w-[30px]" />
          </a>
        </Link>
        <Link href={"/news"}>
          <a>
            <NewspaperIcon className="h-[30px] w-[30px]" />
          </a>
        </Link>
        <Link href={"/about"}>
          <a>
            <UserIcon className="h-[30px] w-[30px]" />
          </a>
        </Link>
      </div>
      <div className="h-[60px] cursor-pointer select-none flex flex-col justify-center rounded-full bg-yellow-400 items-center w-full">
        <label htmlFor="bottomBar">
          <Bars3BottomRightIcon className="h-[30px] w-[30px]" />
        </label>
      </div>
    </div>
  );
};

export default TabBar;
