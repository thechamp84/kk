import React from "react";
import number from "./number.module.scss";
import badgeOne from "../../../../Assets/aboutUs/badgeOne.png";
import badgeTwo from "../../../../Assets/aboutUs/badgeTwo.png";
import badgeThree from "../../../../Assets/aboutUs/badgeThree.png";
import badgeFour from "../../../../Assets/aboutUs/badgeFour.png";

const numberList = [
  { image: badgeOne, heading: "10000+ ", para: "Number of happy customers served" },
  { image: badgeTwo, heading: "8 Working Days", para: "Delivery period" },
  { image: badgeThree, heading: "95%", para: "Color accuracy rate" },
  { image: badgeFour, heading: "6.4M", para: "Service & Quality control assurance" },
];

const Number = () => {
  return(
    <div className={number.numberContainer}>
    <h1>Some Numbers That Matter</h1>
    {/* <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p> */}

    <div className={`container-fluid ${number.gridContainer}`}>
        <div className="row">
            {
                numberList.map((data) => (
                    <div className={` col-md-3 col-lg-3 ${number.colContainer}`}>
                        <img src={data.image} alt="the badge"/>
                        <h1>{data.heading}</h1>
                        <p>{data.para}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  ) 

};

export default Number;
