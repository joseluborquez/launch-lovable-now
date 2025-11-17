import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import humaniaImage from "@/assets/humania-mockup.png";
import uruzImage from "@/assets/uruz-mockup.png";
import lovableLogo from "@/assets/lovable-logo.png";
import supabaseLogo from "@/assets/supabase-logo.png";
import makeLogo from "@/assets/make-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";
import geminiLogo from "@/assets/gemini-logo.png";
import headerBg from "@/assets/project-header-bg.png";

const toolLogos: { [key: string]: string } = {
  "Lovable": lovableLogo,
  "Supabase": supabaseLogo,
  "Make": makeLogo,
  "Airtable": airtableLogo,
  "Gemini": geminiLogo,
};

const projectsData: { [key: string]: any } = {
  "humania": {
    name: "HumanIA",
    description: "HumanIA es una app de entrenamiento potenciada con Inteligencia artificial para personalizar rutinas de entrenamiento según nivel de experiencia, contexto y equipamiento.",
    image: humaniaImage,
    tags: ["Gemini", "Lovable", "Supabase", "Make"],
    challenge: {
      title: "El Desafío",
      description: "Los usuarios necesitaban una forma personalizada de entrenar que se adaptara a sus necesidades individuales, objetivos y nivel de experiencia. El desafío era crear una experiencia de entrenamiento verdaderamente personalizada utilizando inteligencia artificial.",
      image: humaniaImage,
    },
    solution: {
      title: "La Solución",
      description: "Desarrollamos una aplicación completa que utiliza IA para generar planes de entrenamiento personalizados. La integración con Gemini permite crear rutinas adaptativas, mientras que Supabase gestiona los datos de usuarios y Make automatiza los flujos de trabajo.",
      image: humaniaImage,
    },
    results: {
      title: "Los Resultados",
      description: "Una aplicación funcional lista para el mercado en semanas, con planes de entrenamiento personalizados generados por IA, seguimiento de progreso en tiempo real y una experiencia de usuario fluida y moderna.",
      image: humaniaImage,
    },
  },
  "uruz": {
    name: "Uruz GYM",
    description: "Software de gestión de clientes para un gimnasio de entrenamiento personalizado",
    image: uruzImage,
    tags: ["Lovable", "Supabase"],
    challenge: {
      title: "El Desafío",
      description: "El gimnasio necesitaba una solución completa para gestionar clientes, sesiones de entrenamiento, pagos y seguimiento de progreso. El sistema anterior era manual y consumía demasiado tiempo del equipo de entrenadores.",
      image: uruzImage,
    },
    solution: {
      title: "La Solución",
      description: "Creamos un sistema de gestión integral con Lovable y Supabase. Incluye gestión de clientes, calendario de sesiones, seguimiento de pagos, historial de entrenamientos y panel de control con métricas en tiempo real.",
      image: uruzImage,
    },
    results: {
      title: "Los Resultados",
      description: "Reducción del 70% en tiempo administrativo, mejor experiencia para los clientes con acceso a su información y progreso, y un sistema escalable listo para crecer con el negocio.",
      image: uruzImage,
    },
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData[projectId || ""];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{project.name}</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-video shadow-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Herramientas Utilizadas
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {project.tags.map((tag: string, index: number) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 flex items-center justify-center bg-background rounded-lg p-4 shadow-sm">
                  <img
                    src={toolLogos[tag]}
                    alt={tag}
                    className="w-full h-full object-contain"
                  />
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {tag}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{project.challenge.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge.description}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <img
                src={project.challenge.image}
                alt={project.challenge.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-lg aspect-video order-2 lg:order-1">
              <img
                src={project.solution.image}
                alt={project.solution.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold">{project.solution.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{project.results.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.results.description}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <img
                src={project.results.image}
                alt={project.results.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
