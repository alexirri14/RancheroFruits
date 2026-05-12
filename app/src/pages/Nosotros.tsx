import { Link } from 'react-router';
import { Target, Eye, Star, Handshake, Heart, Lightbulb, TreePine } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Quienes Somos ─── */
function AboutFullSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <section className="bg-[#F7F5F0] py-24 lg:py-28">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          <div>
            <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
              NUESTRA HISTORIA
            </p>
            <h2
              className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Quienes Somos
            </h2>
            <p className="text-[17px] font-body text-[#5C6B5C] leading-[1.7] mb-6">
              Somos una empresa peruana dedicada al procesamiento, acondicionamiento y comercializacion de frutas y hortalizas frescas. Nacimos con la vision de conectar los mejores productos del campo peruano con el mundo, ofreciendo servicios integrales que abarcan desde la maquila hasta la exportacion. Contamos con instalaciones modernas, personal capacitado y certificaciones internacionales que garantizan la calidad en cada etapa del proceso.
            </p>
          </div>
          <div>
            <img
              src="/images/about-valley.jpg"
              alt="Valle agricola peruano"
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-[0_8px_32px_rgba(26,46,26,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mision y Vision ─── */
function MissionVisionSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, scale: 0.95 });

  return (
    <section className="bg-white py-24 lg:py-28">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mision */}
          <div className="bg-[#F7F5F0] rounded-xl p-10">
            <Target size={48} className="text-[#C4A35A] mb-5" />
            <h3 className="font-display font-semibold text-2xl text-[#1A2E1A] mb-4">
              Nuestra Mision
            </h3>
            <p className="text-[17px] font-body text-[#5C6B5C] leading-relaxed">
              Brindar soluciones integrales de procesamiento y comercializacion de productos agricolas frescos bajo estandares de calidad internacional, satisfaciendo las necesidades de nuestros clientes con eficiencia, responsabilidad y compromiso.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F7F5F0] rounded-xl p-10">
            <Eye size={48} className="text-[#C4A35A] mb-5" />
            <h3 className="font-display font-semibold text-2xl text-[#1A2E1A] mb-4">
              Nuestra Vision
            </h3>
            <p className="text-[17px] font-body text-[#5C6B5C] leading-relaxed">
              Ser una empresa lider en servicios agroexportadores y packing en el mercado nacional e internacional, reconocida por la calidad de nuestros productos, la excelencia en nuestros servicios y nuestro compromiso con la sostenibilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Valores ─── */
const values = [
  { icon: Star, title: 'Calidad', desc: 'Excelencia en cada proceso y producto.' },
  { icon: Handshake, title: 'Responsabilidad', desc: 'Cumplimiento y confianza con nuestros clientes.' },
  { icon: Heart, title: 'Compromiso', desc: 'Dedicacion total a la satisfaccion del cliente.' },
  { icon: Lightbulb, title: 'Innovacion', desc: 'Mejora continua de nuestros procesos.' },
  { icon: TreePine, title: 'Sostenibilidad', desc: 'Cuidado del medio ambiente y las comunidades.' },
];

function ValuesSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <section className="bg-[#F7F5F0] py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
            NUESTROS PRINCIPIOS
          </p>
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Valores Corporativos
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-xl p-8 text-center hover:shadow-[0_4px_24px_rgba(26,46,26,0.08)] transition-shadow duration-300"
            >
              <val.icon size={40} className="text-[#C4A35A] mx-auto mb-4" />
              <h3 className="font-body font-semibold text-xl text-[#1A2E1A] mb-2">
                {val.title}
              </h3>
              <p className="text-[15px] font-body text-[#5C6B5C]">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Modelo de Negocio ─── */
function BusinessModelSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <section className="bg-white py-24 lg:py-28">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/images/about-team.jpg"
              alt="Equipo de trabajo de RancheroFruits"
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-[0_8px_32px_rgba(26,46,26,0.12)]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
              COMO TRABAJAMOS
            </p>
            <h2
              className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Modelo de Negocio
            </h2>
            <p className="text-[17px] font-body text-[#5C6B5C] leading-[1.7] mb-6">
              La empresa brinda soluciones integrales de procesamiento y acondicionamiento de frutas y hortalizas frescas para el mercado nacional e internacional. Ademas de ofrecer productos terminados de calidad exportacion, tambien brinda servicios de maquila para empresas que requieran procesar su propia materia prima bajo estandares profesionales. Nuestro modelo se basa en la flexibilidad, la calidad garantizada y la atencion personalizada a cada cliente.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-[#C4A35A] text-white font-body font-semibold text-[15px] px-8 py-3 rounded-lg hover:bg-[#A88B3D] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(196,163,90,0.4)]"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Nosotros Page ─── */
export default function Nosotros() {
  return (
    <>
      <PageHero title="Sobre Nosotros" breadcrumb="Nosotros" />
      <AboutFullSection />
      <MissionVisionSection />
      <ValuesSection />
      <BusinessModelSection />
    </>
  );
}
