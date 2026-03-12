import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl.fromTo(
        '.hero-image',
        { x: '-60vw', scale: 1.06, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out' }
      )
      .fromTo(
        '.hero-headline span',
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1 },
        '-=0.7'
      )
      .fromTo(
        '.hero-video',
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        '.hero-rule',
        { scaleY: 0 },
        { scaleY: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.7'
      )
      .fromTo(
        '.hero-subheadline',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-cta',
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      // Value sections scroll animations
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const image = section.querySelector('.value-image');
        const headline = section.querySelector('.value-headline');
        const body = section.querySelector('.value-body');
        const rule = section.querySelector('.value-rule');

        gsap.fromTo(
          image,
          { y: '-60vh', scale: 1.08, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          headline,
          { x: '-50vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              end: 'top 35%',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          body,
          { x: '18vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 65%',
              end: 'top 45%',
              scrub: 0.5,
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const valueSections = [
    {
      image: '/site-wide-01.jpg',
      headline: 'WE BUILD',
      body: 'From groundwork to finishes, we coordinate trades, timelines, and compliance so your project stays on track.',
      cta: 'See capabilities',
      link: '/services',
    },
    {
      image: '/site-wide-02.jpg',
      headline: 'ON TIME',
      body: 'Milestones you can plan around. We build schedules that absorb real-world delays without derailing delivery.',
      cta: 'How we schedule',
      link: '/services',
    },
    {
      image: '/site-wide-03.jpg',
      headline: 'TO LAST',
      body: 'Materials chosen for the climate. Workmanship that meets code—and exceeds expectations.',
      cta: 'Our standards',
      link: '/about',
    },
    {
      image: '/site-wide-04.jpg',
      headline: 'SAFETY',
      body: 'Daily briefings, clear signage, and strict PPE. A safe site is a productive site.',
      cta: 'Safety program',
      link: '/about',
    },
    {
      image: '/site-wide-05.jpg',
      headline: 'QUALITY',
      body: 'Clean lines, true levels, and details that survive inspections—and time.',
      cta: 'View finishes',
      link: '/projects',
    },
    {
      image: '/site-wide-06.jpg',
      headline: 'PRECISION',
      body: 'Accurate takeoffs, tight tolerances, and coordination that keeps every trade aligned.',
      cta: 'Meet the team',
      link: '/about',
    },
  ];

  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center pt-20 lg:pt-0"
      >
        <div className="section-frame w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="hero-image image-block relative aspect-[4/3] lg:aspect-auto lg:h-[72vh] order-2 lg:order-1">
              <img
                src="/hero-construction.jpg"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="relative order-1 lg:order-2 lg:pl-8">
              {/* Vertical Rule */}
              <div className="hero-rule hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-64 bg-text-primary/75 origin-top" />

              <div className="lg:pl-8">
                <h1 className="hero-headline headline-xl mb-6">
                  <span className="block">PRECISION</span>
                  <span className="block">BUILDERS</span>
                </h1>

                <div className="red-rule w-24 mb-6 origin-left" />

                <p className="hero-subheadline text-text-secondary text-lg max-w-md mb-8">
                  General contracting and construction management—on schedule and
                  on budget.
                </p>

                <Link to="/projects" className="hero-cta btn-primary">
                  View our work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Video Block (Bottom Right on Desktop) */}
          <div className="hidden lg:block hero-video absolute right-[3vw] bottom-[10vh] w-[40vw] h-[34vh] image-block">
            <img
              src="/hero-worker.jpg"
              alt="Construction worker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play size={24} className="text-text-primary ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}
      {valueSections.map((section, index) => (
        <section
          key={section.headline}
          ref={(el) => { sectionsRef.current[index] = el; }}
          className="min-h-screen flex items-center py-20"
        >
          <div className="section-frame w-full">
            <div className="space-y-8">
              {/* Wide Image */}
              <div className="value-image image-block w-full aspect-[21/9] max-h-[46vh]">
                <img
                  src={section.image}
                  alt={section.headline}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                {/* Headline */}
                <div className="lg:col-span-7">
                  <h2 className="value-headline headline-lg">{section.headline}</h2>
                  <div className="value-rule red-rule w-40 mt-4 origin-left" />
                </div>

                {/* Body + CTA */}
                <div className="lg:col-span-5">
                  <p className="value-body text-text-secondary text-lg mb-6">
                    {section.body}
                  </p>
                  <Link
                    to={section.link}
                    className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-text-primary hover:text-accent-red transition-colors"
                  >
                    {section.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-32 bg-bg-secondary text-white">
        <div className="section-frame text-center">
          <h2 className="headline-lg mb-6">Ready to Build?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss your next project. We're ready to bring your vision to
            life with precision and expertise.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
