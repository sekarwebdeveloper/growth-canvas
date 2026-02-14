import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceShopify from "@/assets/service-shopify.jpg";

const services = [
  {
    title: "Web Development",
    image: serviceWeb,
    description: "We build high-performance, responsive websites and web applications using modern technologies. Our development process focuses on user experience, speed, and scalability to ensure your digital presence drives results.",
    points: ["Custom responsive design & development", "E-commerce & CMS solutions", "Progressive Web Apps (PWA)", "Performance optimization & maintenance"],
  },
  {
    title: "Search Engine Optimization",
    image: serviceSeo,
    description: "Our data-driven SEO strategies help your website rank higher in search results, driving organic traffic and qualified leads. We focus on sustainable, white-hat techniques that deliver long-term growth.",
    points: ["Technical SEO audit & optimization", "Keyword research & content strategy", "Link building & authority development", "Local SEO & Google Business optimization"],
  },
  {
    title: "Video Editing",
    image: serviceVideo,
    description: "From corporate videos to social media content, our video editing team creates compelling visual stories that engage your audience and communicate your brand message effectively.",
    points: ["Professional video editing & post-production", "Motion graphics & animation", "Social media video content", "Brand storytelling & corporate videos"],
  },
  {
    title: "Graphic Designing",
    image: serviceDesign,
    description: "Our creative team delivers stunning visual designs that strengthen your brand identity. From logos to marketing materials, we ensure every design element aligns with your brand vision.",
    points: ["Brand identity & logo design", "Marketing collateral & print design", "UI/UX design for web & mobile", "Social media graphics & templates"],
  },
  {
    title: "Digital Marketing",
    image: serviceMarketing,
    description: "We create comprehensive digital marketing campaigns that reach your target audience across multiple channels. Our strategies are backed by data and optimized for maximum ROI.",
    points: ["PPC advertising & campaign management", "Social media marketing & management", "Email marketing & automation", "Analytics & conversion optimization"],
  },
  {
    title: "Shopify Development",
    image: serviceShopify,
    description: "Launch and grow your e-commerce business with our expert Shopify development services. We handle everything from store setup to custom theme development and app integrations.",
    points: ["Custom Shopify theme development", "Store setup & product configuration", "App integration & customization", "Performance optimization & migration"],
  },
];

const Services = () => {
  return (
    <main>
      <PageHero title="Our Services" subtitle="Digital Services That Drive Real Growth" />

      <section className="section-padding">
        <div className="container-main space-y-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={service.title} className="grid items-center gap-12 md:grid-cols-2">
                <ScrollReveal direction={isEven ? "left" : "right"} className={isEven ? "" : "md:order-2"}>
                  <img src={service.image} alt={service.title} className="rounded-xl w-full" />
                </ScrollReveal>
                <ScrollReveal direction={isEven ? "right" : "left"} className={isEven ? "" : "md:order-1"}>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">{service.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            );
          })}
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

export default Services;
