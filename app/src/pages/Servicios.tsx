import { Link } from 'react-router';
import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const maquilaSteps = [
  { number: 1, name: 'Recepcion' },
  { number: 2, name: 'Muestreo' },
  { number: 3, name: 'Pesado' },
  { number: 4, name: 'Clasificado' },
  { number: 5, name: 'Empaquetado' },
  { number: 6, name: 'Almacenado' },
  { number: 7, name: 'Despacho' },
];

/* ─── Servicio de Maquila ─── */
function MaquilaSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const stepsRef = useScrollReveal<HTMLDivElement>({ y: 20, stagger: 0.1 });

  return (
    <section className="bg-[#F7F5F0] py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div ref={headerRef} className="text-center max-w-[720px] mx-auto mb-16">
          <p className="text-[13px] font-body font-medium uppercase tracking-[0.04em] text-[#C4A35A] mb-3">
            SERVICIO ESTRELLA
          </p>
          <h2
            className="font-display font-semibold text-[#1A2E1A] leading-[1.15] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Servicio de Maquila
          </h2>
          <p className="text-[17px] font-body text-[#5C6B5C] leading-relaxed">
            La empresa ofrece servicios de maquila para companias que requieren procesar y acondicionar su materia prima para exportacion o comercializacion. Gestionamos todo el proceso con estandares de calidad internacional.
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="relative">
          {/* Desktop: Horizontal */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-7 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-[#D4CFC4]" />

            {maquilaSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#E8F0E8] border-2 border-[#C4A35A] flex items-center justify-center hover:bg-[#C4A35A] hover:text-white hover:scale-105 transition-all duration-200 cursor-default group">
                  <span className="font-body font-semibold text-lg text-[#1A2E1A] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>
                <p className="mt-3 font-body font-semibold text-[15px] text-[#1A2E1A] text-center">
                  {step.name}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {maquilaSteps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8F0E8] border-2 border-[#C4A35A] flex items-center justify-center">
                  <span className="font-body font-semibold text-lg text-[#1A2E1A]">
                    {step.number}
                  </span>
                </div>
                <p className="mt-2 font-body font-semibold text-[15px] text-[#1A2E1A]">
                  {step.name}
                </p>
                {index < maquilaSteps.length - 1 && (
                  <div className="w-0.5 h-6 bg-[#D4CFC4] mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─── Servicios Page ─── */
export default function Servicios() {
  return (
    <>
      <PageHero title="Nuestros Servicios" breadcrumb="Servicios" />
      <MaquilaSection />
    </>
  );
}
