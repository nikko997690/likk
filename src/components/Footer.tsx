import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-bg-secondary text-white">
      <div className="section-frame py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display font-bold text-xl tracking-tight">
                LINKED PASTED DUE
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Building with precision. Delivered on time. General contracting and
              construction management services.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-red transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-red transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-red transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  Pre-Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  General Contracting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  Design-Build
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  Site Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@linkedpasteddue.com"
                  className="flex items-center gap-3 text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  <Mail size={16} />
                  hello@linkedpasteddue.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12125550137"
                  className="flex items-center gap-3 text-white/70 hover:text-accent-red transition-colors text-sm"
                >
                  <Phone size={16} />
                  +1 (212) 555-0137
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    442 Site Line Ave, Suite 801
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs font-mono">
              © {currentYear} Linked Pasted Due Construction. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-white/40 hover:text-white/70 transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-white/40 hover:text-white/70 transition-colors text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
