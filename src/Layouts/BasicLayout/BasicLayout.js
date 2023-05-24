import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import Scrollbar from 'smooth-scrollbar'

const BasicLayout = ({ children }) => {
 return (
    <div className=" scroller">
      
        <Header />
        <div>{children}</div>
        <Footer />
      
    </div>
  );
};

export default BasicLayout;
