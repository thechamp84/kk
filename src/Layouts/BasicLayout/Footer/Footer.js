import React from "react";
import footer from "./Footer.module.scss";
import kkLogo from "../../../Assets/header/kkLogo.svg";

const Footer = () => {
  return (
    <>
      <footer className={`container-fluid ${footer.footerContainer}`}>
        <div className="row">
          {/* first col */}
          <div className={`col ${footer.footColOne}`}>
            <img src={kkLogo} alt="brand logo" />
            <p>
              Differentiated sustainable, and compliant packaging solutions for
              industry. Made in theIndia.
            </p>
          </div>

          {/* second col */}
          <div className={`col ${footer.footColTwo}`}>
            <ul>
              <li>
                <a href="#" className={footer.firstFootLink}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">PRODUCTS</a>
              </li>
              <li>
                <a href="#">Request A Qoute</a>
              </li>
            </ul>
          </div>

          {/* third col */}
          <div className={`col ${footer.footColThree}`}>
            <ul>
              <li>
                <a href="#" className={footer.firstFootLink}>
                  Follow Us
                </a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>

          {/* fourth col */}
          <div className={`col ${footer.footColFour}`}>
            <p className={footer.footerTitle}>Contact Us</p>
            <p className={footer.footerAddress}>
              Packaging <br />
              Wheat Ridge, CO 80212
            </p>

            <p className={footer.footerMail}>info@packaging.com</p>
            <p claassName={footer.footerTelephone}>(303) 729-0644</p>
          </div>

          {/* fifth col */}
          <div className={`col ${footer.footColFifth}`}>
            <p>Join our mailing list</p>

            <form>
              <input type="email" placeholder="Email Address" />

              <button type="submit"><p>Submit</p></button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
