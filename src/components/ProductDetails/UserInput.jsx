import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice"; // Update path as needed

const UserInput = ({ product }) => {
  const dispatch = useDispatch();
   const { name } = useParams();
     const navigate = useNavigate();
  
  // Sabhi input values store karne ke liye state
  const [formData, setFormData] = useState({});

  // Input change handle
  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  // Form submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Values:", formData); // yahan values console par print hongi
  };

  return (
    <form onSubmit={handleSubmit}>
      {product.inputFields?.map((field, index) => (
        <div className="mb-4" key={index}>
          <label className="form-label fw-bold">{field.label}</label>

          {/* Text Input */}
          {field.type === "text" && (
            <input
              type="text"
              className="form-control"
              placeholder={field.label}
              maxLength={15}
              value={formData[field.label] || ""}
              onChange={(e) => handleChange(e, field.label)}
            />
          )}

          {/* Select Input */}
          {field.type === "select" && (
            <select
              className="form-control"
              name={field.label}
              value={formData[field.label] || ""}
              onChange={(e) => handleChange(e, field.label)}
            >
              <option value="">--Select--</option>
              {field.options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      {/* Delivery Info (common sab products ke liye) */}
      <div className="alert alert-info mb-4">
        <h5 className="alert-heading">🚚 Delivery Information</h5>
        <ul className="mb-0">
          <li>Free Home Delivery (7 Days)</li>
          <li>All India Delivery Available</li>
          <li>Worldwide Delivery (Extra Charges Apply)</li>
          <li>5 Days Easy Return Policy</li>
        </ul>
      </div>

      {/* Buttons */}
      <button type="button" className="btn btn-primary w-100 fw-bold mt-2"  
      onClick={() => navigate("/cart", { state: { product } })}  // ✅ navigate with product
  >
        Buy Now
      </button>

      <button
  type="button"
  className="btn btn-warning w-100 fw-bold mt-2"
  onClick={() => {
    dispatch(addToCart({
      ...product,
      userInputs: formData,
      Productid:product.id
    }));
    alert("Item added to cart ✅");
  }}
>
  Add To Cart
</button>

    </form>
  );
};

export default UserInput;
