import React from 'react';
import './more.css'
import img1 from '../../assets/images/Teacher-and-Student-portal2.png';
import img2 from '../../assets/images/shapes-pattern-2.svg';

function MoreControl() {
  return (
    <div className="main-morecontrol-container">
      <div className="main-morecontrol-container-wrapper">
        <div className="pic-morecontrol-container">
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
        <div className="more-control-writings">
          <div className="more-control-writings-wrapper">
            <div className="full-title">More control, less chaos</div>
            <div className="control-text-normal">
              With identity, access, security, and classroom engagement in one
              place, that's more control for school leaders.
            </div>
            <div className="control-link">Schools overview page   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreControl;