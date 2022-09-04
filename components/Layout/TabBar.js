import React from "react";
import { HomeIcon, NewspaperIcon, UserIcon } from "@heroicons/react/24/outline";
const TabBar = () => {
  return (
    <div className="fixed bottom-0 h-[60px] w-full flex items-center justify-center lg:none z-50">
      <div className="flex h-[50px] justify-around items-center w-[200px] rounded-full bg-yellow-300/80  ">
        <HomeIcon className="h-[30px] w-[30px] text-[#000a5a]" />
        <NewspaperIcon className="h-[30px] w-[30px] text-[#000a5a]" />
        <UserIcon className="h-[30px] w-[30px] text-[#000a5a]" />
      </div>
    </div>
  );
};

export default TabBar;
