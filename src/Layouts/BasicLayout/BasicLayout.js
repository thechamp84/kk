import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import Scrollbar from 'smooth-scrollbar'

const BasicLayout = ({ children, handleLinkClick, activeLink }) => {
 return (
    <div className=" scroller">
      
        <Header  handleLinkClick={handleLinkClick} activeLink= {activeLink}/>
        <div>{children}</div>
        <Footer  handleLinkClick={handleLinkClick} activeLink= {activeLink}/>
      
    </div>
  );
};

export default BasicLayout;
