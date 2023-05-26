import React from "react";
import footer from "./Footer.module.scss";
import kkLogo from "../../../Assets/header/kkLogo.svg";
import { NavLink } from "react-router-dom";
import instagram from "../../../Assets/footer/instagram.png";
import whatsapp from "../../../Assets/footer/whatsapp.png";
import linkedin from "../../../Assets/footer/linkedin.png";

const Footer = ({handleLinkClick, activeLink}) => {
  return (
    <>
      <footer className={`container-fluid ${footer.footerContainer}`}>
        <div className="row">
          {/* first col */}
          <div className={`col-md-2 col-lg-2 ${footer.footColOne}`}>
            <img src={kkLogo} alt="brand logo" />
          </div>

          {/* second col */}
          <div className={`col-md-8 col-lg-8 ${footer.footColTwo}`}>
            <ul>
        
              <li>
                <NavLink to={"/"} onClick={() => handleLinkClick(1)}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/aboutUs"} onClick={() => handleLinkClick(2)}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/products"} onClick={() => handleLinkClick(3)}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/contactUs"} onClick={() => handleLinkClick(4)}>Request A Qoute</NavLink>
              </li>
            </ul>
          </div>

          {/* third col */}
          <div className={`col-md-2 col-lg-2 ${footer.footColThree}`}>
            <p>Follow Me On</p>
            <div className={footer.iconGroup}>
              <img src={instagram} alt="instagram logo"/>
              <img src={whatsapp} alt="whatsapp logo"/>
              <img src={linkedin} alt="linkedin logo"/>
            </div>
          </div>
        </div>

        <p className={footer.copyright}>© Packaging Inc. — Web Design by RK</p>
      </footer>
    </>
  );
};

export default Footer;
