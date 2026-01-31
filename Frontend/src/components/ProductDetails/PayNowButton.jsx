import React from "react";
import { store } from "../../Redux/store"; // Redux store import
import { useDispatch } from "react-redux";
import { clearCart } from "../../Redux/cartSlice"; // reducers
import { resetUserDetails } from "../../Redux/userdetails"; // reducers

const BuyNowButton = ({ amount, productName, dataField, handleCheckout }) => {
  const dispatch = useDispatch();

  const LIVE_URL="https://customize-club-backend.onrender.com";
  const LOCAL_URL="http://localhost:5000";

  const handleBuyNow = async () => {
    try {
      // 1️⃣ Create order on backend
      const response = await fetch(`${LIVE_URL}/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) })
      });

      if (!response.ok) throw new Error("Server error while creating order");
      const order = await response.json();

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_RChR1j50x5i0CW",
        amount: order.amount,
        currency: order.currency,
        name: "Customize Gift",
        description: productName,
        order_id: order.id,
        handler: async function (response) {
          console.log("🚀 Payment Success:", response);

          // 3️⃣ Redux userdetails se pura payload uthao
          const userdetails = store.getState().userdetails;

          const payload = {
            ...userdetails,
            paymentInfo: {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              status: "success"
            }
          };

          try {
            // 4️⃣ Backend me order save
            const res = await fetch(`${LIVE_URL}/api/order`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (data.success) {
              alert("Payment Succesfull ✅");

              // 5️⃣ Redux cart clear + userdetails reset
              dispatch(clearCart());
              dispatch(resetUserDetails());

              // 6️⃣ Redirect success page
              window.location.href =
                window.location.origin + `/Customize_club/#/success?paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}`;
            }
          } catch (err) {
            console.error("❌ Order save failed:", err);
            alert("Payment Failed. Contact support!");
          }
        },
        theme: { color: "#3399cc" }
      };

      // 7️⃣ Open Razorpay checkout
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
        if (dataField) {
          handleBuyNow();
        }
        handleCheckout(); // optional always run
      }}
    >
      Secure Payment
    </button>
  );
};

export default BuyNowButton;
