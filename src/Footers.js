import React from 'react';
import s1 from  './Footers.css';
import ios from './img/icons/apple (1).png'
import anro from './img/icons/android.png'

import { FaFacebookF, FaYoutube, FaXTwitter   } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footers = () => {
  return (
    <footer>
       <div className="footer-logo-option">
               <div className="logo">
                 
               </div>
          <div className='user-choice'>
          <select name="" id="country-selc">
                 <option value="">India</option>
                 <option value="">UAE</option>
                 <option value="">America</option>
               </select>

               <select name="" id="lang-selc">
                 <option value="">English</option>
                 <option value="">Tamil</option>
                 <option value="">Arabic</option>
                 <option value="">Malayalam</option>
               </select>
          </div>
               
       </div>
       <div className="footer-info-container">
          <div className="about-foodie">
                  <h3>ABOUT Foodiee</h3>
                 <ul>
                   <li>Who We Are</li>
                   <li>Blog</li>
                   <li>Work With Us</li>
                   <li>Investor Relations</li>
                   <li>Report Fraud</li>
                   <li>Press Kit</li>
                   <li>Contact Us</li>
                 </ul>

          </div>
          <div className="foodie-universe">
                  <h3>Foodiee univerSE</h3>
                 <ul>
                   <li>Zomato</li>
                   <li>Blinkit</li>
                   <li>Feeding India</li>
                   <li>Hyperpure</li>
                   <li>Zomaland</li>
                 </ul>

          </div>
          <div className="foodie-resturant">
                  <h3>For Resturants</h3>
                 <ul>
                   <li>Partner With Us</li>
                   <li>Apps For You</li>
                  
                 </ul>
                 <h3>For Enterprises</h3>
                 <ul>
                 <li>Foodiee For Enterprise</li>
                 </ul>
          </div>

          <div className="learn-more">
                  <h3>Learn More</h3>
                 <ul>
                   <li>Privacy</li>
                   <li>Security</li>
                   <li>Terms</li>
                   <li>Sitemap</li>
                 </ul>
                
          </div>


          <div className="social-link-downl">
                  <h3>Social Links</h3>
                 <ul>
                   <li> < FaLinkedinIn/> </li>
                   <li> < FaInstagram/> </li>
                   <li> < FaXTwitter/> </li>
                   <li> < FaFacebookF/> </li>
                   <li> < FaYoutube/> </li>


                 </ul>
                 <div className='imgdiv'>
                 
                 <img src={ios} alt="" />
                 <img src={anro} alt="" />
                 </div>
                


                
          </div>
             
       </div>




    </footer>
  )
}

export default Footers