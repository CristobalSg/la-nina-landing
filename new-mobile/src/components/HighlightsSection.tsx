type Highlight = {
  title: string;
  description: string;
};

type HighlightsSectionProps = {
  highlights: Highlight[];
};

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {highlights.map((highlight) => (
        <div
          key={highlight.title}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-lime-200/20 to-transparent p-6 text-white"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-lime-200">{highlight.title}</p>
          <p className="mt-3 text-base text-white/80">{highlight.description}</p>
        </div>
      ))}
    </section>
  );
}
