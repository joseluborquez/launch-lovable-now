import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";
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

/** Se muestran si la base todavía no tiene reseñas aprobadas. */
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
  const { data, error } = await supabase
    .from("testimonials")
    .select("id, created_at, name, role, quote, rating, photo_url, approved")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as Testimonial[];
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="w-[300px] sm:w-[420px] shrink-0 mx-3 sm:mx-4 p-8 bg-card border-border flex flex-col">
    <MessageSquare className="h-10 w-10 text-primary/30 mb-6" />
    {testimonial.rating ? (
      <StarRating value={testimonial.rating} className="mb-4" />
    ) : null}
    <blockquote className="text-lg sm:text-xl font-medium mb-6 leading-relaxed flex-1">
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
);

const Testimonials = () => {
  const { data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000,
  });

  const testimonials = data?.length ? data : fallbackTestimonials;

  /* El carrusel avanza exactamente un tercio, así que se renderizan tres
     copias idénticas. Con pocas reseñas se repite la lista para que la fila
     alcance a cubrir pantallas anchas. */
  const marqueeSet = useMemo(() => {
    const set = [...testimonials];
    while (set.length < 4) set.push(...testimonials);
    return set;
  }, [testimonials]);

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias reales de negocios que confiaron en mí.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-stretch animate-scroll-testimonials">
            {["first", "second", "third"].map((copy) => (
              <div key={copy} className="flex items-stretch" aria-hidden={copy !== "first"}>
                {marqueeSet.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${copy}-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
