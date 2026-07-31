-- Corrige el intento anterior de ocultar `email`.
--
-- `revoke select (email) ...` no hace nada mientras exista un GRANT SELECT a
-- nivel de tabla: en Postgres el permiso de tabla manda sobre el de columna.
-- Hay que quitar el permiso de tabla y otorgar solo las columnas públicas.

revoke select on public.testimonials from anon, authenticated;

grant select (id, created_at, name, role, quote, rating, photo_url, approved)
  on public.testimonials to anon, authenticated;
