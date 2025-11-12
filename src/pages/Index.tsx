import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Tools from "@/components/Tools";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Method />
        <Testimonials />
        <Portfolio />
        <Tools />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
