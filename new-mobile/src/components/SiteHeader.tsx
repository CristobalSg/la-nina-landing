type SiteHeaderProps = {
  whatsappHref: string;
  groupHref: string;
};

export function SiteHeader({ whatsappHref, groupHref }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-lime-200">La Nina · 1998</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Frutería &amp; Verdulería</h1>
      </div>
      <div className="flex items-center gap-3">
        {/* 
        <a
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 hover:border-white hover:text-white"
          href="#productos"
          >
          Ver cajas
        </a>
        */}
        <a
          className="rounded-full border border-lime-200/40 px-4 py-2 text-sm font-semibold text-lime-100 hover:border-lime-200"
          href={groupHref}
          target="_blank"
          rel="noreferrer"
        >
          Grupo oficial
        </a>
        <a
          className="rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
