
// CustomerReviews.js
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Amit Verma",
    city: "Pune",
    review: "Customize Club truly impressed me with its sleek and stylish collection. Quality is top-notch and delivery was quick. Highly recommended!",
    rating: 5,
  },
  {
    name: "Shivani Mehto",
    city: "Hyderabad",
    review: "I ordered a leather wallet and was genuinely impressed. Stitching was neat, finish felt premium, and it arrived in a classNamey gift box.",
    rating: 5,
  },
  {
    name: "Kunal Joshi",
    city: "Ahmedabad",
    review: "The product looked exactly like the photos. Lightweight, organized, and classNamey wallet. Totally value for money!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    city: "Delhi",
    review: "Perfect gift option! The packaging was premium and the wallet was even better than expected.",
    rating: 5,
  },
  {
    name: "Ravi Kapoor",
    city: "Mumbai",
    review: "Great experience, good quality leather and smooth service. Will order again.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    city: "Bangalore",
    review: "Loved the design and feel of the wallet. Delivery was fast and secure.",
    rating: 5,
  },
  {
    name: "Manoj Singh",
    city: "Chandigarh",
    review: "Wallet looks very stylish, durable, and is spacious enough for daily use.",
    rating: 5,
  },
  {
    name: "Ankita Jain",
    city: "Jaipur",
    review: "Amazing service. The personalized name engraving looked so premium. My brother loved it as a gift.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,       // autoplay na ruke
    pauseOnFocus: false,       // focus hone pe bhi autoplay continue
    pauseOnDotsHover: false,   // dots par hover karne par bhi autoplay continue
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">CUSTOMER VOICE</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <div className="card shadow p-3 h-100">
              <div className="card-body">
                <p className="text-warning mb-2">
                  {"★".repeat(review.rating)}
                </p>
                <p className="card-text">“{review.review}”</p>
                <h6 className="mt-3 fw-bold">{review.name}</h6>
                <p className="text-muted">{review.city}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
