GRANT INSERT ON public.testimonials TO anon;

DROP POLICY IF EXISTS "Usuarios autenticados pueden crear reseñas" ON public.testimonials;

CREATE POLICY "Cualquiera puede enviar una reseña"
ON public.testimonials
FOR INSERT
TO anon, authenticated
WITH CHECK (name IS NOT NULL AND quote IS NOT NULL);