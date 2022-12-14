import React from "react";
import SubBanner from "./SubBanner";
import TopBanner from "./TopBanner";

const index = () => {
  return (
    <div className="h-[1000px] sm:h-[750px] lg:h-[600px] py-[10px] sm:py-[30px] px-[10px] lg:px-0 w-full flex flex-col lg:flex-row justify-start sm:justify-center">
      <TopBanner />
      <div className="h-[640px] lg:h-[500px] sm:h-[210px] w-full lg:w-[500px] justify-around lg:my-0 my-[5px] sm:my-[5px] lg:justify-between lg:mx-[10px] flex lg:flex-col items-center flex-col sm:flex-row">
        <SubBanner />
        <SubBanner />
      </div>
    </div>
  );
};

export default index;
