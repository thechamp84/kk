import React from "react";
import number from "./number.module.scss";
import badgeOne from "../../../../Assets/aboutUs/badgeOne.png";
import badgeTwo from "../../../../Assets/aboutUs/badgeTwo.png";
import badgeThree from "../../../../Assets/aboutUs/badgeThree.png";
import badgeFour from "../../../../Assets/aboutUs/badgeFour.png";

const numberList = [
  { image: badgeOne, heading: "3.9M ", para: "Hosts on our platform" },
  { image: badgeTwo, heading: "600K", para: "Avarage stays each night" },
  { image: badgeThree, heading: "9K", para: "New hosts per month" },
  { image: badgeFour, heading: "6.4M", para: "Total happy guests" },
];

const Number = () => {
  return(
    <div className={number.numberContainer}>
    <h1>Some Numbers That Matter</h1>
    <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>

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
