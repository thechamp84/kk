import React from "react";
import prodIntro from "./prodIntroStyle.module.scss";
import whiteLayer from "../../../../Assets/products/whiteLayer.png";

const Productintro = () => {
  return (
    <div className={prodIntro.prodIntroContainer}>
      <h1>Our Products</h1>
      <p>
        We are a one-stop solution for your packaging needs!! Our product range
        includes a wide and assorted range of Laminated Food Packaging Pouches,
        Laminated Packaging Rolls, Stand –Up Pouches, LDPE Pouches, 3 Side
        Sealed Pouches, Metalized Films, Incense Stick Pouches, Matte Finish
        Pouches, Flexographic Printed Pouches, Printed BOPP Pouches, 3 Side
        Sealed Bags, and Polypropylene Pouches.
      </p>
      <img src={whiteLayer} alt="the white overlay" />
    </div>
  );
};

export default Productintro;
