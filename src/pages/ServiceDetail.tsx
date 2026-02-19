import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Globe, Search, Video, Palette, TrendingUp, ShoppingBag, CheckCircle2, ChevronDown, Star, ArrowRight } from "lucide-react";
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
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  stats: { value: string; label: string }[];
}> = {
  "web-development": {
    title: "Web Development",
    subtitle: "High-Performance Websites Built for Results",
    icon: Globe,
    image: serviceWeb,
    overview: "We craft custom, high-performance websites and web applications that drive business growth.",
    description: "Your website is your most powerful digital asset. We build fast, responsive, and visually stunning websites that are designed to convert visitors into customers. From simple landing pages to complex web applications, our team delivers solutions tailored to your exact business needs using the latest technologies like React, Next.js, and more.",
    points: [
      "Custom responsive design & development",
      "E-commerce & CMS solutions (Shopify, WordPress)",
      "Progressive Web Apps (PWA)",
      "Performance optimization & Core Web Vitals",
      "SEO-ready architecture & semantic HTML",
      "Ongoing maintenance & support packages",
    ],
    benefits: [
      { title: "Lightning Fast", desc: "Optimized for speed with 95+ PageSpeed scores to keep visitors engaged and improve SEO." },
      { title: "Conversion Focused", desc: "Every design decision is made to guide users toward your business goals and drive action." },
      { title: "Scalable Architecture", desc: "Built to grow with your business — no need to rebuild when you scale." },
      { title: "Fully Secure", desc: "SSL, security headers, and best-practice implementations keep your site and users safe." },
    ],
    process: [
      { step: "01", title: "Discovery & Planning", desc: "We analyze your business goals, target audience, and competitors to create a solid project roadmap." },
      { step: "02", title: "Design & Prototyping", desc: "Our designers create wireframes and high-fidelity mockups that align with your brand identity." },
      { step: "03", title: "Development", desc: "We build your website using modern, clean code with a focus on performance and accessibility." },
      { step: "04", title: "Testing & Launch", desc: "Rigorous testing across all devices and browsers ensures a flawless launch experience." },
    ],
    faqs: [
      { q: "How long does a website project take?", a: "A standard brochure website typically takes 4–8 weeks from kickoff to launch. E-commerce sites take 8–12 weeks, and complex web applications may take 3–6 months depending on the scope and feature requirements." },
      { q: "Do you provide ongoing support after launch?", a: "Yes, we offer flexible monthly maintenance packages that include software updates, security patches, performance monitoring, content updates, and technical support. Plans start from $99/month." },
      { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is fully responsive and thoroughly tested across all major devices, screen sizes, and browsers including iOS, Android, Chrome, Firefox, Safari, and Edge." },
      { q: "What technologies do you use for web development?", a: "We work with modern tech stacks including React, Next.js, TypeScript, Node.js, and various CMS platforms. We recommend the best technology based on your project requirements, scalability needs, and budget." },
      { q: "Can you redesign my existing website?", a: "Yes, website redesigns are one of our specialties. We conduct a full audit of your existing site, preserve what works, and rebuild with improved UX, design, and performance while protecting your existing SEO rankings." },
    ],
    stats: [
      { value: "95+", label: "Average PageSpeed Score" },
      { value: "150+", label: "Websites Launched" },
      { value: "40%", label: "Avg. Conversion Lift" },
      { value: "48hr", label: "Response Time" },
    ],
  },
  "seo": {
    title: "Search Engine Optimization",
    subtitle: "Rank Higher, Drive More Qualified Traffic",
    icon: Search,
    image: serviceSeo,
    overview: "Our data-driven SEO strategies help your website rank higher in search results, driving organic traffic and qualified leads consistently.",
    description: "In today's digital landscape, being found online is everything. Our SEO experts use proven, white-hat techniques to boost your search rankings and drive sustainable organic growth. We take a holistic approach — from deep technical audits to content strategy and authoritative link building — ensuring every element of your digital presence works to attract and convert your ideal customers.",
    points: [
      "Comprehensive technical SEO audit & fixes",
      "In-depth keyword research & competitive analysis",
      "On-page optimization & content strategy",
      "High-quality link building & authority development",
      "Local SEO & Google Business Profile optimization",
      "Monthly performance reporting & strategy refinement",
    ],
    benefits: [
      { title: "Sustainable Growth", desc: "Unlike paid ads, SEO builds lasting authority that continues to generate traffic long-term." },
      { title: "Qualified Traffic", desc: "We target keywords your ideal customers actually search for, delivering higher-quality leads." },
      { title: "Transparent Reporting", desc: "Monthly reports show exactly what's working — rankings, traffic, and conversion data." },
      { title: "ROI-Focused", desc: "Every action we take is tied to measurable business outcomes, not vanity metrics." },
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "We perform a full technical and content audit to identify opportunities and critical issues." },
      { step: "02", title: "Strategy Development", desc: "Based on audit findings, we build a custom SEO roadmap aligned with your business goals." },
      { step: "03", title: "Implementation", desc: "Our team executes on-page, off-page, and technical optimizations systematically." },
      { step: "04", title: "Monitor & Refine", desc: "We track rankings, traffic, and conversions monthly and continuously refine our approach." },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Most clients see noticeable improvements within 3–6 months of consistent work, with significant results typically appearing between 6–12 months. The timeline depends on your niche competitiveness, current site health, and the consistency of our efforts." },
      { q: "Do you use white-hat SEO techniques?", a: "Yes, exclusively. We strictly follow Google's Webmaster Guidelines and never use black-hat tactics like link spam, keyword stuffing, or cloaking that could result in penalties. Our approach is built for long-term, sustainable growth." },
      { q: "What does your monthly reporting include?", a: "Our monthly reports include keyword ranking changes (position tracking for all target keywords), organic traffic data from Google Analytics, backlink growth, technical issue updates, content performance metrics, and a clear breakdown of next steps for the coming month." },
      { q: "Do you guarantee first-page rankings?", a: "No ethical SEO agency can guarantee specific rankings, as search algorithms are controlled by Google. What we do guarantee is transparent, professional work using best practices that have consistently helped our clients achieve first-page visibility for their target keywords." },
      { q: "What's the difference between local and national SEO?", a: "Local SEO focuses on ranking for location-specific searches (e.g., 'plumber in Chicago') and includes Google Business Profile optimization. National SEO targets broader, non-location-specific keywords. We tailor our strategy based on whether your business serves a local area or a national/global audience." },
    ],
    stats: [
      { value: "280%", label: "Avg. Traffic Increase" },
      { value: "120+", label: "SEO Campaigns Run" },
      { value: "#1", label: "Rankings Achieved" },
      { value: "6mo", label: "Avg. to Page 1" },
    ],
  },
  "video-editing": {
    title: "Video Editing",
    subtitle: "Compelling Visual Stories That Engage Your Audience",
    icon: Video,
    image: serviceVideo,
    overview: "From corporate videos to viral social content, our video editing team transforms raw footage into compelling stories.",
    description: "Video is the most engaging content format online. Our creative video editing team combines storytelling, visual effects, and precision editing to produce videos that not only look stunning but achieve your marketing objectives. Whether you need polished corporate presentations, punchy social media reels, or cinematic brand films, we deliver quality that sets your brand apart from the competition.",
    points: [
      "Professional video editing & color grading",
      "Motion graphics & 2D/3D animation",
      "Social media reels & short-form content",
      "Corporate videos & brand storytelling",
      "YouTube channel content & thumbnails",
      "Subtitles, captions & multi-language support",
    ],
    benefits: [
      { title: "Cinematic Quality", desc: "Hollywood-grade color grading and sound design that makes your brand look premium." },
      { title: "Fast Turnaround", desc: "Efficient workflows deliver polished videos within agreed timelines without sacrificing quality." },
      { title: "Platform Optimized", desc: "Videos formatted and optimized for every platform — YouTube, Instagram, TikTok, LinkedIn." },
      { title: "Brand Consistent", desc: "Custom intro/outro animations, branded lower thirds, and consistent style across all content." },
    ],
    process: [
      { step: "01", title: "Brief & Concept", desc: "We discuss your goals, audience, and vision to develop a creative concept and shot list." },
      { step: "02", title: "Editing & Assembly", desc: "Raw footage is assembled, trimmed, and structured into a compelling narrative." },
      { step: "03", title: "Motion & Sound Design", desc: "We add graphics, transitions, sound effects, and music to elevate the final piece." },
      { step: "04", title: "Revisions & Delivery", desc: "After your review, we refine and deliver the final video in your required formats." },
    ],
    faqs: [
      { q: "What video formats do you deliver in?", a: "We deliver in all major formats including MP4 (H.264/H.265), MOV, AVI, and platform-optimized formats with specific resolution and bitrate settings for YouTube (4K/1080p), Instagram Reels, TikTok, Facebook, LinkedIn, and more." },
      { q: "How many revision rounds are included?", a: "Standard packages include 2 full rounds of revisions, which covers most projects. Additional revision rounds are available at a flat rate per round. We outline this clearly in your project proposal so there are no surprises." },
      { q: "Can you add subtitles and captions?", a: "Yes, we offer subtitle and closed caption services in multiple languages. Captions can significantly boost video engagement (up to 40% more views) and improve accessibility. We provide SRT files or burned-in captions, whichever you prefer." },
      { q: "Do I need to provide the raw footage?", a: "Yes, you'll need to provide raw footage unless you also book our videography services. We accept footage from any camera — DSLR, mirrorless, drone, iPhone, or professional cinema cameras. We provide a detailed shot list to guide your filming." },
      { q: "Can you create videos from scratch without footage?", a: "Absolutely! We can create fully animated explainer videos, motion graphic videos, and illustrated videos entirely from scratch without any filmed footage. These are great for product demos, tutorials, and brand storytelling." },
    ],
    stats: [
      { value: "500+", label: "Videos Produced" },
      { value: "4K", label: "Max Resolution" },
      { value: "48hr", label: "Avg. Turnaround" },
      { value: "15+", label: "Platforms Supported" },
    ],
  },
  "graphic-designing": {
    title: "Graphic Designing",
    subtitle: "Visual Designs That Strengthen Your Brand Identity",
    icon: Palette,
    image: serviceDesign,
    overview: "Our creative team delivers stunning visual designs that communicate your brand's personality and leave a lasting impression.",
    description: "Great design is more than aesthetics — it's about communication. Our graphic design team creates visual assets that tell your brand story, build trust, and drive action. From logo design to complete brand identity systems, every design decision is strategic and purposeful. We ensure consistency and impact across all touchpoints, from digital screens to printed materials.",
    points: [
      "Brand identity & logo design systems",
      "Marketing collateral — brochures, flyers, banners",
      "UI/UX design for web & mobile apps",
      "Social media graphics & template systems",
      "Packaging & print design",
      "Infographics & data visualization",
    ],
    benefits: [
      { title: "Strategic Design", desc: "Every design element serves a purpose — we design with your business goals and audience in mind." },
      { title: "Brand Consistency", desc: "Comprehensive brand guidelines ensure your identity stays consistent across every touchpoint." },
      { title: "Unlimited File Formats", desc: "Receive all files in print-ready and digital formats — AI, PDF, SVG, PNG, JPG, and more." },
      { title: "Full Ownership", desc: "You receive 100% ownership of all design files and intellectual property upon final payment." },
    ],
    process: [
      { step: "01", title: "Brand Discovery", desc: "We learn about your brand values, target audience, and design preferences through a detailed brief." },
      { step: "02", title: "Concept Development", desc: "Our designers create multiple concept directions for you to explore and choose from." },
      { step: "03", title: "Design Refinement", desc: "Your chosen concept is refined based on your feedback until it perfectly represents your brand." },
      { step: "04", title: "Final Delivery", desc: "All files are delivered in print-ready and digital formats (AI, PDF, PNG, SVG, etc.)." },
    ],
    faqs: [
      { q: "What file formats will I receive?", a: "You'll receive a comprehensive package including vector source files (AI, EPS, PDF) for print production and raster files (PNG with transparency, JPG, SVG) for digital use. We also provide web-optimized versions sized for various platforms and use cases." },
      { q: "Do I own the design files?", a: "Yes, absolutely. Upon receipt of final payment, you receive complete ownership of all design files, source files, and intellectual property rights. You can modify, reprint, and use the designs in any way you choose — no licensing fees or restrictions." },
      { q: "How many logo concepts will I see?", a: "We typically present 3 distinct initial logo concepts, each exploring a different creative direction. After you select your preferred direction, we refine it through two revision rounds until it's perfect. Additional concepts can be added to any package if needed." },
      { q: "How long does a brand identity project take?", a: "A complete brand identity project (logo, color palette, typography, and brand guidelines) typically takes 3–5 weeks. Rush delivery is available for an additional fee. Larger projects with multiple deliverables may take 6–8 weeks." },
      { q: "Can you redesign my existing logo?", a: "Yes! Logo redesigns and brand refreshes are a common request. We can modernize your existing logo while retaining brand recognition, or take your brand in an entirely new direction. We'll discuss your goals and preferences in our discovery session." },
    ],
    stats: [
      { value: "800+", label: "Designs Delivered" },
      { value: "100%", label: "Client Ownership" },
      { value: "3", label: "Concepts Presented" },
      { value: "48hr", label: "First Draft Delivery" },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Data-Driven Campaigns That Maximize ROI",
    icon: TrendingUp,
    image: serviceMarketing,
    overview: "We create and manage comprehensive digital marketing campaigns that reach your target audience across all the right channels with precision.",
    description: "Reaching the right audience at the right time with the right message is the cornerstone of effective digital marketing. Our team builds and manages integrated campaigns across paid advertising, social media, email, and content marketing — all tied together with robust analytics to ensure maximum return on your marketing investment and sustainable business growth.",
    points: [
      "PPC advertising — Google Ads & Meta Ads",
      "Social media marketing & community management",
      "Email marketing & automation sequences",
      "Content marketing & blog strategy",
      "Analytics, tracking & conversion rate optimization",
      "Influencer marketing & partnership outreach",
    ],
    benefits: [
      { title: "Multi-Channel Reach", desc: "We meet your audience wherever they are — search, social, email, display, and beyond." },
      { title: "Real-Time Optimization", desc: "Daily monitoring and optimization ensure your budget is always working as hard as possible." },
      { title: "Measurable Results", desc: "Every campaign is tied to clear KPIs — ROAS, CPL, revenue — not just impressions." },
      { title: "Scalable Campaigns", desc: "We start lean, test thoroughly, and scale what works for exponential growth." },
    ],
    process: [
      { step: "01", title: "Audience & Market Research", desc: "We define your ideal customer profile and identify the best channels and messaging to reach them." },
      { step: "02", title: "Campaign Strategy", desc: "A comprehensive, multi-channel strategy is developed with clear KPIs and budget allocation." },
      { step: "03", title: "Launch & Management", desc: "Campaigns are launched and actively managed, with daily monitoring and real-time optimization." },
      { step: "04", title: "Reporting & Scaling", desc: "Monthly reports detail performance, and successful campaigns are scaled for greater impact." },
    ],
    faqs: [
      { q: "What's a realistic budget for paid advertising?", a: "We work with clients at various budget levels. We recommend a minimum of $500/month in ad spend to gather meaningful data and see results. For competitive industries, $1,500–$3,000/month is more effective. Our management fees are separate from your ad spend and scale with budget size." },
      { q: "Which social media platforms do you manage?", a: "We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter/X, Pinterest, and YouTube. We recommend focusing on the 2–3 platforms where your target audience is most active rather than spreading efforts too thin across all platforms." },
      { q: "How do you measure campaign success?", a: "We track a comprehensive set of KPIs tailored to your goals. For e-commerce: ROAS, revenue, and cart abandonment. For lead generation: CPL, conversion rate, and lead quality. For brand awareness: reach, impressions, and engagement rate. All metrics are reported clearly monthly." },
      { q: "How long before we see results from paid advertising?", a: "Paid advertising can show results quickly — often within the first 2–4 weeks. However, campaigns typically need 60–90 days of data to properly optimize for peak performance. We set realistic expectations and keep you informed throughout the learning period." },
      { q: "Do you create the ad creatives, or do I need to provide them?", a: "We offer full creative services including copywriting, image design, and video editing for ads. This is typically included in higher-tier packages or available as an add-on. Strong creative is crucial for ad performance, so we recommend letting our team handle it for best results." },
    ],
    stats: [
      { value: "3.5x", label: "Average ROAS" },
      { value: "200+", label: "Campaigns Managed" },
      { value: "60%", label: "Avg. CPL Reduction" },
      { value: "$2M+", label: "Ad Spend Managed" },
    ],
  },
  "shopify-development": {
    title: "Shopify Development",
    subtitle: "E-Commerce Stores Built to Sell",
    icon: ShoppingBag,
    image: serviceShopify,
    overview: "We build and optimize powerful Shopify stores that are designed to convert visitors into loyal customers and scale your e-commerce business.",
    description: "Your Shopify store is the engine of your online business. Our Shopify experts handle everything from initial store setup to custom theme development, app integrations, and ongoing optimization. We focus on creating a seamless shopping experience that maximizes conversions and average order value, helping your e-commerce business grow consistently month after month.",
    points: [
      "Custom Shopify theme design & development",
      "Store setup, product configuration & collections",
      "App integration — payments, reviews, upsells",
      "Shopify migration from other platforms",
      "Performance optimization & speed improvements",
      "Conversion rate optimization & A/B testing",
    ],
    benefits: [
      { title: "Conversion Optimized", desc: "Every design and UX decision is made to maximize add-to-cart and purchase completion rates." },
      { title: "Mobile-First Commerce", desc: "60%+ of shopping happens on mobile — our stores are built with mobile experience as the priority." },
      { title: "Fully Customized", desc: "No cookie-cutter templates. Your store is uniquely designed to match your brand and products." },
      { title: "Ongoing Growth Support", desc: "Post-launch CRO testing, app management, and strategy to keep growing your revenue." },
    ],
    process: [
      { step: "01", title: "Store Strategy", desc: "We analyze your products, target market, and goals to design the optimal store structure and UX." },
      { step: "02", title: "Design & Theme", desc: "A custom or premium theme is designed and built to perfectly match your brand identity." },
      { step: "03", title: "Setup & Integration", desc: "Products, collections, payments, shipping, and third-party apps are configured and integrated." },
      { step: "04", title: "Launch & Optimize", desc: "After thorough testing, your store goes live — and we continue optimizing for conversions." },
    ],
    faqs: [
      { q: "Can you migrate my existing store to Shopify?", a: "Yes, we handle full migrations from WooCommerce, Magento, BigCommerce, Wix, Squarespace, and other platforms. We migrate all products, customer data, order history, and URL structures to preserve your SEO rankings. Migrations typically take 2–4 weeks depending on catalog size." },
      { q: "Do I need a Shopify subscription?", a: "Yes, you'll need a Shopify plan (starting from $39/month for Basic). We help you evaluate the right plan based on your sales volume, team size, and feature needs. Shopify Plus starts at $2,300/month for high-volume merchants needing advanced features." },
      { q: "Can you build a custom theme from scratch?", a: "Absolutely. We specialize in fully custom Shopify theme development using Shopify's Liquid templating language. Custom themes give you complete control over your store's design and functionality, resulting in a unique shopping experience that stands out from competitors using generic themes." },
      { q: "What apps do you recommend for a new Shopify store?", a: "Our recommended app stack depends on your needs, but typically includes: Klaviyo (email marketing), Judge.me or Yotpo (reviews), ReConvert (post-purchase upsells), Gorgias (customer support), and Loox (photo reviews). We evaluate and integrate apps that align with your specific goals." },
      { q: "How do you improve my store's conversion rate?", a: "We use a combination of UX improvements (clearer product pages, simplified checkout), A/B testing (headlines, CTAs, images), speed optimization (faster load times reduce bounce rates), trust signals (reviews, guarantees, security badges), and personalization to systematically improve your conversion rate over time." },
    ],
    stats: [
      { value: "85+", label: "Shopify Stores Built" },
      { value: "40%", label: "Avg. Conversion Lift" },
      { value: "2x", label: "Avg. AOV Increase" },
      { value: "99%", label: "Client Satisfaction" },
    ],
  },
};

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-elevated overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left gap-4"
      >
        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
      </div>
    </div>
  );
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

      {/* Stats Bar */}
      <section className="bg-primary py-10">
        <div className="container-main">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-accent md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-primary-foreground/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Key Benefits</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="card-elevated p-6 h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How We Work</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="card-elevated p-6 h-full relative">
                  <span className="text-5xl font-black text-accent/15 absolute top-4 right-4">{step.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial pull-quote */}
      <section className="section-padding bg-primary">
        <div className="container-main">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-accent fill-accent" />)}
            </div>
            <blockquote className="text-xl font-medium text-primary-foreground leading-relaxed">
              "ServiceCare's {service.title.toLowerCase()} team exceeded every expectation. The results spoke for themselves within weeks."
            </blockquote>
            <p className="mt-6 text-sm text-primary-foreground/60">— A Happy ServiceCare Client</p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-3 mx-auto max-w-xl text-muted-foreground">
              Everything you need to know about our {service.title.toLowerCase()} service.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-3">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <FAQItem faq={faq} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-4 pb-20 md:px-8 md:pb-28 lg:px-16">
        <div className="container-main">
          <div className="hero-overlay rounded-[15px] px-8 py-16 md:px-16 md:py-20 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Get Started with {service.title}?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Let's discuss your project and build a custom strategy that delivers real results.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-block rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  View All Services
                </Link>
              </div>
            </ScrollReveal>
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <OtherIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{svc.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{svc.overview}</p>
                    </div>
                    <span className="text-sm font-semibold text-accent flex items-center gap-1 mt-auto">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
