type HeroSectionProps = {
  whatsappHref: string;
  contactAnchor?: string;
  officialGroupHref: string;
  communityGroupHref: string;
  transferDetails: {
    name: string;
    rut: string;
    bank: string;
    accountType: string;
    accountNumber: string;
    note?: string;
  };
};

export function HeroSection({
  whatsappHref,
  contactAnchor = "#contacto",
  officialGroupHref,
  communityGroupHref,
  transferDetails,
}: HeroSectionProps) {
  const detailLines = [
    transferDetails.name?.toUpperCase(),
    transferDetails.rut,
    transferDetails.bank,
    transferDetails.accountType,
    transferDetails.accountNumber,
  ].filter(Boolean) as string[];

  const exampleLines = ["NOMBRE COMPLETO", "12.345.678-9", "Banco Ejemplo", "Cuenta Corriente", "1234567890"];

  const paymentText = detailLines.join("\n");

  const copyPaymentData = () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(paymentText).catch(() => undefined);
  };

  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-lime-100">
          📍 Agua Marina 661 · Labranza
        </p>
        <h2 className="text-4xl font-semibold leading-tight text-lime-50 sm:text-5xl">
          Bienvenido a la central de pedidos y grupos oficiales de La Nina.
        </h2>
        <p className="text-lg text-lime-100/80">
          Escaneaste nuestro código y ya estás en casa. Desde aquí puedes unirte a los grupos de WhatsApp, copiar los datos de transferencia y agendar
          tus pedidos diarios.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#0f3d26]/70 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-lime-200">Grupo oficial</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Anuncios y stock del día</h3>
            <p className="mt-2 text-sm text-white/80">Solo administradores publican para que recibas la info sin ruido.</p>
            <a
              href={officialGroupHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
            >
              Unirme ahora
            </a>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-lime-200">Comunidad abierta</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Mercadito de vecinos</h3>
            <p className="mt-2 text-sm text-white/80">Comparte productos, recetas y recomendaciones con otros miembros.</p>
            <a
              href={communityGroupHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white"
            >
              Entrar a la comunidad
            </a>
          </article>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
          >
            Escribir a pedidos
          </a>
          <a
            href={contactAnchor}
            className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white"
          >
            Encontrar la tienda
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-2xl backdrop-blur">
        <p className="text-sm uppercase tracking-widest text-lime-200">Transferencia rápida</p>
        <h3 className="mt-2 text-3xl font-semibold text-white">Datos listos para copiar</h3>
        <p className="mt-3 text-white/80">Usa tu app bancaria favorita y asegúrate de enviar el voucher al grupo oficial.</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm leading-relaxed text-white">
          {detailLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {transferDetails.note ? <p className="mt-3 text-xs text-white/70">{transferDetails.note}</p> : null}

        <button
          type="button"
          onClick={copyPaymentData}
          className="mt-4 w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
        >
          Copiar datos de transferencia
        </button>

        <div className="mt-5 rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-white/60">
          <p className="font-semibold uppercase tracking-[0.25em] text-lime-200">Ejemplo</p>
          <div className="mt-2 font-mono text-white/70">
            {exampleLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-2 text-white/50">Usamos este formato para que puedas copiar y pegar rápidamente.</p>
        </div>
      </div>
    </section>
  );
}
