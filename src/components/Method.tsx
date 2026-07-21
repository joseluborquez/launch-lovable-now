import { Search, FileCheck, Layout, Code, Rocket, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import joseProfile from "@/assets/jose-profile.png";

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Reunión inicial para definir alcance y crear una maqueta general.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Kick-off administrativo",
    description: "Aceptación de la propuesta y planificación inicial.",
    icon: FileCheck,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "03",
    title: "Definición del proyecto",
    description: "Arquitectura y principales flujos.",
    icon: Layout,
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Construcción del producto (frontend + backend) acelerada por IA, con reuniones semanales de feedback.",
    icon: Code,
    color: "from-pink-500 to-pink-600",
  },
  {
    number: "05",
    title: "Entrega",
    description: "Reunión final con producto funcional y documentación técnica.",
    icon: Rocket,
    color: "from-red-500 to-red-600",
  },
];

const Method = () => {
  return (
    <section id="method" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            De tu problema a software funcionando
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro, acelerado por IA — sin la fricción de una
            agencia tradicional.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20">
            <img 
              src={joseProfile} 
              alt="José Luis Bórquez — Software a medida acelerado por IA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop view - Horizontal timeline */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-[4.5rem] left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-20" />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-3 h-[320px] flex flex-col">
                      {/* Icon with gradient background */}
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      
                      {/* Step number */}
                      <div className="text-center mb-3">
                        <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          PASO {step.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center space-y-2 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile view - Vertical timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-[2.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 opacity-20" />
            
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative flex gap-6 group"
                  >
                    {/* Icon circle */}
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Content card */}
                    <Card className="flex-1 p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="space-y-3">
                        <div>
                          <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            PASO {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Button - Centered below workflow */}
        <div className="mt-12 flex justify-center">
          <Button 
            variant="hero"
            size="lg" 
            className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            onClick={() => window.open("https://calendar.app.google/X8qocHVj3YaRRRaH8", "_blank")}
          >
            <Calendar className="h-5 w-5" />
            Agendar reunión gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Method;
