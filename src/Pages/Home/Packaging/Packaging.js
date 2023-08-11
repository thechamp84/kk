import React, { useContext } from "react";
import packaging from "./packaging.module.scss";
import picOne from "../../../Assets/home/packagingPicOne.png";
import picTwo from "../../../Assets/home/packagingPicTwo.png";
import { NavLink } from "react-router-dom";
import {LinkContext} from "../../../App";

const Packaging = () => {
  const {handleLinkClick} = useContext(LinkContext);
  
  return (
    <div className={packaging.packContainer}>
      <h1>Why Us?</h1>

      <p>
        We are a quality- and customer-focused company that consistently works
        to offer only the highest-quality goods to our esteemed clients at very
        competitive costs. Our USP is that we think our customers deserve
        nothing less than the best. Here are a few characteristics that set MAK
        Flexible Packaging Pvt Ltd. apart from the competition in the packaging
        industry.{" "}
      </p>

     
      <ul className={packaging.packagingUl}>
        <li>A large distribution network</li>
        <li>A large warehouse</li>
        <li>Quick delivery with a short TAT (turnaround time)</li>
        <li>Client-centric approach</li>
        <li>Ethical business practices</li>
        <li>Environmentally friendly</li>
        <li>Affordability</li>
      </ul>
     

      <NavLink
        to={"/aboutUs"}
        onClick={() => {
          handleLinkClick(2);
          window.scrollTo(0, 0);
        }}
      >
        Learn More
      </NavLink>

      <img className={packaging.picOne} src={picOne} alt="the pics" />
      <img className={packaging.picTwo} src={picTwo} alt="the pics" />
    </div>
  );
};

export default Packaging;
