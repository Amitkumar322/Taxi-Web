import React from "react"
import './Footer.css'
import{Link} from 'react-router-dom';
export const Footer  =()=>{
    return(
        <div>
        <footer>
   <div class="container-fluid  mt-5">
     <div class="row ">
       <div class="col-sm-4 content">
         <h3>USEFULL LINKS</h3>
         <ul>
         <li> <Link to="" className="link">HOME</Link></li>
         <li> <Link to="" className="link">ABOUT US</Link></li>
         <li> <Link to="" className="link">OUR SERVICES</Link></li>
         <li> <Link to="" className="link">OUR FLEET</Link></li>
         <li> <Link to="" className="link">LATEST BLOGS</Link></li>
         <li> <Link to="" className="link">CONTACT US</Link></li>
         </ul>
      
       </div>
       <div class="col-sm-4 content">
         <h3>CONNECT WITH US ON</h3>
      <ul>
        <li><Link to="" className="link">INSTAGRAM</Link></li>
        <li><Link to="" className="link">FACEBOOK</Link></li>
        <li><Link to="" className="link">TELEGRAM</Link></li>
        <li><Link to="" className="link">WHATSAPP GROUP</Link></li>
        <li><Link to="" className="link">TWITTER</Link></li>
      </ul>
       </div>
       <div class="col-sm-4 content">
         <h3> GET IN TOUCH </h3>
         <ul>
          <li  >45678934567,345678906</li>
          <li>Email@Sai-Tour321.com</li>
          <li>House no.453 gali no.4 enoce society CHD-160047.</li>
         </ul>
   
       </div>
     </div>
   </div>
   </footer> 
           </div>
    )
}