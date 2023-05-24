import React from 'react';
import prodIntro from './prodIntroStyle.module.scss';
import whiteLayer from '../../../../Assets/products/whiteLayer.png';

const Productintro = () => {
  return (
    <div className={prodIntro.prodIntroContainer}>
      <h1>Our Products</h1>
      <p>Sustainable packaging made from 100% plant-based hemp plastic, 100% reclaimed ocean-
bound plastic, and other innovative materials.</p>
<img src={whiteLayer} alt="the white overlay"/>

    </div>
  )
}

export default Productintro;