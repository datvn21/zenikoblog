import React from "react";
import {
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
const TabBar = () => {
  return (
    <div className="block lg:hidden w-[60px] fixed bottom-[10px] right-[10px] z-50">
      <input type={"checkbox"} id="bottomBar" className="peer hidden" />
      <div className="showUpBottomBar peer-checked:flex none flex-col items-center justify-around bg-yellow-400 rounded-full h-[200px] my-[5px] w-full ">
        <HomeIcon className="peer-checked:invisible h-[30px] w-[30px]" />
        <NewspaperIcon className="h-[30px] w-[30px]" />
        <UserIcon className="h-[30px] w-[30px]" />
      </div>
      <div className="h-[60px] flex flex-col justify-center rounded-full bg-yellow-400 items-center w-full">
        <label htmlFor="bottomBar">
          <Bars3BottomRightIcon className="h-[30px] w-[30px]" />
        </label>
      </div>
    </div>
  );
};

export default TabBar;
