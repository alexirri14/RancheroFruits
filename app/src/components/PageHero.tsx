import { Link } from 'react-router';
interface PageHeroProps {
  title: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export default function PageHero({ title, breadcrumb, backgroundImage = '/RancheroFruits/images/Logo-1.jpeg' }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(15,31,15,0.75) 0%, rgba(15,31,15,0.45) 50%, rgba(15,31,15,0.65) 100%)',
        }}
      />
      <div className="relative z-10 text-center px-6">
        <h1
          className="font-display font-semibold text-white leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          {title}
        </h1>
        <p className="text-[15px] font-body text-white/70 mt-4">
          <Link to="/" className="hover:text-[#C4A35A] transition-colors">Inicio</Link>
          {' / '}
          {breadcrumb}
        </p>
      </div>
    </section>
  );
}
