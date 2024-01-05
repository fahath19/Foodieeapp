import React from 'react'
import s1 from  './Contacts.css'
import img2 from './img/icons/cicon.png'
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contacts = () => {
  return (
    <section>
         <h2 className="ctitle">Contact Us</h2>

       <div className="contact-container">
       <div className="contact-img">
                <img src={img2} alt="" />
           </div>
          <form action="">
            <h2 className='formtitle'>Contact Form</h2>
             <div className="name-input">
             <input type="text"  placeholder='Name'/>

             </div>
             <div className="email-input">
               <input type="email" placeholder='Email' />
             </div>
             <textarea name="" id="" cols="30" rows="8" placeholder='Message'>

             </textarea>
             <div>
             <button className="sendbtn">Send Message</button>

             </div>
          </form>

         
       </div>
    </section>
  )
}

export default Contacts