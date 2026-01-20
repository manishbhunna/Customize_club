import React from "react";

const AboutItem = ({ product }) => {
  return (
    <section className="product-section py-5">
      <div className="container">
        <h3 className="text-center w-100 bg-black text-white mb-5 p-3">About the Item</h3>

        {/* Row 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src={product.images[0]}
              className="img-fluid w-100"
              alt={product.longDescription.tittle[0]}
            />
          </div>
          <div className="col-12 col-md-6 fs-5">
            <h3>{product.longDescription.tittle[0]}</h3>
            <p>{product.longDescription.descriptions[0]}</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row align-items-center mb-5 flex-column flex-md-row-reverse">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src={product.images[1]}
              className="img-fluid w-100"
              alt={product.longDescription.tittle[1]}
            />
          </div>
          <div className="col-12 col-md-6 fs-5">
            <h3>{product.longDescription.tittle[1]}</h3>
            <p>{product.longDescription.descriptions[1]}</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src={product.images[2]}
              className="img-fluid w-100"
              alt={product.longDescription.tittle[2]}
            />
          </div>
          <div className="col-12 col-md-6 fs-5">
            <h3>{product.longDescription.tittle[2]}</h3>
            <p>{product.longDescription.descriptions[2]}</p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row align-items-center mb-5 flex-column flex-md-row-reverse">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src={product.images[5]}
              className="img-fluid w-100"
              alt={product.longDescription.tittle[3]}
            />
          </div>
          <div className="col-12 col-md-6 fs-5">
            <h3>{product.longDescription.tittle[3]}</h3>
            <p>{product.longDescription.descriptions[3]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutItem;
