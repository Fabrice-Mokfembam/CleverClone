import React, {useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';


function Header() {

    const [ishoveredSchool, setIshoveredSchool] = useState(false);
    const [ishoveredApplication, setIshoveredApplication] = useState(false);
    const [ishoveredCompany, setIshoveredComapany] = useState(false);
    const [ishoveredHelp, setIshoveredHelp] = useState(false);
    

    function display() {
        setIshoveredSchool(true);
    }
    function displaynot() {
        setIshoveredSchool(false);
    }
    
    function displayApp() {
        setIshoveredApplication(true);
    }
    function displaynotApp() {
        setIshoveredApplication(false);
    }
    function displayCom() {
        setIshoveredComapany(true);
    }
    function displaynotCom() {
        setIshoveredComapany(false);
    }
    function displayHelp() {
        setIshoveredHelp(true);
    }
    function displaynotHelp() {
        setIshoveredHelp(false);
    }
    
    return (
      <>
      <div className='header-main-conatainer'>
          <div className="header-main-container-wrapper">
              <div className="top-head">
                <div className="top-head-text">If students log into Clever via Google and see an error message, please contact your Clever technical contact for help.<NavLink className={'nav-link-head'}>Learn more</NavLink></div>  
              </div>  
              <div className="bottom-head">
                        <div className="bottom-head-wrapper">
                            <div className='hamburger'>
                                 <FaBars className='hamIcon'/>
                                </div>
                            <div className="X-rem">
                                <FaTimes className=' timesIcon'/>
                                </div>
                            <div className="text-clever">
                          <h1 className='h1'>Clever</h1>
                      </div>
                      <div className="onmouse-hovers">
                          <div className="hover-item one" onMouseOver={display} onMouseOut={displaynot}>
                              <div className="item">
                                  <h3>Schools</h3>
                              </div>
                              <div className="item-icon">
                                        <FaChevronDown className={'arroeDown-icon ' + (ishoveredSchool ? 'arroeDown-icon-test' : '')} />
                              </div>
                          </div>
                              <div className="hover-item two" onMouseOver={displayApp} onMouseOut={displaynotApp}>
                                <div className="item">
                                    <h3> Application Partners</h3>
                                </div>
                                <div className="item-icon">
                                    <FaChevronDown className={'arroeDown-icon ' + (ishoveredApplication ? 'arroeDown-icon-test' : '')} />
                                </div>
                              </div>
                          <div className="hover-item three">
                              <div className="item">
                                  <h3>Apps On Clever</h3>
                              </div>
                          </div>
                          <div className="hover-item four" onMouseOver={displayCom} onMouseOut={displaynotCom}>
                              <div className="item">
                                 <h3>Our company</h3> 
                              </div>
                              <div className="item-icon">
                                        <FaChevronDown className={'arroeDown-icon ' + (ishoveredCompany ? 'arroeDown-icon-test' : '')} />
                              </div>
                          </div>
                          <div className="hover-item five" onMouseOver={displayHelp} onMouseOut={displaynotHelp}>
                              <div className="item">
                                 <h3> Help</h3>
                              </div>
                              <div className="item-icon">
                                      <FaChevronDown className={'arroeDown-icon ' + (ishoveredHelp ? 'arroeDown-icon-test' : '')}/>
                              </div>
                          </div>
                      </div>
                      <div className="login-btn-head btn">
                          <button className='btn-header'>
                              <div className="btn-icon-header">
                                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="10.5" cy="10" r="9.5" stroke="#FFE478"></circle>
                                      <circle cx="10.5" cy="7" r="2.5" stroke="#FFE478"></circle>
                                      <path d="M3 15.8018C4.08346 12.9928 6.80901 11 10 11C13.4495 11 16.3551 13.3288 17.2304 16.5" stroke="#FFE478"></path>
                                </svg>
                              </div>
                              <div className="text">Login <span className='login-header'>as a Student</span></div>
                              <div className="item-icon item-icon-login">
                                  <FaChevronDown className='arroeDown-icon'/>
                              </div>
                          </button>
                      </div>
                  </div>
              </div>
          </div>  
            </div>

            {ishoveredSchool && <div className="school-div" onMouseOver={() => {
                setIshoveredSchool(true);
            }} onMouseOut={displaynot}>
                <div className="school-div-wrapper">
                    <div className="school-overview">
                        <div className="school-overview-wrapper">
                            <div className="main-overview-wrapper">
                                <div className="info-overview">
                                    <h2>Schools overview</h2>
                                    <div className="icn">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg>
                                    </div>
                                </div>
                                <div className="info-overview-data">
                                    <div className="data-access">
                                        <div className="title-data-access"> <img className='imgIcon' width="28" height="30" src="https://www.clever.com/wp-content/uploads/2023/06/Layer_1-3-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" /> Data & Access <button>free</button><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg> </div>
                                        <p>Secure Sync Rostering</p>
                                          <p>Single sign-on</p>
                                         <p>Clever Badges</p>
                                    </div>
                                    <div className="data-access">
                                        <div className="title-data-access"><img className='imgIcon' width="28" height="30" src="https://www.clever.com/wp-content/uploads/2023/06/Group-2.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/> Identity and Security <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg> </div>
                                        <p>Identity Management</p>
                                          <p>Multi-Factor Authentication</p>

                                    </div>
                                    <div className="data-access">
                                        <div className="title-data-access"><img className='imgIcon' width="28" height="30" src="https://www.clever.com/wp-content/uploads/2023/06/globe-2.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" />Clever Global <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg> </div>
                                        <p>Clever GO</p>
                                
                                    </div>
                                </div>
                                <div className="info-overview-dataX">
                                    <div className="data-access">
                                        <div className="title-data-access"><img width="28" height="30" src="https://www.clever.com/wp-content/uploads/2023/06/Layer_1-4-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/> Data & Access <button>free</button> <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg></div>
                                        <p>Secure Sync Rostering</p>
                                          <p>Single sign-on</p>
                                         <p>Clever Badges</p>
                                    </div>
                                    <div className="data-access">
                                        <div className="title-data-access"><img width="28" height="30" src="https://www.clever.com/wp-content/uploads/2023/06/support-service-1-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/> Identity and Security <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg> </div>
                                        <p>Identity Management</p>
                                          <p>Multi-Factor Authentication</p>

                                    </div>
                                </div>
                                <div className="info-overviewX">

                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="other-resources">
                        <div className="other-resources-wrapper">
                         <div className="info-overview X">
                                    <h2>Other Resources</h2>
                                    <div className="icn">
                                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg>
                                    </div>
                            </div>
                            <div className="other-resources-items">
                                <div className="other-each">
                                    <div className="icon">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/07/image-21-150x150.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" srcset="https://www.clever.com/wp-content/uploads/2023/07/image-21-150x150.png 150w, https://www.clever.com/wp-content/uploads/2023/07/image-21-300x300.png 300w, https://www.clever.com/wp-content/uploads/2023/07/image-21.png 400w" sizes="(max-width: 150px) 100vw, 150px"/>
                                    </div>
                                    <div>Pricing</div>
                                </div>
                                <div className="other-each">
                                    <div className="icon">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Isolation_Mode-4.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                    </div>
                                    <div>Get started with Clever</div>
                                </div>
                                <div className="other-each">
                                    <div className="icon">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Frame-427320377-5.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                    </div>
                                    <div>Interoperability</div>
                                </div>
                                <div className="other-each">
                                    <div className="icon">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Frame-427320377-6.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                    </div>
                                    <div>Resource hubs</div>
                                    <div className="icon"><FaChevronDown className='arroeDown-icon'/></div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
      </div>

            }
            
            { ishoveredApplication && <div className="application-partners-div" onMouseOver={displayApp} onMouseOut={displaynotApp}>
                <div className="application-div-wrapper">
                    <div className="application-partners-overview">
                        <div className="application-partners-wrapper">
                            <div className="application-first info-overview">
                                <div className="title-application">
                                    Application partners overview
                                </div>
                                <div className="icn">
                                    <svg className='picon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg>
                                </div>
                            </div>
                            <div className="application-second">
                                <div className="application-info">
                                    <ul className='list-partners'>
                                        <li>Secure Sync Rostering</li>
                                        <li>Single sign-on</li>
                                        <li>Clever Library</li>
                                        <li>Pricing</li>
                                        <li>Developer docs</li>
                                    </ul>
                                   </div>
                            </div>
                        </div>
                    </div>
                    <div className="helpful-links ">
                        <div className="helpful-link-wrapper">
                            <div className="helpful-link-wrapper-first info-overview">
                                <div className="title-helpful-link">
                                    Helpful Links
                                </div>
                                <div className="icn">
                                    <svg className='picon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg>
                                </div>
                            </div>
                            <div className="helpful-link-wrapper-second">
                                <div className="icn-info">
                                    <div className="svg">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Frame-427320377-7.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                    </div>
                                    <div className="svgtext">
                                        Sign Up – For Partners
                                    </div>
                                </div>
                                <div className="icn-info">
                                    <div className="svg">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Layer_1-5-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                    </div>
                                    <div className="svgtext">
                                        App store
                                    </div>
                                </div>
                                <div className="icn-info">
                                    <div className="svg">
                                        <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Layer_1-5-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                    </div>
                                    <div className="svgtext">
                                        Resource hubs  <FaChevronDown className='arroeDown-icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>

            }

            { ishoveredCompany && <div className="our-company-div" onMouseOver={displayCom} onMouseOut={displaynotCom}>
                <div className="our-company-wrapper">
                    <ul>
                        <li>About Us</li>
                        <li>Trust comes first</li>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Clever DEI</li>
                     </ul>
                </div>
      </div>

            }

            { ishoveredHelp && <div className="Help-div" onMouseOver={displayHelp} onMouseOut={displaynotHelp}>
                <div className="Help-wrapper">
                    <div className="help-learn-div">
                        <div className="help-learn-wrapper">
                            <div className="help-info-first info-overview">
                                <div className="title-help">
                                    Learn
                                </div>
                                <div className="icn">
                                     <svg className='picon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.25" stroke="#1464FF" stroke-width="1.5"></circle><path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z" fill="#1464FF"></path></svg>
                                </div>
                            </div>
                            <div className="help-info-second">
                                <div className="help-info-data">
                                   <div className="icn0text">
                                        <div className="icn">
                                            <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/faq-1-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                        </div>
                                        <p>Help center</p>
                                        <button>free</button>
                                    </div>
                                    <div className="norm">
                                       <p>24/7 access to an in-depth knowledge base</p>
                                    </div>
                                    
                                </div>
                                <div className="help-info-data">
                                   <div className="icn0text">
                                        <div className="icn">
                                            <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/library-1-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                        </div>
                                        <p>
                                          Resource Library
                                              </p>
                                        
                                    </div>
                                    <div className="norm">
                                       <p>Explore case studies, reports and best practices</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="help-info-second">
                                <div className="help-info-data">
                                   <div className="icn0text">
                                        <div className="icn">
                                            <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/classroom-1-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                        </div>
                                        <p>Clever Academy</p>
                                        <button>free</button>
                                    </div>
                                    <div className="norm">
                                       <p>Free online training for educators</p>
                                    </div>
                                    
                                </div>
                                <div className="help-info-data">
                                   <div className="icn0text">
                                        <div className="icn">
                                            <img width="25" height="28" src="https://www.clever.com/wp-content/uploads/2023/06/Layer_1-6-1.png" class="attachment-thumbnail size-thumbnail" alt="" decoding="async"/>
                                        </div>
                                        <p>
                                         Product releases
                                              </p>
                                        
                                    </div>
                                    <div className="norm">
                                       <p>The latest product and feature updates and platform improvements</p>
                                    </div>
                                    
                                </div>
                            </div>
                           
                       </div>
                    </div>
                    <div className="help-other-resources">
                        <div className="help-other-wrapper">
                            <div className="help-resources-first info-overview">
                                <div className="title-resources">
                                     Popular Resources
                                </div>
                                <div className="icn">

                                </div>
                            </div>
                            <div className="help-resources-second">
                                <div className="title-resourcesX">
                                    Clever Blog
                                </div>
                            </div>
                            
                         </div>
                    </div>
                </div>
      </div>

            }
            
            </>
  )
}

export default Header
