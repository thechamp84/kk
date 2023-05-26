import React from "react";
import otherPro from "./otherPro.module.scss";
import catOne from "../../../Assets/products/catOne.png";
import catTwo from "../../../Assets/products/catTwo.png";
import catThree from "../../../Assets/products/catThree.png";
import catFour from "../../../Assets/products/catFour.png";

const productList = [
  { image: catOne },
  { image: catTwo },
  { image: catThree },
  { image: catFour },
];

const Otherpro = () => {
  return (
    <>

    <div className={otherPro.otherProContainer}>
      <div className={`container-fluid ${otherPro.textContainer}`}>
        <div className="row">
          <div className={`col-md-6 col-lg-6 ${otherPro.textLeft}`}>
            <h1>Other Products</h1>
          </div>
          <div className={`col-md-6 col-lg-6 ${otherPro.textRight}`}>
            <a href="#" className={otherPro.viewAll}>
              view all
            </a>
          </div>
        </div>
      </div>

      {/* the product images */}

      <div className="container-fluid">
        <div className="row">
            {
                productList.map((product) => (
                    <div className={`col-md-3 col-lg-3 ${otherPro.productImage}`}>
                        <img src={product.image} alt='product pics'/>
                    </div>
                ))
            }
        </div>
      </div>
      </div>
    </>
  );
};

export default Otherpro;
