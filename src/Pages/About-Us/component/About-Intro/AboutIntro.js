import React from "react";
import aboutIntro from "./aboutIntro.module.scss";
import whiteLayer from "../../../../Assets/products/whiteLayer.png";

const AboutIntro = () => {
  return (
    // <div className={`container-fluid ${aboutIntro.aboutIntroContainer}`}>
    //   <div className="row">
    //   <div className={`col-md-6 col-lg-6 ${aboutIntro.leftColAbout}`}>
    //   <h1>About Us</h1>
    //   <p>
    //     Although a book shouldn't be judged solely by its cover, in our
    //     industry, it is exactly how we are evaluated—and where we flourish! Any
    //     product's packaging is extremely important since it determines the
    //     product's quality, durability, protection, and shelf life. The
    //     customer's attention is drawn to a product by the first impression,
    //     presentation, and packaging. The packaging experts at MAK Flexible
    //     Packaging Pvt Ltd, make sure that a customer's first impression of a
    //     product is the best impression possible. We have been in the industry
    //     for more than three decades and are fully aware of what it means to
    //     properly package a product. MAK Flexible Packaging Pvt Ltd, is one of
    //     the top producers because of this. <br/> We offer a wide variety of packaging,
    //     including nylon cable ties, laminates, shrink sleeves, liquid packaging,
    //     standy pouches, pouches with and without zippers, and pouches of various
    //     varieties. With a committed R&D team, first-rate technical assistance,
    //     cutting-edge innovative technology, top-notch packaging quality, and
    //     structural and graphic design for both food and non-food services, MAK
    //     Flexible Packaging employees provide an organised method in each stage
    //     of the package manufacturing process, from design to dispatch. Every
    //     level of quality control is ensured via quality inspection. <br/> Throughout
    //     our manufacturing process, we pledge to employ eco-friendly materials
    //     and renewable resources wherever possible. We work in a truly "lean"
    //     setting, making sure that neither customer costs nor resources are
    //     wasted in the process. MAK Flexible Packaging Industry firmly believes
    //     in exceeding client expectations by offering superior post-purchase
    //     support and continuing to develop an innovate packaging solution. eu.
    //   </p>
    //     </div>
    //     <div className={`col-md-6 col-lg-6 ${aboutIntro.rightColAbout}`}>

    //     </div>
    //   </div>
    // </div>
    <div className={aboutIntro.aboutIntroContainer}>
      <img src={whiteLayer} alt="the layer" />
      <h1>About Us</h1>
      <p>
        Although a book shouldn’t be judged solely by its cover, in our
        industry, it is exactly how we are evaluated—and where we flourish!{" "}
        <br />
        Any products packaging is extremely important since it determines the
        products quality, durability, protection, and shelf life. The customers
        attention is drawn to a product by the first impression, presentation,
        and packaging. The packaging experts at MAK FlexiblePackaging Pvt Ltd,
        make sure that a customers first impression of a product is the best
        impression possible. <br />
        We have been in the industry for more than three decades and are fully
        aware of what it means to properly package a product. MAK Flexible
        Packaging Pvt Ltd, is one of the top producers because of this. <br />
        We offer a wide variety of packaging, including nylon cable ties,
        laminates, shrink sleeves, liquidpackaging, standy pouches, pouches with
        and without zippers, and pouches of various varieties. With
        acommittedteam, first-rate technical assistance, cutting-edge innovative
        technology, top-notchpackaging quality, and structural and graphic
        design for both food and non-food services, MAK FlexiblePackaging
        employees provide an organised method in each stage of the package
        manufacturing process,from design to dispatch. Every level of quality
        control is ensured via quality inspection.Throughout our manufacturing
        process, we pledge to employ eco-friendly materials and
        renewableresources wherever possible. <br />
        MAK Flexible Packaging Industry firmly believes in exceedingclient
        expectations by offering superior post-purchase support and continuing
        to develop an innovatepackaging solution.
        {/* Although a book shouldn't be judged solely by its cover, in our
        industry, it is exactly how we are evaluated—and where we flourish! Any
        product's packaging is extremely important since it determines the
        product's quality, durability, protection, and shelf life. The
        customer's attention is drawn to a product by the first impression,
        presentation, and packaging. The packaging experts at MAK Flexible
        Packaging Pvt Ltd, make sure that a customer's first impression of a
        product is the best impression possible. We have been in the industry
        for more than three decades and are fully aware of what it means to
        properly package a product. MAK Flexible Packaging Pvt Ltd, is one of
        the top producers because of this. <br/> We offer a wide variety of packaging,
        including nylon cable ties, laminates, shrink sleeves, liquid packaging,
        standy pouches, pouches with and without zippers, and pouches of various
        varieties. With a committed R&D team, first-rate technical assistance,
        cutting-edge innovative technology, top-notch packaging quality, and
        structural and graphic design for both food and non-food services, MAK
        Flexible Packaging employees provide an organised method in each stage
        of the package manufacturing process, from design to dispatch. Every
        level of quality control is ensured via quality inspection. Throughout
        our manufacturing process, we pledge to employ eco-friendly materials
        and renewable resources wherever possible. We work in a truly "lean"
        setting, making sure that neither customer costs nor resources are
        wasted in the process. MAK Flexible Packaging Industry firmly believes
        in exceeding client expectations by offering superior post-purchase
        support and continuing to develop an innovate packaging solution. eu. */}
      </p>
    </div>
  );
};

export default AboutIntro;
