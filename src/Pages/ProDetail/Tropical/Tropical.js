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
  const imgFive = images[4];

  const imageList = [
    { image: imgOne },
    { image: imgTwo },
    { image: imgThree },
    { image: imgFour },
    {image:imgFive},
  ];

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
          slidesToShow: 4,
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
            className={`col-sm-6 col-md-6 col-lg-6 ${tropical.leftCol}`}
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
                  : currentSlide === 4
                  ? `url(${imgFive})`
                  :null,
            }}
          ></div>

          <div className={`col-sm-6 col-md-6 col-lg-6 ${tropical.rightCol}`}>

          
            <div className={tropical.rightColText}>
              <h1>{heading}</h1>
              <p>{description}</p>
            </div>

            <Slider {...tropicSettings} className="tropicSlide">
              <div className={tropical.sliderPics}>
                <img src={imgOne} alt="product detail" onClick={() => setCurrentSlide(0)}/>
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgTwo} alt="product detail" onClick={() => setCurrentSlide(1)}/>
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgThree} alt="product detail" onClick={() => setCurrentSlide(2)}/>
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgFour} alt="product detail" onClick={() => setCurrentSlide(3)}/>
              </div>
              <div className={tropical.sliderPics}>
                <img src={imgFive} alt="product detail" onClick={() => setCurrentSlide(4)}/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tropical;
