import React from 'react'
import s1 from  './Abouts.css'
import aimg from './img/food-name/briyani2.png';
import { BsCheckCircleFill } from "react-icons/bs";
const Abouts = () => {
  return (
    <section>
        <div className="about-container">
            <div className="aboutimg-div">
                <img src={aimg} alt="" />

            </div>
            <div className="about-info">
                <ul className='about-ul-container'>
                <li><span className='full-stop'><BsCheckCircleFill /></span>Super Delicious Chicken Briyanin</li>
                    <li><span className='full-stop'><BsCheckCircleFill /></span>Hygenic And Fresh Chicken</li>
                    <li><span className='full-stop'><BsCheckCircleFill /></span>Safety And Fast Delivery</li>
                    <li><span className='full-stop'><BsCheckCircleFill /></span>Free Shipping For <span>1km</span></li>
                   
                </ul>
                <button className='buybtn' >Shop Now.</button>

            </div>
        </div>

    </section>
  )
}

export default Abouts

// Super Delicious Chicken Briyani