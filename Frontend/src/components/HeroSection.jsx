import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <div
        id="header"
        className="container-fluid position-relative d-flex align-items-center"
        style={{
          backgroundImage: "url('/photos/banner3.jpeg')", // अपनी image का path यहाँ डालें
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="overlay"></div>
        <div className="container content text-center text-white position-relative">
          <h1 className="display-4 fw-bold mb-4">
            Customized Gifts for Every Occasion
          </h1>
          <p className="lead mb-4">
            Discover unique gifts personalized just for you and your loved ones.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
