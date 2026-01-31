import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="container my-5">
      <div className="bg-white p-4 p-md-5 rounded shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
        
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: "50px" }}>
          Return Policy
        </h2>

        <p className="fw-bold">5 Days Easy Return Available</p>

        <p className="mb-4">
          At Customize Club, we aim to provide our customers with the best
          shopping experience. However, if you receive a damaged, defective, or
          incorrect product, we offer a hassle-free return policy under the
          following conditions:
        </p>

        <h4 className="fw-bold mt-4">Conditions for Return:</h4>
        <ul className="list-unstyled">
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            If the wallet or gift item is torn, broken, or damaged upon delivery.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            If the product is missing any items, or you receive an empty package.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            If you receive the wrong product, different from what was ordered.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            Returns will only be accepted if the product meets our return
            conditions.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            Refunds are not available. Only product replacement is allowed.
          </li>
        </ul>

        <h4 className="fw-bold mt-4">Return Process:</h4>
        <p>To ensure a smooth return process, please follow these steps:</p>
        <ul className="list-unstyled">
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            When opening the parcel, record a clear and unedited video from the
            start.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            The video must show the entire box from a 360-degree angle.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            The tracking ID and invoice should be clearly visible in the video.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            Any missing video proof will lead to rejection of the return request.
          </li>
        </ul>

        <h4 className="fw-bold mt-4">Important Notes:</h4>
        <ul className="list-unstyled">
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            All return requests must be initiated within 5 days of product
            delivery.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            The product should be returned in its original packaging and
            condition.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            Customers are responsible for shipping the item back to us if
            required.
          </li>
          <li className="bg-light p-3 mb-2 border-start border-4 border-dark">
            Failure to meet any of the above conditions will void the return
            request.
          </li>
        </ul>

        <h4 className="fw-bold mt-4">Contact Us:</h4>
        <p>
          If you have any questions or need assistance with a return request,
          please contact our{" "}
              Support Team
         
          . We are here to help and ensure a smooth resolution to any issues you
          may have.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
