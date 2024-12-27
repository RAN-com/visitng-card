import AboutUs from '../Components/Aboutus';
import ContactUs from '../Components/Contact';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import HomeSection from '../Components/Home';
import NutritionForm from '../Components/NutritionForm';
import ProductsServices from '../Components/ProductsServices';
import ShareSection from '../Components/Share';

function Layout() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md space-y-2">
        <HomeSection />
        <ContactUs />
        <AboutUs/>
       
        <NutritionForm/>
        <ShareSection/>
    <ProductsServices/>
        <Gallery/>
    
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
