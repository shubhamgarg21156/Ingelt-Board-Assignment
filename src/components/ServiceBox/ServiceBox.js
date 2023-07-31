import React from 'react'
import "./ServiceBox.css";
import ServicesBox1 from "../../images/ServicesBox1.png";

const ServiceBox = () => {
  return (
    <div className='service-box'>
        <img src={ServicesBox1} alt="ServicesBox1"></img>
        <h3>Accomodation</h3>
        <ul>
            <li>20,000+ Listed Properties  across 5 countries.</li>
            <li>100+ cities</li>
        </ul>
    </div>
  )
}

export default ServiceBox