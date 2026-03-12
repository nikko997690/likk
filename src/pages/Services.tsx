import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, HardHat, PenTool, Home, Truck, FileCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.services-hero-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-hero',
            start: 'top 80%',
          },
        }
      );

      // Service cards animation
      gsap.fromTo(
        '.service-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );

      // Process animation
      gsap.fromTo(
        '.process-step',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: ClipboardList,
      title: 'Pre-Construction',
      description: 'Comprehensive planning including budgeting, scheduling, value engineering, and risk assessment before breaking ground.',
      features: ['Feasibility Studies', 'Cost Estimation', 'Schedule Development', 'Value Engineering'],
    },
    {
      icon: HardHat,
      title: 'General Contracting',
      description: 'Full-service execution with expert trade coordination, site logistics management, and quality control.',
      features: ['Trade Coordination', 'Site Management', 'Quality Control', 'Progress Reporting'],
    },
    {
      icon: PenTool,
      title: 'Design-Build',
      description: 'Single-source accountability that streamlines decision-making and accelerates project delivery.',
      features: ['Integrated Team', 'Fast-Track Delivery', 'Cost Certainty', 'Design Optimization'],
    },
    {
      icon: Home,
      title: 'Renovation',
      description: 'Expert renovation services for occupied sites with minimal disruption and phased handovers.',
      features: ['Occupied Site Work', 'Phased Construction', 'Historic Preservation', 'Tenant Coordination'],
    },
    {
      icon: Truck,
      title: 'Site Logistics',
      description: 'Comprehensive site management including safety protocols, access control, and material flow optimization.',
      features: ['Safety Management', 'Access Control', 'Material Handling', 'Waste Management'],
    },
    {
      icon: FileCheck,
      title: 'Closeout',
      description: 'Thorough project completion including documentation, warranties, punch list resolution, and handover.',
      features: ['Documentation', 'Warranty Management', 'Punch List', 'Owner Training'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We begin by understanding your vision, requirements, and constraints through detailed consultations.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team develops comprehensive plans including budgets, schedules, and risk assessments.',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'We bring your project to life with precision coordination and unwavering attention to quality.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final inspections, documentation, and a smooth handover ensure your complete satisfaction.',
    },
  ];

  return (
    <div ref={pageRef} className="bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="services-hero min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects-showcase.jpg"
            alt="Construction project"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/95 to-bg-primary/80" />
        </div>

        <div className="section-frame relative z-10 w-full py-20">
          <div className="services-hero-content max-w-3xl">
            <span className="label-mono text-accent-red mb-4 block">Our Services</span>
            <h1 className="headline-lg mb-6">What We Deliver</h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Full-service construction management from pre-construction to closeout.
              We provide comprehensive solutions tailored to your project's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card group p-8 bg-white border border-text-primary/5 hover:border-accent-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent-red/10 flex items-center justify-center mb-6 group-hover:bg-accent-red group-hover:text-white transition-colors">
                  <service.icon size={28} className="text-accent-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-24 bg-bg-secondary text-white">
        <div className="section-frame">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-mono text-accent-red mb-4 block">Our Process</span>
            <h2 className="headline-md mb-4">How We Work</h2>
            <p className="text-white/60">
              A proven methodology that ensures consistent, high-quality results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="process-step relative">
                <div className="font-display text-6xl font-bold text-accent-red/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-white/10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent-red rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="image-block aspect-[4/3]">
              <img
                src="/site-wide-01.jpg"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="label-mono text-accent-red mb-4 block">Why Choose Us</span>
              <h2 className="headline-md mb-6">The Linked Pasted Due Difference</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Experience You Can Trust</h3>
                  <p className="text-text-secondary">
                    With over 25 years in the industry, we've seen it all and solved it all.
                    Our experience translates to fewer surprises and better outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Integrated Approach</h3>
                  <p className="text-text-secondary">
                    From design to closeout, we manage every aspect of your project
                    with a single point of accountability.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Technology-Driven</h3>
                  <p className="text-text-secondary">
                    We leverage cutting-edge project management tools and building
                    technologies to deliver superior results.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Safety First</h3>
                  <p className="text-text-secondary">
                    Our industry-leading safety record reflects our commitment to
                    protecting our people and your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent-red text-white">
        <div className="section-frame text-center">
          <h2 className="headline-md mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how our services can bring your vision to life.
            Contact us for a free consultation.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-red font-mono text-sm uppercase tracking-widest hover:bg-bg-primary transition-colors">
            Get a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
