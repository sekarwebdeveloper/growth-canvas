import { useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Search,
  Video,
  Palette,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Counter from "@/components/Counter";
import ScrollReveal from "@/components/ScrollReveal";
import aboutTeam from "@/assets/about-team.jpg";

const HeroCanvas = lazy(() => import("@/components/HeroCanvas"));

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Globe, title: "Web Development", description: "Custom websites and web applications built with modern technologies for performance and scalability." },
  { icon: Search, title: "Search Engine Optimization", description: "Data-driven SEO strategies to boost your organic visibility and drive qualified traffic." },
  { icon: Video, title: "Video Editing", description: "Professional video production and editing that tells your brand story compellingly." },
  { icon: Palette, title: "Graphic Designing", description: "Eye-catching visual designs that strengthen your brand identity across all platforms." },
  { icon: TrendingUp, title: "Digital Marketing", description: "Comprehensive digital strategies including PPC, social media, and content marketing." },
  { icon: ShoppingBag, title: "Shopify Development", description: "End-to-end Shopify store setup, customization, and optimization for e-commerce success." },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current.querySelectorAll(".hero-animate"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: "power4.out" }
    );
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "hsl(215, 65%, 10%)" }}>
        {/* Three.js WebGL background */}
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-transparent pointer-events-none" />

        <div ref={heroRef} className="container-main relative z-10 py-36">
          <div className="max-w-3xl">
            <div className="hero-animate mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent">
              🚀 Full-Service Digital Agency
            </div>
            <h1 className="hero-animate text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
              Grow Your Business with{" "}
              <span className="text-gradient">Result-Driven</span> Digital Marketing
            </h1>
            <p className="hero-animate mt-6 text-lg text-primary-foreground/75 md:text-xl max-w-xl">
              We help brands scale with powerful web solutions, creative content, and data-driven marketing strategies that deliver measurable ROI.
            </p>
            <div className="hero-animate mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link
                to="/services"
                className="rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                View Services
              </Link>
            </div>
            {/* Trust badges */}
            <div className="hero-animate mt-12 flex flex-wrap items-center gap-6 text-primary-foreground/50 text-xs">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                400+ Projects Delivered
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                100+ Happy Clients
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                10 Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/40 text-xs">
          <div className="h-8 w-5 rounded-full border border-primary-foreground/20 flex items-start justify-center pt-1.5">
            <div className="h-1.5 w-1 rounded-full bg-accent animate-bounce" />
          </div>
          Scroll
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={aboutTeam} alt="Our team" className="rounded-xl w-full" />
                <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-center justify-center h-28 w-28 rounded-2xl bg-accent text-accent-foreground shadow-2xl">
                  <span className="text-3xl font-black">10</span>
                  <span className="text-xs font-semibold text-center leading-tight">Years Experience</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Your Partner in Digital Growth
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                ServiceCare is a full-service digital marketing agency dedicated to helping businesses thrive online.
                With a team of 45+ experts across design, development, and marketing, we combine creativity with data-driven strategies to deliver measurable results that matter.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                From ambitious startups to established enterprises, we tailor every strategy to your unique goals and market.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Learn More About Us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">What We Do</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
            <p className="mt-3 mx-auto max-w-xl text-muted-foreground">
              End-to-end digital solutions designed to grow your brand, attract your audience, and drive revenue.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">By the Numbers</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Impact in Numbers</h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Counter end={400} suffix="+" label="Projects Completed" />
            <Counter end={45} suffix="+" label="Team Members" />
            <Counter end={100} suffix="+" label="Happy Clients" />
            <Counter end={10} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">What Our Clients Say</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "James Carter", role: "CEO, TechVentures", quote: "ServiceCare transformed our online presence completely. Our organic traffic grew by 280% within 6 months of their SEO campaign." },
              { name: "Priya Sharma", role: "Founder, ShopLuxe", quote: "The Shopify store they built for us is absolutely stunning. Conversions doubled within the first month after launch. Exceptional team!" },
              { name: "Marcus Williams", role: "Marketing Director, Nexus", quote: "Their digital marketing campaigns are incredibly effective. We saw a 3.5x ROAS on our Google Ads within the first quarter." },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <div className="card-elevated p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28 lg:px-16">
        <div className="container-main">
          <div className="hero-overlay rounded-[15px] px-8 py-16 md:px-16 md:py-24 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Let's Build Something Amazing Together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Ready to take your digital presence to the next level? Let's talk about your goals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
                >
                  Contact Us Today
                </Link>
                <Link
                  to="/services"
                  className="inline-block rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
