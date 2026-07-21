import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import heroBackground from "@/assets/hero-background-network.png";
const Hero = () => {
  const handleScheduleMeeting = () => {
    window.open("https://calendar.app.google/X8qocHVj3YaRRRaH8", "_blank");
  };
  return <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Software a medida{" "}
              <span className="text-white">
                en semanas, no meses
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Software a medida para empresas en LATAM: web, apps internas,
              agentes de WhatsApp y sistemas de ventas — acelerado por IA, sin
              la fricción ni el costo de una agencia de desarrollo
              tradicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleScheduleMeeting} className="group">
                Agenda una reunión gratuita
                <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;