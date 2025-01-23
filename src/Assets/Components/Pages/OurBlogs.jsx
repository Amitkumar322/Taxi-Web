import React from "react"
import { Layout } from "../Layout/Layout"
export const OurBlogs =()=>{
    return(
        <div>
            <Layout>
                {/* section1 */}
                <div className="sec1">
                 <div className="background-div">
                 <h1>YOU FEEL COMFORTABLE WITH US </h1>
                 <h2>WE PROVIDE BEST SERVICES AND BEST PRICE</h2>
                </div>
                </div>
                {/* section2 */}
 
                {/* section2 */}
                <div className="container">
                    <div className="row">
                        <h1 >OUR LATEST BLOGS</h1>
                        <div className="col-md-4 mt-5 d-flex m-auto justify-content-center">
                        <div className="card" style={{ width: '18rem' }}>
                        <img src={require("./images/shimlaPhoto.jpg")}className="card-img-top" alt="Card Image" style={{ backgroundSize:'cover', height: '200px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">Chase Dreams, Not Destinations: Explore Manali With Sai Tour And Travels</h5>
                            <p className="card-text">
                            Manali, one of the most well-known hill stations in India, is nestled among the slopes of the mounta .
                            </p><hr/>
                        <p>posted by: car tour-and-travels</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
                <div className="col-md-4 mt-5 d-flex m-auto justify-content-center">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={require("./images/shimlaPoto1.jpg")}className="card-img-top" alt="Card Image" style={{ backgroundSize:'cover', height: '200px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Chase Dreams, Not Destinations: Explore Manali With Sai Tour And Travels</h5>
                            <p className="card-text">
                            Manali, one of the most well-known hill stations in India, is nestled among the slopes of the mounta .
                            </p><hr/>
                        <p>posted by: car tour-and-travels</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div> 
             </div>
                <div className="col-md-4 mt-5 d-flex m-auto justify-content-center">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={require("./images/tour.jpg")}className="card-img-top" alt="Card Image" style={{ backgroundSize:'cover', height: '200px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Chase Dreams, Not Destinations: Explore Manali With Sai Tour And Travels</h5>
                            <p className="card-text">
                            Manali, one of the most well-known hill stations in India, is nestled among the slopes of the mounta .
                            </p><hr/>
                        <p>posted by:Sai Tour And Travels</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
             </div>
                {/* section2 */}
                    </div>
                </div>



            </Layout>
        </div>
    )
}