import { useEffect, useRef } from "react";
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
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";

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
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div ref={heroRef} className="container-main relative z-10 py-32">
          <div className="max-w-3xl">
            <h1 className="hero-animate text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
              Grow Your Business with{" "}
              <span className="text-gradient">Result-Driven</span> Digital Marketing
            </h1>
            <p className="hero-animate mt-6 text-lg text-primary-foreground/80 md:text-xl max-w-xl">
              We help brands scale with powerful web solutions and marketing strategies.
            </p>
            <div className="hero-animate mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <img src={aboutTeam} alt="Our team" className="rounded-xl w-full" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Your Partner in Digital Growth
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                ServiceCare is a full-service digital marketing agency dedicated to helping businesses thrive online.
                With a team of 45+ experts, we combine creativity with data-driven strategies to deliver measurable results.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Learn More
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
          <div className="grid gap-8 sm:grid-cols-3">
            <Counter end={400} suffix="+" label="Projects Completed" />
            <Counter end={45} label="Team Members" />
            <Counter end={100} suffix="+" label="Happy Clients" />
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
                Ready to take your digital presence to the next level? Let's talk.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                Contact Us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
