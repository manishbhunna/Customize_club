import React from "react";

const BuyNowButton = ({ amount, productName,dataField,handleCheckout}) => {
  
  const handleBuyNow = async () => {
    try {
      // Backend se order create karna
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }) // paise me
      });

      if (!response.ok) throw new Error("Server error while creating order");
      const order = await response.json();

      // Razorpay options
      const options = {
        key: "rzp_test_RChR1j50x5i0CW",
        amount: order.amount,
        currency: order.currency,
        name: "Customize Gift",
        description: productName,
        order_id: order.id,
        handler: function (response) {
  console.log("🚀 Handler triggered");
  console.log("✅ Payment Success:", response);
  alert("Payment Success! Payment ID: " + response.razorpay_payment_id);

  setTimeout(() => {
    window.location.href = `/success?paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}`;
  }, 1500); // 1.5 second delay
}

,
        theme: { color: "#3399cc" },
      };

      // Razorpay checkout open
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Check console for details.");
    }
  };

  return (
    <button
  className="btn btn-primary w-100 fw-bold"
  onClick={() => {
    if (dataField) {   // ✅ sirf tab chalega jab true ho
      handleBuyNow();
    }
    handleCheckout();  // ✅ hamesha chalega
  }}
>
  Secure Payment
</button>


  );
};

export default BuyNowButton;
