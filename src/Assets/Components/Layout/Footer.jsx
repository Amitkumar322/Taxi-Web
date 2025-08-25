import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container-fluid py-5">
        <div className="row text-center text-md-start">
          
          {/* USEFUL LINKS */}
          <div className="col-sm-6 col-md-4 mb-4">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/fleet" className="footer-link">Our Fleet</Link></li>
              <li><Link to="/blogs" className="footer-link">Latest Blogs</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div className="col-sm-6 col-md-4 mb-4">
            <h3 className="footer-title">Connect With Us</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Instagram</a></li>
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">Telegram</a></li>
              <li><a href="#" className="footer-link">WhatsApp Group</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-sm-12 col-md-4 mb-4">
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="footer-list">
              <li>📞 +91 45678 93456, 34567 8906</li>
              <li>📧 Email@Sai-Tour321.com</li>
              <li>🏠 House No.453, Gali No.4, Enoce Society, CHD-160047</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="copyright mb-0">
              © {new Date().getFullYear()} Sai Tours. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
