import { HashRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Home from './Home';
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import PaymentSuccess from "./components/PaymentSuccess";
import MenCollections from "./components/MenCollections";
import Hampers from "./components/Hampers";
import WomenCollections from "./components/WomenCollections";
import Term_conditions from "./components/Policies/Term_conditions";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import ReturnPolicy from "./components/Policies/ReturnPolicy";
import CustomerQuery from "./components/CustomerQuery";

function App() {

  return (
  <>
    <Router >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<LoginPage/>}/>
        <Route path="/mens" element={<MenCollections showAll={true}/>}/>
        <Route path="/women" element={<WomenCollections showAll={true}/>}/>
        <Route path="/hampers" element={<Hampers showAll={true}/>}/>
         <Route path="/success" element={<PaymentSuccess/>} />
           <Route path="/Term&Condtions" element={<Term_conditions/>} />
             <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
               <Route path="/ReturnPolicy" element={<ReturnPolicy/>} />
                  <Route path="/Contactus" element={ <CustomerQuery/>} />


      </Routes>
      
      

      <Footer></Footer>
      
    </Router>
  
  </> )
}

export default App
