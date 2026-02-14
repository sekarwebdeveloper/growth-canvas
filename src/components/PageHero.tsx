import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="hero-overlay pt-32 pb-20 md:pt-40 md:pb-28">
      <div ref={ref} className="container-main text-center">
        <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
