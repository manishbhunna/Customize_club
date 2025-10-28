import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductView = ({ product }) => {
  const [mainImage, setmainimage] = useState(product.images[0]);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
   {/* Desktop View (Main + Thumbnails Grid) */}
<div className="d-none d-lg-block">
  {/* Main Image */}
  <div className="border rounded-3 p-0 shadow-sm zoom-effect mb-3">
    <img
      src={mainImage}
      className="img-fluid rounded-2 w-100"
      id="mainImage"
      alt="Custom Leather Wallet"
    />
  </div>

  {/* Thumbnails Grid */}
  <div className="row g-2 mt-2">
    <div className="col-6 col-md-4">
      <img
        onClick={() => setmainimage(product.images[1])}
        src={product.images[1]}
        className="img-fluid rounded-2 cursor-pointer w-100"
        alt="Main Image"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        onClick={() => setmainimage(product.images[2])}
        src={product.images[2]}
        className="img-fluid rounded-2 cursor-pointer w-100"
        alt="Inner View"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        onClick={() => setmainimage(product.images[3])}
        src={product.images[3]}
        className="img-fluid rounded-2 cursor-pointer w-100"
        alt="Colours"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        onClick={() => setmainimage(product.images[4])}
        src={product.images[4]}
        className="img-fluid rounded-2 cursor-pointer w-100"
        alt="Main image"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        onClick={() => setmainimage(product.images[5])}
        src={product.images[5]}
        className="img-fluid rounded-2 cursor-pointer w-100"
        alt="Charm Options"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        onClick={() => setmainimage(product.images[6])}
        src={product.images[6]}
        className="img-fluid rounded-2 cursor-pointer w-100"
        alt="Extra View"
      />
    </div>
  </div>
</div>



     {/* Main Carousel */}
      <div id="mobileCarousel" className="carousel slide d-lg-none">
        <div className="carousel-inner rounded-3 shadow-sm">
          {product.images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100 img-fluid"
                alt={`Product ${index}`}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? product.images.length - 1 : prev - 1
            )
          }
        >
             </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() =>
            setActiveIndex((prev) =>
              prev === product.images.length - 1 ? 0 : prev + 1
            )
          }
        >
             </button>
      </div>

      {/* Thumbnail Row */}
      <div className="d-flex d-lg-none justify-content-center mt-2 gap-2">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            onClick={() => setActiveIndex(index)}
            className={`img-thumbnail cursor-pointer ${
              activeIndex === index ? "border border-2 border-primary" : ""
            }`}
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
        ))}
      </div>
    

    </>
  );
};

export default ProductView;
