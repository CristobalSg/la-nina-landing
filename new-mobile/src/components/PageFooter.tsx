export function PageFooter() {
  return (
    <footer className="border-t border-white/10 pt-6 sm:pt-8">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3 md:items-center text-center md:text-left">
        {/* Logo y copyright */}
        <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-xl blur opacity-30"></div>
            <img
              src="/icons/1.jpg"
              alt="La Nina Logo"
              className="relative w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl"
            />
          </div>
          <div>
            <p className="font-bold text-white text-sm sm:text-base">La Nina</p>
            <p className="text-[0.65rem] sm:text-xs text-white/50">Frutería & Verdulería</p>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-lime-300/80 font-medium">
            🍊 Sabor de temporada · 🥬 Ingredientes reales · 💚 Servicio humano
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-[0.65rem] sm:text-xs text-white/50">
            © {new Date().getFullYear()} La Nina. Todos los derechos reservados.
          </p>
          <p className="text-[0.65rem] sm:text-xs text-white/30 mt-1">
            Hecho con 💚 en Temuco, Chile
          </p>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="mt-6 sm:mt-8 h-1 w-full bg-gradient-to-r from-transparent via-lime-500/50 to-transparent rounded-full"></div>
    </footer>
  );
}
