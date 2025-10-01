import ModernHero from "@/components/hero/ModernHero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ModernTestimonials from "@/components/sections/ModernTestimonials";
import PageTransition from "@/components/transitions/PageTransition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProceduresSlider from "@/components/sections/BeforeAfterSlider";
import Financing from "@/components/sections/Finacing";
import FaqComponent from "@/components/sections/FaqComponent";
import ContactSection from "@/components/sections/ContactSection";
import BMICalculator from "@/components/sections/BMICalculator";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <PageTransition />

      {/* Hero Section */}
      <ModernHero />

      {/* Before and After Section */}
      <ProceduresSlider />

      {/* BMI Calculator Section */}
      <BMICalculator />

      {/* Financing Section */}
      <Financing />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Testimonials */}
      <ModernTestimonials />

      {/* FAQ */}
      <FaqComponent />

      {/* Contact/CTA Section */}
      <ContactSection />

      {/* Toast Container */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
