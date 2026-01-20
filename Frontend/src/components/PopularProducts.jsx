import React from "react";

const PopularProducts = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Leather Wallet",
      description: "Premium handcrafted leather wallet.",
      price: "799",
      discount: "20% OFF",
      marketPrice: "999",
      images: ["https://via.placeholder.com/250x250.png?text=Wallet"]
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Latest smartwatch with health tracking features.",
      price: "2499",
      discount: "15% OFF",
      marketPrice: "2999",
      images: ["https://via.placeholder.com/250x250.png?text=Smart+Watch"]
    },
    {
      id: 3,
      name: "Sunglasses",
      description: "Trendy UV-protected sunglasses for men & women.",
      price: "499",
      discount: "30% OFF",
      marketPrice: "699",
      images: ["https://via.placeholder.com/250x250.png?text=Sunglasses"]
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      description: "Crystal clear sound with deep bass.",
      price: "1499",
      discount: "25% OFF",
      marketPrice: "1999",
      images: ["https://via.placeholder.com/250x250.png?text=Earbuds"]
    }
  ];

  return (
    <div className="container my-2">
      {/* Section Heading */}
      <h2 className="text-center fw-bold mb-4">Popular Products</h2>
      
      <div className="row g-4">
        {products.slice(0, 4).map((item, index) => (
          <div className="col-6 col-sm-6 col-lg-3" key={index}>
            <div className="card shadow-sm h-100 border-0 rounded-3">
              
              {/* Product Image */}
              <img
                src={item.images[0]}
                className="card-img-top p-3 rounded-3"
                alt={item.name}
                style={{ height: "250px", objectFit: "cover" }}
              />

              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="text-muted small mb-2">{item.description}</p>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-success fw-bold fs-5">{item.price}/-</span>
                  <span className="badge bg-danger">{item.discount}</span>
                </div>

                <p className="text-secondary mb-1" style={{ fontSize: "14px" }}>
                  MRP: <del>{item.marketPrice}</del> (incl. all tax)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* View More Button */}
<div className="text-center mt-5">

  <button className="btn btn-outline-primary px-3 shadow-lg ">
    View More →
  </button>
   
</div>

    </div>
  );
};

export default PopularProducts;
