import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ProductModal from '@/components/ProductModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { hortalizas, frutas, tuberculos, getProductByName } from '@/data/products';
import type { Product } from '@/types';

type Category = 'hortalizas' | 'frutas' | 'tuberculos';

const categoryImages: Record<string, string> = {
  'Aji amarillo': '/RancheroFruits/images/product-aji-amarillo.jpg',
  'Arandanos': '/RancheroFruits/images/product-arandanos.jpg',
  'Curcuma': '/RancheroFruits/images/product-curcuma.jpg',
  'Lucuma': '/RancheroFruits/images/product-lucuma.jpg',
  'Maiz morado': '/RancheroFruits/images/product-maiz-morado.jpg',
  'Maracuya': '/RancheroFruits/images/product-maracuya.jpg',
};

const getProductImage = (name: string): string => {
  return categoryImages[name] || '/images/hero-slide-3.jpg';
};

/* ─── Introduccion ─── */
function IntroSection() {
  return (
    <section className="bg-[#F7F5F0] py-20">
      <div className="max-w-[720px] mx-auto px-6 lg:px-10 text-center">
        <p className="text-lg font-body text-[#5C6B5C] leading-relaxed">
          Ofrecemos frutas, hortalizas y tuberculos frescos seleccionados bajo estandares de calidad para el mercado nacional e internacional. Todos nuestros productos pasan por rigurosos controles de calidad antes de su empaque y despacho.
        </p>
      </div>
    </section>
  );
}

/* ─── Lineas de Proceso ─── */
function ProcessLinesSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, scale: 0.95 });

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
            NUESTRAS LINEAS
          </p>
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Lineas de Proceso
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linea Primaria */}
          <div className="bg-[#F7F5F0] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,46,26,0.08)]">
            <img
              src="/RancheroFruits/images/linea-primaria.jpg"
              alt="Linea Primaria"
              className="w-full aspect-video object-cover"
            />
            <div className="p-7">
              <h3 className="font-display font-medium text-2xl text-[#1A2E1A] mb-2">
                Linea Primaria
              </h3>
              <p className="text-[15px] font-body text-[#5C6B5C] leading-relaxed">
                Productos que no necesitan mucho flujo de frio para exportacion. Procesamiento estandar con empaque adaptado a cada producto.
              </p>
            </div>
          </div>

          {/* Linea de Arandanos */}
          <div className="bg-[#F7F5F0] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,46,26,0.08)]">
            <img
              src="/RancheroFruits/images/linea-arandanos.jpg"
              alt="Linea de Arandanos"
              className="w-full aspect-video object-cover"
            />
            <div className="p-7">
              <h3 className="font-display font-medium text-2xl text-[#1A2E1A] mb-2">
                Linea de Arandanos
              </h3>
              <p className="text-[15px] font-body text-[#5C6B5C] leading-relaxed">
                Linea especializada para procesamiento y manejo de arandanos con cadena de frio estricta desde la recepcion hasta el despacho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Categorias de Productos ─── */
function ProductCategoriesSection() {
  const [activeTab, setActiveTab] = useState<Category>('hortalizas');
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  const tabs: { key: Category; label: string }[] = [
    { key: 'hortalizas', label: 'Hortalizas' },
    { key: 'frutas', label: 'Frutas' },
    { key: 'tuberculos', label: 'Tuberculos' },
  ];

  const products: Record<Category, string[]> = {
    hortalizas,
    frutas,
    tuberculos,
  };

  const currentProducts = products[activeTab];
  const displayedProducts = currentProducts.slice(0, visibleCount);
  const hasMore = currentProducts.length > visibleCount;

  const handleTabChange = (tab: Category) => {
    setActiveTab(tab);
    setVisibleCount(8);
  };

  const handleProductClick = (name: string) => {
    const product = getProductByName(name);
    if (product) {
      setSelectedProduct(product);
    }
  };

  return (
    <section className="bg-[#F7F5F0] py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Categorias
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-6 py-2.5 rounded-lg font-body font-medium text-[15px] transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-[#1A2E1A] text-white'
                  : 'bg-transparent text-[#5C6B5C] hover:text-[#1A2E1A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedProducts.map((name) => (
            <button
              key={name}
              onClick={() => handleProductClick(name)}
              className="bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,46,26,0.08)] hover:shadow-[0_8px_32px_rgba(26,46,26,0.12)] hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={getProductImage(name)}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-body font-semibold text-base text-[#1A2E1A]">{name}</h4>
              </div>
            </button>
          ))}
        </div>

        {/* Ver Mas Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-block border-[1.5px] border-[#C4A35A] text-[#C4A35A] font-body font-semibold text-[15px] px-8 py-2.5 rounded-lg hover:bg-[#C4A35A] hover:text-white transition-all duration-200"
            >
              Ver mas
            </button>
          </div>
        )}
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

/* ─── Productos Page ─── */
export default function Productos() {
  return (
    <>
      <PageHero title="Nuestros Productos" breadcrumb="Productos" />
      <IntroSection />
      <ProcessLinesSection />
      <ProductCategoriesSection />
    </>
  );
}
