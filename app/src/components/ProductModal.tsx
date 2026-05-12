import { useState } from 'react';
import { Link } from 'react-router';
import { X, MessageCircle } from 'lucide-react';
import type { Product } from '@/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [mainImage, setMainImage] = useState(product.image);

  const galleryImages = product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(15,31,15,0.85)] backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl max-w-[900px] w-full max-h-[90vh] overflow-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#F7F5F0] flex items-center justify-center hover:bg-[#E8F0E8] transition-colors"
        >
          <X size={20} className="text-[#1A2E1A]" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Gallery */}
          <div className="md:w-[45%] p-6">
            <div className="aspect-square rounded-xl overflow-hidden bg-[#F7F5F0]">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {galleryImages.length > 1 && (
              <div className="flex gap-2 mt-3">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      mainImage === img ? 'border-[#C4A35A]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:w-[55%] p-6 md:pl-0 md:pr-8 md:py-8">
            <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2rem)] text-[#1A2E1A] mb-2">
              {product.name}
            </h2>
            <span className="inline-block text-[11px] font-body font-medium uppercase tracking-[0.04em] bg-[#E8F0E8] text-[#1A2E1A] px-3 py-1 rounded">
              {product.category}
            </span>

            <p className="text-[17px] font-body text-[#5C6B5C] leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-[0.04em] text-[#5C6B5C] mb-1">
                  Beneficios
                </p>
                <p className="text-[15px] font-body text-[#1A2E1A]">{product.benefits}</p>
              </div>
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-[0.04em] text-[#5C6B5C] mb-1">
                  Presentacion
                </p>
                <p className="text-[15px] font-body text-[#1A2E1A]">{product.presentation}</p>
              </div>
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-[0.04em] text-[#5C6B5C] mb-1">
                  Tipo de exportacion
                </p>
                <p className="text-[15px] font-body text-[#1A2E1A]">{product.exportType}</p>
              </div>
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-[0.04em] text-[#5C6B5C] mb-1">
                  Linea de proceso
                </p>
                <p className="text-[15px] font-body text-[#1A2E1A]">{product.processLine}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold py-3.5 rounded-lg hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle size={18} />
                Contactar por WhatsApp
              </a>
              <Link
                to="/contacto"
                onClick={onClose}
                className="text-center text-[#C4A35A] font-body font-semibold hover:underline"
              >
                Ir a Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-in {
          animation: modal-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
