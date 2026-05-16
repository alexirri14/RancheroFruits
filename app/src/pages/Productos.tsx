import { memo, useState, type ReactNode } from 'react';
import PageHero from '@/components/PageHero';
import ProductModal from '@/components/ProductModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { hortalizas, frutas, tuberculos, getProductByName } from '@/data/products';
import type { Product } from '@/types';

type Category = 'hortalizas' | 'frutas' | 'tuberculos';
interface ProductCardProps {
  name: string;
  onClick: (name: string) => void;
  className?: string;
  children?: ReactNode;
}

const ProductCard = memo(({ name, onClick, className, children }: ProductCardProps) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={className}
    >
      {children}
    </button>
  );
});

const categoryImages: Record<string, string> = {
  //frutas
  'Arandanos': '/RancheroFruits/images/product-arandanos.jpg',
  'Lucuma': '/RancheroFruits/images/product-lucuma.jpg',
  'Maracuya': '/RancheroFruits/images/product-maracuya.jpg',
  'Granadilla': '/RancheroFruits/images/product-granadilla.jpg',
  'Chirimoya': '/RancheroFruits/images/product-chirimoya.jpg',
  'Guanabana': '/RancheroFruits/images/product-guanabana.jpeg',
  'Platano de isla': '/RancheroFruits/images/product-platano-isla.png',
  'Papaya': '/RancheroFruits/images/product-papaya.png',
  'Pacae': '/RancheroFruits/images/product-pacae.jpg',
  'Pepino dulce': '/RancheroFruits/images/product-pepino-dulce.png',
  'Tumbo': '/RancheroFruits/images/product-tumbo.jpg',
  'Tomate de arbol': '/RancheroFruits/images/product-tomate-arbol.jpg',
  'Lulo': '/RancheroFruits/images/product-lulo.jpeg',
  'Mamey': '/RancheroFruits/images/product-mamey.jpg',
  'Aguaymanto': '/RancheroFruits/images/product-aguaymanto.jpg',
  'Carambola': '/RancheroFruits/images/product-carambola.jpg',
  'Cocona': '/RancheroFruits/images/product-cocona.jpg',
  'Tuna': '/RancheroFruits/images/product-tuna.jpeg',
  'Platano bizcocho': '/RancheroFruits/images/product-platano-bizcocho.jpg',
  'Platano palillo': '/RancheroFruits/images/product-platano-palillo.jpg',
  'Ciruela': '/RancheroFruits/images/product-ciruela.jpg',
  //hortalizas
  'Aji amarillo': '/RancheroFruits/images/product-aji-amarillo.jpg',
  'Rocoto': '/RancheroFruits/images/product-rocoto.jpg',
  'Locoto': '/RancheroFruits/images/product-locoto.jpg',
  'Aji limo': '/RancheroFruits/images/product-aji-limo.jpg',
  'Maiz choclo': '/RancheroFruits/images/product-maiz-choclo.jpg',
  'Caigua': '/RancheroFruits/images/product-caigua.jpg',
  'Aji panca': '/RancheroFruits/images/product-aji-panca.jpg',
  'Aji mirasol': '/RancheroFruits/images/product-aji-mirasol.jpg',
  'Zapallo loche': '/RancheroFruits/images/product-zapallo-loche.jpg',
  'Zapallo macre': '/RancheroFruits/images/product-zapallo-macre.jpg',
  'Hierba luisa': '/RancheroFruits/images/product-hierba-luisa.jpg',
  'Huacatay': '/RancheroFruits/images/product-huacatay.jpg',
  'Chincho': '/RancheroFruits/images/product-chincho.jpg',
  'Cebolla roja': '/RancheroFruits/images/product-cebolla-roja.jpg',
  'Maiz morado': '/RancheroFruits/images/product-maiz-morado.jpg',
  //tuberculos
  'Camote amarillo': '/RancheroFruits/images/product-camote-amarillo.jpg',
  'Camote morado': '/RancheroFruits/images/product-camote-morado.jpg',
  'Yacon': '/RancheroFruits/images/product-yacon.jpg',
  'Olluco canario': '/RancheroFruits/images/product-olluco-canario.jpg',
  'Olluco chispa': '/RancheroFruits/images/product-olluco-chispa.jpg',
  'Oca': '/RancheroFruits/images/product-oca.jpg',
  'Mushua': '/RancheroFruits/images/product-mushua.jpg',
  'Yuca': '/RancheroFruits/images/product-yuca.jpg',
  'Curcuma': '/RancheroFruits/images/product-curcuma.jpg',
  'Jengibre': '/RancheroFruits/images/product-jengibre.jpg',
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
            <ProductCard
              key={name}
              name = {name}
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
            </ProductCard>
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
