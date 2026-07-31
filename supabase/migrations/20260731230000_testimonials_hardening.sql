-- Repone las protecciones que se perdieron al recrear la tabla `testimonials`.

-- 1. El email es privado: se guarda, pero no se puede leer desde el sitio.
--    (Para aprobar reseñas se usa el editor de tablas, que corre como service_role
--     y no está afectado por este revoke.)
revoke select (email) on public.testimonials from anon, authenticated;

-- 2. Nadie se autopublica: toda reseña entra pendiente de aprobación.
drop policy if exists "Cualquiera puede enviar una reseña" on public.testimonials;
drop policy if exists "Cualquiera puede enviar una reseña pendiente" on public.testimonials;
create policy "Cualquiera puede enviar una reseña pendiente"
  on public.testimonials for insert
  to anon, authenticated
  with check (approved = false);

-- 3. Límites de tamaño: el endpoint es público, sin esto acepta cualquier basura.
alter table public.testimonials
  drop constraint if exists testimonials_name_len,
  drop constraint if exists testimonials_role_len,
  drop constraint if exists testimonials_quote_len,
  drop constraint if exists testimonials_email_len,
  drop constraint if exists testimonials_rating_range;

alter table public.testimonials
  add constraint testimonials_name_len
    check (char_length(trim(name)) between 2 and 80),
  add constraint testimonials_role_len
    check (role is null or char_length(role) <= 120),
  add constraint testimonials_quote_len
    check (char_length(trim(quote)) between 20 and 600),
  add constraint testimonials_email_len
    check (email is null or char_length(email) <= 160),
  add constraint testimonials_rating_range
    check (rating is null or rating between 1 and 5);

-- 4. Índice para el listado del sitio.
create index if not exists testimonials_approved_created_at_idx
  on public.testimonials (created_at desc)
  where approved;

-- 5. Bucket de fotos: público para lectura, 2 MB, solo imágenes.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'testimonial-photos',
  'testimonial-photos',
  true,
  2097152,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 6. Reseñas que ya estaban hardcodeadas en el sitio.
insert into public.testimonials (name, role, quote, rating, approved)
select * from (values
  (
    'Juan Pablo Vargas',
    'Fundador de Uruz',
    'Gracias a José, ahora gestiono de forma más sencilla mi gimnasio.',
    5,
    true
  ),
  (
    'Juan Núñez',
    'Cofundador de HumanIA',
    'Lancé mi idea en 4 semanas y pude validarla en el mercado, me explotó la cabeza.',
    5,
    true
  )
) as seed(name, role, quote, rating, approved)
where not exists (select 1 from public.testimonials);
