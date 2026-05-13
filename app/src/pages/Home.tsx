import { Link } from 'react-router';
import { Check, Award, Leaf, ShieldCheck, Snowflake, Truck, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import ProductModal from '@/components/ProductModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { starProducts, productDetails } from '@/data/products';
import type { Product } from '@/types';

/* ─── Quienes Somos ─── */
function AboutSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <section className="bg-[#F7F5F0] py-24 lg:py-28">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
              SOBRE NOSOTROS
            </p>
            <h2
              className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Conectamos el campo peruano con el mundo
            </h2>
            <p className="text-[17px] font-body text-[#5C6B5C] leading-[1.7] mb-7">
              Somos una empresa especializada en servicios de packing, maquila y comercializacion de frutas y hortalizas frescas para mercados nacionales e internacionales. Con anos de experiencia en el sector agroexportador, garantizamos calidad, trazabilidad y cumplimiento en cada proceso.
            </p>
            <div className="flex flex-col gap-4 mb-7">
              {[
                'Calidad de exportacion certificada',
                'Procesos trazables y auditados',
                'Cadena de frio garantizada',
                'Logistica eficiente a nivel internacional',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={20} className="text-[#C4A35A] shrink-0" />
                  <span className="text-[15px] font-body text-[#1A2E1A]">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/nosotros"
              className="inline-flex items-center gap-2 text-[#C4A35A] font-body font-semibold hover:underline"
            >
              Conoce mas
              <span>→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/RancheroFruits/images/about-main.jpg"
              alt="Instalaciones de RancheroFruits"
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-[0_8px_32px_rgba(26,46,26,0.12)]"
            />
            <div className="absolute bottom-4 right-4 bg-[#C4A35A] text-white text-[11px] font-body font-medium uppercase tracking-[0.04em] px-4 py-2 rounded-lg">
              Desde 2015
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Que Ofrecemos ─── */
function OfferingsSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, scale: 0.95 });

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
            NUESTRAS SOLUCIONES
          </p>
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Servicios integrales para el agro
          </h2>
          <p className="text-[17px] font-body text-[#5C6B5C] leading-relaxed">
            Ofrecemos soluciones completas desde el procesamiento hasta la comercializacion de productos agricolas frescos.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Maquila Card */}
          <div className="bg-[#F7F5F0] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,46,26,0.08)] hover:shadow-[0_8px_32px_rgba(26,46,26,0.12)] transition-shadow duration-300">
            <img
              src="/RancheroFruits/images/service-maquila.jpg"
              alt="Servicio de Maquila"
              className="w-full aspect-video object-cover"
            />
            <div className="p-8">
              <h3 className="font-display font-medium text-2xl text-[#1A2E1A] mb-3">
                Servicio de Maquila
              </h3>
              <p className="text-[15px] font-body text-[#5C6B5C] leading-relaxed mb-5">
                Procesamos y acondicionamos materia prima de terceros bajo estandares de calidad exportadora. Desde la recepcion hasta el despacho, garantizamos un servicio profesional y eficiente.
              </p>
              <Link
                to="/servicios"
                className="inline-block border-[1.5px] border-[#C4A35A] text-[#C4A35A] font-body font-semibold text-[15px] px-6 py-2.5 rounded-lg hover:bg-[#C4A35A] hover:text-white transition-all duration-200"
              >
                Ver Servicios
              </Link>
            </div>
          </div>

          {/* Products Card */}
          <div className="bg-[#F7F5F0] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,46,26,0.08)] hover:shadow-[0_8px_32px_rgba(26,46,26,0.12)] transition-shadow duration-300">
            <img
              src="/RancheroFruits/images/hero-slide-3.jpg"
              alt="Productos Terminados"
              className="w-full aspect-video object-cover"
            />
            <div className="p-8">
              <h3 className="font-display font-medium text-2xl text-[#1A2E1A] mb-3">
                Productos Terminados
              </h3>
              <p className="text-[15px] font-body text-[#5C6B5C] leading-relaxed mb-5">
                Ofrecemos frutas y hortalizas frescas listas para comercializacion nacional e internacional. Productos seleccionados, clasificados y empacados bajo los mas altos estandares.
              </p>
              <Link
                to="/productos"
                className="inline-block border-[1.5px] border-[#C4A35A] text-[#C4A35A] font-body font-semibold text-[15px] px-6 py-2.5 rounded-lg hover:bg-[#C4A35A] hover:text-white transition-all duration-200"
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Productos Estrella ─── */
function StarProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -304 : 304;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleProductClick = (id: string) => {
    const detail = productDetails[id];
    if (detail) setSelectedProduct(detail);
  };

  return (
    <section className="bg-[#F7F5F0] py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
            NUESTROS PRODUCTOS
          </p>
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Productos de exportacion
          </h2>
          <p className="text-[17px] font-body text-[#5C6B5C] leading-relaxed max-w-[640px] mx-auto">
            Descubre nuestra seleccion de productos estrella, cultivados y procesados bajo estandares de calidad internacional.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#C4A35A] hover:text-white transition-colors hidden lg:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#C4A35A] hover:text-white transition-colors hidden lg:flex"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          >
            {starProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="snap-start flex-shrink-0 w-[280px] bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,46,26,0.08)] hover:shadow-[0_8px_32px_rgba(26,46,26,0.12)] hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-medium text-lg text-[#1A2E1A]">
                    {product.name}
                  </h3>
                  <span className="inline-block mt-2 text-[11px] font-body font-medium uppercase tracking-[0.04em] bg-[#E8F0E8] text-[#1A2E1A] px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

/* ─── Ventajas ─── */
const advantages = [
  { icon: Award, title: 'Calidad de Exportacion', desc: 'Cumplimos con los estandares internacionales mas exigentes para garantizar la calidad de cada producto.' },
  { icon: Leaf, title: 'Produccion Fresca', desc: 'Trabajamos con productos frescos directamente desde los mejores campos del Peru.' },
  { icon: ShieldCheck, title: 'Procesos Certificados', desc: 'Contamos con certificaciones que avalan nuestros procesos de produccion y packing.' },
  { icon: Snowflake, title: 'Cadena de Frio', desc: 'Mantenemos la cadena de frio desde el origen hasta el destino final.' },
  { icon: Truck, title: 'Logistica Eficiente', desc: 'Gestionamos la logistica internacional para entregas puntuales y seguras.' },
  { icon: Package, title: 'Empaque Profesional', desc: 'Ofrecemos soluciones de empaque adaptadas a cada producto y mercado.' },
];

function AdvantagesSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
            POR QUE ELEGIRNOS
          </p>
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Ventajas competitivas
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-[#F7F5F0] rounded-xl p-8 text-center hover:shadow-[0_4px_24px_rgba(26,46,26,0.08)] transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#E8F0E8] rounded-full flex items-center justify-center mx-auto mb-4">
                <adv.icon size={28} className="text-[#1A2E1A]" />
              </div>
              <h3 className="font-body font-semibold text-xl text-[#1A2E1A] mb-2">
                {adv.title}
              </h3>
              <p className="text-[15px] font-body text-[#5C6B5C] leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <OfferingsSection />
      <StarProductsSection />
      <AdvantagesSection />
    </>
  );
}
