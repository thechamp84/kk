import React from "react";
import aboutIntro from "./aboutIntro.module.scss";
import whiteLayer from "../../../../Assets/products/whiteLayer.png";

const AboutIntro = () => {
  return (
    <div className={aboutIntro.aboutIntroContainer}>
      <img src={whiteLayer} alt="the layer" />
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ipsum placerat nibh diam
        faucibus viverra. Mattis molestie ut enim dui. Arcu faucibus eleifend
        ullamcorper elementum cras at pellentesque lacus. Est pellentesque enim
        urna dui faucibus in leo tincidunt non. At elit vulputate habitant leo
        id ultrices massa in. Elementum est a nulla sit. Laoreet volutpat mi
        diam dui a. Blandit at libero nunc velit quam eget. Pellentesque turpis
        tortor nunc eget. Viverra quisque sit rhoncus eu. Nam nibh sit est lorem
        id. Eu magna etiam proin viverra diam et pharetra condimentum. Duis
        fames nunc accumsan non id ornare ipsum integer. Enim et non a viverra.
        Eleifend nam pulvinar fermentum massa sed in velit ut. Amet egestas amet
        malesuada proin magna eu sit. Pharetra sed fringilla interdum lacus diam
        viverra at vitae. Ultricies pharetra nullam felis dignissim arcu amet at
        eu.
      </p>
    </div>
  );
};

export default AboutIntro;
