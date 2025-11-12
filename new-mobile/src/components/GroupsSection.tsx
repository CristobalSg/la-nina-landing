type GroupsSectionProps = {
  officialLink: string;
  communityLink: string;
};

export function GroupsSection({ officialLink, communityLink }: GroupsSectionProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-200">Comunidad La Nina</p>
        <h3 className="text-3xl font-semibold">Únete a nuestros grupos oficiales</h3>
        <p className="text-white/80">
          Comparte la frescura diaria con nosotros. Tenemos un canal informativo para anuncios y un espacio abierto para que la comunidad intercambie
          productos, recetas o recomendaciones.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-[#0f3d26]/70 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-lime-200">Grupo Oficial</p>
          <h4 className="mt-2 text-2xl font-semibold text-white">Frutería y Verdulería La Nina</h4>
          <p className="mt-3 text-sm text-white/80">
            Bienvenido al grupo oficial de La Nina. Aquí compartimos cada día nuestras frutas y verduras recién llegadas, el pan fresco de la tarde y
            las ofertas exclusivas para miembros.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>🔔 Revisa el grupo por las mañanas y tardes para no perderte lo más fresco.</li>
            <li>💬 Solo los administradores pueden enviar mensajes.</li>
            <li>💚 ¡Gracias por ser parte de nuestra comunidad!</li>
          </ul>
          <a
            href={officialLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
          >
            Entrar al grupo oficial
          </a>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/10 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-lime-200">Comunidad abierta</p>
          <h4 className="mt-2 text-2xl font-semibold text-white">Mercadito de vecinos</h4>
          <p className="mt-3 text-sm text-white/80">
            Este es el espacio para que compartas tus propios productos, hagas preguntas o recomiendes proveedores aliados del barrio.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>🧺 Comparte lo que tengas disponible para la comunidad.</li>
            <li>🤝 Coordina intercambios, recomendaciones o compras grupales.</li>
            <li>📸 Sube fotos de tus preparaciones o cosechas urbanas.</li>
          </ul>
          <a
            href={communityLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white"
          >
            Unirme al grupo de la comunidad
          </a>
        </article>
      </div>
    </section>
  );
}
