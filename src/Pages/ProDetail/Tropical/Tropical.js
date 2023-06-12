import React from "react";
import tropical from "./tropical.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import prodetailLeft from "../../../Assets/ProDetail/prodetailLeft.png";
import slidePicOne from "../../../Assets/ProDetail/slidePicOne.png";
import slidePicTwo from "../../../Assets/ProDetail/slidePicTwo.png";
import slidePicThree from "../../../Assets/ProDetail/slidePicThree.png";
import slidePicFour from "../../../Assets/ProDetail/slidePicFour.png";
import catOne from "../../../Assets/products/catOne.png";
import catTwo from "../../../Assets/products/catTwo.png";
import catThree from "../../../Assets/products/catThree.png";
import catFour from "../../../Assets/products/catFour.png";
import catFive from "../../../Assets/products/catFive.png";
import catSix from "../../../Assets/products/catSix.png";
import catSeven from "../../../Assets/products/catSeven.png";
import catEight from "../../../Assets/products/catEight.png";
import catNine from "../../../Assets/products/catNine.png";
import catTen from "../../../Assets/products/catTen.png";
import catEleven from "../../../Assets/products/catEleven.png";
import catTwelve from "../../../Assets/products/catTwelve.png";
import { useState } from "react";

const Tropical = () => {
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
            className={`col-md-6 col-lg-6 ${tropical.leftCol}`}
            style={{
              backgroundImage:
                currentSlide === 0
                  ? `url(${catOne})`
                  : currentSlide === 1
                  ? `url(${catTwo})`
                  : currentSlide === 2
                  ? `url(${catThree})`
                  : currentSlide === 3
                  ? `url(${catFour})`
                  : currentSlide === 4
                  ? `url(${catFive})`
                  : currentSlide === 5
                  ? `url(${catSix})`
                  : currentSlide === 6
                  ? `url(${catSeven})`
                  : currentSlide === 7
                  ? `url(${catEight})`
                  : currentSlide === 8
                  ? `url(${catNine})`
                  : currentSlide === 9
                  ? `url(${catTen})`
                  : currentSlide === 10
                  ? `url(${catEleven})`
                  : currentSlide === 11
                  ? `url(${catTwelve})`
                  : currentSlide === 12
                  ? `url(${catFive})`
                  : null,
            }}
          ></div>

          <div className={`col-md-6 col-lg-6 ${tropical.rightCol}`}>
            <div className={tropical.rightColText}>
              {currentSlide === 0 ? (
                <>
                  <h1>Laminated Food/Nonfood Packaging Pouches </h1>
                  <p>
                    Our laminated food packaging pouches are pouches with
                    50-to-120-micron thickness and are available in all colors
                    and sizes! With an attractive glossy finish and customized
                    design, they are sure to catch anybody’s attention! <br />{" "}
                    These are 2-layer/3-layer printed pouches that offer double
                    safety from leakage and air gaps, ensuring freshness and
                    aroma are retained in the pouch!
                  </p>
                </>
              ) : currentSlide === 1 ? (
                <>
                  <h1>Clear Vacuum Pouches </h1>
                  <p>
                    These customized vacuum pouches are long-lasting, durable
                    and of high quality! They come in customized sizes and are
                    transparent.
                  </p>
                </>
              ) : currentSlide === 2 ? (
                <>
                  <h1>2 and 3 Layer printed Laminated Rolls </h1>
                  <p>
                    These printed 2 and 3-layer laminated packaging rolls that
                    are reliable and of high quality! They are disposable and
                    eco-friendly with a thickness of 30 Micron to
                    150micronsdepending upon the packaging need. <br />
                    It is essential to have good finishing in packaging rolls,
                    especially food packaging and we understand this very
                    accurately! <br /> These laminated Packaging Rolls are made
                    with utmost care and premium quality! These pouches are
                    weatherproof, lightweight and known for corrosion
                    resistance!
                  </p>
                </>
              ) : currentSlide === 3 ? (
                <>
                  <h1>Stand –Up Pouches </h1>
                  <p>
                    These pouches are extremely attractive and stand well on the
                    shelf display and used to pack many products like coffee,
                    nuts, and snacks. They are of food grade and come in any
                    color and customized design! These pouches come in 2 and
                    3layers.
                  </p>
                </>
              ) : currentSlide === 4 ? (
                <>
                  <h1>Printed Stand-Up Pouches </h1>
                  <p>
                    We use the Rotogravure printing technique to make these
                    disposable stand-up pouches that come in attractive colors
                    and sizes! The zip closure ensures aroma of the product is
                    intact!Packing spices requires multilayer lamination to keep
                    the aroma and freshness intact and we ensure that with our
                    superior quality stand-up pouch! We offer customized
                    thickness and design, so your wish is our command!
                  </p>
                </>
              ) : currentSlide === 5 ? (
                <>
                  <h1>LDPE Pouches </h1>
                  <p>
                    To cater to a wide range of customers and meet the
                    increasing demand, we have two types of LDPE Pouches,
                    printed and plain.
                  </p>
                </>
              ) : currentSlide === 6 ? (
                <>
                  <h1>Plain LDPE Pouch </h1>
                  <p>
                    These transparent plain LDPE pouches are waterproof are
                    great for international packing! They come in various sizes
                    with 40micron to 150micron thickness.
                  </p>
                </>
              ) : currentSlide === 7 ? (
                <>
                  <h1> Three Side Sealed Pouch</h1>
                  <p>
                    Being pioneers in the packaging industry, we know the
                    importance of food packaging thoroughly. These pouches
                    sealed neatly from three sides are lightweight, durable and
                    used widely for packaging! They are flexible and easy to
                    pack.
                  </p>
                </>
              ) : currentSlide === 8 ? (
                <>
                  <h1>Centre Seal Pouches for Food Packaging </h1>
                  <p>
                    These pouches are ideal for packaging powders and food grain
                    and ensure moisture-proof protection and leakage protection
                    with disposable feature!
                  </p>
                </>
              ) : currentSlide === 9 ? (
                <>
                  <h1>Metalized Pouches or Rolls </h1>
                  <p>
                    – Using polyester film, these metalized pouches ensure the
                    heat barrier is adequate and the product remains fresh,
                    crisp and waterproof! They are recyclable too!
                  </p>
                </>
              ) : currentSlide === 10 ? (
                <>
                  <h1> Incense Stick Pouch </h1>
                  <p>
                    The essence of Incense stick is in its fragrance that adds
                    to the divinity is any religious ritual! Thus, we ensure
                    that this fragrance stays intact with our PET pouches that
                    are heat sealed and have three-layer lamination! These are
                    available in all colors with a matte finish to add to the
                    elegance!
                  </p>
                </>
              ) : currentSlide === 11 ? (
                <>
                  <h1>Matte Finish Pouch </h1>
                  <p>
                    Matte Finish has an elegance and suitable for some niche
                    products!! They do not blind during sunshine and are easy to
                    recognize and read! Our metalized matte finish pouches have
                    customized color and are a sight to behold!
                  </p>
                </>
              ) : currentSlide === 12 ? (
                <>
                  <h1>Flexographic Printed Pouch </h1>
                  <p>
                    These pouches using traditional printing technique has been
                    mastered by our professional team and we offer these in a
                    wide range of colors!
                  </p>
                </>
              ) : null}
            </div>

            <Slider {...tropicSettings} className="tropicSlide">
              <div className={tropical.sliderPics}>
                <img src={slidePicOne} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicTwo} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicThree} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicFour} alt="product detail" />
              </div>

              <div className={tropical.sliderPics}>
                <img src={slidePicOne} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicTwo} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicThree} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicFour} alt="product detail" />
              </div>

              <div className={tropical.sliderPics}>
                <img src={slidePicOne} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicTwo} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicThree} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicFour} alt="product detail" />
              </div>
              <div className={tropical.sliderPics}>
                <img src={slidePicTwo} alt="product detail" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tropical;
