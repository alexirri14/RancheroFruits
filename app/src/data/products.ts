import type { Product, StarProduct } from '@/types';

export const starProducts: StarProduct[] = [
  { id: 'arandanos', name: 'Arandanos', category: 'Fruta fresca', image: '/RancheroFruits/images/product-arandanos.jpg' },
  { id: 'maracuya', name: 'Maracuya', category: 'Fruta fresca', image: '/RancheroFruits/images/product-maracuya.jpg' },
  { id: 'aji-amarillo', name: 'Aji amarillo', category: 'Hortaliza', image: '/RancheroFruits/images/product-aji-amarillo.jpg' },
  { id: 'curcuma', name: 'Curcuma', category: 'Tuberculo', image: '/RancheroFruits/images/product-curcuma.jpg' },
  { id: 'lucuma', name: 'Lucuma', category: 'Fruta fresca', image: '/RancheroFruits/images/product-lucuma.jpg' },
  { id: 'maiz-morado', name: 'Maiz morado', category: 'Hortaliza', image: '/RancheroFruits/images/product-maiz-morado.jpg' },
];

export const productDetails: Record<string, Product> = {
  arandanos: {
    id: 'arandanos',
    name: 'Arandanos',
    category: 'frutas',
    image: '/images/product-arandanos.jpg',
    description: 'Arandanos frescos cultivados en las mejores zonas del Peru. De tamano uniforme, color azul intenso y sabor dulce con ligera acidez. Ricos en antioxidantes y vitaminas.',
    benefits: 'Alto contenido de antioxidantes, vitaminas C y K, fibra dietetica. Beneficios para la salud cardiovascular y cerebral.',
    presentation: 'Bandejas de 125g, 250g y 500g. Tambien a granel segun requerimiento.',
    exportType: 'Aereo y maritimo refrigerado',
    processLine: 'Linea de Arandanos',
    gallery: ['/images/detail-arandanos-1.jpg', '/images/detail-arandanos-2.jpg', '/images/detail-arandanos-3.jpg'],
  },
  maracuya: {
    id: 'maracuya',
    name: 'Maracuya',
    category: 'frutas',
    image: '/images/product-maracuya.jpg',
    description: 'Maracuya de pulpa amarilla intensa y sabor exotico caracteristico. Frutos seleccionados por madurez optima y calidad de pulpa. Ideal para jugos, postres y exportacion.',
    benefits: 'Rico en vitaminas A y C, hierro y potasio. Propiedades calmantes y digestivas.',
    presentation: 'Cajas de 4kg y 8kg. Seleccion por tamano y calidad.',
    exportType: 'Aereo y maritimo',
    processLine: 'Linea Primaria',
    gallery: ['/images/product-maracuya.jpg', '/images/hero-slide-3.jpg'],
  },
  'aji-amarillo': {
    id: 'aji-amarillo',
    name: 'Aji amarillo',
    category: 'hortalizas',
    image: '/images/product-aji-amarillo.jpg',
    description: 'Aji amarillo peruano, ingrediente emblematico de la gastronomia peruana. De color brillante y sabor picante moderado con notas frutales. Fresco y seleccionado.',
    benefits: 'Contiene capsaicina, vitaminas A, C y E. Propiedades antiinflamatorias y metabolicas.',
    presentation: 'Cajas de 5kg y 10kg. Fresco o congelado.',
    exportType: 'Aereo y maritimo',
    processLine: 'Linea Primaria',
    gallery: ['/images/product-aji-amarillo.jpg'],
  },
  curcuma: {
    id: 'curcuma',
    name: 'Curcuma',
    category: 'tuberculos',
    image: '/images/product-curcuma.jpg',
    description: 'Curcuma fresca de color naranja intenso, cultivada en condiciones optimas del Peru. Raices enteras seleccionadas por tamano y calidad. Superalimento de alta demanda internacional.',
    benefits: 'Poderoso antiinflamatorio natural, antioxidante. Contiene curcumina con multiples beneficios para la salud.',
    presentation: 'Cajas de 5kg y 10kg. Raices enteras frescas.',
    exportType: 'Aereo y maritimo',
    processLine: 'Linea Primaria',
    gallery: ['/images/product-curcuma.jpg'],
  },
  lucuma: {
    id: 'lucuma',
    name: 'Lucuma',
    category: 'frutas',
    image: '/images/product-lucuma.jpg',
    description: 'Lucuma fresca, conocida como el "oro de los Incas". Pulpa de color amarillo-naranja con sabor dulce y maple. Fruta emblematica del Peru con gran demanda internacional.',
    benefits: 'Rica en betacaroteno, hierro, niacina y fibra. Bajo indice glucemico, ideal para dietas saludables.',
    presentation: 'Cajas de 5kg. Fruta fresca seleccionada.',
    exportType: 'Aereo y maritimo',
    processLine: 'Linea Primaria',
    gallery: ['/images/product-lucuma.jpg'],
  },
  'maiz-morado': {
    id: 'maiz-morado',
    name: 'Maiz morado',
    category: 'hortalizas',
    image: '/images/product-maiz-morado.jpg',
    description: 'Maiz morado peruano de granos intensamente purpura, rico en antocianinas. Producto ancestral con alto valor nutricional y demanda en mercados gourmet e internacionales.',
    benefits: 'Alto contenido de antocianinas (antioxidantes), reduce inflamacion y riesgo cardiovascular.',
    presentation: 'Mazorcas frescas en cajas de 10kg o granos procesados.',
    exportType: 'Maritimo y aereo',
    processLine: 'Linea Primaria',
    gallery: ['/images/product-maiz-morado.jpg'],
  },
};

export const hortalizas: string[] = [
  'Aji amarillo', 'Rocoto', 'Locoto', 'Aji limo', 'Maiz choclo', 'Maiz morado',
  'Caigua', 'Aji panca', 'Aji mirasol', 'Zapallo loche', 'Zapallo macre',
  'Hierba luisa', 'Huacatay', 'Chincho', 'Cebolla roja',
];

export const frutas: string[] = [
  'Maracuya', 'Granadilla', 'Lucuma', 'Chirimoya', 'Guanabana', 'Platano de isla',
  'Papaya', 'Pacae', 'Pepino dulce', 'Tumbo', 'Tomate de arbol', 'Lulo',
  'Mamey', 'Aguaymanto', 'Carambola', 'Cocona', 'Tuna', 'Platano bizcocho',
  'Platano palillo', 'Ciruela',
];

export const tuberculos: string[] = [
  'Camote amarillo', 'Camote morado', 'Yacon', 'Olluco canario', 'Olluco chispa',
  'Oca', 'Mushua', 'Yuca', 'Curcuma', 'Jengibre',
];

export const getProductByName = (name: string): Product | undefined => {
  const key = Object.keys(productDetails).find(
    (k) => productDetails[k].name.toLowerCase() === name.toLowerCase()
  );
  return key ? productDetails[key] : undefined;
};
