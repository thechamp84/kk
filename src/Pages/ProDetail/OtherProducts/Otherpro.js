import React from "react";
import otherPro from "./otherPro.module.scss";
import ProductList from "../../../Utils/ProductList";
import { NavLink, useNavigate } from "react-router-dom";

const Otherpro = () => {
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
    <>
      <div className={otherPro.otherProContainer}>
        <div className={`container-fluid ${otherPro.textContainer}`}>
          <div className="row">
            <div className={`col-9 col-sm-6 col-md-6 col-lg-6 ${otherPro.textLeft}`}>
              <h1>Other Products</h1>
            </div>
            <div className={`col-3 col-sm-6 col-md-6 col-lg-6 ${otherPro.textRight}`}>
              <NavLink to={"/products"} className={otherPro.viewAll} onClick={() => window.scrollTo(0, 0)}>
                view all
              </NavLink>
            </div>
          </div>
        </div>

        {/* the product images */}

        <div className="container-fluid">
          <div className="row">
            {ProductList.slice(0, 4).map((product, index) => (
              <div
                key={index}
                className={`col-6 col-sm-3 col-md-3 col-lg-3 ${otherPro.productImage}`}
                onClick={() => {handleProductClick(product); window.scrollTo(0,0)}}
              >
                <img src={product.images[0]} alt="product pics" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Otherpro;
