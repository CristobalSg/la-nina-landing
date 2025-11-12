type Basket = {
  name: string;
  items: string;
  price: string;
};

type BasketsSectionProps = {
  baskets: Basket[];
};

export function BasketsSection({ baskets }: BasketsSectionProps) {
  return (
    <section id="productos" className="grid gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-200">Cajas destacadas</p>
        <h3 className="text-3xl font-semibold text-white">Listas para compartir o abastecer tu semana</h3>
        <p className="text-white/80">
          Cambiamos la selección cada mes. Personaliza cualquier caja escribiendo tus frutas o verduras favoritas al momento de tu pedido.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {baskets.map((basket) => (
          <article key={basket.name} className="rounded-3xl border border-white/10 bg-[#0f3d26]/70 p-6 text-white shadow-lg backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-200">{basket.name}</p>
            <p className="mt-2 text-base text-white/90">{basket.items}</p>
            <p className="mt-6 text-3xl font-semibold text-lime-100">{basket.price}</p>
            <p className="text-sm text-white/70">Entrega gratuita en Lima Sur</p>
          </article>
        ))}
      </div>
    </section>
  );
}
