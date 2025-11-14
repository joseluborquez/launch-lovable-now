import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";
import juanPabloVargas from "@/assets/juan-pablo-vargas.png";
import juanNunez from "@/assets/juan-nunez.png";

const testimonials = [
  {
    quote:
      "Gracias a José, ahora gestiono de forma más sencilla mi gimnasio.",
    author: "Juan Pablo Vargas",
    role: "Fundador de Uruz",
    image: juanPabloVargas,
  },
  {
    quote:
      "Lancé mi idea en 4 semanas y pude validarla en el mercado, me explotó la cabeza.",
    author: "Juan Núñez",
    role: "Cofundador de HumanIA",
    image: juanNunez,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Historias reales de emprendedores que confiaron en mí.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <MessageSquare className="h-10 w-10 text-primary/30 mb-6" />
              <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-6 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
