import React, { useState } from "react";
import catStyle from "./catStyle.module.scss";
import catOne from "../../../../Assets/products/catOne.png";
import catTwo from "../../../../Assets/products/catTwo.png";
import catThree from "../../../../Assets/products/catThree.png";
import catFour from "../../../../Assets/products/catFour.png";
import catFive from "../../../../Assets/products/catFive.png";
import catSix from "../../../../Assets/products/catSix.png";
import catSeven from "../../../../Assets/products/catSeven.png";
import catEight from "../../../../Assets/products/catEight.png";
import catNine from "../../../../Assets/products/catNine.png";
import catTen from "../../../../Assets/products/catTen.png";
import catEleven from "../../../../Assets/products/catEleven.png";
import catTwelve from "../../../../Assets/products/catTwelve.png";










const catTabs = [
  { listText: "All Products" },
  { listText: "Topicals Packaging" },
  { listText: "Pre Roll Tubes" },
  { listText: "Concentrate Packaging" },
  { listText: "Cannabis Flower Packaging" },
  { listText: "Add - Ons" },
];

const catList = [
  {image: catOne},
  {image: catTwo },
  {image: catThree},
  {image: catFour},
  {image: catFive},
  {image: catSix},
  {image: catSeven},
  {image: catEight},
  {image: catNine},
  {image: catTen},
  {image: catEleven},
  {image: catTwelve},
]

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={catStyle.catContainer}>
    <div className={catStyle.listBox}>
      <ul className={catStyle.titleList}>
        {catTabs.map((tab, index) => (
          <li
            key={index}
            className={
              index === activeTab ? catStyle.activeTabStyle : catStyle.inactiveTabStyle
            }
            onClick={() => handleTabClick(index)}
          >
            {tab.listText}
          </li>
        ))}
      </ul>
      </div>
      
      


      <div className="row">
        {catList.map((cat,index) => (
          <div key={index} className={`col-md-3 col-lg-3 ${catStyle.catItem}`}>
              <img src={cat.image} alt="the catalogue item"/>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Catalogue;
