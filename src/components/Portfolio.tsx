import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import humaniaImage from "@/assets/humania-mockup.png";
import uruzImage from "@/assets/uruz-mockup.png";

const projects = [
  {
    id: "humania",
    name: "HumanIA",
    description:
      "HumanIA es una app de entrenamiento potenciada con Inteligencia artificial para personalizar rutinas de entrenamiento según nivel de experiencia, contexto y equipamiento.",
    image: humaniaImage,
    tags: ["Gemini", "Lovable", "Supabase", "Make"],
  },
  {
    id: "uruz",
    name: "Uruz GYM",
    description:
      "Software de gestión de clientes para un gimnasio de entrenamiento personalizado",
    image: uruzImage,
    tags: ["Lovable", "Supabase"],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

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
              className="overflow-hidden group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border bg-card flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="text-muted-foreground leading-relaxed mt-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
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
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => navigate(`/proyecto/${project.id}`)}
                >
                  Ver proyecto
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
