export function NewsletterSection() {
  return (
    <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 text-white lg:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-lime-200">Newsletter semanal</p>
        <h4 className="mt-2 text-3xl font-semibold">Recibe recetas e inspiración de temporada</h4>
        <p className="mt-4 text-white/80">
          Prometemos enviar solo ideas útiles: recetas cortas, guías de almacenamiento y los productos recién llegados.
        </p>
      </div>
      <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <input
          type="email"
          placeholder="tu@correo.com"
          className="rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
          required
        />
        <button
          type="submit"
          className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-lime-200"
        >
          Suscribirme
        </button>
      </form>
    </section>
  );
}
