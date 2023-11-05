import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-main-wrapper">
        <div className="footer-top">
          <div className="clever-icons">
            <div className="clever-icon">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className='folow'>Follow us:</div>
            <div className="icons">
              <div className="icon-footer">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27" height="27" rx="5" fill="#1464FF"></rect>
                <path d="M14.8991 20.3619V14.028H17.1321L17.4664 11.5595H14.899V9.98352C14.899 9.26884 15.1074 8.78183 16.1839 8.78183L17.5568 8.78122V6.57345C17.3194 6.54342 16.5043 6.4762 15.5563 6.4762C13.5768 6.4762 12.2216 7.62653 12.2216 9.73913V11.5595H9.98279V14.028H12.2216V20.3619H14.8991V20.3619Z" fill="white"></path>
             </svg>
              </div>
              <div className="icon-footer">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27" height="27" rx="5" fill="#1464FF"></rect>
                <path d="M15.8103 9.06466V9.0625H16.3878L16.5988 9.10356C16.7395 9.13022 16.8672 9.16515 16.9819 9.20838C17.0967 9.2516 17.2078 9.30203 17.3151 9.35965C17.4225 9.41728 17.5198 9.476 17.6072 9.53579C17.6938 9.59486 17.7715 9.65753 17.8404 9.7238C17.9085 9.7908 18.0147 9.80809 18.1591 9.77567C18.3035 9.74325 18.459 9.69823 18.6255 9.6406C18.7921 9.58297 18.9568 9.51814 19.1197 9.4461C19.2826 9.37406 19.3818 9.32832 19.4173 9.30887C19.4521 9.2887 19.4707 9.2779 19.4729 9.27645L19.4751 9.27321L19.4862 9.26781L19.4973 9.2624L19.5084 9.257L19.5195 9.2516L19.5217 9.24836L19.5251 9.2462L19.5284 9.24403L19.5306 9.24079L19.5417 9.23755L19.5528 9.23539L19.5506 9.2516L19.5473 9.26781L19.5417 9.28401L19.5362 9.30022L19.5306 9.31103L19.5251 9.32183L19.5195 9.33804C19.5158 9.34885 19.5121 9.36325 19.5084 9.38127C19.5047 9.39928 19.4695 9.47131 19.4029 9.59738C19.3363 9.72345 19.253 9.85131 19.153 9.98098C19.0531 10.1106 18.9635 10.2086 18.8843 10.2749C18.8043 10.3419 18.7514 10.3887 18.7255 10.4154C18.6996 10.4427 18.6681 10.4679 18.6311 10.491L18.5756 10.5267L18.5645 10.5321L18.5533 10.5375L18.5511 10.5407L18.5478 10.5429L18.5445 10.545L18.5422 10.5483L18.5311 10.5537L18.52 10.5591L18.5178 10.5623L18.5145 10.5645L18.5111 10.5666L18.5089 10.5699L18.5067 10.5731L18.5034 10.5753L18.5 10.5774L18.4978 10.5807H18.5533L18.8643 10.5159C19.0716 10.4726 19.2696 10.4204 19.4584 10.3592L19.7583 10.2619L19.7916 10.2511L19.8082 10.2457L19.8194 10.2403L19.8305 10.2349L19.8416 10.2295L19.8527 10.2241L19.8749 10.2209L19.8971 10.2187V10.2403L19.8915 10.2425L19.886 10.2457L19.8838 10.249L19.8804 10.2511L19.8771 10.2533L19.8749 10.2565L19.8727 10.2598L19.8693 10.2619L19.866 10.2641L19.8638 10.2673L19.8616 10.2706L19.8582 10.2727L19.8527 10.2835L19.8471 10.2943L19.8438 10.2965C19.8423 10.2987 19.7953 10.3599 19.7027 10.4802C19.6102 10.6012 19.5602 10.6624 19.5528 10.6639C19.5454 10.6661 19.5351 10.6769 19.5217 10.6963C19.5091 10.7165 19.4307 10.7968 19.2863 10.9373C19.1419 11.0777 19.0005 11.2027 18.8621 11.3122C18.7229 11.4224 18.6526 11.5579 18.6511 11.7185C18.6489 11.8784 18.6403 12.0593 18.6255 12.261C18.6107 12.4627 18.583 12.6806 18.5422 12.9147C18.5015 13.1488 18.4386 13.4136 18.3534 13.7089C18.2683 14.0043 18.1647 14.2924 18.0425 14.5734C17.9203 14.8543 17.7926 15.1064 17.6594 15.3298C17.5261 15.5531 17.4039 15.7422 17.2929 15.897C17.1818 16.0519 17.0689 16.1978 16.9542 16.3347C16.8394 16.4715 16.6943 16.6257 16.5189 16.7972C16.3427 16.9679 16.2464 17.0615 16.2301 17.0781C16.2131 17.0939 16.1406 17.153 16.0125 17.2553C15.8851 17.3583 15.7481 17.4613 15.6016 17.5644C15.4557 17.6666 15.3217 17.752 15.1995 17.8204C15.0774 17.8889 14.9301 17.967 14.7576 18.0549C14.5858 18.1435 14.4 18.2257 14.2001 18.3013C14.0002 18.3769 13.7892 18.4472 13.5671 18.512C13.345 18.5768 13.1303 18.6273 12.923 18.6633C12.7157 18.6993 12.4806 18.7299 12.2178 18.7551L11.8235 18.7929V18.7984H11.1017V18.7929L11.0073 18.7875C10.9444 18.7839 10.8925 18.7803 10.8518 18.7767C10.8111 18.7731 10.6575 18.7533 10.3909 18.7173C10.1244 18.6813 9.91527 18.6453 9.76349 18.6093C9.61173 18.5732 9.38591 18.5048 9.08607 18.4039C8.78622 18.3031 8.52969 18.2012 8.31647 18.0981C8.10399 17.9959 7.97073 17.931 7.91668 17.9036C7.86337 17.877 7.80341 17.8439 7.73677 17.8042L7.63683 17.7448L7.63462 17.7416L7.63127 17.7394L7.62794 17.7372L7.62572 17.734L7.61461 17.7286L7.60351 17.7232L7.6013 17.72L7.59796 17.7178L7.59463 17.7156L7.5924 17.7124L7.59019 17.7091L7.58685 17.707H7.5813V17.6854L7.5924 17.6875L7.60351 17.6908L7.65348 17.6962C7.6868 17.6998 7.7775 17.7052 7.92556 17.7124C8.07364 17.7196 8.23096 17.7196 8.39754 17.7124C8.56412 17.7052 8.73441 17.689 8.90838 17.6638C9.08237 17.6386 9.28782 17.5953 9.52473 17.5341C9.76165 17.4729 9.97931 17.4001 10.1777 17.3158C10.3754 17.2308 10.5161 17.1674 10.5997 17.1256C10.6826 17.0846 10.8092 17.0082 10.9795 16.8966L11.2349 16.7291L11.2372 16.7258L11.2405 16.7237L11.2438 16.7215L11.2461 16.7183L11.2483 16.715L11.2516 16.7129L11.2549 16.7107L11.2572 16.7075L11.2683 16.7042L11.2794 16.7021L11.2816 16.6913L11.2849 16.6805L11.2883 16.6783L11.2905 16.675L11.2016 16.6696C11.1424 16.666 11.085 16.6624 11.0295 16.6588C10.974 16.6552 10.887 16.639 10.7685 16.6102C10.6501 16.5814 10.5224 16.5382 10.3854 16.4805C10.2484 16.4229 10.1152 16.3545 9.9856 16.2752C9.85604 16.196 9.76238 16.1301 9.70463 16.0775C9.64763 16.0256 9.57359 15.9522 9.48253 15.8571C9.39221 15.7613 9.31373 15.6629 9.2471 15.5621C9.18046 15.4612 9.1168 15.3449 9.0561 15.2131L8.96391 15.0164L8.95836 15.0002L8.9528 14.984L8.94947 14.9732L8.94725 14.9624L8.96391 14.9645L8.98057 14.9678L9.10273 14.984C9.18417 14.9948 9.31188 14.9984 9.48586 14.9948C9.65985 14.9912 9.78015 14.984 9.84678 14.9732C9.91341 14.9624 9.95414 14.9552 9.96894 14.9516L9.99115 14.9462L10.0189 14.9407L10.0467 14.9353L10.0489 14.9321L10.0522 14.9299L10.0556 14.9278L10.0578 14.9245L10.0356 14.9191L10.0134 14.9137L9.99115 14.9083L9.96894 14.9029L9.94673 14.8975C9.93193 14.8939 9.90602 14.8867 9.86899 14.8759C9.83198 14.8651 9.73203 14.8255 9.56915 14.7571C9.40628 14.6886 9.27671 14.622 9.18046 14.5572C9.08398 14.4921 8.99197 14.421 8.90505 14.3443C8.81843 14.2665 8.7233 14.1663 8.61965 14.0439C8.516 13.9214 8.42346 13.7791 8.34201 13.6171C8.26058 13.455 8.1995 13.3001 8.15877 13.1524C8.11822 13.0056 8.09146 12.8555 8.07883 12.704L8.05883 12.4771L8.06993 12.4792L8.08104 12.4825L8.09214 12.4879L8.10325 12.4933L8.11435 12.4987L8.12546 12.5041L8.29759 12.5797C8.41235 12.6302 8.55487 12.6734 8.72515 12.7094C8.89543 12.7454 8.99723 12.7652 9.03054 12.7688L9.08052 12.7742H9.18046L9.17825 12.771L9.17491 12.7688L9.17158 12.7667L9.16936 12.7634L9.16715 12.7602L9.16381 12.758L9.16047 12.7559L9.15825 12.7526L9.14715 12.7472L9.13604 12.7418L9.13383 12.7386L9.13049 12.7364L9.12716 12.7342L9.12494 12.731L9.11383 12.7256L9.10273 12.7202L9.10052 12.717C9.0983 12.7155 9.06646 12.6925 9.005 12.6478C8.94429 12.6024 8.88062 12.5437 8.81399 12.4717C8.74736 12.3996 8.68072 12.324 8.61409 12.2448C8.54734 12.1653 8.48788 12.0804 8.43641 11.9908C8.38459 11.9008 8.3298 11.7862 8.27205 11.6472C8.21505 11.5089 8.17173 11.3695 8.14212 11.229C8.11251 11.0886 8.09585 10.9499 8.09214 10.813C8.08845 10.6761 8.09214 10.5591 8.10325 10.4618C8.11435 10.3646 8.13656 10.2547 8.16988 10.1323C8.2032 10.0098 8.25133 9.88013 8.31425 9.74325L8.40864 9.53795L8.4142 9.52174L8.41975 9.50553L8.42309 9.50337L8.4253 9.50013L8.42752 9.49689L8.43086 9.49472L8.4342 9.49689L8.43641 9.50013L8.43863 9.50337L8.44196 9.50553L8.4453 9.50769L8.44751 9.51093L8.44973 9.51417L8.45307 9.51634L8.45862 9.52714L8.46417 9.53795L8.46751 9.54011L8.46972 9.54335L8.61965 9.70543C8.71959 9.81349 8.83805 9.93416 8.97502 10.0674C9.11199 10.2007 9.18787 10.2698 9.20267 10.2749C9.21749 10.2806 9.23599 10.2972 9.2582 10.3246C9.28041 10.3513 9.35445 10.415 9.48031 10.5159C9.60617 10.6167 9.7709 10.7338 9.97449 10.867C10.1781 11.0003 10.4039 11.1318 10.6519 11.2614C10.8999 11.3911 11.1665 11.5082 11.4515 11.6126C11.7365 11.7171 11.9364 11.7855 12.0512 11.8179C12.1659 11.8503 12.3621 11.8918 12.6398 11.9422C12.9174 11.9926 13.1266 12.025 13.2672 12.0394C13.4079 12.0538 13.5041 12.0621 13.556 12.0643L13.6337 12.0665L13.6315 12.0502L13.6281 12.034L13.6059 11.899C13.5911 11.8089 13.5837 11.6829 13.5837 11.5208C13.5837 11.3587 13.5967 11.2092 13.6226 11.0723C13.6485 10.9355 13.6874 10.7968 13.7392 10.6563C13.791 10.5159 13.8417 10.4031 13.8913 10.3181C13.9417 10.2338 14.0076 10.1377 14.089 10.0296C14.1705 9.92155 14.276 9.80989 14.4055 9.69463C14.5351 9.57936 14.6831 9.47671 14.8497 9.38667C15.0163 9.29663 15.1699 9.22818 15.3106 9.18136C15.4513 9.13454 15.5697 9.10392 15.666 9.08951C15.7622 9.07511 15.8103 9.06682 15.8103 9.06466Z" fill="white"></path>
               </svg>
              </div>
              <div className="icon-footer">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect width="27" height="27" rx="5" fill="#1464FF"></rect>
                    <path d="M7.62598 7.18993C7.62598 6.74099 7.77534 6.37062 8.07406 6.07882C8.37277 5.78701 8.76112 5.64111 9.23906 5.64111C9.70848 5.64111 10.0883 5.78476 10.3785 6.07209C10.6772 6.36839 10.8265 6.75446 10.8265 7.23034C10.8265 7.66131 10.6815 8.02045 10.3913 8.30778C10.0926 8.60408 9.69995 8.75222 9.21346 8.75222H9.20066C8.73124 8.75222 8.35144 8.60408 8.06125 8.30778C7.77106 8.01148 7.62598 7.63886 7.62598 7.18993ZM7.79241 18.9744V9.97781H10.6345V18.9744H7.79241ZM12.2092 18.9744H15.0513V13.9509C15.0513 13.6366 15.0854 13.3942 15.1537 13.2236C15.2732 12.9183 15.4546 12.6602 15.6978 12.4492C15.9411 12.2382 16.2462 12.1327 16.6132 12.1327C17.5691 12.1327 18.047 12.8106 18.047 14.1664V18.9744H20.8891V13.8162C20.8891 12.4873 20.5904 11.4795 19.993 10.7926C19.3955 10.1058 18.6061 9.76232 17.6246 9.76232C16.5236 9.76232 15.6658 10.2606 15.0513 11.2573V11.2842H15.0385L15.0513 11.2573V9.97781H12.2092C12.2263 10.2651 12.2348 11.1585 12.2348 12.6579C12.2348 14.1574 12.2263 16.2629 12.2092 18.9744Z" fill="white"></path>
                </svg>
              </div>
              <div className="icon-footer">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="5" fill="#1464FF"></rect>
              <path d="M14.1252 18.9856L10.9327 18.9259C9.89906 18.9051 8.86282 18.9466 7.84943 18.7312C6.30782 18.4094 6.1986 16.8314 6.08432 15.5077C5.92686 13.6468 5.98782 11.7521 6.28498 9.90675C6.45273 8.8713 7.11292 8.25345 8.13388 8.18621C11.5804 7.94221 15.0498 7.97112 18.4886 8.08496C18.8518 8.0954 19.2175 8.15244 19.5756 8.21736C21.3433 8.53402 21.3864 10.3223 21.501 11.8276C21.6153 13.3485 21.5671 14.8773 21.3486 16.3878C21.1734 17.6385 20.8381 18.6873 19.4232 18.7886C17.6504 18.921 15.9182 19.0276 14.1404 18.9936C14.1405 18.9856 14.1303 18.9856 14.1252 18.9856ZM12.2483 15.8192C13.5843 15.0353 14.8948 14.2645 16.2231 13.4859C14.8847 12.702 13.5767 11.9312 12.2483 11.1526V15.8192Z" fill="white"></path>
             </svg>
              </div>
            </div>
          </div>
            <div className="footer-top-links">
                      <div className="footer-links-wrapper">      
                          <div className="links-top">
                              <ul>
                                  <li className='top'>Solutions</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                                  <li>for partners</li>
                                  <li>for students</li>
                              </ul>
                              <ul>
                                  <li className='top'>Data $ Access</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                                  <li>for partners</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                              </ul>
                              <ul>
                                  <li className='top'>Digital Classroom</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                                  <li>for partners</li>
                                
                              </ul>
                              <ul>
                                  <li className='top'>Identity $ Security</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                                  <li>for partners</li>
                                  <li>for students</li>
                              </ul>
                          </div>
                          <div className="links-bottom">
                                <ul>
                                  <li className='top'>Other Products</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                            
                                  <li>for students</li>
                              </ul>
                              <ul>
                                  <li className='top'>Services</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                        
                                  <li>for students</li>
                              </ul>
                              <ul>
                                  <li className='top'>Platform</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                        
                                  <li>for students</li>
                              </ul>
                              <ul>
                                  <li className='top'>Our Company</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                                  <li>for partners</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                                  <li>for students</li>
                              </ul>
                              <ul>
                                  <li className='top'>Help</li>
                                  <li>for teachers</li>
                                  <li>for parents</li>
                                  <li>for partners</li>
                                  <li>for students</li>
                              </ul>
                          </div>                   
                      </div>     
          </div>
        </div>
      <div className="footer-bottom">
            <div className="footer-bottom-wrapper">
                      <div className="copiright">
                             Copyright © 2023
                      </div>  
                      <div className="textcopy">
                       All Rights Reserved. Registration on or use of this site constitutes acceptance of our

                        Terms and Conditions
                        Privacy Policy
                       Accessibility Statement   
                      </div>
            </div>
       </div>
      </div>
    </div>
  );
}

export default Footer;