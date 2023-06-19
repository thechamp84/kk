import React from 'react';
import companies from './companies.module.scss';
import google from '../../../../Assets/aboutUs/google.png';
import netflix from '../../../../Assets/aboutUs/netflix.png';
import unionBank from '../../../../Assets/aboutUs/unionBank.png';
import verizon from '../../../../Assets/aboutUs/verizon.png';

const logoList = [
    {image:google },
    {image:netflix},
    {image:unionBank },
    {image:google },
    {image:verizon },
]

const Companies = () => {
  return (
    <div className={companies.companyContainer}>
    <h1>We help not one,but many companies</h1>
    <p>We have many more company partners all around the world</p>

    <div className={`container-fluid ${companies.logosContainer}`}>
    <div className={`row ${companies.logoRow}`}>
        {
            logoList.map((logo) => (
                <div className={`col-12 col-sm-2 col-md-2 col-lg-2 ${companies.logoContainer}`}>
                    <img src={logo.image} alt="brand logo"/>
                </div>
            ))
        }
       
    </div>

    </div>
    </div>
  )
}

export default Companies;