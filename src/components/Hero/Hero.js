import React from 'react'
import SideImage from "../../images/Group 21.svg";
import SideImage2 from "../../images/Group 1000003205.png";
// import Select from "react-select";
import ModuleImage1 from "../../images/moduleImage1.png";
import "./Hero.css";

const Hero = () => {
    
  return (
    <div className='hero-section'>
        <div className='hero'>
            <div className='left-div'>
                <h1>
                    Start Your IELTS Preparation And Get desired Bands
                </h1>
                <ul>
                    <li>Get access to IELTS central Library</li>
                    <li>British Council Certified Teacher</li>
                </ul>
                <div className='form-div'>
                    <h1>Free IELTS Classes</h1>
                    <form>
                        <input placeholder="Enter your Full Name"/>
                        <input placeholder="Phone number"/>
                        <button>Continue</button>
                    </form>
                    <p className='terms'>By continuing, you agree to our Term of services & Privacy policy</p>
                </div>
            </div>
            <div className='side-div'>
                <img alt="SideImage" src={SideImage}></img>
                <img alt="SideImage2" className="side-image-2" src={SideImage2}></img>
            </div>
        </div>
        <div className='modules'>
            <div>
                <div className='module-image-div'>
                    <img src={ModuleImage1} alt="ModuleImage1"></img>
                </div>
                <h1>Free IELTS Module</h1>
                <p>20,000+ Listed Properties  across 5 countries.</p>
            </div>

            <div>
                <div className='module-image-div'>
                    <img src={ModuleImage1} alt="ModuleImage1"></img>
                </div>
                <h1>Free IELTS Module</h1>
                <p>20,000+ Listed Properties  across 5 countries.</p>
            </div>

            <div>
                <div className='module-image-div'>
                    <img src={ModuleImage1} alt="ModuleImage1"></img>
                </div>
                <h1>Free IELTS Module</h1>
                <p>20,000+ Listed Properties  across 5 countries.</p>
            </div>  
        </div>
    </div>
    
  )
}

export default Hero