import React from 'react'
import styles from './Foodbox.css'
import img1 from './img/food-img/beakfast/dosa.jpg';
import img2 from './img/food-img/beakfast/dosa.jpg';
import img3 from './img/food-img/beakfast/dosa.jpg';
import img4 from './img/food-img/beakfast/dosa.jpg';
import img5 from './img/food-img/beakfast/dosa.jpg';
import img6 from './img/food-img/beakfast/dosa.jpg';
import img7 from './img/food-img/beakfast/dosa.jpg';

const Foodbox = () => {
  return (
    <section className='foodboxs-maincontainer'>
          <div className="foodboxs-subcontainer">
            <div className="food-box">
              <div className="foodbox-img">
                <img src={img1} alt="dfdf" />
              </div>
                 <div className="food-detailsbox">
                        <div className="food-name-ratingbox">
                              <h2 className="food-name">Small Onion Dosa</h2>
                              <button className="rating">4.1 &#9733;</button>
                        </div>
                        <div className="hotel-name-pricebox">
                            <h2 className="hotel-name">A2b anatha bavan...</h2>
                            <h2 className="food-price"> <span className='rubes' > &#8377;</span>50 for one</h2>
                        </div>
                 </div>

            </div>




            <div className="food-box">
              <div className="foodbox-img">
                <img src={img1} alt="dfdf" />
              </div>
                 <div className="food-detailsbox">
                        <div className="food-name-ratingbox">
                              <h2 className="food-name">Small Onion Dosa</h2>
                              <button className="rating">4.1 &#9733;</button>
                        </div>
                        <div className="hotel-name-pricebox">
                            <h2 className="hotel-name">A2b anatha bavan...</h2>
                            <h2 className="food-price"> <span className='rubes' > &#8377;</span>50 for one</h2>
                        </div>
                 </div>

            </div>






            <div className="food-box">
              <div className="foodbox-img">
                <img src={img1} alt="dfdf" />
              </div>
                 <div className="food-detailsbox">
                        <div className="food-name-ratingbox">
                              <h2 className="food-name">Small Onion Dosa</h2>
                              <button className="rating">4.1 &#9733;</button>
                        </div>
                        <div className="hotel-name-pricebox">
                            <h2 className="hotel-name">A2b anatha bavan...</h2>
                            <h2 className="food-price"> <span className='rubes' > &#8377;</span>50 for one</h2>
                        </div>
                 </div>

            </div>




            <div className="food-box">
              <div className="foodbox-img">
                <img src={img1} alt="dfdf" />
              </div>
                 <div className="food-detailsbox">
                        <div className="food-name-ratingbox">
                              <h2 className="food-name">Small Onion Dosa</h2>
                              <button className="rating">4.1 &#9733;</button>
                        </div>
                        <div className="hotel-name-pricebox">
                            <h2 className="hotel-name">A2b anatha bavan...</h2>
                            <h2 className="food-price"> <span className='rubes' > &#8377;</span>50 for one</h2>
                        </div>
                 </div>

            </div>
          </div>
    </section>
  )
}

export default Foodbox