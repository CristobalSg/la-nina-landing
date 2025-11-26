type HeroSectionProps = {
  whatsappHref: string;
  contactAnchor?: string;
  officialGroupHref: string;
  communityGroupHref: string;
};

export function HeroSection({
  whatsappHref,
  contactAnchor = "#contacto",
  officialGroupHref,
  communityGroupHref,
}: HeroSectionProps) {
  return (
    <section className="grid gap-10 lg:items-start">
      <div className="space-y-8">
        {/* Badge de ubicación con animación */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-200 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            📍 Agua Marina 661 · Labranza
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
            ⏰ Abierto hoy hasta 20:00
          </span>
        </div>

        {/* Título principal con gradiente */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Bienvenido a la </span>
            <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
              central de pedidos
            </span>
            <span className="text-white"> y grupos oficiales</span>
          </h2>
          <p className="text-lg sm:text-xl text-lime-100/80 max-w-2xl leading-relaxed">
            🍊 Escaneaste nuestro código y ya estás en casa. Desde aquí puedes
            unirte a los grupos de WhatsApp y agendar tus pedidos diarios con la
            mejor fruta fresca de la región.
          </p>
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-lime-300">27+</p>
            <p className="text-xs sm:text-sm text-white/60">
              Años de experiencia
            </p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="text-3xl sm:text-4xl font-bold text-emerald-300">
              500+
            </p>
            <p className="text-xs sm:text-sm text-white/60">Familias felices</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-lime-300">100%</p>
            <p className="text-xs sm:text-sm text-white/60">
              Productos frescos
            </p>
          </div>
        </div>

        {/* Tarjetas de grupos mejoradas */}
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-lime-500/30 bg-gradient-to-br from-[#0f3d26]/90 to-[#0a2518]/90 p-6 transition-all duration-300 hover:border-lime-400/50 hover:shadow-2xl hover:shadow-lime-500/20">
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-500/20 text-xl">
                  📢
                </span>
                <p className="text-xs uppercase tracking-[0.35em] text-lime-300 font-semibold">
                  Grupo oficial
                </p>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Anuncios y stock del día
              </h3>
              <p className="text-sm text-white/70 mb-4">
                Solo administradores publican para que recibas la info sin
                ruido.
              </p>
              <ul className="text-xs text-white/60 space-y-1 mb-5">
                <li>✓ Stock actualizado diariamente</li>
                <li>✓ Ofertas exclusivas</li>
                <li>✓ Sin spam</li>
              </ul>
              <a
                href={officialGroupHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 transition-all duration-300 hover:from-lime-300 hover:to-emerald-300 hover:shadow-lg hover:shadow-lime-500/30 hover:scale-105"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Unirme ahora
              </a>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10">
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-xl">
                  🤝
                </span>
                <p className="text-xs uppercase tracking-[0.35em] text-lime-300 font-semibold">
                  Comunidad abierta
                </p>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mercadito de vecinos
              </h3>
              <p className="text-sm text-white/70 mb-4">
                Comparte productos, recetas y recomendaciones con otros
                miembros.
              </p>
              <ul className="text-xs text-white/60 space-y-1 mb-5">
                <li>✓ Intercambio entre vecinos</li>
                <li>✓ Recetas y consejos</li>
                <li>✓ Compras grupales</li>
              </ul>
              <a
                href={communityGroupHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
              >
                👥 Entrar a la comunidad
              </a>
            </div>
          </article>
        </div>

        {/* Botones de acción principales */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-4 text-base font-bold text-emerald-950 transition-all duration-300 hover:from-lime-300 hover:to-emerald-300 hover:shadow-2xl hover:shadow-lime-500/40 hover:scale-105"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir a pedidos
          </a>
          <a
            href={contactAnchor}
            className="group flex items-center gap-3 rounded-full border-2 border-white/30 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <span className="transition-transform group-hover:scale-110">
              📍
            </span>
            Encontrar la tienda
          </a>
          <a
            href="#precios"
            className="group flex items-center gap-3 rounded-full border-2 border-lime-400/30 bg-lime-400/10 px-6 py-4 text-base font-bold text-lime-200 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/20 hover:scale-105"
          >
            <span className="transition-transform group-hover:scale-110">
              🏷️
            </span>
            Ver precios del día
          </a>
        </div>
      </div>
    </section>
  );
}
