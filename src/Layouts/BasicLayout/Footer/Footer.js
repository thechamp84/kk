import React, { useContext } from "react";
import footer from "./Footer.module.scss";
import kkLogo from "../../../Assets/header/kkLogo.svg";
import { NavLink } from "react-router-dom";
import instagram from "../../../Assets/footer/instagram.svg";
import whatsapp from "../../../Assets/footer/whatsapp.svg";
import linkedin from "../../../Assets/footer/linkedin.svg";
import {LinkContext} from "../../../App";


const Footer = () => {
  const {handleLinkClick} = useContext(LinkContext);

  return (
    <>
      <footer className={`container-fluid ${footer.footerContainer}`}>
        <div className="row">
          {/* first col */}
          <div className={`col-sm-2 col-md-2 col-lg-2 ${footer.footColOne}`}>
            <NavLink to="/" onClick={() => {handleLinkClick(1); window.scrollTo(0,0)}}><img src={kkLogo} alt="brand logo" /></NavLink>
          </div>

       

          {/* second col */}
          <div className={` col-sm-8 col-md-8 col-lg-8 ${footer.footColTwo}`}>
            <div className={`row ${footer.footListRow}`}>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to="/" onClick={() => {handleLinkClick(1); window.scrollTo(0,0)}}>
                  Home
                </NavLink>
              </div>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to={"/aboutUs"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0)}}>
                  About Us
                </NavLink>
              </div>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to="/products" onClick={() => {handleLinkClick(3); window.scrollTo(0,0)}}>
                  Products
                </NavLink>
              </div>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to="/contactUs" onClick={() => {handleLinkClick(4);window.scrollTo(0,0)}}>
                 Contact Us
                </NavLink>
              </div>
            </div>
          </div>

          {/* third col */}
          <div className={`col-sm-2 col-md-2 col-lg-2 ${footer.footColThree}`}>
            <p>Follow Me On</p>
            <div className={footer.iconGroup}>
              <img src={instagram} alt="instagram logo" />
              <img src={whatsapp} alt="whatsapp logo" />
              <img src={linkedin} alt="linkedin logo" />
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
};

export default Footer;
