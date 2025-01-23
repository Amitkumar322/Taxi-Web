import React from "react"
import './Header.css';
// import {Link} from 'react-router-dom';
export const Header  =()=>{
    return(
        <div>

<div className="marquee-container">
  <div className="marquee-content">
    <div className="marquee-item">
      <h4 className="text-center">Airport Transfers</h4>
      <p className="text-center">Offered At Short Notice</p>
    </div>
    <div className="marquee-item">
      <h4 className="text-center">Wedding Parties</h4>
      <p className="text-center">Can Be Easily Arranged</p>
    </div>
    <div className="marquee-item">
      <h4 className="text-center">Business</h4>
      <p className="text-center">You Will Arrive On Time</p>
    </div>
    <div className="marquee-item">
      <p className='phone'>+91 9876745637</p>
      <p className='gmail'>gmailrahil24322@gmail.com</p>
    </div>
  </div>
</div>
 
        </div>
    )
}