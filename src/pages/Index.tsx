import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Tools from "@/components/Tools";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WelcomeDialog from "@/components/WelcomeDialog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Method />
        <Tools />
        <Testimonials />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
      <WelcomeDialog />
    </div>
  );
};

export default Index;
