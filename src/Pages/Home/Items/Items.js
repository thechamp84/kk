import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import itemStyle from "./itemStyle.module.scss";
import productOne from "../../../Assets/home/productOne.png";
import productTwo from "../../../Assets/home/productTwo.png";
import { NavLink, useNavigate } from "react-router-dom";
import ProductList from "../../../Utils/ProductList";
import {LinkContext} from "../../../App";

const Items = () => {

  // importing LinkContext 
  const {handleLinkClick} = useContext(LinkContext);

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
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          centerPadding: "40px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const handleProductClick = (product) => {
    const { images, heading, description } = product;

    navigate("/productDetail", {
      state: {
        images,
        heading,
        description,
      },
    });
  };

  return (
    <div className={`container-fluid ${itemStyle.itemsContainer}`}>
      <h1>Our Products </h1>

      <Slider {...itemSettings} className="itemSlide">
        {ProductList.map((product, index) => (
          <div
            key={index}
            className={itemStyle.slideDiv}
            // style={{ backgroundImage: `url(${product.images[0]})` }}
            onClick={() => {handleProductClick(product); window.scrollTo(0,0)}}
          >
            <img src={product.images[0]} alt="the item slide images" />
          </div>
        ))}
      </Slider>

      <div className={itemStyle.viewAll}>
        <NavLink to={"/products"} onClick={() => { handleLinkClick(3);window.scrollTo(0, 0)}}>
          view all
        </NavLink>
      </div>
    </div>
  );
};

export default Items;
