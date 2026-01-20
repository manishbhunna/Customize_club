import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";


const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Social Section */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer-link text-white">
                <FaInstagram size={28} />
              </a>
              <a href="#" className="footer-link text-white">
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-2">
            <h5>Our Office</h5>
            <p className="mt-3 text-secondary">
              Vadodara, Gujarat <br />
              India - 390001
            </p>
          </div>

          {/* Policies */}
          <div className="col-md-2">
            <h5>Policies</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="term.html" className="footer-link text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="privacy.html" className="footer-link text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="Return Policy.html" className="footer-link text-white">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-2">
            <h5>Support</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="help.html" className="footer-link text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

           {/* MAade in India */}
          <div className="col-md-3 text-center">
               <img 
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
            alt="Indian Flag" 
            width="50" 
            className="mb-3"
          />
          <h6 className="fw-bold">MADE IN INDIA</h6>
          <p className=" mb-0">Proudly Made in India.</p>
          </div>

          
        </div>

        <hr className="my-4 border-secondary" />

        <div className="text-center text-secondary">
          <small>© 2023 Customize Wallet. All rights reserved</small>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
