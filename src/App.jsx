import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import HowToOrder from "./components/HowToOrder";
import PreOrderForm from "./components/PreOrderForm";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <WhyChooseUs />
        <AboutSection />
        <HowToOrder />
        <PreOrderForm />
        <TestimonialsSection />
        <FaqSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}