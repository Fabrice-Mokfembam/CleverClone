import React from 'react'
import './Classroom.css'
import img1 from '../../assets/images/16AUG-CLEVER-CLASSROOMOFTHEFUTUREREPORT2023-WEBBANNER-KS.png';


function Classroom() {
  return (
      <>
      
 <div className="main-morecontrol-container classroom-container">
    <div className="main-morecontrol-container-wrapper built-container-wrapper classroom-wrapper">
      <div className="more-control-writings built-writings classroom-writings" >
          <div className="more-control-writings-wrapper built-writings-wrapper">
            <div className="full-title built-title">New! Classroom of the Future Report 2023</div>
            <div className="control-text-normal built-normal-text">
             Learn from 1,500 educators, administrators, and edtech companies on revolutionary trends shaping the future of K-12 learning.
            </div>
            <div className="control-link built-link classroom-btn">View report <svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M28.5303 6.53033C28.8232 6.23743 28.8232 5.76256 28.5303 5.46967L23.7574 0.696697C23.4645 0.403804 22.9896 0.403804 22.6967 0.696697C22.4038 0.989591 22.4038 1.46446 22.6967 1.75736L26.9393 6L22.6967 10.2426C22.4038 10.5355 22.4038 11.0104 22.6967 11.3033C22.9896 11.5962 23.4645 11.5962 23.7574 11.3033L28.5303 6.53033ZM6.55671e-08 6.75L28 6.75L28 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z" fill="white"></path>
           </svg></div>
          </div>
        </div>          
      <div className="pic-morecontrol-container built-image-container classroom-image">              
          <div className="div-img1-main">
             <img
              src={img1}
              alt=""
              style={{ transform: 'rotateZ(180deg)', transform: 'translate(10px,0px)', opacity: 1 }}
              className="cle-image-and-content__image-main none-border computer"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
      
      </>
  )
}

export default Classroom
