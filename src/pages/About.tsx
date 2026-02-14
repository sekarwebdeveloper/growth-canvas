import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Zap, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  { icon: Award, title: "Proven Track Record", description: "400+ successful projects delivered across industries." },
  { icon: Users, title: "Expert Team", description: "45+ skilled professionals dedicated to your growth." },
  { icon: Zap, title: "Innovative Solutions", description: "Cutting-edge strategies tailored to your business." },
  { icon: Shield, title: "Transparent Process", description: "Clear communication and reporting at every step." },
];

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder" },
  { name: "Michael Chen", role: "Head of Marketing" },
  { name: "Emily Rodriguez", role: "Lead Designer" },
  { name: "David Kim", role: "Tech Director" },
];

const About = () => {
  return (
    <main>
      <PageHero title="About ServiceCare" subtitle="Empowering businesses with innovative digital solutions since 2015." />

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <img src={aboutTeam} alt="Our team" className="rounded-xl w-full" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Story</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Building Digital Success Stories
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Founded in 2015, ServiceCare began with a simple mission: help businesses navigate the digital landscape with confidence.
                What started as a small team of passionate marketers has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today, we combine creativity, technology, and data-driven insights to deliver strategies that drive real growth.
                Our integrated approach ensures every aspect of your digital presence works together seamlessly.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="card-elevated p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To empower businesses of all sizes with innovative digital marketing solutions that deliver measurable results and sustainable growth.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="card-elevated p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To be the most trusted digital marketing partner for businesses worldwide, known for innovation, integrity, and exceptional results.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">What Sets Us Apart</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="card-elevated p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <f.icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Team</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Meet the Experts</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="card-elevated overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <Users size={48} className="text-muted-foreground/40" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-overlay section-padding">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Let's discuss how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
