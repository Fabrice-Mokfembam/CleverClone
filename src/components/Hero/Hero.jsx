import React from 'react'
import './Hero.css'

import vetor1 from '../../assets/images/vecto1.svg'
import vetor2 from '../../assets/images/vector2.svg'
import Starlike from '../../assets/images/starlike.jpg'

function Hero() {
  return (
    <div className='main-hero-container'>
      <div className="main-hero-wrapper">
        <div className="hero-titles-and-button">
          <div className="hero-title-container">
            <h1 className='hero-title'>
              The platform <span>powering</span> digital learning for schools.
            </h1>
          </div>
          <div className="hero-text-container">
            <h1 className='hero-text'>
              At Clever, we securely connect the data and applications that schools rely on to make digital learning work better for everyone.
            </h1>
          </div>
          <div className="buttons-container">
            <div className="blue-btn-container">
              <button className="blue-hero-btn">
                Log in as a student
                <div className="icn-btn">

                </div>
                </button>
            </div>
            <div className="white-buttons-container">
              <div className="first-hero-white-btn">
                <button className='bnt'>
                  For schools
                <div className="icn-btn">

                </div>
                </button>
                
                </div>
              <div className="second-hero-white-btn">
                <button className='bnt'>
                  For application partners
                <div className="icn-btn">

                </div>
                </button>
                
                </div>
             
            </div>
          </div>
        </div>
        <div className="img-mask-container">
          <div className="img-hero-wrapper">
          <div className='main-img-container'><img className='main-img' src={Starlike} alt="imgo" /></div>  
            <div className='yellow-img-container'><img className='img-up' src={vetor1} alt="imgo" /></div>
            <div className='svg-starburst'>
                 <svg class="starburst" width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
                    <line x1="48.194" y1="0.933105" x2="48.194" y2="26.2089" stroke="#0A1E46"></line>
                    <line x1="48.1941" y1="69.5391" x2="48.1941" y2="94.8149" stroke="#0A1E46"></line>
                    <line x1="24.657" y1="6.97192" x2="37.2949" y2="28.8614" stroke="#0A1E46"></line>
                    <line x1="58.9595" y1="66.3862" x2="71.5974" y2="88.2757" stroke="#0A1E46"></line>
                    <line x1="7.29175" y1="23.9706" x2="29.1813" y2="36.6085" stroke="#0A1E46"></line>
                    <line x1="66.7069" y1="58.2733" x2="88.5964" y2="70.9112" stroke="#0A1E46"></line>
                    <line y1="-0.5" x2="25.2758" y2="-0.5" transform="matrix(-0.5 0.866025 0.866025 0.5 71.4476 7.71997)" stroke="#0A1E46"></line>
                    <line y1="-0.5" x2="25.2758" y2="-0.5" transform="matrix(-0.5 0.866025 0.866025 0.5 37.1445 67.1345)" stroke="#0A1E46"></line>
                    <line y1="-0.5" x2="25.2758" y2="-0.5" transform="matrix(-0.866025 0.5 0.5 0.866025 88.3466 24.4036)" stroke="#0A1E46"></line>
                    <line y1="-0.5" x2="25.2758" y2="-0.5" transform="matrix(-0.866025 0.5 0.5 0.866025 28.9314 58.707)" stroke="#0A1E46"></line>
                    <line x1="0.753296" y1="47.374" x2="26.0291" y2="47.374" stroke="#0A1E46"></line>
                    <line x1="69.3594" y1="47.374" x2="94.6352" y2="47.374" stroke="#0A1E46"></line>
                  </svg>
            </div>
            <div className='orange-img-container'><img className='img-down' src={vetor2} alt="imgo" /></div>
            
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
