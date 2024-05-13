import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {DiPhotoshop} from "react-icons/di"

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className="foot1">
            <div className="div1">
<img src="/img/nooni.png" alt="" />
<p>Text: +00(234)23-45-666</p>
<p>Mon – Fri: 8 am – 8 pm</p>
<p>Sat – Sun: 8 am – 7 pm</p>
            </div>

            <div className="div2">
                <h2>About</h2>
                <ul className='div2ul'>
                    <li>Our Story</li>
                    <li>Career</li>
                    <li>Influencer</li>
                    <li>Join Our Team</li>
                </ul>
            </div>
            <div className=" div2 div3">
            <h2>Customer Service</h2>
                <ul className='div2ul'>
                    <li>Contact Us</li>
                    <li>Career</li>
                    <li>Find Store</li>
                    <li>Book Appointment</li>
                    <li>Shipping</li>

                </ul>
            </div>
            <div className="div4">
                <h2>Sign-Up For Email</h2>
                <p>Enjoy 15% off* your first order when sign up to our newsletter</p>
                <input type="text" placeholder='Your Email Address' />
                <button>Subscribe</button>
                <div className='twiicon'>
                    <BiLogoFacebook className='faceicon'/>
                    <AiOutlineTwitter className='faceicon'/>
                    <AiOutlineInstagram className='faceicon'/>
                    <DiPhotoshop className='faceicon'/>
                </div>
            </div>
        </div>




        <div className="foot2">
            <div className="lower1">
                <ul className='lowerul'>
                    <li>Privacy</li>
                    <li>Help</li>
                    <li>FaQs</li>
                </ul>
            </div>
            <div className="lower1 lower2">
                <p>© Nooni. All Rights Reserved.</p>
            </div>
            <div className="lower1 lower3">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
