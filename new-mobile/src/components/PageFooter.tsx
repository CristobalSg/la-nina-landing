export function PageFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} La Nina. Todos los derechos reservados.</p>
      <p>Sabor de temporada · Ingredientes reales · Servicio humano.</p>
    </footer>
  );
}
