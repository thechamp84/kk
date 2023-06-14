import React from "react";
import prodetail from "./proDetail.module.scss";
import Tropical from "./Tropical/Tropical";
import Otherpro from "./OtherProducts/Otherpro";
import { useLocation } from "react-router-dom";

const Prodetail = () => {
  const location = useLocation();
  const { images, heading, description } = location.state;

  return (
    <>
      <Tropical images={images} heading={heading} description={description}  />
      <Otherpro />
    </>
  );
};

export default Prodetail;
