import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import joseProfile from "@/assets/jose-profile.png";

const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000); // 30 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/nocodejose/30min", "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
              <img
                src={joseProfile}
                alt="José - Desarrollador Full Stack"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            ¿No estás seguro de cómo desarrollar tu idea?
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Ayudo a personas como tú a validar su idea en el mercado.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button
            variant="hero"
            size="lg"
            onClick={handleScheduleMeeting}
            className="w-full group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agenda una llamada gratuita
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
