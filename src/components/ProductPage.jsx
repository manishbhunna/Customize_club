import Description from "./ProductDetails/Description"
import ProductView from "./ProductDetails/ProductView"
import ProductStorage from "./ProductStorage"
import { useParams, Link } from "react-router-dom";
import AboutItem from "./ProductDetails/AboutItem";
import CustomerReviews from "./ProductDetails/CustomerReviews";
import FeaturesSection from "./ProductDetails/FeaturesSection";
import FAQSection from "./FAQSection";
import CustomerQuery from "./CustomerQuery";
import {getAllProducts} from "./ProductHelpers";


const ProductPage = () => {
  
   const { name } = useParams();
    const product = getAllProducts(ProductStorage).find((p) => p.name === name);

  return ( <>
       <div className="container py-5">
<div className="row g-4">
   
     <div className="col-lg-6">
        <ProductView product={product}></ProductView>
     </div>
       <div className="col-lg-6">
        <Description product={product}></Description>
         </div>

    </div> 
     </div>


     
      <FeaturesSection></FeaturesSection>
      <AboutItem product={product}></AboutItem>
      <CustomerReviews></CustomerReviews>
      <FAQSection></FAQSection>
      <CustomerQuery></CustomerQuery>
    </>
  )
}

export default ProductPage