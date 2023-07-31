import React from 'react'
import ServicesImage from "../../images/ServicesImage.png";
import "./Services.css";
import ServiceBox from '../ServiceBox/ServiceBox';

const Services = () => {
  return(
    <div className='services-section'>
        <div className='services'>
            <div className='services-left-div'>
                <img src={ServicesImage} alt="ServicesImage"/>
            </div>
            <div className='services-right-div'>
                <h1>Our Services</h1>
                <div className='services-boxes'>
                    <ServiceBox />
                    <ServiceBox />
                    <ServiceBox />
                    <ServiceBox />
                </div>
            </div>
        </div>
    </div>
)
}

export default Services