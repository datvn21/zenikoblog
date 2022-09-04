import React from "react";

const SubBanner = () => {
  return (
    <div className="h-[300px] sm:h-[200px] lg:h-[240px] w-full sm:w-1/2 mx-[5px]  lg:w-full overflow-hidden  rounded-2xl relative group">
      <div className="bg-text upShadow h-full w-full absolute group-hover:block transition-all z-10 hide">
        <div className="showTitle duration-75 h-[100px] w-full absolute bottom-[0px] flex flex-col justify-center font-bold text-[18px] text-white px-[20px]">
          <span className="threeDot ">
            Samsung xứng đáng là thương hiệu đại diện của hệ điều hành Android
          </span>
          <div className="w-full h-[2px] bg-yellow-300 mt-[10px]"></div>
        </div>
      </div>
      <div className="h-full w-full bg-cover bg-center z-0 group-hover:scale-110 transition-all duration-300 bg-[url('https://vatvostudio.vn/wp-content/uploads/2022/09/Camera-iphone-14-pro.jpg')]"></div>
    </div>
  );
};

export default SubBanner;
