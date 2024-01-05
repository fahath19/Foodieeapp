import React from 'react'
import styles from './FoodDishes.css';
import { BsChevronDoubleRight,BsChevronDoubleLeft  } from "react-icons/bs";
import img1 from './img/food-name/briyani.png';
import img2 from  './img/food-name/burger.png'
import img3 from  './img/food-name/chicken.png'
import img4 from  './img/food-name/friedrice.png' 
import img6 from  './img/food-name/dosa.png'

const FoodDishes = () => {
  return (
    <div className='FoodDishes-container'>
        <h1 className="s4title1">
          Popular Dishes
        </h1>
        <h2 className='s4title2'>Our Delicious Foods</h2>
        {/* <p className='s4title3'>Food is Giving energy and nutrition support</p> */}
        <div className="FoodDishes-showing-container">
        <BsChevronDoubleLeft className='food-lefticon' />

        <div className="FoodDishes-box">
        <div className="food-img">
                <img src={img6} alt="" />
              </div>
              <h2 className="FoodDishes-name">Pizza</h2>
            
        </div>

           <div className="FoodDishes-box">
              <div className="food-img">
                <img src={img1} alt="" />
              </div>
              <h2 className="FoodDishes-name">Briyani</h2>
            
           </div>

           <div className="FoodDishes-box">
           <div className="food-img">
                <img src={img2} alt="" />
              </div>
              <h2 className="FoodDishes-name">Burger</h2>
            </div>

            <div className="FoodDishes-box">
            <div className="food-img">
            <img src={img3} alt="" />
              </div>
              <h2 className="FoodDishes-name">Chicken</h2>
            </div>


            <div className="FoodDishes-box">
            <div className="food-img">
            <img src={img4} alt="" />
              </div>
              <h2 className="FoodDishes-name">Fried rice</h2>
            </div>
            <BsChevronDoubleRight className='food-righticon' />

        </div>

    </div>
  )
}

export default FoodDishes