import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Productos', href: '/productos' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    // eslint-disable-next-line
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(247,245,240,0.95)] backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#C4A35A]">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="currentColor" opacity="0.3"/>
                  <path d="M12 4c-1.5 2-2 4-2 6s1 4 2 6c1-2 2-4 2-6s-1-4-2-6z" fill="currentColor"/>
                  <path d="M6 10c2 1 4 1.5 6 1.5s4-.5 6-1.5c-2-1-4-1.5-6-1.5S8 9 6 10z" fill="currentColor" opacity="0.6"/>
                </svg>
                <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-[#1A2E1A]' : 'text-white'
                }`}>
                  RancheroFruits
                </span>
              </div>
              <span className={`text-[11px] font-body font-medium uppercase tracking-[0.04em] transition-colors duration-300 ${
                scrolled ? 'text-[#5C6B5C]' : 'text-white/70'
              }`}>
                EXPORTACION PERU
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-body font-medium tracking-wide transition-colors duration-300 relative pb-1 ${
                    isActive(link.href)
                      ? scrolled
                        ? 'text-[#C4A35A] border-b-2 border-[#C4A35A]'
                        : 'text-[#C4A35A] border-b-2 border-[#C4A35A]'
                      : scrolled
                      ? 'text-[#1A2E1A] hover:text-[#C4A35A]'
                      : 'text-white/90 hover:text-[#C4A35A]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-body font-semibold px-5 py-2.5 rounded-full hover:bg-[#128C7E] transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <Link
                to="/contacto"
                className="bg-[#C4A35A] text-white text-sm font-body font-semibold px-6 py-2.5 rounded-lg hover:bg-[#A88B3D] transition-all duration-200 hover:scale-[1.02] shadow-[0_2px_12px_rgba(196,163,90,0.3)]"
              >
                Contactanos
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-[#1A2E1A]' : 'text-white'
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0F1F0F] transition-transform duration-500 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMobileOpen(false)} className="text-white p-2">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-display font-medium hover:text-[#C4A35A] transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 mt-8">
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold px-8 py-3 rounded-full"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <Link
              to="/contacto"
              onClick={() => setMobileOpen(false)}
              className="bg-[#C4A35A] text-white font-body font-semibold px-8 py-3 rounded-lg"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
