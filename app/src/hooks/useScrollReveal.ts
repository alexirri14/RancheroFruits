import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  threshold?: number;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const revealed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 30,
      x = 0,
      duration = 0.6,
      delay = 0,
      stagger = 0.1,
      threshold = 0.15,
      scale,
    } = options;

    const children = el.children.length > 1 ? Array.from(el.children) : [el];

    if (!revealed.current) {
      gsap.set(children, {
        y,
        x,
        opacity: 0,
        ...(scale !== undefined ? { scale } : {}),
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(children, {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              duration,
              delay,
              stagger,
              ease: 'power2.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [JSON.stringify(options)]);

  return ref;
}
