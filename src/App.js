import React from 'react';
import Navbar from './Navbar';
import Brands from './Brands';
import Herobanner1 from './Herobanner1';
import FoodDishes from './FoodDishes';
import Foodbox from './Foodbox';
import Abouts from './Abouts';
import Contacts from './Contacts';
import Footers from './Footers';
const App = () => {
  return (
    <div>
    
   
      {/* >>>>NAVBAR DECLARATION<<<<<<div       {/*<<<<-------d d */}
        <Navbar/>
         <Herobanner1/>    
        <Brands/>
        < FoodDishes/>
        <Foodbox/>   {/*<<<<-------d d */}
        <Abouts/>
        <Contacts/> 
         <Footers/>


    </div>

  )
}

export default App
