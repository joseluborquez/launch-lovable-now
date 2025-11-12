import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NoCode Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("method")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Método de trabajo
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <Button
              variant="cta"
              size="default"
              onClick={() => scrollToSection("cta")}
            >
              Agenda tu reunión
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("method")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Método de trabajo
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <Button
              variant="cta"
              size="default"
              className="w-full"
              onClick={() => scrollToSection("cta")}
            >
              Agenda tu reunión
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
