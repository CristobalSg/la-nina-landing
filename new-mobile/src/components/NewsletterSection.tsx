export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-900/40 via-emerald-900/30 to-lime-900/40 p-8 lg:p-12">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(163,230,53,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(52,211,153,0.1),_transparent_50%)]" />

      <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Contenido */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime-500/20 border border-lime-500/30 px-4 py-2 text-sm font-medium text-lime-300">
            <span className="animate-pulse">📧</span>
            Newsletter semanal
          </div>
          <h4 className="text-3xl sm:text-4xl font-bold text-white">
            Recibe recetas e{" "}
            <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
              inspiración
            </span>{" "}
            de temporada
          </h4>
          <p className="text-lg text-white/70 leading-relaxed">
            Prometemos enviar solo ideas útiles: recetas cortas, guías de
            almacenamiento y los productos recién llegados cada semana.
          </p>

          {/* Beneficios */}
          <ul className="grid gap-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <span className="text-lime-400">✓</span> Recetas fáciles con
              frutas y verduras de temporada
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lime-400">✓</span> Tips para conservar mejor
              tus alimentos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lime-400">✓</span> Acceso anticipado a
              ofertas exclusivas
            </li>
          </ul>
        </div>

        {/* Formulario */}
        <form className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="tu@correo.com"
              className="w-full rounded-2xl border-2 border-white/20 bg-white/5 px-5 py-4 text-base text-white outline-none placeholder:text-white/40 transition-all duration-300 focus:border-lime-400/50 focus:bg-white/10 focus:shadow-lg focus:shadow-lime-500/10"
              required
            />
          </div>
          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-4 text-base font-bold text-emerald-950 transition-all duration-300 hover:from-lime-300 hover:to-emerald-300 hover:shadow-xl hover:shadow-lime-500/30 hover:scale-[1.02]"
          >
            <span>Suscribirme gratis</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          <p className="text-center text-xs text-white/40">
            🔒 Nunca compartiremos tu correo. Puedes darte de baja cuando
            quieras.
          </p>
        </form>
      </div>
    </section>
  );
}
