import { useState } from "react";

const SingleProduct = () => {
  const thumbnails = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeImage = (index) => {
    setMainImage(thumbnails[index]);
    setActiveIndex(index);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 mb-4">
          <img
            src={mainImage}
            alt="Product"
            className="img-fluid rounded mb-3 product-image"
            id="mainImage"
          />

          <div className="d-flex justify-content-between">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail rounded ${
                  index === activeIndex ? "border border-primary" : ""
                }`}
                onClick={() => changeImage(index)}
                style={{ width: "80px", height: "80px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-md-6">
          <h2 className="mb-3">Premium Wireless Headphones</h2>
          <p className="text-muted mb-4">SKU: WH1000XM4</p>
          <div className="mb-3">
            <span className="h4 me-2">$349.99</span>
            <span className="text-muted">
              <s>$399.99</s>
            </span>
          </div>

          <div className="mb-3">
            {/* Replace with React Icons or use Bootstrap Icons via CDN */}
            ⭐⭐⭐⭐½ <span className="ms-2">4.5 (120 reviews)</span>
          </div>

          <p className="mb-4">
            Experience premium sound quality and industry-leading noise
            cancellation with these wireless headphones.
          </p>

          {/* Color Options */}
          <div className="mb-4">
            <h5>Color:</h5>
            <div className="btn-group" role="group" aria-label="Color selection">
              <input
                type="radio"
                className="btn-check"
                name="color"
                id="black"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-dark" htmlFor="black">
                Black
              </label>

              <input
                type="radio"
                className="btn-check"
                name="color"
                id="silver"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="silver">
                Silver
              </label>

              <input
                type="radio"
                className="btn-check"
                name="color"
                id="blue"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="blue">
                Blue
              </label>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">
              Quantity:
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              defaultValue="1"
              min="1"
              style={{ width: "80px" }}
            />
          </div>

          {/* Action Buttons */}
          <button className="btn btn-primary btn-lg mb-3 me-2">
            🛒 Add to Cart
          </button>
          <button className="btn btn-outline-secondary btn-lg mb-3">
            ❤️ Add to Wishlist
          </button>

          {/* Features */}
          <div className="mt-4">
            <h5>Key Features:</h5>
            <ul>
              <li>Industry-leading noise cancellation</li>
              <li>30-hour battery life</li>
              <li>Touch sensor controls</li>
              <li>Speak-to-chat technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
