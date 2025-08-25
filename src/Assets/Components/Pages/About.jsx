import'./About.css'
import { Layout } from "../Layout/Layout"
export const About =()=>{
    return(
        <div>
            <Layout>
    
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-aos="fade-in">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={require("./images/tourimg7.jpg")}  className="d-block w-100 img" alt="Slide 1"  />
        
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={require("./images/tourimg8.jpg")}  className="d-block w-100 img" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={require("./images/tourimg9.webp")}  className="d-block w-100 img" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
         {/* section1 slider of images  */}

         {/* section2   */}  
                <div className="about" data-aos="fade-down">
                    <h1>ABOUT US </h1>
                    <p>Welcome to Sai Tour And Travels, your reliable partner in exploring the majestic landscapes of India. We are a trusted and reputable travel agency based in Chandigarh, specializing in providing top-notch transportation services. Whether you are planning a leisurely trip or a business excursion, we offer a wide range of vehicles to cater to all your travel needs. With years of experience and a dedicated team, we take pride in offering exceptional taxi service, tempo travellers, luxury buses, sedan cars, and luxury sedan cars on rental for seamless travel experiences.</p>
                </div>
         {/* section2   */}  
         {/* section3 slider of images  */}
         <div className="container pictures mb-5" >
    <h1 className="text-center">OUR PICTURES</h1>
    <div className="row">
        <div className="col-md-4 mt-3" data-aos="flip-left">
            <img src={require("./images/tourimg8.jpg")} alt="Image 1" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-4 mt-3" data-aos="fade-in">
            <img src={require("./images/tourimg9.webp")} alt="Image 2" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-4 mt-3" data-aos="flip-right">
            <img src={require("./images/tourimg10.jpg")} alt="Image 3" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-4 mt-3" data-aos="fade-out">
            <img src={require("./images/tourimg11.jpg")} alt="Image 4" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-4 mt-3" data-aos="zoom-in-down">
            <img src={require("./images/tourimg12.jpg")} alt="Image 5" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-4 mt-3" data-aos="zoom-out">
            <img src={require("./images/tourimg13.jpg")} alt="Image 6" className="img-fluid rounded shadow" />
        </div>
    </div>
</div>

         {/* section3 slider of images  */}  
            </Layout>
        </div>
    )
}
