
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import EmailPopUp from './components/EmailPopUp';
import AboutUs from './components/AboutUs';
import ExploreCategory from './components/ExploreCategory';
import FeaturedProperty from './components/FeaturedProperty';
import FAQ from './components/FAQ';
import TestimonialsScroll from './components/TestimonialsScroll';
import CTAOwnership from './components/CTAOwnership';
import ContactSplitSection from './components/Contact';

function App() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      {/* <ExploreCategory/> */}
      <FeaturedProperty/>
      <FAQ/>
      <TestimonialsScroll/>
      <ContactSplitSection/>
      <CTAOwnership/>
      <Footer/>
    </div>
  );
}

export default App;
