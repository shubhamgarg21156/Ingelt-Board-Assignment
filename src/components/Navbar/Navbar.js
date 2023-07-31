import React from 'react'
import image from "../../images/InGelt-white 3.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img alt="Logo" src={image}></img>
    </div>
  )
}

export default Navbar