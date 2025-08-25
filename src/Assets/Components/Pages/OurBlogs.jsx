import { Layout } from "../Layout/Layout"
import './OurBlogs.css';
export const OurBlogs =()=>{
    return(
        <div>
            <Layout>
                {/* section1 */}
                  <div className="cont mt-5" >
                   <div className="banner-img-1">
                    <div className="text-1">
                      <h1> OUR BLOGS </h1>
                    </div>
                   </div>
                </div>
         
                {/* section1 */}
 
                {/* section2 */}
                <div className="container blogs">
                        <h1 className="mt-5 mb-5 head-text" style={{ fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif' }}>OUR LATEST BLOGS</h1>
                    <div className="row"  data-aos="flip-left">
                        <div className="col-md-4 mt-5 d-flex m-auto justify-content-center">
                        <div className="card" style={{ width: '18rem' }}>
                        <img src={require("./images/shimlaPhoto.jpg")}className="card-img-top" alt="Card Image" style={{ backgroundSize:'cover', height: '200px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">Chase Dreams, Not Destinations: Explore Manali With Sai Tour And Travels</h5>
                            <p className="card-text" style={{ color:'black', fontFamily:'vardana' }}>
                            Manali, one of the most well-known hill stations in India, is nestled among the slopes of the mounta .
                            </p><hr/>
                        <p style={{ color:'black', fontFamily:'vardana' }}>posted by: car tour-and-travels</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
                <div className="col-md-4 mt-5 d-flex m-auto justify-content-center" data-aos="fade-in-down">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={require("./images/shimlaPoto1.jpg")}className="card-img-top" alt="Card Image" style={{ backgroundSize:'cover', height: '200px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Chase Dreams, Not Destinations: Explore Manali With Sai Tour And Travels</h5>
                            <p className="card-text" style={{ color:'black', fontFamily:'vardana' }}>
                            Manali, one of the most well-known hill stations in India, is nestled among the slopes of the mounta .
                            </p><hr/>
                        <p style={{ color:'black', fontFamily:'vardana' }}>posted by: car tour-and-travels</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div> 
             </div>
                <div className="col-md-4 mt-5 d-flex m-auto justify-content-center" data-aos="fade-out-up">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={require("./images/tour.jpg")}className="card-img-top" alt="Card Image" style={{ backgroundSize:'cover', height: '200px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Chase Dreams, Not Destinations: Explore Manali With Sai Tour And Travels</h5>
                            <p className="card-text" style={{ color:'black', fontFamily:'vardana' }}>
                            Manali, one of the most well-known hill stations in India, is nestled among the slopes of the mounta .
                            </p><hr/>
                        <p style={{ color:'black', fontFamily:'vardana' }}>posted by:Sai Tour And Travels</p>
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