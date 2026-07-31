CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  role text,
  email text,
  quote text NOT NULL,
  rating integer,
  photo_url text,
  approved boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT SELECT ON public.testimonials TO anon;
GRANT ALL ON public.testimonials TO service_role;

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede ver reseñas aprobadas"
ON public.testimonials
FOR SELECT
TO anon, authenticated
USING (approved = true);

CREATE POLICY "Usuarios autenticados pueden crear reseñas"
ON public.testimonials
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Usuarios autenticados pueden actualizar sus propias reseñas"
ON public.testimonials
FOR UPDATE
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Cualquiera puede ver fotos de reseñas"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'testimonial-photos');

CREATE POLICY "Usuarios autenticados pueden subir fotos de reseñas"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'testimonial-photos');