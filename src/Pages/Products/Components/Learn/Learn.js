import React from "react";
import learnStyle from "./learnStyle.module.scss";

const Learn = () => {
  return (
    <div className={`container-fluid ${learnStyle.learnContainer}`}>
      <div className="row">
        <div className={`col-md-6 col-lg-6 ${learnStyle.learnLeft}`}></div>
        <div className={`col-md-6 col-md-6 ${learnStyle.learnRight}`}>
          <h1>Learn more about our products!</h1>
          <p>
            High-quality, sustainable, and compliant marijuana packaging that
            you and your customers will feel great about using. Make our
            products uniquely yours with our custom printing and labeling
            solutions and other add-ons. We ship within the United States and to
            Canada, so join us in laying the foundation for a circular economy
            and a sustainable future!
          </p>
          <button>
            <p>PRODUCT CATALOG</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
