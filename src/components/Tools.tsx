import lovableLogo from "@/assets/lovable-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";
import supabaseLogo from "@/assets/supabase-logo.png";
import makeLogo from "@/assets/make-logo.png";

const tools = [
  { name: "Lovable", logo: lovableLogo },
  { name: "Airtable", logo: airtableLogo },
  { name: "Supabase", logo: supabaseLogo },
  { name: "Make", logo: makeLogo },
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Herramientas que usamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las mejores plataformas No-Code para crear productos escalables.
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-infinite">
            {/* Primera set de logos */}
            {tools.map((tool, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center gap-3 mx-8 min-w-[200px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-20 w-auto object-contain"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {tool.name}
                </span>
              </div>
            ))}
            {/* Segunda set de logos para efecto infinito */}
            {tools.map((tool, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center gap-3 mx-8 min-w-[200px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-20 w-auto object-contain"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {tool.name}
                </span>
              </div>
            ))}
            {/* Tercer set para scroll más fluido */}
            {tools.map((tool, index) => (
              <div
                key={`third-${index}`}
                className="flex flex-col items-center gap-3 mx-8 min-w-[200px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-20 w-auto object-contain"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
