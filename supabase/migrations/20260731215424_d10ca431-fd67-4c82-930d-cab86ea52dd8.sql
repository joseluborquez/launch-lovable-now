DROP POLICY IF EXISTS "fotos de reseñas son públicas" ON storage.objects;
DROP POLICY IF EXISTS "Usuarios autenticados pueden subir fotos de reseñas" ON storage.objects;
DROP POLICY IF EXISTS "cualquiera sube foto de reseña" ON storage.objects;

CREATE POLICY "Cualquiera puede subir una foto de reseña"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'testimonial-photos');