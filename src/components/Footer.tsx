import { AtSign, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NoCode Jose</h3>
            <p className="text-muted-foreground">
              Transformamos ideas en productos digitales exitosos sin código.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <AtSign className="h-4 w-4" />
              <a href="mailto:hola@nocodestudio.com">hola@nocodestudio.com</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NoCode Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;