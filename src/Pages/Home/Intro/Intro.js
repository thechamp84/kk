import React from "react";
import introStyle from "./intro.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
// import homeProOne from "../../../Assets/home/updated/homeProOne.png";
// import homeProTwo from "../../../Assets/home/updated/homeProTwo.png";
// import homeProThree from "../../../Assets/home/updated/homeProThree.png";
// import homeProFour from "../../../Assets/home/updated/homeProFour.png";
// import homeProFive from "../../../Assets/home/updated/homeProFive.png";
// import homeProSix from "../../../Assets/home/updated/homeProSix.jpg";

// const HomeProducts = [
//   {
//     image: homeProOne,
//     heading: "Sustainable Solutions",
//     paragraph: "High-quality, compliant, and sustainable packaging",
//   },

//   {
//     image: homeProTwo,
//     heading: "Sustainable Solutions",
//     paragraph: "High-quality, compliant, and sustainable packaging",
//   },

//   {
//     image: homeProThree,
//     heading: "Sustainable Solutions",
//     paragraph: "High-quality, compliant, and sustainable packaging",
//   },

//   {
//     image: homeProFour,
//     heading: "Sustainable Solutions",
//     paragraph: "High-quality, compliant, and sustainable packaging",
//   },

//   {
//     image: homeProFive,
//     heading: "Sustainable Solutions",
//     paragraph: "High-quality, compliant, and sustainable packaging",
//   },

//   {
//     image: homeProSix,
//     heading: "Sustainable Solutions",
//     paragraph: "High-quality, compliant, and sustainable packaging",
//   },
// ];

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
      {/* {HomeProducts.map((product, id) => {
        return (
          <div key={id}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={introStyle.introContainer}
          >
            <h1>{product.heading}</h1>
            <p>{product.paragraph}</p>
          </div>
        );
      })} */}

      <div className={`${introStyle.introContainer} ${introStyle.proOneStyle}`}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable packaging</p>
      </div>

      <div className={`${introStyle.introContainer} ${introStyle.proTwoStyle}`}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable packaging</p>
      </div>

      <div className={`${introStyle.introContainer} ${introStyle.proThreeStyle}`}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable packaging</p>
      </div>

      <div className={`${introStyle.introContainer} ${introStyle.proFourStyle}`}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable packaging</p>
      </div>

      <div className={`${introStyle.introContainer} ${introStyle.proFiveStyle}`}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable packaging</p>
      </div>

      <div className={`${introStyle.introContainer} ${introStyle.proSixStyle}`}>
        <h1>Sustainable Solutions</h1>
        <p>High-quality, compliant, and sustainable packaging</p>
      </div> 

      
    </Slider>
  );
};

export default Intro;




