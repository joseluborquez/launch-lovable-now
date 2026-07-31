import claudeLogo from "@/assets/claude-logo.svg";
import supabaseLogo from "@/assets/supabase-logo.png";
import vercelLogo from "@/assets/vercel-logo.svg";
import kapsoLogo from "@/assets/kapso-logo.png";

const tools = [
  { name: "Claude Code", logo: claudeLogo },
  { name: "Supabase", logo: supabaseLogo },
  { name: "Vercel", logo: vercelLogo },
  { name: "Kapso", logo: kapsoLogo },
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            El stack detrás del software
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Infraestructura y código propio del cliente.
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-infinite">
            {/* Primera set de logos */}
            {tools.map((tool, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center gap-1 sm:gap-2 mx-3 sm:mx-8 min-w-[80px] sm:min-w-[200px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 sm:h-20 w-auto object-contain"
                />
                <span className="text-[10px] sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
            {/* Segunda set de logos para efecto infinito */}
            {tools.map((tool, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center gap-1 sm:gap-2 mx-3 sm:mx-8 min-w-[80px] sm:min-w-[200px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 sm:h-20 w-auto object-contain"
                />
                <span className="text-[10px] sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
            {/* Tercer set para scroll más fluido */}
            {tools.map((tool, index) => (
              <div
                key={`third-${index}`}
                className="flex flex-col items-center gap-1 sm:gap-2 mx-3 sm:mx-8 min-w-[80px] sm:min-w-[200px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 sm:h-20 w-auto object-contain"
                />
                <span className="text-[10px] sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
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
