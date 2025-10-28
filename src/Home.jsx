
import ProductLIst from './components/ProductLIst';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import WhatsAppButton from './components/WhatsAppButton';
import MenCollections from './components/MenCollections';
import WomenCollections from './components/WomenCollections';
import Hampers from './components/Hampers';



const Home = () => {
  return (<>
        <HeroSection></HeroSection>
       <MenCollections></MenCollections>
          <WomenCollections></WomenCollections>
          <Hampers></Hampers>
       <AboutUs></AboutUs>
       <WhatsAppButton></WhatsAppButton>
    
   </>
    )
}

export default Home