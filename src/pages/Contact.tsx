import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.contact-hero-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-hero',
            start: 'top 80%',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        '.contact-form',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
          },
        }
      );

      // Info cards animation
      gsap.fromTo(
        '.info-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.info-section',
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@linkedpasteddue.com',
      href: 'mailto:hello@linkedpasteddue.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (212) 555-0137',
      href: 'tel:+12125550137',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '442 Site Line Ave, Suite 801\nNew York, NY 10001',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Fri: 8:00 AM - 6:00 PM',
      href: '#',
    },
  ];

  const projectTypes = [
    'Commercial Building',
    'Industrial Facility',
    'Healthcare Institution',
    'Residential Complex',
    'Renovation Project',
    'Other',
  ];

  return (
    <div ref={pageRef} className="bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="contact-hero min-h-[40vh] flex items-center bg-bg-secondary text-white">
        <div className="section-frame w-full py-20">
          <div className="contact-hero-content max-w-3xl">
            <span className="label-mono text-accent-red mb-4 block">Contact Us</span>
            <h1 className="headline-lg mb-6">Start a Project</h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Tell us what you're building. We'll respond within two business days.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="contact-form">
              <h2 className="headline-md mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll get back to you within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label-mono text-text-secondary mb-2 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-text-primary/20 focus:border-accent-red focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-mono text-text-secondary mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-text-primary/20 focus:border-accent-red focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="label-mono text-text-secondary mb-2 block">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-text-primary/20 focus:border-accent-red focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="label-mono text-text-secondary mb-2 block">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-text-primary/20 focus:border-accent-red focus:outline-none transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label-mono text-text-secondary mb-2 block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-text-primary/20 focus:border-accent-red focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Send Inquiry
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="info-section">
              <h2 className="headline-md mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="info-card flex items-start gap-4 p-6 bg-white border border-text-primary/5 hover:border-accent-red/30 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-accent-red" />
                    </div>
                    <div>
                      <div className="label-mono text-text-secondary mb-1">{info.label}</div>
                      <div className="font-display font-bold whitespace-pre-line">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 image-block aspect-video bg-text-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-accent-red/40 mx-auto mb-4" />
                  <p className="text-text-secondary">Interactive Map</p>
                  <p className="text-text-secondary text-sm">442 Site Line Ave, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/50">
        <div className="section-frame">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-mono text-accent-red mb-4 block">FAQ</span>
            <h2 className="headline-md mb-4">Common Questions</h2>
            <p className="text-text-secondary">
              Quick answers to frequently asked questions. Don't see what you're looking for?
              Reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope and complexity. A typical commercial project ranges from 12-36 months. We provide detailed schedules during the planning phase.',
              },
              {
                q: 'Do you offer design-build services?',
                a: 'Yes, we offer comprehensive design-build services that streamline the process and provide single-source accountability for faster delivery.',
              },
              {
                q: 'What types of projects do you handle?',
                a: 'We specialize in commercial, industrial, institutional, and residential projects. Our portfolio includes office buildings, warehouses, healthcare facilities, and more.',
              },
              {
                q: 'How do you ensure project safety?',
                a: 'Safety is our top priority. We maintain rigorous safety protocols, daily briefings, and ongoing training. Our safety record is among the best in the industry.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white border border-text-primary/5">
                <h3 className="font-display font-bold mb-3">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-accent-red text-white">
        <div className="section-frame text-center">
          <h2 className="headline-md mb-6">Need Immediate Assistance?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            For urgent matters or emergency services, please call our 24/7 hotline.
          </p>
          <a
            href="tel:+12125550199"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-accent-red font-mono text-sm uppercase tracking-widest hover:bg-bg-primary transition-colors"
          >
            <Phone size={18} />
            +1 (212) 555-0199
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
