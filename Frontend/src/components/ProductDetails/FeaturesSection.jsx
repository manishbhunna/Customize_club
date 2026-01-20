import React from 'react'

import { FaWhatsapp, FaShippingFast, FaHome, FaLock, FaUndoAlt, FaStar } from "react-icons/fa";

const FeaturesSection = () => {
  return (<>
   {/* Features Section */}
      <div className="container my-1 py-4">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-3">
            <div className="feature-card bg-gradient-1">
              <FaShippingFast className="feature-icon" />
              <p>7 Days Delivery</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-3">
            <div className="feature-card bg-gradient-2">
              <FaHome className="feature-icon" />
              <p>Free Delivery</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-3">
            <div className="feature-card bg-gradient-3">
              <FaLock className="feature-icon" />
              <p>Secure Transaction</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-3">
            <div className="feature-card bg-gradient-4">
              <FaUndoAlt className="feature-icon" />
              <p>5 Day Easy Return</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-3">
            <div className="feature-card bg-gradient-5">
              <FaStar className="feature-icon" />
              <p>Best Quality</p>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default FeaturesSection