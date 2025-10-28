import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-light mt-5">
      <div className="container">
        <div className="text-center">
          <h2 className="display-5 fw-bold text-dark">About Us</h2>
          <p
            className="mt-3 text-secondary fs-5 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Welcome to Customize Club Family. We have 50K+ Happy Customers. We
            are working from Gujarat, India. We are passionate about creating
            personalized gifts that make every occasion special.
          </p>
        </div>

        <div className="row mt-4">
          {/* Mission */}
          <div className="col-lg-6">
            <div className="bg-white rounded shadow-sm p-4">
              <h3 className="h4 fw-semibold text-dark">Our Mission</h3>
              <p className="text-secondary">
                Our mission is to craft personalized gifts that celebrate life's
                special moments with creativity and heart. We are committed to
                delivering joy through thoughtful customization, ensuring each
                gift reflects the unique personality and sentiments of its
                recipient.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="bg-white rounded shadow-sm p-4">
              <h3 className="h4 fw-semibold text-dark">Our Vision</h3>
              <p className="text-secondary">
                Our vision is to be the leading provider of personalized gifts,
                inspiring moments of happiness and connection worldwide. We
                offer an unparalleled experience that fosters lasting memories
                and strengthens relationships through the power of
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
