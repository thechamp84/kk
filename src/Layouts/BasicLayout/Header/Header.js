import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import kkLogo from "../../../Assets/header/kkLogo.svg";
import { NavLink } from "react-router-dom";

const Header = ({handleLinkClick, activeLink}) => {
  // for list icon clicks

  // for mobile screen check
  const [isMobile, setIsMobile] = useState(false);
  // const [activeLink, setActiveLink] = useState(1);

  // const handleLinkClick = (index) => {
  //   setActiveLink(index);
  // }

  // for the mobile nav
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    // defining callbacks
    function handleMediaQueryChange(e) {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // checking size initially
    setIsMobile(mediaQuery.matches);

    // Clean up by removing eventListener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  if (isMobile) {
    return (
      <>
        <div class={`container-fluid ${styles.headerContainer}`}>
          <nav className={`navbar navbar-expand-lg navbar-light ${styles.headerLogo}`}>
            <a className="navbar-brand " href="#home_section">
              <img src={kkLogo} alt="brand logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavCollapse}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarTogglerDemo01"
              // aria-controls="navbarTogglerDemo01"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${
          isNavCollapsed ? "collapse" : ""
        } navbar-collapse`} id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <NavLink  to={'/kk'} className="nav-link" onClick={handleNavCollapse}>
                    Home
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink  to={'/aboutUs'} className="nav-link" onClick={handleNavCollapse}>
                    About Us
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink  to={'/products'} className="nav-link" onClick={handleNavCollapse}>
                    Products
                  </NavLink>
                </li>
              
                <li className="navbar-item">
                  <NavLink  to={'/contactUs'} onClick={handleNavCollapse}>
                    <button className={styles.joinUsBtn}>Contact Us</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    return (
      <>
      {/* <div className="fixed-top" > */}
        <div className="container-fluid">
          <div
            className={`row ${styles.headerContainer} justify-content-center align-items-center`}
          >
            <div className={`col-sm-2 col-md-2 col-lg-2 d-flex justify-content-center pe-0 ${styles.headerLogo}`} >
              <NavLink to={'/kk'} onClick={() => handleLinkClick(1)}>
              <img src={kkLogo} alt="logo" className="img-fluid" />
              </NavLink>
            </div>
            <div className=" col-sm-8 col-md-8 col-lg-8 d-flex justify-content-start">
              <ul className={styles.headerList}>
              <li
                     
                  ><NavLink  to={'/kk'} className={activeLink === 1 ? styles.activeTitle : styles.inactiveTitle} onClick={() => handleLinkClick(1)}>
                      Home
                    </NavLink></li>
                    <li 
                    
                   
                  ><NavLink  to={'/aboutUs'}  className={activeLink === 2 ? styles.activeTitle : styles.inactiveTitle} onClick={() => handleLinkClick(2)} >
                      About Us
                    </NavLink></li>
                    <li 
                  
                    
                  ><NavLink to={'/products'} className={activeLink === 3 ? styles.activeTitle : styles.inactiveTitle} onClick={() => handleLinkClick(3)}  >
                     Products
                    </NavLink></li>
                   
                
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <NavLink to='/contactUs' onClick={() => handleLinkClick(4)}>
              <button className={styles.joinUsBtn}><p>Contact Us</p></button>
              </NavLink>
            
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
};

export default Header;