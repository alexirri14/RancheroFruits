import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';

const slides = [
  { image: '/images/hero-slide-1.jpg', alt: 'Valle agricola peruano' },
  { image: '/images/hero-slide-2.jpg', alt: 'Instalacion de packing moderna' },
  { image: '/images/hero-slide-3.jpg', alt: 'Frutas tropicales frescas' },
  { image: '/images/hero-slide-4.jpg', alt: 'Granja costera peruana' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(135deg, rgba(15,31,15,0.75) 0%, rgba(15,31,15,0.45) 50%, rgba(15,31,15,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-[3] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-[640px] animate-fade-in-up">
            <p
              className="text-[13px] font-body font-medium uppercase tracking-[0.12em] text-[#C4A35A] mb-4"
              style={{ animationDelay: '100ms' }}
            >
              AGROEXPORTACION DE EXCELENCIA
            </p>
            <h1
              className="font-display font-semibold text-white leading-[1.1] tracking-tight mb-5"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              Llevamos lo mejor del Peru al mundo
            </h1>
            <p className="text-lg font-body text-white/85 leading-relaxed max-w-[520px] mb-8">
              Frutas y hortalizas frescas bajo los mas altos estandares de calidad internacional. Servicios de packing y maquila con certificacion exportadora.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-[#C4A35A] text-white font-body font-semibold text-[15px] px-9 py-4 rounded-lg hover:bg-[#A88B3D] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(196,163,90,0.4)]"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[4] flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#C4A35A] scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-[4] hidden md:flex flex-col items-center gap-2">
        <span className="text-[11px] font-body font-medium uppercase tracking-[0.04em] text-white/60">
          Descubre mas
        </span>
        <ChevronDown size={20} className="text-white/60 animate-bounce-slow" />
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
