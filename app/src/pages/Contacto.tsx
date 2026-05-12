import { useState } from 'react';
import { MapPin, Mail, MessageCircle, Facebook, Instagram, Linkedin, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Contact Form ─── */
function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    setSubmitted(true);
    setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-xl p-8 lg:p-10">
      <h3 className="font-display font-medium text-2xl text-[#1A2E1A] mb-6">
        Envianos un mensaje
      </h3>

      {submitted && (
        <div className="flex items-center gap-3 bg-[#E8F0E8] text-[#2D8A4E] rounded-lg p-4 mb-6">
          <Check size={20} />
          <span className="text-[15px] font-body font-medium">
            Gracias por contactarnos. Te responderemos pronto.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-[14px] font-body font-medium text-[#1A2E1A] mb-1.5">
            Nombre completo *
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border-[1.5px] border-[#D4CFC4] rounded-lg px-4 py-3 text-[15px] font-body text-[#1A2E1A] placeholder:text-[#5C6B5C]/50 focus:border-[#C4A35A] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,163,90,0.15)] transition-all"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-[14px] font-body font-medium text-[#1A2E1A] mb-1.5">
            Correo electronico *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-[1.5px] border-[#D4CFC4] rounded-lg px-4 py-3 text-[15px] font-body text-[#1A2E1A] placeholder:text-[#5C6B5C]/50 focus:border-[#C4A35A] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,163,90,0.15)] transition-all"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-[14px] font-body font-medium text-[#1A2E1A] mb-1.5">
            Telefono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border-[1.5px] border-[#D4CFC4] rounded-lg px-4 py-3 text-[15px] font-body text-[#1A2E1A] placeholder:text-[#5C6B5C]/50 focus:border-[#C4A35A] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,163,90,0.15)] transition-all"
            placeholder="+51 999 999 999"
          />
        </div>
        <div>
          <label className="block text-[14px] font-body font-medium text-[#1A2E1A] mb-1.5">
            Empresa (opcional)
          </label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full border-[1.5px] border-[#D4CFC4] rounded-lg px-4 py-3 text-[15px] font-body text-[#1A2E1A] placeholder:text-[#5C6B5C]/50 focus:border-[#C4A35A] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,163,90,0.15)] transition-all"
            placeholder="Nombre de tu empresa"
          />
        </div>
        <div>
          <label className="block text-[14px] font-body font-medium text-[#1A2E1A] mb-1.5">
            Mensaje *
          </label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border-[1.5px] border-[#D4CFC4] rounded-lg px-4 py-3 text-[15px] font-body text-[#1A2E1A] placeholder:text-[#5C6B5C]/50 focus:border-[#C4A35A] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,163,90,0.15)] transition-all resize-none"
            placeholder="Escribe tu mensaje..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#C4A35A] text-white font-body font-semibold text-[15px] py-3.5 rounded-lg hover:bg-[#A88B3D] transition-all duration-200"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

/* ─── Contact Info ─── */
function ContactInfo() {
  return (
    <div>
      <h3 className="font-display font-medium text-2xl text-[#1A2E1A] mb-6">
        Informacion de contacto
      </h3>

      {/* WhatsApp */}
      <div className="bg-white rounded-xl p-7 mb-5 border-l-4 border-[#25D366]">
        <h4 className="font-body font-semibold text-xl text-[#1A2E1A] mb-2">
          WhatsApp
        </h4>
        <p className="text-[17px] font-body text-[#1A2E1A] mb-1">+51 999 999 999</p>
        <p className="text-[15px] font-body text-[#5C6B5C] mb-4">
          Escanea el codigo QR o haz clic para chatear
        </p>
        {/* QR Placeholder */}
        <div className="w-[160px] h-[160px] bg-[#F7F5F0] rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="text-center">
            <MessageCircle size={40} className="text-[#25D366] mx-auto mb-2" />
            <span className="text-[11px] font-body text-[#5C6B5C]">QR WhatsApp</span>
          </div>
        </div>
        <a
          href="https://wa.me/51999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold text-[14px] px-5 py-2.5 rounded-lg hover:bg-[#128C7E] transition-colors"
        >
          <MessageCircle size={16} />
          Chatear por WhatsApp
        </a>
      </div>

      {/* Email */}
      <div className="bg-white rounded-xl p-6 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <Mail size={20} className="text-[#C4A35A]" />
          <h4 className="font-body font-semibold text-lg text-[#1A2E1A]">
            Correo electronico
          </h4>
        </div>
        <p className="text-[17px] font-body text-[#1A2E1A]">info@rancherofruits.com</p>
      </div>

      {/* Address */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <MapPin size={20} className="text-[#C4A35A]" />
          <h4 className="font-body font-semibold text-lg text-[#1A2E1A]">
            Direccion
          </h4>
        </div>
        <p className="text-[17px] font-body text-[#1A2E1A]">Paijan, La Libertad, Peru</p>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="font-body font-semibold text-lg text-[#1A2E1A] mb-4">
          Siguenos
        </h4>
        <div className="flex items-center gap-3">
          {[Facebook, Instagram, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-[#E8F0E8] rounded-full flex items-center justify-center text-[#1A2E1A] hover:bg-[#C4A35A] hover:text-white transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Google Maps ─── */
function MapSection() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.04476252486!2d-77.15258865!3d-12.0262548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sPaijan%2C%20La%20Libertad%2C%20Peru!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0, filter: 'grayscale(20%)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicacion de RancheroFruits en La libertad, Peru"
        className="border-y border-[#D4CFC4]"
      />
    </section>
  );
}

/* ─── Contacto Page ─── */
export default function Contacto() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <>
      <PageHero title="Contactanos" breadcrumb="Contacto" />
      <section className="bg-[#F7F5F0] py-24 lg:py-28">
        <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
}
