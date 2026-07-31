import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, MoveRight } from "lucide-react";
import StarRating from "@/components/StarRating";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import juanPabloVargas from "@/assets/juan-pablo-vargas.png";
import juanNunez from "@/assets/juan-nunez.png";

type Testimonial = Tables<"testimonials">;

/** Fotos ya alojadas en el repo, por si la reseña viene de la base sin foto propia. */
const localPhotos: Record<string, string> = {
  "Juan Pablo Vargas": juanPabloVargas,
  "Juan Núñez": juanNunez,
};

/** Se muestran mientras el backend no esté configurado o no devuelva reseñas. */
const fallbackTestimonials: Testimonial[] = [
  {
    id: "seed-juan-pablo-vargas",
    created_at: "",
    name: "Juan Pablo Vargas",
    role: "Fundador de Uruz",
    email: null,
    quote: "Gracias a José, ahora gestiono de forma más sencilla mi gimnasio.",
    rating: 5,
    photo_url: null,
    approved: true,
  },
  {
    id: "seed-juan-nunez",
    created_at: "",
    name: "Juan Núñez",
    role: "Cofundador de HumanIA",
    email: null,
    quote:
      "Lancé mi idea en 4 semanas y pude validarla en el mercado, me explotó la cabeza.",
    rating: 5,
    photo_url: null,
    approved: true,
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("testimonials")
    .select("id, created_at, name, role, quote, rating, photo_url, approved")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as Testimonial[];
};

const Testimonials = () => {
  const { data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    enabled: supabase !== null,
    staleTime: 5 * 60 * 1000,
  });

  const testimonials = data?.length ? data : fallbackTestimonials;

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Historias reales de negocios que confiaron en mí.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 bg-card border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col"
            >
              <MessageSquare className="h-10 w-10 text-primary/30 mb-6" />
              {testimonial.rating ? (
                <StarRating value={testimonial.rating} className="mb-4" />
              ) : null}
              <blockquote className="text-xl font-medium mb-6 leading-relaxed flex-1">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-6 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={testimonial.photo_url ?? localPhotos[testimonial.name]}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  {testimonial.role ? (
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 space-y-3">
          <p className="text-muted-foreground">¿Trabajamos juntos?</p>
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/resena">
              Deja tu reseña
              <MoveRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
