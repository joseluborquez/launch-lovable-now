const tools = [
  { name: "Lovable", logo: "🚀" },
  { name: "Airtable", logo: "📊" },
  { name: "Supabase", logo: "⚡" },
  { name: "Make", logo: "🔗" },
  { name: "Webflow", logo: "🎨" },
  { name: "Relume", logo: "✨" },
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Herramientas que usamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las mejores plataformas No-Code para crear productos escalables.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {tool.logo}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
