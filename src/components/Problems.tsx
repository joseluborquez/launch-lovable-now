import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Timer,
  Wallet,
  Rocket,
  ShieldCheck,
  Layers,
} from "lucide-react";

const problems = [
  {
    icon: Sparkles,
    title: "Falta de habilidades técnicas",
    description:
      "Te brindo la experticia para transformar tu idea en un producto funcional listo para validar.",
  },
  {
    icon: Timer,
    title: "Desarrollo lento",
    description:
      "Uso herramientas No-Code para construir rápido y lanzar tu idea en semanas.",
  },
  {
    icon: Wallet,
    title: "Costos excesivos",
    description:
      "Reduzco costos sin sacrificar calidad gracias a mi enfoque No-Code.",
  },
  {
    icon: Rocket,
    title: "Escalabilidad",
    description:
      "Construyo en plataformas escalables y bases de datos sólidas para acompañar tu crecimiento.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    description:
      "Cumplo estándares GDPR, SOC 2 e ISO 27001, alojando los proyectos en infraestructura segura.",
  },
  {
    icon: Layers,
    title: "UX/UI pobre",
    description:
      "Diseño experiencias claras y funcionales que maximizan conversión y retención.",
  },
];

const Problems = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            ¿Problemas para construir tu idea de producto?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entendemos los desafíos que enfrentas. Por eso desarrollamos
            soluciones específicas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 bg-[#1e40af] border-[#1e40af]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-white">
                      {problem.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
