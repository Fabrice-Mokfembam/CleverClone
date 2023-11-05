import React from 'react'
import './Built.css'
import img1 from '../../assets/images/Clever-IDM-MainSplashPage-01-1-e1686629093118.png';
import img2 from '../../assets/images/shapes-pattern-3.svg';

function Built() {
  return (
      <>
  <div className="main-morecontrol-container built-container">
    <div className="main-morecontrol-container-wrapper built-container-wrapper">
      <div className="more-control-writings built-writings">
          <div className="more-control-writings-wrapper built-writings-wrapper">
            <div className="full-title built-title">Built-in security, fewer sleepless nights</div>
            <div className="control-text-normal built-normal-text">
              With account security by default, Clever's platform ensures that student data is protected and stays private at the point it's most vulnerable: access.
            </div>
            <div className="control-link built-link">Identity & Security  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg></div>
          </div>
        </div>          
      <div className="pic-morecontrol-container built-image-container">              
          <div className="div-img1-main">
            <img
              src={img1}
              alt=""
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
              className="cle-image-and-content__image-main none-border"
              decoding="async"
            />
          </div>
          <div className="div-img1-up">
            <img className='bg' src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
      
      </>
  )
}

export default Built
