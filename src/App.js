import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './Assets/Components/Pages/Home';
import { About } from './Assets/Components/Pages/About';
import { OurServices} from './Assets/Components/Pages/OurServices';
import { ServiceOne} from './Assets/Components/Pages/ServiceOne';
import { ServiceTwo} from './Assets/Components/Pages/ServiceTwo';
import { ServiceThree} from './Assets/Components/Pages/ServiceThree';
import { ServiceFour} from './Assets/Components/Pages/ServiceFour';
import { Contact } from './Assets/Components/Pages/Contact';
import { OurFleet } from './Assets/Components/Pages/OurFleet';
import { OurBlogs } from './Assets/Components/Pages/OurBlogs';
import { Onlinebooking } from './Assets/Components/Pages/Onlinebooking';
import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Trigger animation once when scrolling
    });
  }, []);

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Ourservices" element={<OurServices/>}/>
      <Route path="/ServiceOne" element={<ServiceOne/>}/>
      <Route path="/ServiceTwo" element={<ServiceTwo/>}/>
      <Route path="/ServiceThree" element={<ServiceThree/>}/>
      <Route path="/ServiceFour" element={<ServiceFour/>}/>
      <Route path="/OurFleet" element={<OurFleet/>}/>
      <Route path="/OurBlogs" element={<OurBlogs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Onlinebooking" element={<Onlinebooking/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

