type FruitPrice = {
  name: string;
  price: string;
  unit: string;
  emoji: string;
  category: "fruta" | "verdura" | "otro";
  isOffer?: boolean;
  originalPrice?: string;
};

type FruitPricesSectionProps = {
  fruits: FruitPrice[];
};

export function FruitPricesSection({ fruits }: FruitPricesSectionProps) {
  const frutas = fruits.filter((f) => f.category === "fruta");
  const verduras = fruits.filter((f) => f.category === "verdura");
  const otros = fruits.filter((f) => f.category === "otro");

  return (
    <section id="precios" className="grid gap-8">
      {/* Título de la sección */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2 text-sm font-medium text-lime-300">
          <span className="animate-bounce">🏷️</span>
          Precios del día
        </div>
        <h3 className="text-4xl sm:text-5xl font-bold text-white">
          <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
            Frutas y Verduras
          </span>
        </h3>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Productos frescos directo del campo a tu mesa. Precios actualizados
          diariamente.
        </p>
      </div>

      {/* Frutas */}
      {frutas.length > 0 && (
        <div className="space-y-4">
          <h4 className="flex items-center gap-3 text-xl font-semibold text-lime-200">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-xl">
              🍎
            </span>
            Frutas Frescas
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {frutas.map((fruit) => (
              <PriceCard key={fruit.name} item={fruit} />
            ))}
          </div>
        </div>
      )}

      {/* Verduras */}
      {verduras.length > 0 && (
        <div className="space-y-4">
          <h4 className="flex items-center gap-3 text-xl font-semibold text-lime-200">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-xl">
              🥬
            </span>
            Verduras del Día
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {verduras.map((fruit) => (
              <PriceCard key={fruit.name} item={fruit} />
            ))}
          </div>
        </div>
      )}

      {/* Otros productos */}
      {otros.length > 0 && (
        <div className="space-y-4">
          <h4 className="flex items-center gap-3 text-xl font-semibold text-lime-200">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 text-xl">
              🧺
            </span>
            Otros Productos
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otros.map((fruit) => (
              <PriceCard key={fruit.name} item={fruit} />
            ))}
          </div>
        </div>
      )}

      {/* Banner informativo */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900/50 via-lime-900/30 to-emerald-900/50 border border-lime-500/20 p-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.1),_transparent_70%)]" />
        <div className="relative">
          <p className="text-xl sm:text-2xl font-bold text-white mb-2">
            🚚 Entrega el mismo día
          </p>
          <p className="text-white/70">
            Pedidos antes de las 11:00 AM se entregan el mismo día en Labranza y
            Temuco
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ item }: { item: FruitPrice }) {
  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 
        hover:scale-105 hover:shadow-xl hover:shadow-lime-500/10
        ${
          item.isOffer
            ? "border-amber-400/50 bg-gradient-to-br from-amber-900/30 to-amber-950/50"
            : "border-white/10 bg-white/5 hover:border-lime-400/30 hover:bg-white/10"
        }
      `}
    >
      {/* Badge de oferta */}
      {item.isOffer && (
        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold text-white px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-lg">
          OFERTA
        </div>
      )}

      {/* Emoji grande */}
      <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        {item.emoji}
      </div>

      {/* Nombre del producto */}
      <h5 className="font-semibold text-white text-sm truncate">{item.name}</h5>

      {/* Precio */}
      <div className="mt-2 flex items-baseline gap-2">
        <span
          className={`text-2xl font-bold ${
            item.isOffer ? "text-amber-300" : "text-lime-300"
          }`}
        >
          {item.price}
        </span>
        <span className="text-xs text-white/50">/{item.unit}</span>
      </div>

      {/* Precio original tachado */}
      {item.isOffer && item.originalPrice && (
        <p className="text-sm text-white/40 line-through">
          {item.originalPrice}
        </p>
      )}

      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </article>
  );
}
