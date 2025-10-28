
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./ProductPage";
import { Link } from "react-router-dom";


const App = ({item}) => {
     return ( <>
<div className="col-6 col-sm-6 col-lg-3">
  <div className="card shadow-sm h-100 border-0 rounded-3">
    <Link
      to={`/product/${item.name}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {/* Product Image */}
      <img
        src={item.images[0]}
        className="card-img-top product-img p-2 rounded-3"
        alt={item.name}
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column p-2">
        <h6 className="fw-bold mb-1 product-title">{item.name}</h6>

        {/* Price + Discount + MRP */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="text-success fw-bold product-price">
            {item.price}/- <span className="text-dark">Rs</span>
          </span>
          <span className="badge bg-danger item-discount">{item.discount}</span>
        </div>

        <p className="text-secondary mb-1 product-mrp">
          MRP: <del>{item.marketPrice}</del> (incl. all tax)
        </p>

        {/* Description → Only Tablet & Laptop */}
        <div className="d-none d-md-block mt-2">
          <p className="text-muted small mb-1">{item.description}</p>
        </div>

      </div>
    </Link>
  </div>
</div>


    
    </>

   
  );
};

export default App;
