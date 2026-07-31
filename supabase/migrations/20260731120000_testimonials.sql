-- Reseñas de clientes enviadas desde /resena.
-- Entran como `approved = false` y solo se publican cuando José las aprueba.

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(trim(name)) between 2 and 80),
  role text check (char_length(role) <= 120),
  quote text not null check (char_length(trim(quote)) between 20 and 600),
  rating smallint check (rating between 1 and 5),
  photo_url text,
  email text,
  approved boolean not null default false
);

create index if not exists testimonials_approved_created_at_idx
  on public.testimonials (created_at desc)
  where approved;

alter table public.testimonials enable row level security;

-- Cualquiera puede leer SOLO las aprobadas (y sin el email).
drop policy if exists "public lee reseñas aprobadas" on public.testimonials;
create policy "public lee reseñas aprobadas"
  on public.testimonials for select
  to anon, authenticated
  using (approved = true);

-- Cualquiera puede enviar una reseña, pero nunca auto-aprobarla.
drop policy if exists "cualquiera envía reseñas pendientes" on public.testimonials;
create policy "cualquiera envía reseñas pendientes"
  on public.testimonials for insert
  to anon, authenticated
  with check (approved = false);

-- El email no debe ser público: se expone una vista sin esa columna.
revoke select (email) on public.testimonials from anon, authenticated;

-- Fotos de perfil de las reseñas.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'testimonial-photos',
  'testimonial-photos',
  true,
  2097152, -- 2 MB
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "fotos de reseñas son públicas" on storage.objects;
create policy "fotos de reseñas son públicas"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'testimonial-photos');

drop policy if exists "cualquiera sube foto de reseña" on storage.objects;
create policy "cualquiera sube foto de reseña"
  on storage.objects for insert
  to anon, authenticated
  with check (bucket_id = 'testimonial-photos');

-- Reseñas que ya estaban hardcodeadas en el sitio.
insert into public.testimonials (name, role, quote, rating, approved)
select * from (values
  (
    'Juan Pablo Vargas',
    'Fundador de Uruz',
    'Gracias a José, ahora gestiono de forma más sencilla mi gimnasio.',
    5::smallint,
    true
  ),
  (
    'Juan Núñez',
    'Cofundador de HumanIA',
    'Lancé mi idea en 4 semanas y pude validarla en el mercado, me explotó la cabeza.',
    5::smallint,
    true
  )
) as seed(name, role, quote, rating, approved)
where not exists (select 1 from public.testimonials);
