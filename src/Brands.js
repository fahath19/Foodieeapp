import React from 'react'
import img1 from './img/brand-name/burger-king.png';
import img2 from './img/brand-name/dominoz.png';
import img3 from './img/brand-name/kfc.png';
import img4 from './img/brand-name/thala.jpg';
import img5 from './img/brand-name/kmsakkim.jpg';
import style from './Brands.css'
import { BsChevronDoubleRight,BsChevronDoubleLeft  } from "react-icons/bs";
const Brands = () => {
  return (
    <div className='brand-container'>
        <h1 className="title">
          Top Brands For You 
        </h1>
        <div className="brands-showing-container">
        <BsChevronDoubleLeft className='lefticon' />

        <div className="brand-box">
        <div className="brand-img">
                <img src={img5} alt="" />
              </div>
              <h2 className="brand-name">Kms akkim</h2>
              <h2 className="deliver-duration">30min</h2>
            
        </div>

           <div className="brand-box">
              <div className="brand-img">
                <img src={img1} alt="" />
              </div>
              <h2 className="brand-name"> Kms akkim</h2>
              <h2 className="deliver-duration">30min</h2>
            
           </div>

           <div className="brand-box">
           <div className="brand-img">
                <img src={img2} alt="" />
              </div>
              <h2 className="brand-name">Kms akkim</h2>
              <h2 className="deliver-duration">30min</h2>
            </div>

            <div className="brand-box">
            <div className="brand-img">
            <img src={img3} alt="" />
              </div>
              <h2 className="brand-name">Kms akkim</h2>
              <h2 className="deliver-duration">30min</h2>
            </div>


            <div className="brand-box">
            <div className="brand-img">
            <img src={img4} alt="" />
              </div>
              <h2 className="brand-name">Kms akkim</h2>
              <h2 className="deliver-duration">30min</h2>
            </div>
        <BsChevronDoubleRight className='righticon' />

        </div>
    </div>
  )
}

export default Brands