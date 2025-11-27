import { useState, useEffect, useCallback } from "react";

type CarouselItem = {
  title: string;
  description: string;
  image: string;
  gradient: string;
  emoji: string;
};

type CarouselSectionProps = {
  items: CarouselItem[];
};

export function CarouselSection({ items }: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Detectar swipe en móviles
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Título de sección */}
      <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-10 px-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Lo mejor de nuestra{" "}
          <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
            selección
          </span>
        </h3>
        <p className="text-white/60 text-sm sm:text-base lg:text-lg">
          Desliza para conocer nuestros productos destacados
        </p>
      </div>

      {/* Carrusel principal */}
      <div 
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Contenedor de slides */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Card del slide */}
              <div
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} p-6 sm:p-8 lg:p-12 px-12 sm:px-16 lg:px-20 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between`}
              >
                {/* Efectos de fondo animados */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-lime-400/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                {/* Contenido */}
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  {/* Emoji gigante con animación */}
                  <div className="inline-block">
                    <div className="text-6xl sm:text-7xl lg:text-8xl animate-bounce-slow drop-shadow-2xl">
                      {item.emoji}
                    </div>
                  </div>

                  {/* Título */}
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    {item.title}
                  </h4>

                  {/* Descripción */}
                  <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Indicador de slide */}
                <div className="relative z-10 flex items-center justify-between mt-6 sm:mt-8">
                  <span className="text-lime-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    {index + 1} / {items.length}
                  </span>
                  
                  {/* Badge decorativo */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 sm:px-4 py-1.5 sm:py-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    <span className="text-lime-200 text-xs sm:text-sm font-medium">Destacado</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full p-2.5 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Slide anterior"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-lime-300 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full p-2.5 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Siguiente slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-lime-300 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores de puntos */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 px-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 sm:w-10 lg:w-12 h-2.5 sm:h-3 bg-gradient-to-r from-lime-400 to-emerald-400"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles de autoplay */}
      <div className="flex justify-center mt-4 sm:mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              <span className="text-xs sm:text-sm text-white/70 group-hover:text-white">Pausar</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-xs sm:text-sm text-white/70 group-hover:text-white">Reproducir</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
