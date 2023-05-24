import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import kkLogo from "../../../Assets/header/kkLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  // for list icon clicks

  // for mobile screen check
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState(1);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  }

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
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <a className="nav-link" href="#home_section">
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#product_section">
                    About Us
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#product_section">
                    Products
                  </a>
                </li>
              
                <li className="navbar-item">
                  <a href="#contact_section">
                    <button className={styles.joinUsBtn}>Get kk</button>
                  </a>
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
            <div className={`col-sm-2 col-md-2 col-lg-1 d-flex justify-content-center pe-0 ${styles.headerLogo}`} >
              <NavLink to={'/'}>
              <img src={kkLogo} alt="logo" className="img-fluid" />
              </NavLink>
            </div>
            <div className=" col-sm-8 col-md-8 d-flex justify-content-start">
              <ul className={styles.headerList}>
              <li
                      // className={'nav-li'}
                  ><NavLink  to={'/'} className={activeLink === 1 ? styles.activeTitle : styles.inactiveTitle} onClick={() => handleLinkClick(1)}>
                      Home
                    </NavLink></li>
                    <li 
                    //  className={'nav-li'}
                   
                  ><NavLink  to={'/'}  className={activeLink === 2 ? styles.activeTitle : styles.inactiveTitle} onClick={() => handleLinkClick(2)} >
                      About Us
                    </NavLink></li>
                    <li 
                    //  className={'nav-li'}
                    
                  ><NavLink to={'/products'} className={activeLink === 3 ? styles.activeTitle : styles.inactiveTitle} onClick={() => handleLinkClick(3)}  >
                     Products
                    </NavLink></li>
                   
                
              </ul>
            </div>
            <div className="col-sm-2 col-md-2">
              <NavLink to='/contactUs' onClick={() => handleLinkClick(4)}>
              <button className={styles.joinUsBtn}><p>Request A Qoute</p></button>
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