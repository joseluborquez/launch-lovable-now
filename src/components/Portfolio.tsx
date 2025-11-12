import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import humaniaImage from "@/assets/humania-mockup.jpg";
import uruzImage from "@/assets/uruz-mockup.jpg";

const projects = [
  {
    name: "HumanIA",
    description:
      "Plataforma de RRHH potenciada por IA para gestión de empleados y automatización de procesos.",
    image: humaniaImage,
    tags: ["IA", "RRHH", "Automatización"],
  },
  {
    name: "Uruz FitFlow",
    description:
      "Sistema de gestión completo para gimnasios con seguimiento de miembros y clases.",
    image: uruzImage,
    tags: ["Fitness", "Gestión", "Dashboard"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Proyectos destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones reales construidas con herramientas No-Code.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border bg-card"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
