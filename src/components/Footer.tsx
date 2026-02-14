import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="ServiceCare" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed opacity-80">
              We help brands grow with powerful digital marketing strategies, web solutions, and creative services.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "SEO", "Video Editing", "Graphic Design", "Digital Marketing", "Shopify Development"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm opacity-80 transition-opacity hover:opacity-100">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                123 Business Avenue, Suite 100, New York, NY 10001
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone size={16} className="shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail size={16} className="shrink-0" />
                hello@servicecare.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} ServiceCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
