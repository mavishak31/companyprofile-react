import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/ContactSection';
import HeroSection from '../components/sections/HeroSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQSection from '../components/sections/FAQSection';
import IndustrySection from '../components/sections/IndustrySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TrustedBrandsSection from '../components/sections/TrustedBrandSection';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <TrustedBrandsSection />
      <StatsSection />
      <ProcessSection />
      <ServicesSection />
      <IndustrySection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default Home;
