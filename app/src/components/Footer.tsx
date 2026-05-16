import { Link } from 'react-router';
import { MapPin, Mail, Phone} from 'lucide-react';  
import { useScrollReveal } from '@/hooks/useScrollReveal';
export default function Footer() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 20, stagger: 0.1 });

  return (
    <footer className="bg-[#0F1F0F]">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col items-start">
              <span className="font-display font-bold text-2xl text-white">RancheroFruits</span>
              <span className="text-[11px] font-body font-medium uppercase tracking-[0.04em] text-[#B8C4B8]">
                Exportacion Peru
              </span>
            </Link>
            <p className="text-[15px] font-body text-[#B8C4B8] mt-4 leading-relaxed max-w-[280px]">
              Empresa especializada en servicios de packing, maquila y comercializacion de frutas y hortalizas frescas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-white text-lg mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Productos', href: '/productos' },
                { label: 'Contacto', href: '/contacto' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[15px] font-body text-[#B8C4B8] hover:text-[#C4A35A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-white text-lg mb-4">Servicios</h4>
            <div className="flex flex-col gap-2">
              {['Maquila', 'Packing', 'Exportacion'].map((service) => (
                <span key={service} className="text-[15px] font-body text-[#B8C4B8]">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-lg mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[15px] font-body text-[#B8C4B8]">
                <MapPin size={16} className="text-[#C4A35A] shrink-0" />
                Paijan, La Libertad, Peru
              </div>
              <div className="flex items-center gap-3 text-[15px] font-body text-[#B8C4B8]">
                <Mail size={16} className="text-[#C4A35A] shrink-0" />
                rancherofruits.com
              </div>
              <div className="flex items-center gap-3 text-[15px] font-body text-[#B8C4B8]">
                <Phone size={16} className="text-[#C4A35A] shrink-0" />
                +51 932 562 950
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(184,196,184,0.15)] text-center">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#5C6B5C]">
            &copy; {new Date().getFullYear()} Rancherofruits Peru. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
