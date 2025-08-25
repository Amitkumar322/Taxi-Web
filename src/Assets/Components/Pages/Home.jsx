import React from "react"
import'./Home.css'
import { Layout } from "../Layout/Layout"
import {Link} from 'react-router-dom'
export const Home =()=>{
    return(
        <div className="Home">
            <Layout>

    
    {/* banner-sec */}
      <div className="banner-img">
        <div className="banner-text">
        </div>
      </div>
    {/* banner-sec */}
    
      {/* section2  services of taxi*/}
      <div className="container services-container"  data-aos="fade-up">
  <div className="row services">
    <div className="col-12 col-md-6 col-lg-4 box-1 mb-4">
      <div className="service-card">
        <img src={require("./images/pathankotimg.jpg")} alt="Taxi Service in Pathankot" className="service-img" />
        <h4 className='heading text-center'>Taxi Service in Pathankot</h4>
        <p className="text-center mb-3">Contact for the best taxi service in Pathankot</p>
        <button className='button-2 d-flex mx-auto'>More</button>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 box-1 mb-4">
      <div className="service-card">
        <img src={require("./images/amritsarimg.webp")}  alt="Taxi Service in Amritsar" className="service-img" />
        <h4 className='heading text-center'>Taxi Service in Amritsar</h4>
        <p className="text-center mb-3">Get the best deals in taxi rentals in Amritsar</p>
        <button className='button-2 d-flex mx-auto'>More</button>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 box-1 mb-4">
      <div className="service-card">
        <img src={require("./images/himachal.webp")}  alt="Tour Packages of Himachal" className="service-img" />
        <h4 className='heading text-center'>Tour Packages of Himachal</h4>
        <p className="text-center mb-3">Visit the best tourist destinations of Himachal.</p>
        <button className='button-2 d-flex mx-auto'>More</button>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 box-1 mb-4">
      <div className="service-card">
        <img src={require("./images/kashmir.webp")}  alt="Visit Katra and Kashmir" className="service-img" />
        <h4 className='heading text-center'>Visit Katra and Kashmir</h4>
        <p className="text-center mb-3">Best tour packages & taxi rentals of Kashmir & Katra</p>
        <button className='button-2 d-flex mx-auto'>More</button>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 box-1 mb-4">
      <div className="service-card">
        <img src={require("./images/Delhi.jpg")}  alt="Taxi Service to Delhi Airport" className="service-img" />
        <h4 className='heading text-center'>Taxi Service to Delhi Airport</h4>
        <p className="text-center mb-3">Best taxi service for pickups and drops to Delhi Airport</p>
        <button className='button-2 d-flex mx-auto'>More</button>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 box-1 mb-4">
      <div className="service-card">
        <img src={require("./images/Uttar-Pradesh.jpg")} alt="Tour Packages of Uttar Pradesh" className="service-img" />
        <h4 className='heading text-center'>Tour Packages of Uttar Pradesh</h4>
        <p className="text-center mb-3">Visit the best tourist destinations in Uttar Pradesh</p>
        <button className=' button-2 d-flex mx-auto'>More</button>
      </div>
    </div>
  </div>
</div>
    {/* section2 */}

      {/* section3 contact us for */}
      <div className="container tour-travel-container" data-aos="fade-right">
  <div className="row tour-travel">
    <div className="col-12 col-md-6">
      <img 
        src={require("./images/tourimg5.jpeg")} 
        alt="Travel Agency" 
        className="image-fluid img3" 
      />
    </div>
    <div className="col-12 col-md-6 tour-contactus">
      <h1 className="title">Sai Tour And Travels - Punjab, Chandigarh</h1>
      <p className="description">
        Sai Tour And Travels is a registered travel agency in Pathankot (Punjab) offering taxi service to Himachal, taxi service in Pathankot, Pathankot to Amritsar taxi service, Pathankot airport to Katra taxi service, Pathankot railway station to Dalhousie taxi service, and affordable holiday packages to Himachal, Punjab, Jammu & Kashmir.
      </p>
      <a href="tel:+919876745637" className="icon">
        <i className="fa fa-phone" aria-hidden="true"></i>
      </a>
      <div className="row">
        <h2 className="phone-number">+91 9876745637</h2>
        <Link to="/Onlinebooking">
          <button type="button" className="btn btn-primary d-flex m-auto">
            Online Booking
          </button>
        </Link> 
      </div>
    </div>
  </div>
</div>

    {/* section3 */}

    {/* section4 prices of taxi */}
    <div className="container-fluid cars-prices" >
  <div className="row " data-aos="fade-left">
    <h1 className="heading2">Our fleet of luxury Cars and SUVs</h1>
    <p className="para">Ride with us with full enjoyment</p>
    
    {/* Car 1 */}
    <div className="col-12 col-md-4 car-rates">
      <img 
        src={require("./images/img16.jpeg")} 
        alt="HONDA AMAZE" 
        className="cars-prices-img img-fluid d-flex m-auto mt-3"
      />
      <h3 className="text-center">HONDA AMAZE</h3>
      <p className="text-center">INR 1800/-(8 hrs / 80 km)</p>
    </div>

    {/* Car 2 */}
    <div className="col-12 col-md-4 car-rates">
      <img 
        src={require("./images/img17.jpg")} 
        alt="INNOVA CRYSTA" 
        className="cars-prices-img img-fluid d-flex m-auto mt-3"
      />
      <h3 className="text-center">INNOVA CRYSTA</h3>
      <p className="text-center">INR 2800/-(8 hrs / 80 km)</p>
    </div>

    {/* Car 3 */}
    <div className="col-12 col-md-4 car-rates">
      <img 
        src={require("./images/img18.webp")} 
        alt="TOYOTA INNOVA" 
        className="cars-prices-img img-fluid d-flex m-auto mt-3"
      />
      <h3 className="text-center">TOYOTA INNOVA</h3>
      <p className="text-center">INR 2500/-(8 hrs / 80 km)</p>
    </div>

    {/* Car 4 */}
    <div className="col-12 col-md-4 car-rates">
      <img 
        src={require("./images/img19.jpg")} 
        alt="TOYOTA ETIOS" 
        className="cars-prices-img img-fluid d-flex m-auto mt-3"
      />
      <h3 className="text-center">TOYOTA ETIOS</h3>
      <p className="text-center">INR 1500/-(8 hrs / 80 km)</p>
    </div>

    {/* Car 5 */}
    <div className="col-12 col-md-4 car-rates">
      <img 
        src={require("./images/img20.webp")} 
        alt="SWIFT DEZIRE" 
        className="cars-prices-img img-fluid d-flex m-auto mt-3"
      />
      <h3 className="text-center">SWIFT DEZIRE</h3>
      <p className="text-center">INR 1500/-(8 hrs / 80 km)</p>
    </div>

    {/* Car 6 */}
    <div className="col-12 col-md-4 car-rates">
      <img 
        src={require("./images/img21.webp")} 
        alt="TAMPOO TRAVELS" 
        className="cars-prices-img img-fluid d-flex m-auto mt-3"
      />
      <h3 className="text-center">TAMPOO TRAVELS</h3>
      <p className="text-center">INR 3200/-(8 hrs / 80 km)</p>
    </div>

    {/* Contact Button */}
    <div className="row mt-3" data-aos="fade-left">
      <Link to="/contact">
        <button className=" btn1 m-auto d-flex">
          Contact for best prices
        </button>
      </Link>  
    </div>
  </div>
</div>

    {/* section4 */}

    {/* section5 prices of all cars for Drops  */}
    <div className="container" data-aos="fade-in">
  <div className="row Drops mt-5">
    <h1 className="text-center price-heading">Best Car and Taxi Rates for Drops</h1>
    <p className="text-center text-muted mb-4">Call us for Booking: <strong>+91 9876745637</strong></p>

    {/* Pathankot to Chandigarh */}
    <div className="col-12 col-md-4 car-drops mt-3">
      <div className="drop-card">
        <h5 className="mt-3">Pathankot to Chandigarh Drop</h5>
        <ul>
          <li>Dzire : ₹3500</li>
          <li>Etios : ₹3800</li>
          <li>Ertiga : ₹4500</li>
          <li>Innova : ₹5500</li>
        </ul>
      </div>
    </div>

    {/* Pathankot to Amritsar Airport */}
    <div className="col-12 col-md-4 car-drops mt-3">
      <div className="drop-card">
        <h5 className="mt-3">Pathankot Amritsar Airport</h5>
        <ul>
          <li>Dzire : ₹2000</li>
          <li>Etios : ₹2200</li>
          <li>Ertiga : ₹3500</li>
          <li>Innova : ₹3800</li>
        </ul>
      </div>
    </div>

    {/* Pathankot to Palampur */}
    <div className="col-12 col-md-4 car-drops mt-3">
      <div className="drop-card">
        <h5 className="mt-3">Pathankot to Palampur Drop</h5>
        <ul>
          <li>Dzire : ₹3200</li>
          <li>Etios : ₹3500</li>
          <li>Ertiga : ₹3700</li>
          <li>Innova : ₹4200</li>
        </ul>
      </div>
    </div>

    {/* Pathankot to Mclodgang */}
    <div className="col-12 col-md-4 car-drops mt-3">
      <div className="drop-card">
        <h5 className="mt-3">Pathankot to Mclodgang Drop</h5>
        <ul>
          <li>Dzire : ₹2550</li>
          <li>Etios : ₹2750</li>
          <li>Ertiga : ₹3500</li>
          <li>Innova : ₹4000</li>
        </ul>
      </div>
    </div>

    {/* Pathankot to Dalhousie */}
    <div className="col-12 col-md-4 car-drops mt-3">
      <div className="drop-card">
        <h5 className="mt-3">Pathankot to Dalhousie Drop</h5>
        <ul>
          <li>Dzire : ₹3200</li>
          <li>Etios : ₹3500</li>
          <li>Ertiga : ₹4200</li>
          <li>Innova : ₹5200</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    {/* section5 */}

    {/* section6 */}
    <div className="container testimonials mt-5" data-aos="fade-up">
  <h1 className="text-center ">TESTIMONIALS</h1>
  <p className="review text-center mt-3">200 Excellent reviews from our customers</p>
  
  <div className="row mt-4">
    {/* Testimonial 1 */}
    <div className="col-12 col-md-4 Testimonials-box">
      <div className="testimonial-card">
        <h5>Ankit Agarwal</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula elit in risus facilisis.</p>
      </div>
    </div>
    
    {/* Testimonial 2 */}
    <div className="col-12 col-md-4 Testimonials-box">
      <div className="testimonial-card">
        <h5>Rohit Kumar</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula elit in risus facilisis.</p>
      </div>
    </div>
    
    {/* Testimonial 3 */}
    <div className="col-12 col-md-4 Testimonials-box">
      <div className="testimonial-card">
        <h5>Priya Sharma</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula elit in risus facilisis.</p>
      </div>
    </div>
  </div>
</div>

    {/* section6 */}

            </Layout>
        </div>
    )
}