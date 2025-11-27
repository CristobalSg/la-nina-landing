type ContactOption = {
  label: string;
  value: string;
  href: string;
  icon: string;
};

type ContactSectionProps = {
  options: ContactOption[];
};

export function ContactSection({ options }: ContactSectionProps) {
  return (
    <section id="contacto" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Información de contacto */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all duration-300 hover:border-white/20">
        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-lime-500/20 text-2xl">
            📍
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lime-300 font-semibold">
              Visítanos
            </p>
            <h4 className="text-2xl font-bold text-white">
              Labranza · Agua Marina 661
            </h4>
          </div>
        </div>

        <p className="text-white/70 mb-6 leading-relaxed">
          Estamos en Temuco, sector Labranza, listos para recibirte con fruta
          recién llegada cada mañana. Puedes coordinar retiros express o
          acercarte en familia; cuidamos cada detalle para que los más pequeños
          se sientan seguros y respetados.
        </p>

        {/* Horarios */}
        <div className="bg-lime-500/10 rounded-2xl p-4 mb-6 border border-lime-500/20">
          <p className="text-sm font-bold text-lime-300 mb-2">
            🕐 Horarios de atención
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-white/70">Lunes a Domingo:</span>
            <span className="text-white font-medium">8:00 AM - 23:00 PM</span>
          </div>
        </div>

        {/* Opciones de contacto mejoradas */}
        <div className="grid gap-3">
          {options.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              className="group/item flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-lime-400/40 hover:bg-lime-500/10 hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-xl transition-transform group-hover/item:scale-110">
                {option.icon}
              </span>
              <div className="flex-1">
                <span className="block text-xs uppercase tracking-[0.3em] text-lime-300/80">
                  {option.label}
                </span>
                <span className="block text-lg font-semibold text-white">
                  {option.value}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-white/30 transition-all group-hover/item:text-lime-300 group-hover/item:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Testimonio y redes sociales */}
      <div className="space-y-6">
        {/* Testimonio mejorado */}
        <div className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/20 via-emerald-400/10 to-transparent p-8">
          <div className="absolute top-4 right-4 text-6xl text-lime-300/20">
            "
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-lime-300 font-semibold mb-4">
            ⭐ Lo que dicen nuestros clientes
          </p>

          <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-4">
            "Confiamos en La Nina porque siempre tratan con cariño a nuestros
            niños y son muy respetuosos cuando entregan. La fruta llega fresca,
            lista para servir."
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center text-lg font-bold text-emerald-950">
              👨‍👩‍👧
            </div>
            <div>
              <p className="font-semibold text-white">Familia Anónima</p>
              <p className="text-sm text-white/60">Labranza, Temuco</p>
            </div>
          </div>

          {/* Estrellas */}
          <div className="flex gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-amber-400 text-lg">
                ⭐
              </span>
            ))}
          </div>
        </div>

        {/* Redes sociales mejoradas */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-lime-300 font-semibold mb-4">
            📱 Síguenos en redes
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-blue-500/30 hover:to-blue-600/30 hover:border-blue-400/50 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-gray-700/40 hover:to-gray-800/40 hover:border-white/40 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
