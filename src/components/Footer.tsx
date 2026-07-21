import { AtSign } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NoCode Jose</h3>
            <p className="text-muted-foreground">
              Software a medida para empresas en LATAM, acelerado por IA.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <AtSign className="h-4 w-4" />
              <a href="mailto:contacto@nocodejose.com">contacto@nocodejose.com</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NoCode Jose. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;