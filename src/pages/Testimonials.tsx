import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.testimonials-hero-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-hero',
            start: 'top 80%',
          },
        }
      );

      // Testimonial cards animation
      gsap.fromTo(
        '.testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.client-stat',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.client-stats',
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Linked Pasted Due Construction delivered our office complex ahead of schedule and under budget. Their attention to detail and proactive communication made the entire process seamless. I couldn't recommend them more highly.",
      author: 'Jennifer Walsh',
      role: 'CEO, Walsh Technologies',
      project: 'Metro Office Tower',
      rating: 5,
      image: '/team-pm.jpg',
    },
    {
      id: 2,
      quote: "Working with this team was a game-changer for our expansion. They understood our operational needs and delivered a facility that exceeded our expectations. Their safety record and quality control are unmatched in the industry.",
      author: 'Robert Chen',
      role: 'Operations Director, LogiFlow Inc.',
      project: 'Riverside Industrial Park',
      rating: 5,
      image: '/team-ceo.jpg',
    },
    {
      id: 3,
      quote: "The team's expertise in healthcare construction was evident from day one. They navigated complex regulatory requirements with ease and delivered a state-of-the-art facility that our patients and staff love.",
      author: 'Dr. Amanda Foster',
      role: 'Medical Director, Central Health',
      project: 'Central Medical Center',
      rating: 5,
      image: '/team-supervisor.jpg',
    },
    {
      id: 4,
      quote: "Their design-build approach saved us months on our timeline. The single-point accountability meant fewer headaches and better coordination. The final result speaks for itself—our residents are thrilled.",
      author: 'Marcus Johnson',
      role: 'Development Manager, Harbor Group',
      project: 'Harborview Residences',
      rating: 5,
      image: '/hero-worker.jpg',
    },
    {
      id: 5,
      quote: "We've worked with many contractors over the years, but Linked Pasted Due stands out for their professionalism and integrity. They do what they say, and they do it exceptionally well.",
      author: 'Sarah Mitchell',
      role: 'VP of Facilities, TechCorp',
      project: 'Tech Hub Campus',
      rating: 5,
      image: '/team-pm.jpg',
    },
    {
      id: 6,
      quote: "The renovation of our historic building required a delicate touch and deep expertise. This team delivered both, preserving the character we loved while modernizing everything behind the walls.",
      author: 'David Park',
      role: 'Property Manager, Heritage Properties',
      project: 'Downtown Revitalization',
      rating: 5,
      image: '/team-ceo.jpg',
    },
  ];

  const clientStats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '85%', label: 'Repeat Business' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '200+', label: 'Happy Clients' },
  ];

  return (
    <div ref={pageRef} className="bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="testimonials-hero min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/testimonials-team.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/95 to-bg-primary/80" />
        </div>

        <div className="section-frame relative z-10 w-full py-20">
          <div className="testimonials-hero-content max-w-3xl">
            <span className="label-mono text-accent-red mb-4 block">Testimonials</span>
            <h1 className="headline-lg mb-6">Kind Words</h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Developers, architects, and owners we've worked with—consistently positive
              feedback. Here's what they say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="client-stats py-16 bg-bg-secondary text-white">
        <div className="section-frame">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clientStats.map((stat) => (
              <div key={stat.label} className="client-stat text-center">
                <div className="font-display text-4xl lg:text-5xl font-bold text-accent-red mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid py-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card bg-white p-8 border border-text-primary/5 hover:shadow-lg transition-shadow duration-300"
              >
                <Quote className="w-10 h-10 text-accent-red/20 mb-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent-red text-accent-red" />
                  ))}
                </div>

                <p className="text-text-secondary leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-text-primary/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-text-primary/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display font-bold">{testimonial.author}</div>
                    <div className="text-text-secondary text-sm">{testimonial.role}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-text-primary/5">
                  <span className="label-mono text-accent-red text-xs">
                    Project: {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-white/50">
        <div className="section-frame">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-accent-red/20 mx-auto mb-8" />
            <blockquote className="font-display text-2xl lg:text-3xl font-bold leading-tight mb-8">
              "Linked Pasted Due Construction isn't just a contractor—they're a true partner.
              Their commitment to quality, safety, and client satisfaction is evident in
              everything they do. They've set the standard for what we expect from our
              construction partners."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="/team-ceo.jpg"
                  alt="Thomas Anderson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-lg">Thomas Anderson</div>
                <div className="text-text-secondary">President, Anderson Development Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="section-frame">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-mono text-accent-red mb-4 block">Our Clients</span>
            <h2 className="headline-md mb-4">Trusted By Industry Leaders</h2>
            <p className="text-text-secondary">
              We're proud to have partnered with some of the most respected names in
              business, healthcare, and real estate.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Walsh Technologies', 'Central Health', 'Harbor Group', 'TechCorp', 'LogiFlow Inc.', 'Heritage Properties', 'Anderson Development', 'Metro Realty'].map((client) => (
              <div
                key={client}
                className="flex items-center justify-center p-8 bg-white border border-text-primary/5 hover:border-accent-red/30 transition-colors"
              >
                <span className="font-display font-bold text-text-primary/40">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-secondary text-white">
        <div className="section-frame text-center">
          <h2 className="headline-md mb-6">Join Our Satisfied Clients</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Experience the difference of working with a construction partner who truly
            cares about your success. Let's build something great together.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
