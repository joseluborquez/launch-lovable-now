import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORAGE_KEY = "scroll-positions";

const readPositions = (): Record<string, number> => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
};

/**
 * Al volver atrás el navegador no restaura el scroll en una SPA: React vuelve a
 * montar la página y aterrizas arriba. Esto guarda la posición de cada entrada
 * del historial y la repone al volver; en una navegación nueva parte arriba.
 */
const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  // El navegador pelea con la restauración manual si sigue haciendo la suya.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Guarda la posición de esta entrada mientras el usuario se mueve.
  useEffect(() => {
    let frame = 0;

    const save = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const positions = readPositions();
        positions[location.key] = window.scrollY;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
      });
    };

    window.addEventListener("scroll", save, { passive: true });
    return () => {
      window.removeEventListener("scroll", save);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [location.key]);

  useEffect(() => {
    const target =
      navigationType === "POP" ? readPositions()[location.key] : undefined;

    if (typeof target !== "number") {
      // `behavior: instant` porque el CSS global usa scroll-behavior: smooth.
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // El contenido puede no tener aún su altura final (imágenes, reseñas que
    // llegan de la base), así que se reintenta unos frames hasta que cuadre.
    let attempts = 0;
    let frame = 0;

    const restore = () => {
      window.scrollTo({ top: target, behavior: "instant" });
      if (++attempts < 20 && Math.abs(window.scrollY - target) > 2) {
        frame = requestAnimationFrame(restore);
      }
    };

    frame = requestAnimationFrame(restore);
    return () => cancelAnimationFrame(frame);
  }, [location.key, navigationType]);

  return null;
};

export default ScrollRestoration;
