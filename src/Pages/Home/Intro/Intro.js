import React from "react";
import introStyle from "./intro.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";

const Intro = () => {
  // for the slider
  const introSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessiibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    draggable: true,
    // padding: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...introSettings}>
      {/* first slide */}
      <div className={introStyle.introContainer}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable cannabis packaging</p>
        {/* <button>
          <p>OUR PRODUCTS</p>
        </button> */}
      </div>

      {/* second slide */}
      <div className={introStyle.introContainer}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable cannabis packaging</p>
        {/* <button>
          <p>OUR PRODUCTS</p>
        </button> */}
      </div>

      {/* third slide */}
      <div className={introStyle.introContainer}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable cannabis packaging</p>
        {/* <button>
          <p>OUR PRODUCTS</p>
        </button> */}
      </div>
    </Slider>
  );
};

export default Intro;
