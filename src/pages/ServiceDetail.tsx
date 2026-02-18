import { useParams, Link, Navigate } from "react-router-dom";
import { Globe, Search, Video, Palette, TrendingUp, ShoppingBag, CheckCircle2, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceShopify from "@/assets/service-shopify.jpg";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  image: string;
  overview: string;
  description: string;
  points: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "web-development": {
    title: "Web Development",
    subtitle: "High-Performance Websites Built for Results",
    icon: Globe,
    image: serviceWeb,
    overview: "We craft custom, high-performance websites and web applications that drive business growth. Our development process is focused on user experience, speed, and scalability.",
    description: "Your website is your most powerful digital asset. We build fast, responsive, and visually stunning websites that are designed to convert visitors into customers. From simple landing pages to complex web applications, our team delivers solutions tailored to your exact business needs using the latest technologies.",
    points: [
      "Custom responsive design & development",
      "E-commerce & CMS solutions (Shopify, WordPress)",
      "Progressive Web Apps (PWA)",
      "Performance optimization & Core Web Vitals",
      "SEO-ready architecture & semantic HTML",
      "Ongoing maintenance & support packages",
    ],
    process: [
      { step: "01", title: "Discovery & Planning", desc: "We analyze your business goals, target audience, and competitors to create a solid project roadmap." },
      { step: "02", title: "Design & Prototyping", desc: "Our designers create wireframes and high-fidelity mockups that align with your brand identity." },
      { step: "03", title: "Development", desc: "We build your website using modern, clean code with a focus on performance and accessibility." },
      { step: "04", title: "Testing & Launch", desc: "Rigorous testing across all devices and browsers ensures a flawless launch experience." },
    ],
    faqs: [
      { q: "How long does a website project take?", a: "A standard website typically takes 4–8 weeks. Complex web applications may take 3–6 months depending on scope." },
      { q: "Do you provide ongoing support?", a: "Yes, we offer monthly maintenance packages including updates, security patches, and performance monitoring." },
      { q: "Will my website be mobile-friendly?", a: "Absolutely. All websites we build are fully responsive and optimized for mobile, tablet, and desktop." },
    ],
  },
  "seo": {
    title: "Search Engine Optimization",
    subtitle: "Rank Higher, Drive More Qualified Traffic",
    icon: Search,
    image: serviceSeo,
    overview: "Our data-driven SEO strategies help your website rank higher in search results, driving organic traffic and qualified leads consistently.",
    description: "In today's digital landscape, being found online is everything. Our SEO experts use proven, white-hat techniques to boost your search rankings and drive sustainable organic growth. We take a holistic approach — from technical audits to content strategy — ensuring every element of your site works to attract and convert your ideal customers.",
    points: [
      "Comprehensive technical SEO audit & fixes",
      "In-depth keyword research & competitive analysis",
      "On-page optimization & content strategy",
      "High-quality link building & authority development",
      "Local SEO & Google Business Profile optimization",
      "Monthly performance reporting & strategy refinement",
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "We perform a full technical and content audit to identify opportunities and critical issues." },
      { step: "02", title: "Strategy Development", desc: "Based on audit findings, we build a custom SEO roadmap aligned with your business goals." },
      { step: "03", title: "Implementation", desc: "Our team executes on-page, off-page, and technical optimizations systematically." },
      { step: "04", title: "Monitor & Refine", desc: "We track rankings, traffic, and conversions monthly and continuously refine our approach." },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Most clients see noticeable improvements within 3–6 months, with significant results in 6–12 months." },
      { q: "Do you use white-hat SEO techniques?", a: "Yes, exclusively. We follow Google's guidelines and never use black-hat tactics that could harm your site." },
      { q: "What does your monthly reporting include?", a: "Reports include keyword ranking changes, organic traffic data, backlink growth, and actionable next steps." },
    ],
  },
  "video-editing": {
    title: "Video Editing",
    subtitle: "Compelling Visual Stories That Engage Your Audience",
    icon: Video,
    image: serviceVideo,
    overview: "From corporate videos to viral social content, our video editing team transforms raw footage into compelling stories that captivate your audience.",
    description: "Video is the most engaging content format online. Our creative video editing team combines storytelling, visual effects, and precision editing to produce videos that not only look stunning but achieve your marketing objectives. Whether you need polished corporate presentations or punchy social media reels, we deliver quality that sets your brand apart.",
    points: [
      "Professional video editing & color grading",
      "Motion graphics & 2D/3D animation",
      "Social media reels & short-form content",
      "Corporate videos & brand storytelling",
      "YouTube channel content & thumbnails",
      "Subtitles, captions & multi-language support",
    ],
    process: [
      { step: "01", title: "Brief & Concept", desc: "We discuss your goals, audience, and vision to develop a creative concept and shot list." },
      { step: "02", title: "Editing & Assembly", desc: "Raw footage is assembled, trimmed, and structured into a compelling narrative." },
      { step: "03", title: "Motion & Sound Design", desc: "We add graphics, transitions, sound effects, and music to elevate the final piece." },
      { step: "04", title: "Revisions & Delivery", desc: "After your review, we refine and deliver the final video in your required formats and resolutions." },
    ],
    faqs: [
      { q: "What video formats do you deliver in?", a: "We deliver in MP4, MOV, AVI, and platform-optimized formats for YouTube, Instagram, TikTok, and more." },
      { q: "How many revision rounds are included?", a: "Standard packages include 2 rounds of revisions. Additional rounds can be added as needed." },
      { q: "Can you add subtitles and captions?", a: "Yes, we offer subtitle and caption services in multiple languages to maximize your video's reach." },
    ],
  },
  "graphic-designing": {
    title: "Graphic Designing",
    subtitle: "Visual Designs That Strengthen Your Brand Identity",
    icon: Palette,
    image: serviceDesign,
    overview: "Our creative team delivers stunning visual designs that communicate your brand's personality and leave a lasting impression on your audience.",
    description: "Great design is more than aesthetics — it's about communication. Our graphic design team creates visual assets that tell your brand story, build trust, and drive action. From logo design to complete brand identity systems, every design decision is strategic and purposeful, ensuring consistency and impact across all touchpoints.",
    points: [
      "Brand identity & logo design systems",
      "Marketing collateral — brochures, flyers, banners",
      "UI/UX design for web & mobile apps",
      "Social media graphics & template systems",
      "Packaging & print design",
      "Infographics & data visualization",
    ],
    process: [
      { step: "01", title: "Brand Discovery", desc: "We learn about your brand values, target audience, and design preferences through a detailed brief." },
      { step: "02", title: "Concept Development", desc: "Our designers create multiple concept directions for you to explore and choose from." },
      { step: "03", title: "Design Refinement", desc: "Your chosen concept is refined based on your feedback until it perfectly represents your brand." },
      { step: "04", title: "Final Delivery", desc: "All files are delivered in print-ready and digital formats (AI, PDF, PNG, SVG, etc.)." },
    ],
    faqs: [
      { q: "What file formats will I receive?", a: "You'll receive all final files in both print-ready (PDF, AI, EPS) and digital (PNG, SVG, JPG) formats." },
      { q: "Do I own the design files?", a: "Yes, upon final payment you receive full ownership of all design files and assets." },
      { q: "How many logo concepts will I see?", a: "We typically present 3 initial logo concepts for you to choose from and build upon." },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Data-Driven Campaigns That Maximize ROI",
    icon: TrendingUp,
    image: serviceMarketing,
    overview: "We create and manage comprehensive digital marketing campaigns that reach your target audience across all the right channels with precision.",
    description: "Reaching the right audience at the right time with the right message is the cornerstone of effective digital marketing. Our team builds and manages integrated campaigns across paid advertising, social media, email, and content marketing — all tied together with robust analytics to ensure maximum return on your marketing investment.",
    points: [
      "PPC advertising — Google Ads & Meta Ads",
      "Social media marketing & community management",
      "Email marketing & automation sequences",
      "Content marketing & blog strategy",
      "Analytics, tracking & conversion rate optimization",
      "Influencer marketing & partnership outreach",
    ],
    process: [
      { step: "01", title: "Audience & Market Research", desc: "We define your ideal customer profile and identify the best channels and messaging to reach them." },
      { step: "02", title: "Campaign Strategy", desc: "A comprehensive, multi-channel strategy is developed with clear KPIs and budget allocation." },
      { step: "03", title: "Launch & Management", desc: "Campaigns are launched and actively managed, with daily monitoring and real-time optimization." },
      { step: "04", title: "Reporting & Scaling", desc: "Monthly reports detail performance, and successful campaigns are scaled for greater impact." },
    ],
    faqs: [
      { q: "What's a realistic budget for paid advertising?", a: "We work with budgets of all sizes. We recommend a minimum of $500/month ad spend to see meaningful results." },
      { q: "Which social media platforms do you manage?", a: "We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and Pinterest." },
      { q: "How do you measure campaign success?", a: "We track KPIs like ROAS, CPA, CTR, conversions, and revenue — all reported clearly every month." },
    ],
  },
  "shopify-development": {
    title: "Shopify Development",
    subtitle: "E-Commerce Stores Built to Sell",
    icon: ShoppingBag,
    image: serviceShopify,
    overview: "We build and optimize powerful Shopify stores that are designed to convert visitors into loyal customers and scale your e-commerce business.",
    description: "Your Shopify store is the engine of your online business. Our Shopify experts handle everything from initial store setup to custom theme development, app integrations, and ongoing optimization. We focus on creating a seamless shopping experience that maximizes conversions and average order value, helping your e-commerce business grow consistently.",
    points: [
      "Custom Shopify theme design & development",
      "Store setup, product configuration & collections",
      "App integration — payments, reviews, upsells",
      "Shopify migration from other platforms",
      "Performance optimization & speed improvements",
      "Conversion rate optimization & A/B testing",
    ],
    process: [
      { step: "01", title: "Store Strategy", desc: "We analyze your products, target market, and goals to design the optimal store structure and UX." },
      { step: "02", title: "Design & Theme", desc: "A custom or premium theme is designed and built to perfectly match your brand identity." },
      { step: "03", title: "Setup & Integration", desc: "Products, collections, payments, shipping, and third-party apps are configured and integrated." },
      { step: "04", title: "Launch & Optimize", desc: "After thorough testing, your store goes live — and we continue optimizing for conversions." },
    ],
    faqs: [
      { q: "Can you migrate my existing store to Shopify?", a: "Yes, we handle full migrations from WooCommerce, Magento, BigCommerce, and other platforms, preserving your data." },
      { q: "Do I need a Shopify subscription?", a: "Yes, you'll need a Shopify plan (starting from $39/month). We help you choose the right plan for your needs." },
      { q: "Can you build a custom theme from scratch?", a: "Absolutely. We build fully custom Shopify themes tailored to your brand for a truly unique shopping experience." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !servicesData[slug]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[slug];
  const Icon = service.icon;

  const otherServices = Object.entries(servicesData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main>
      <PageHero title={service.title} subtitle={service.subtitle} />

      {/* Overview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <img src={service.image} alt={service.title} className="rounded-xl w-full shadow-lg" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <Icon size={32} />
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                Get a Free Quote
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How We Work</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="card-elevated p-6 h-full">
                  <span className="text-4xl font-black text-accent/20">{step.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-4">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-elevated p-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Explore More</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Other Services</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {otherServices.map(([key, svc], i) => {
              const OtherIcon = svc.icon;
              return (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <Link
                    to={`/services/${key}`}
                    className="card-elevated p-6 flex flex-col gap-4 group hover:border-accent/40 transition-all duration-300 block"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <OtherIcon size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground">{svc.overview}</p>
                    <span className="text-sm font-semibold text-accent">Learn More →</span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <ArrowLeft size={16} />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28 lg:px-16">
        <div className="container-main">
          <div className="hero-overlay rounded-[15px] px-8 py-16 md:px-16 md:py-24 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Let's discuss how our {service.title} services can help grow your business.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-block rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  All Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
