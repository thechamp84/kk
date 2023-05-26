import React from "react";
import tropical from "./tropical.module.scss";
import Slider from "react-slick";
import prodetailLeft from "../../../Assets/ProDetail/prodetailLeft.png";
import slidePicOne from "../../../Assets/ProDetail/slidePicOne.png";
import slidePicTwo from "../../../Assets/ProDetail/slidePicTwo.png";
import slidePicThree from "../../../Assets/ProDetail/slidePicThree.png";
import slidePicFour from "../../../Assets/ProDetail/slidePicFour.png";


const Tropical = () => {

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
          <div className={`col-md-6 col-lg-6 ${tropical.leftCol}`}></div>

          <div className={`col-md-6 col-lg-6 ${tropical.rightCol}`}>
            <h1>Topicals Packaging</h1>

            <p>Lorem ipsum dolor sit amet consectetur. Eget aliquam nec ut eget ac. Tristique egestas velit at arcu est maecenas leo sagittis. Tempor leo velit consequat commodo quam mauris sapien nibh. Mus id vitae tortor luctus. Sociis id tempus sed ut feugiat vitae malesuada sit. Lacus erat enim vitae nulla posuere vel adipiscing. Ac mauris lorem et adipiscing tristique amet. Consectetur arcu quam augue facilisis ultricies scelerisque eu lorem tincidunt.</p>

            <Slider {...tropicSettings}>
                <div className={tropical.sliderPics}>
                    <img src={slidePicOne} alt="product detail"/>
                </div>
                <div className={tropical.sliderPics}>
                    <img src={slidePicTwo} alt="product detail"/>
                </div>
                <div className={tropical.sliderPics}>
                    <img src={slidePicThree} alt="product detail"/>
                </div>
                <div className={tropical.sliderPics}>
                    <img src={slidePicFour} alt="product detail"/>
                </div>

                <div className={tropical.sliderPics}>
                    <img src={slidePicOne} alt="product detail"/>
                </div>
                <div className={tropical.sliderPics}>
                    <img src={slidePicTwo} alt="product detail"/>
                </div>
                <div className={tropical.sliderPics}>
                    <img src={slidePicThree} alt="product detail"/>
                </div>
                <div className={tropical.sliderPics}>
                    <img src={slidePicFour} alt="product detail"/>
                </div>



           

            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tropical;
