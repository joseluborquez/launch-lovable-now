import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, CheckCircle2, ImagePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import StarRating from "@/components/StarRating";
import { supabase } from "@/integrations/supabase/client";

const TESTIMONIAL_PHOTOS_BUCKET = "testimonial-photos";

const MAX_PHOTO_BYTES = 2 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const reviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre.")
    .max(80, "Máximo 80 caracteres."),
  role: z.string().trim().max(120, "Máximo 120 caracteres.").optional(),
  email: z
    .string()
    .trim()
    .email("Ingresa un email válido.")
    .optional()
    .or(z.literal("")),
  rating: z.number().min(1, "Elige una puntuación.").max(5),
  quote: z
    .string()
    .trim()
    .min(20, "Cuéntame un poco más (mínimo 20 caracteres).")
    .max(600, "Máximo 600 caracteres."),
});

type ReviewValues = z.infer<typeof reviewSchema>;

const initials = (name: string) =>
  name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const LeaveReview = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<ReviewValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { name: "", role: "", email: "", rating: 0, quote: "" },
  });

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("La foto debe ser JPG, PNG o WebP.");
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      toast.error("La foto no puede pesar más de 2 MB.");
      return;
    }

    setPhoto(file);
    setPhotoPreview((previous) => {
      if (previous) URL.revokeObjectURL(previous);
      return URL.createObjectURL(file);
    });
  };

  const onSubmit = async (values: ReviewValues) => {
    try {
      let photoUrl: string | null = null;

      if (photo) {
        const extension = photo.name.split(".").pop() ?? "jpg";
        const path = `${crypto.randomUUID()}.${extension}`;
        const { error: uploadError } = await supabase.storage
          .from(TESTIMONIAL_PHOTOS_BUCKET)
          .upload(path, photo, { contentType: photo.type, upsert: false });

        if (uploadError) throw uploadError;

        photoUrl = supabase.storage
          .from(TESTIMONIAL_PHOTOS_BUCKET)
          .getPublicUrl(path).data.publicUrl;
      }

      const { error } = await supabase.from("testimonials").insert({
        name: values.name,
        role: values.role || null,
        email: values.email || null,
        rating: values.rating,
        quote: values.quote,
        photo_url: photoUrl,
        approved: false,
      });

      if (error) throw error;

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("No pudimos enviar tu reseña. Inténtalo de nuevo en un momento.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--gradient-subtle)]">
        <Card className="max-w-lg w-full p-10 text-center space-y-6 shadow-[var(--shadow-elegant)]">
          <CheckCircle2 className="h-14 w-14 text-primary mx-auto" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">¡Gracias!</h1>
            <p className="text-muted-foreground">
              Recibí tu reseña. La reviso y en cuanto la apruebe aparece en el
              sitio.
            </p>
          </div>
          <Button asChild variant="hero" size="lg">
            <Link to="/">Volver al inicio</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>

        <div className="space-y-4 mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold">Deja tu reseña</h1>
          <p className="text-lg text-muted-foreground">
            Cuéntame cómo fue trabajar conmigo, esto aparecerá en mi página
            web.
          </p>
        </div>

        <Card className="p-8 shadow-[var(--shadow-card)]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo y empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Fundador de Acme" {...field} />
                    </FormControl>
                    <FormDescription>
                      Aparece bajo tu nombre en la tarjeta.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Puntuación *</FormLabel>
                    <FormControl>
                      <StarRating value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu reseña *</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="¿Qué problema resolvimos y qué cambió en tu negocio?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {field.value.length}/600 caracteres
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Foto de perfil o logo de la empresa</FormLabel>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={photoPreview ?? undefined} alt="" />
                    <AvatarFallback>
                      {initials(form.watch("name")) || <ImagePlus className="h-5 w-5" />}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {photo ? "Cambiar imagen" : "Subir imagen"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Opcional · JPG, PNG o WebP · máx. 2 MB
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ALLOWED_TYPES.join(",")}
                    className="sr-only"
                    onChange={handlePhotoChange}
                  />
                </div>
              </FormItem>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="juan@empresa.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      No se publica. Solo para contactarte si tengo alguna duda.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar reseña"
                )}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LeaveReview;
