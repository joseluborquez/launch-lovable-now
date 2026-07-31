DROP POLICY IF EXISTS "cualquiera envía reseñas pendientes" ON public.testimonials;
DROP POLICY IF EXISTS "public lee reseñas aprobadas" ON public.testimonials;
DROP POLICY IF EXISTS "Usuarios autenticados pueden actualizar sus propias reseñas" ON public.testimonials;