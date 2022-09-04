import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
const index = ({ children }) => {
  return (
    <div className="">
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default index;
