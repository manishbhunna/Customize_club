import { FaWallet, FaUser, FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* WhatsApp Info Bar */}
      <div className="text-center whatsapphead py-1" style={{ fontSize: "13px" }}> 
        Whatsapp us +9194671-91644 (10AM-8PM)
      </div>

      {/* Navbar */}
      <header className="bg-light border-bottom shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
          <div className="container d-flex align-items-center justify-content-between">

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler order-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Brand Logo */}
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mx-auto order-2 order-lg-1"
              style={{ textDecoration: "none" , fontSize: "18px" }}
            >
              <FaWallet className="me-2 text-dark logo-icon" />
              <span className="fw-bold logo-text text-dark">Customize Club</span>
            </Link>

            {/* Search + User (mobile only) */}
            <div className="d-flex align-items-center order-3">
              <FaSearch className="me-3 text-dark d-lg-none" />
              <Link to="/profile" ><FaUser className="text-dark d-lg-none" /></Link> 
            </div>

            {/* Nav Links */}
            <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold" style={{ fontSize: "13px" }}>
                <li className="nav-item mx-3">
                  <Link to="/" className="nav-link text-dark ">Home</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to="/mens" className="nav-link text-dark">Men's Collection</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to="/women" className="nav-link text-dark">Women's Collection</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to="/hampers" className="nav-link text-dark">Personalised Hampers</Link>
                </li>
                
              </ul>

              {/* Search box (desktop only) */}
              <div className="d-none d-lg-flex ms-3 align-items-center">
                <form className="me-3">
                  <div className="input-group" >
                    <input
                    style={{ fontSize: "12px" }}
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <span className="input-group-text bg-white border-start-0">
                      <FaSearch className="text-dark" />
                    </span>
                  </div>
                </form>

                {/* User Icon (desktop only) */}
             <Link to="/profile" ><FaUser className="text-dark" size={16} /></Link>    
            <Link to="/cart" >    <BsCart className="ms-3 text-dark" /> </Link> 
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
