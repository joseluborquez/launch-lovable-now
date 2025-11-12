import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
const Hero = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Lanza tu app o SaaS{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                sin programar
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ayudo a emprendedores digitales a convertir sus ideas en productos
              reales con herramientas No-Code e Inteligencia Artificial,
              ahorrando costos y tiempos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToCTA} className="group">
                Agenda una reunión gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
          </div>
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-50" />
            <img src={heroImage} alt="Dashboard de automatización con IA" className="relative rounded-2xl shadow-[var(--shadow-card)] border border-border" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;