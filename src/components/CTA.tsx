import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const CTA = () => {
  const handleScheduleMeeting = () => {
    window.open("https://calendar.app.google/X8qocHVj3YaRRRaH8", "_blank");
  };

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl p-12 sm:p-16 border border-primary/20">
          <h2 className="text-4xl sm:text-5xl font-bold">
            ¿Listo para resolver tu problema con software a medida?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda una reunión gratuita de 30 minutos y descubre cómo podemos
            ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={handleScheduleMeeting}
              className="group"
            >
              <span className="hidden sm:inline">Agenda tu reunión gratuita</span>
              <span className="sm:hidden">Agenda reunión</span>
              <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
