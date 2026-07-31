import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import humaniaImage from "@/assets/humania-mockup.png";
import uruzImage from "@/assets/uruz-mockup.png";
import crmReciclajeImage from "@/assets/crm-reciclaje-mockup.png";
import almenisImage from "@/assets/almenis-login.png";
import raulspeedImage from "@/assets/raulspeed-hero.png";
import dilogicImage from "@/assets/dilogic-hero.png";
import teayudoImage from "@/assets/teayudo-thumbnail.png";
import leadToCustomerImage from "@/assets/leadtocustomer-login.png";

const projects = [
  {
    id: "almenis",
    name: "Almenis",
    description:
      "Web app de cierre de caja para un centro de especialidades médicas: cada profesional de salud accede con su propio perfil y ve sus ganancias diarias de forma automática.",
    image: almenisImage,
    tags: ["Claude Code", "Supabase", "Vercel"],
  },
  {
    id: "raulspeed",
    name: "RaulSpeed",
    description:
      "Web app que permite cotizar y comprar repuestos japoneses originales, con pago a través de distintas pasarelas, ingresando solo el número de parte OEM.",
    image: raulspeedImage,
    tags: ["Claude Code", "Supabase", "Vercel"],
  },
  {
    id: "dilogic",
    name: "Dilogic",
    description:
      "Web app que automatiza la generación de guías de despacho para una empresa de logística, conectada directamente con su ERP.",
    image: dilogicImage,
    tags: ["Claude Code", "Supabase", "Vercel"],
  },
  {
    id: "teayudo",
    name: "Te Ayudo",
    description:
      "Agente de IA que responde en WhatsApp y conecta a los clientes con el profesional correspondiente según su necesidad — por ejemplo, gasfitería.",
    image: teayudoImage,
    tags: ["Claude Code", "Supabase", "Kapso"],
  },
  {
    id: "lead-to-customer",
    name: "Lead to Customer",
    description:
      "Sistema automatizado de ventas que responde a los leads en minutos, 24/7, y hace seguimiento hasta cerrar la venta.",
    image: leadToCustomerImage,
    tags: ["Claude Code", "Supabase", "Vercel", "Kapso"],
  },
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
  {
    id: "crm-reciclaje",
    name: "CRM Servicio de reciclaje",
    description:
      "Plataforma CRM diseñada para empresas que realizan recolección de residuos a domicilio, orientada a optimizar y digitalizar la gestión completa de sus flujos internos. El sistema centraliza la información de clientes, suscripciones, retiros y rutas, permitiendo una operación más eficiente, ordenada y escalable.",
    image: crmReciclajeImage,
    tags: ["Make", "Airtable", "Google Maps"],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Proyectos destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Software real, funcionando en producción — para empresas en LATAM.
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
