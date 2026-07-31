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
    icon: Timer,
    title: "Respuesta lenta a leads",
    description:
      "Pierdes prospectos ante la competencia por no responder a tiempo.",
  },
  {
    icon: Sparkles,
    title: "Procesos operativos manuales",
    description:
      "Cierre de caja, cotizaciones, despachos que consumen horas del equipo.",
  },
  {
    icon: Layers,
    title: "Software genérico que no calza",
    description:
      "Herramientas de plantilla que no se ajustan a tu operación específica.",
  },
  {
    icon: Wallet,
    title: "Agencias tradicionales, fuera de presupuesto",
    description:
      "Cotizan $10-50K+ USD y meses de espera para un problema urgente.",
  },
  {
    icon: ShieldCheck,
    title: "Dependencia de plataformas de terceros",
    description:
      "Límites de configuración, lock-in, sin dueño real del código.",
  },
  {
    icon: Rocket,
    title: "Falta de seguimiento estructurado",
    description:
      "Prospectos que se enfrían sin un sistema que los nutra.",
  },
];

const Problems = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            ¿Tu negocio pierde tiempo o dinero por procesos manuales?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estos son los problemas que más resuelvo.
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
