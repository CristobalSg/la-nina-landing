type ContactOption = {
  label: string;
  value: string;
  href: string;
};

type ContactSectionProps = {
  options: ContactOption[];
};

export function ContactSection({ options }: ContactSectionProps) {
  return (
    <section id="contacto" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-200">Visítanos</p>
        <h4 className="mt-2 text-3xl font-semibold text-white">Labranza · Agua Marina 661</h4>
        <p className="mt-4 text-white/80">
          Estamos en Temuco, sector Labranza, listos para recibirte con fruta recién llegada cada mañana.
          Puedes coordinar retiros express o acercarte en familia; cuidamos cada detalle para que los más pequeños se sientan seguros y respetados.
        </p>
        <div className="mt-6 grid gap-4 text-sm">
          {options.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-white/40"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-lime-200">{option.label}</span>
              <span className="text-lg font-semibold text-white">{option.value}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-lime-300/20 to-transparent p-8 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-200">Testimonio</p>
        <p className="text-2xl font-semibold text-white">
          “Confiamos en La Nina porque siempre tratan con cariño a nuestros niños y son muy respetuosos cuando entregan. La fruta llega fresca, lista
          para servir.”
        </p>
        <p className="text-sm text-white/80">— Familia Anonima, Labranza</p>
        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-lime-200">Redes sociales</p>
          <div className="mt-3 flex gap-3">
            {["Instagram", "Facebook"].map((network) => (
              <a
                key={network}
                href={`https://www.${network.toLowerCase()}.com`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:border-white hover:text-white"
              >
                {network}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
