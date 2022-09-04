import React from "react";

const TopBanner = () => {
  return (
    <div className="h-[300px] sm:h-[500px] lg:w-[700px] w-full overflow-hidden rounded-2xl relative group  lg:mx-[10px]">
      <div className="bg-text upShadow h-full w-full absolute group-hover:block transition-all z-10 hide">
        <div className="showTitle duration-75 h-[100px] sm:h-[150px] flex flex-col justify-center overflow-y-scroll overscroll-y-auto w-full absolute bottom-[0px] font-bold text-[18px] sm:text-[20px] lg:text-[25px] text-white px-[20px]">
          <span className=" w-full">
            Samsung xứng đáng là thương hiệu đại diện của hệ điều hành Android
          </span>
          <div className="w-full h-[2px] bg-yellow-300 mt-[10px]"></div>
        </div>
      </div>
      <div className="h-full w-full bg-cover bg-center z-0 group-hover:scale-110 transition-all duration-300 bg-[url('https://vatvostudio.vn/wp-content/uploads/2022/09/t1glasses.jpg')]"></div>
    </div>
  );
};

export default TopBanner;
