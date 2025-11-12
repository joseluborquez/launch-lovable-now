import { Button } from "@/components/ui/button";
import { CalendarCheck, MoveRight } from "lucide-react";

const CTA = () => {
  const handleScheduleMeeting = () => {
    // Replace with actual Calendly or Make URL
    window.open("https://calendly.com/tu-link", "_blank");
  };

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl p-12 sm:p-16 border border-primary/20">
          <CalendarCheck className="h-16 w-16 text-primary mx-auto" />
          <h2 className="text-4xl sm:text-5xl font-bold">
            ¿Listo para lanzar tu producto?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda una reunión gratuita de 30 minutos y descubre cómo podemos
            ayudarte a transformar tu idea en realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={handleScheduleMeeting}
              className="group"
            >
              Agenda tu reunión gratuita
              <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            ✅ Sin compromiso • ⏱️ 30 minutos • 💡 Ideas claras
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
