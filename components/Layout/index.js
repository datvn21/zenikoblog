import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import TabBar from "./TabBar";
const index = ({ children }) => {
  return (
    <div className="">
      <TabBar />
      <Menu />
      <main className="my-[70px]">{children}</main>
      <Footer />
    </div>
  );
};

export default index;
