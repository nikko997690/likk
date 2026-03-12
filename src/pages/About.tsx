import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.about-hero-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 80%',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          },
        }
      );

      // Team animation
      gsap.fromTo(
        '.team-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%',
          },
        }
      );

      // Values animation
      gsap.fromTo(
        '.value-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '25+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Projects Completed', icon: Award },
    { value: '150+', label: 'Team Members', icon: Users },
    { value: '99%', label: 'Safety Record', icon: Shield },
  ];

  const team = [
    {
      name: 'Michael Richardson',
      role: 'Chief Executive Officer',
      image: '/team-ceo.jpg',
      bio: 'With over 30 years in construction, Michael leads our vision for excellence.',
    },
    {
      name: 'Sarah Chen',
      role: 'Project Director',
      image: '/team-pm.jpg',
      bio: 'Sarah ensures every project delivers on time, on budget, and beyond expectations.',
    },
    {
      name: 'James Morrison',
      role: 'Site Operations Manager',
      image: '/team-supervisor.jpg',
      bio: 'James brings decades of field experience to every site he oversees.',
    },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We do what we say. Transparent communication and honest dealings with every client.',
    },
    {
      title: 'Excellence',
      description: 'Good enough is never enough. We strive for exceptional quality in every detail.',
    },
    {
      title: 'Safety',
      description: 'Every worker goes home safe. Our safety culture is non-negotiable.',
    },
    {
      title: 'Innovation',
      description: 'We embrace new methods and technologies to deliver better results.',
    },
  ];

  return (
    <div ref={pageRef} className="bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="about-hero min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-building.jpg"
            alt="Completed building"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent" />
        </div>

        <div className="section-frame relative z-10 w-full py-20">
          <div className="about-hero-content max-w-3xl">
            <span className="label-mono text-accent-red mb-4 block">About Us</span>
            <h1 className="headline-lg mb-6">Building Excellence Since 1999</h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">
              Linked Pasted Due Construction has been at the forefront of the construction
              industry for over two decades. We've built our reputation on delivering
              exceptional projects with precision, integrity, and an unwavering commitment
              to quality.
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-bg-secondary text-white">
        <div className="section-frame">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item text-center">
                <stat.icon className="w-8 h-8 text-accent-red mx-auto mb-4" />
                <div className="font-display text-4xl lg:text-5xl font-bold mb-2">
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

      {/* Story Section */}
      <section className="py-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-mono text-accent-red mb-4 block">Our Story</span>
              <h2 className="headline-md mb-6">From Small Beginnings to Industry Leaders</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  What started as a small family business in 1999 has grown into one of
                  the most respected construction firms in the region. Our journey has
                  been defined by a simple principle: deliver exceptional work, every time.
                </p>
                <p>
                  Over the years, we've completed over 500 projects ranging from commercial
                  developments to industrial facilities, healthcare institutions to
                  residential complexes. Each project has added to our expertise and
                  reinforced our commitment to excellence.
                </p>
                <p>
                  Today, with a team of over 150 skilled professionals, we continue to
                  push the boundaries of what's possible in construction. Our integrated
                  approach combines traditional craftsmanship with modern technology,
                  ensuring every project benefits from decades of experience and
                  cutting-edge innovation.
                </p>
              </div>
            </div>
            <div className="image-block aspect-[4/3]">
              <img
                src="/testimonials-team.jpg"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-24 bg-white/50">
        <div className="section-frame">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-mono text-accent-red mb-4 block">Our Values</span>
            <h2 className="headline-md mb-4">What We Stand For</h2>
            <p className="text-text-secondary">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="value-card p-8 bg-bg-primary border border-text-primary/10"
              >
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-24">
        <div className="section-frame">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-mono text-accent-red mb-4 block">Our Team</span>
            <h2 className="headline-md mb-4">Meet the Leaders</h2>
            <p className="text-text-secondary">
              Our leadership team brings decades of combined experience and a shared
              passion for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="team-card group">
                <div className="image-block aspect-[3/4] mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="text-accent-red font-mono text-xs uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-secondary text-white">
        <div className="section-frame text-center">
          <h2 className="headline-md mb-6">Let's Build Together</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Ready to start your next project? We'd love to hear from you and discuss
            how we can bring your vision to life.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
