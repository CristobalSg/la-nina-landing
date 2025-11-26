type Basket = {
  name: string;
  items: string;
  price: string;
  emoji: string;
  popular?: boolean;
};

type BasketsSectionProps = {
  baskets: Basket[];
};

export function BasketsSection({ baskets }: BasketsSectionProps) {
  return (
    <section id="productos" className="grid gap-8">
      {/* Encabezado mejorado */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-300">
          <span>🧺</span>
          Cajas destacadas
        </div>
        <h3 className="text-4xl sm:text-5xl font-bold text-white">
          Listas para{" "}
          <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
            compartir
          </span>
        </h3>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Cambiamos la selección cada mes. Personaliza cualquier caja
          escribiendo tus frutas o verduras favoritas al momento de tu pedido.
        </p>
      </div>

      {/* Grid de cajas mejorado */}
      <div className="grid gap-6 md:grid-cols-3">
        {baskets.map((basket) => (
          <article
            key={basket.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f3d26]/80 to-[#0a2518]/80 p-6 shadow-xl transition-all duration-500 hover:border-lime-500/40 hover:shadow-2xl hover:shadow-lime-500/20 hover:-translate-y-2"
          >
            {/* Badge popular */}
            {basket.popular && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold text-white px-3 py-1 rounded-full shadow-lg animate-pulse">
                ⭐ Popular
              </div>
            )}

            {/* Emoji grande con efecto */}
            <div className="text-6xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              {basket.emoji}
            </div>

            {/* Nombre de la caja */}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300 mb-2">
              {basket.name}
            </p>

            {/* Contenido */}
            <p className="text-base text-white/80 mb-6 min-h-[60px]">
              {basket.items}
            </p>

            {/* Precio con diseño destacado */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
                  {basket.price}
                </p>
                <p className="text-sm text-white/50">
                  Entrega gratuita en Labranza
                </p>
              </div>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            {/* Decoración de esquina */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-all duration-500" />
          </article>
        ))}
      </div>

      {/* CTA para personalizar */}
      <div className="text-center">
        <p className="text-white/60 text-sm mb-3">
          ¿Quieres una caja personalizada?
        </p>
        <a
          href="https://wa.me/56940963797"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400/30 bg-lime-400/10 px-6 py-3 text-sm font-bold text-lime-200 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/20 hover:scale-105"
        >
          💬 Escríbenos y armamos tu caja ideal
        </a>
      </div>
    </section>
  );
}
