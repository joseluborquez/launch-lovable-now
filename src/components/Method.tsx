import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Reunión inicial para definir alcance y crear una maqueta general.",
  },
  {
    number: "02",
    title: "Kick-off administrativo",
    description: "Aceptación de la propuesta y planificación inicial.",
  },
  {
    number: "03",
    title: "Definición del proyecto",
    description: "Arquitectura y principales flujos.",
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Construcción del producto (frontend + backend) con reuniones semanales de feedback.",
  },
  {
    number: "05",
    title: "Entrega",
    description: "Reunión final con producto funcional y documentación técnica.",
  },
];

const Method = () => {
  return (
    <section id="method" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Cómo trabajamos juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro y transparente, de principio a fin.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 group"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.75rem] top-14 w-0.5 h-16 bg-border" />
                )}
                {/* Step number */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
