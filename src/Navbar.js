import React from 'react'
// import {Link } from 'react'
import { MdCloseFullscreen } from "react-icons/md";
import { BiAlignMiddle  } from "react-icons/bi";
const Navbar = () => {
    //  let burger=document.querySelector('.burger');
    //  burger.addEventListener('click',burgerclick)
   
       
    let burgerclick=()=>{
        let ulelem=document.querySelector('.active');
        ulelem.classList.add('show');
    }
    let burgerclose=()=>{
        let ulelem=document.querySelector('.active');
        ulelem.classList.remove('show');
    }
  return (
    <div>
        <header>

            <h2 className="logo"><span className='sp1'>F</span>oodiee<span     className='sp2'>...</span></h2>
       
            <nav>
          
                <ul className='active'>
             
              
                    <li>  <input type="text" placeholder='search..' className='search-input'/>   </li>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                    <MdCloseFullscreen  className='closebtn' onClick={burgerclose} />
                    
                   
                </ul>
                
              
            </nav>
            <button className='signin-btn'>Sign In</button>
            <BiAlignMiddle   className='burger' onClick={burgerclick}/>
        </header>
    </div>
  )
}

export default Navbar