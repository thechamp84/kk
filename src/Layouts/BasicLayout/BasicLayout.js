import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import layoutStyle from './BasicLayout.module.scss';
// import Scrollbar from 'smooth-scrollbar'

const BasicLayout = ({ children}) => {
  return (
    // <div className="scroller">
  <div>
      <Header  />
      <div>{children}</div>
      <Footer  />
    </div>
  );
};

export default BasicLayout;
