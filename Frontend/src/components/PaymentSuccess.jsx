import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const paymentId = query.get("paymentId");
  const orderId = query.get("orderId");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg text-center p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="text-success mb-3">
          <i className="bi bi-check-circle-fill" style={{ fontSize: "4rem" }}></i>
        </div>
        <h2 className="fw-bold">Order Booked Successfully 🎉</h2>
        <p className="text-muted mt-3">
          Thank you for your purchase! Your order has been booked successfully.
        </p>

        <div className="mt-3 text-start">
          <p><strong>Payment ID:</strong> {paymentId}</p>
          <p><strong>Order ID:</strong> {orderId}</p>
        </div>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
