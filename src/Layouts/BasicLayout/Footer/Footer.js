import React from "react";
import footer from "./Footer.module.scss";
import kkLogo from "../../../Assets/header/kkLogo.svg";
import { NavLink } from "react-router-dom";
import instagram from "../../../Assets/footer/instagram.png";
import whatsapp from "../../../Assets/footer/whatsapp.png";
import linkedin from "../../../Assets/footer/linkedin.png";

const Footer = ({ handleLinkClick }) => {
  return (
    <>
      <footer className={`container-fluid ${footer.footerContainer}`}>
        <div className="row">
          {/* first col */}
          <div className={`col-md-2 col-lg-2 ${footer.footColOne}`}>
            <NavLink to="/kk" onClick={() => handleLinkClick(1)}><img src={kkLogo} alt="brand logo" /></NavLink>
          </div>

          {/* second col
          <div className={`col-md-8 col-lg-8 ${footer.footColTwo}`}>
            <ul>
        
              <li>
                <NavLink to="/kk" onClick={() => handleLinkClick(1)}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/aboutUs"} onClick={() => handleLinkClick(2)}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={() => handleLinkClick(3)}>Products</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs" onClick={() => handleLinkClick(4)}>Request A Qoute</NavLink>
              </li>
            </ul>
          </div> */}

          {/* second col */}
          <div className={`col-md-8 col-lg-8 ${footer.footColTwo}`}>
            <div className={`row ${footer.footListRow}`}>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to="/kk" onClick={() => handleLinkClick(1)}>
                  Home
                </NavLink>
              </div>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to={"/aboutUs"} onClick={() => handleLinkClick(2)}>
                  About Us
                </NavLink>
              </div>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to="/products" onClick={() => handleLinkClick(3)}>
                  Products
                </NavLink>
              </div>
              <div
                className={`col-12 col-sm-3 col-md-3 col-lg-3 ${footer.listCol}`}
              >
                <NavLink to="/contactUs" onClick={() => handleLinkClick(4)}>
                  Request A Qoute
                </NavLink>
              </div>
            </div>
          </div>

          {/* third col */}
          <div className={`col-md-2 col-lg-2 ${footer.footColThree}`}>
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
