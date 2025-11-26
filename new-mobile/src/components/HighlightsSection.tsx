type Highlight = {
  title: string;
  description: string;
  icon: string;
};

type HighlightsSectionProps = {
  highlights: Highlight[];
};

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="grid gap-8">
      {/* Título de sección */}
      <div className="text-center space-y-3">
        <h3 className="text-3xl font-bold text-white">
          ¿Por qué elegirnos? <span className="text-lime-300">💚</span>
        </h3>
        <p className="text-white/60">
          Más de 27 años de experiencia nos respaldan
        </p>
      </div>

      {/* Grid de highlights */}
      <div className="grid gap-5 lg:grid-cols-3">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-lime-200/10 via-emerald-200/5 to-transparent p-6 transition-all duration-500 hover:border-lime-400/40 hover:shadow-xl hover:shadow-lime-500/10"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icono grande */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/30 to-emerald-500/30 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              {highlight.icon}
            </div>

            {/* Título */}
            <p className="text-lg font-bold uppercase tracking-[0.15em] text-lime-200 mb-3">
              {highlight.title}
            </p>

            {/* Descripción */}
            <p className="text-base text-white/70 leading-relaxed">
              {highlight.description}
            </p>

            {/* Decoración */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-lime-500/5 rounded-full blur-2xl group-hover:bg-lime-500/10 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
