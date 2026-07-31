import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.VITE_SUPABASE_ANON_KEY) as string | undefined;

/**
 * `null` mientras el backend (Lovable Cloud / Supabase) no esté configurado.
 * Las secciones que lo usan hacen fallback a contenido estático.
 */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false },
      })
    : null;

export const isBackendEnabled = supabase !== null;

export const TESTIMONIAL_PHOTOS_BUCKET = "testimonial-photos";

export type Testimonial = {
  id: string;
  created_at: string;
  name: string;
  role: string | null;
  quote: string;
  rating: number | null;
  photo_url: string | null;
  approved: boolean;
};
