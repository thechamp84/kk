import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
// import "../../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import itemStyle from "./itemStyle.module.scss";
import productOne from "../../../Assets/home/productOne.png";
import productTwo from "../../../Assets/home/productTwo.png";
import { NavLink } from "react-router-dom";

const Items = ({ handleLinkClick }) => {
  // for the slider
  const itemSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // accessibility: true,
    className: "center",
    centerMode: true,
    centerPadding: "150px",
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          centerPadding: "40px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`container-fluid ${itemStyle.itemsContainer}`}>
      <h1>Our Products </h1>

      <Slider {...itemSettings} className="itemSlide">
       
        <div className={itemStyle.slideDivOne}></div>
        <div className={itemStyle.slideDivTwo}></div>
        <div className={itemStyle.slideDivThree}></div>
        <div className={itemStyle.slideDivFour}></div>
        <div className={itemStyle.slideDivFive}></div>
        <div className={itemStyle.slideDivSix}></div>
      </Slider>

      <div className={itemStyle.viewAll}>
        <NavLink to={"/products"} onClick={() => handleLinkClick(3)}>
          {" "}
          view all{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Items;
