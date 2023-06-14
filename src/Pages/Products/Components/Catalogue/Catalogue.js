import React from "react";
import catStyle from "./catStyle.module.scss";
import ProductList from "../../../../Utils/ProductList";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Catalogue = () => {
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    const { images, heading, description } = product;

    navigate("/productDetail", {
      state: {
        images,
        heading,
        description,
      },
    });
  };

  return (
    <div id="catalogue" className={catStyle.catContainer}>
      <div className="row">
        {ProductList.map((cat, index) => (
          <div
            key={index}
            className={`col-6 col-sm-6 col-md-3 col-lg-3 ${catStyle.catItem}`}
            onClick={() => handleProductClick(cat)}
          >
            {/* <NavLink
              to={"/productDetail"}
             
            > */}
            <img src={cat.images[0]} alt="the catalogue item" />
            {/* </NavLink> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
