import React from 'react'
import './Subcribe.css'

function Subcribe() {
  return (
    <div className='main-subscribe-container'>
          <div className="main-subscribe-wrapper">
              <div className="subscribe-text">
                 Subscribe to receive news and updates from Clever.
              </div> 
              <div className="input-container">
                  <input className='input-subscribe' type="text" placeholder='Your email here'/> 
                  <button className="sub-btn">Summit <svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.5303 6.53033C28.8232 6.23743 28.8232 5.76256 28.5303 5.46967L23.7574 0.696697C23.4645 0.403804 22.9896 0.403804 22.6967 0.696697C22.4038 0.989591 22.4038 1.46446 22.6967 1.75736L26.9393 6L22.6967 10.2426C22.4038 10.5355 22.4038 11.0104 22.6967 11.3033C22.9896 11.5962 23.4645 11.5962 23.7574 11.3033L28.5303 6.53033ZM6.55671e-08 6.75L28 6.75L28 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z" fill="blue"></path>
                  </svg></button>
              </div>
        </div>
    </div>
  )
}

export default Subcribe
