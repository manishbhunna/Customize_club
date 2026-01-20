import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919467191644"  // ✅ Country code +91 ke sath
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        zIndex: 1000,
        textDecoration: "none",
      }}
    >
      <i className="bi bi-whatsapp"></i> {/* Bootstrap Icon use kar rahe hain */}
    </a>
  );
};

export default WhatsAppButton;
