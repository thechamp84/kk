import React from "react";
import tropical from "./tropical.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import { useState } from "react";

const Tropical = ({ images, heading, description }) => {
  const imgOne = images[0];
  const imgTwo = images[1];
  const imgThree = images[2];
  const imgFour = images[3];

  const imageList = [
    {image:imgOne},
    {image:imgTwo},
    {image:imgThree},
    {image:imgFour}

  ]

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (current) => {
    setCurrentSlide(current);
  };
  // for the slider
  const tropicSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessiibility: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    draggable: true,
    // padding: 0,
    afterChange: handleSlideChange,

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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={`container-fluid ${tropical.tropicalContainer}`}>
        <div className="row">
          <div
            className={`col-md-6 col-lg-6 ${tropical.leftCol}`}
            style={{
              backgroundImage:
                currentSlide === 0
                  ? `url(${imgOne})`
                  : currentSlide === 1
                  ? `url(${imgTwo})`
                  : currentSlide === 2
                  ? `url(${imgThree})`
                  : currentSlide === 3
                  ? `url(${imgFour})`
                  : null,
            }}
          ></div>

          <div className={`col-md-6 col-lg-6 ${tropical.rightCol}`}>
            <div className={tropical.rightColText}>
              <h1>{heading}</h1>
              <p>{description}</p>
            </div>


           
            <Slider {...tropicSettings} className="tropicSlide">
              <div className={tropical.sliderPics}>
                <img src={imgOne} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgTwo} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgThree} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgFour} alt="product detail" />
              </div>
            </Slider>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Tropical;
