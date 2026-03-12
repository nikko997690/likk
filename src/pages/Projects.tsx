import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.projects-hero-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-hero',
            start: 'top 80%',
          },
        }
      );

      // Project cards animation
      gsap.fromTo(
        '.project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'institutional', label: 'Institutional' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Metro Office Tower',
      category: 'commercial',
      location: 'New York, NY',
      year: '2024',
      description: 'A 32-story commercial office tower featuring state-of-the-art amenities and sustainable design.',
      image: '/projects-showcase.jpg',
      stats: { area: '450,000 sq ft', duration: '24 months', value: '$180M' },
    },
    {
      id: 2,
      title: 'Riverside Industrial Park',
      category: 'industrial',
      location: 'Jersey City, NJ',
      year: '2023',
      description: 'Modern logistics facility with advanced automation systems and LEED Gold certification.',
      image: '/project-1.jpg',
      stats: { area: '280,000 sq ft', duration: '18 months', value: '$95M' },
    },
    {
      id: 3,
      title: 'Harborview Residences',
      category: 'commercial',
      location: 'Brooklyn, NY',
      year: '2023',
      description: 'Luxury residential complex with 180 units, rooftop amenities, and waterfront views.',
      image: '/project-2.jpg',
      stats: { area: '320,000 sq ft', duration: '30 months', value: '$145M' },
    },
    {
      id: 4,
      title: 'Central Medical Center',
      category: 'institutional',
      location: 'Manhattan, NY',
      year: '2022',
      description: 'State-of-the-art healthcare facility with specialized clinics and research laboratories.',
      image: '/project-3.jpg',
      stats: { area: '180,000 sq ft', duration: '36 months', value: '$220M' },
    },
    {
      id: 5,
      title: 'Tech Hub Campus',
      category: 'commercial',
      location: 'Queens, NY',
      year: '2024',
      description: 'Innovation campus featuring collaborative workspaces, labs, and event facilities.',
      image: '/hero-construction.jpg',
      stats: { area: '200,000 sq ft', duration: '22 months', value: '$125M' },
    },
    {
      id: 6,
      title: 'Port Authority Warehouse',
      category: 'industrial',
      location: 'Newark, NJ',
      year: '2022',
      description: 'Large-scale distribution center with cold storage capabilities and rail access.',
      image: '/site-wide-01.jpg',
      stats: { area: '500,000 sq ft', duration: '20 months', value: '$110M' },
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div ref={pageRef} className="bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="projects-hero min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/site-wide-03.jpg"
            alt="Construction project"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/95 to-bg-primary/80" />
        </div>

        <div className="section-frame relative z-10 w-full py-20">
          <div className="projects-hero-content max-w-3xl">
            <span className="label-mono text-accent-red mb-4 block">Our Portfolio</span>
            <h1 className="headline-lg mb-6">Projects</h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Commercial, industrial, and institutional builds—delivered with clear
              communication and tight controls. Explore our portfolio of completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-text-primary/10 sticky top-16 bg-bg-primary/95 backdrop-blur-sm z-30">
        <div className="section-frame">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                  filter === cat.id
                    ? 'bg-accent-red text-white'
                    : 'bg-transparent text-text-secondary hover:text-text-primary border border-text-primary/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid py-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card group">
                <div className="image-block aspect-[16/10] mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-4 text-white text-sm">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} />
                        {project.stats.area}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {project.stats.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="label-mono text-accent-red mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                      <MapPin size={14} />
                      {project.location}
                    </p>
                    <p className="text-text-secondary leading-relaxed">{project.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-display text-2xl font-bold text-accent-red">
                      {project.stats.value}
                    </span>
                    <span className="block text-text-secondary text-xs">Project Value</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-bg-secondary text-white">
        <div className="section-frame">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="image-block aspect-[4/3]">
              <img
                src="/testimonials-team.jpg"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="label-mono text-accent-red mb-4 block">Featured Project</span>
              <h2 className="headline-md mb-6">Downtown Revitalization</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                A transformative mixed-use development that breathed new life into a historic
                district. This project combined careful preservation of heritage structures
                with modern amenities, creating a vibrant community hub that honors the past
                while embracing the future.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="font-display text-3xl font-bold text-accent-red mb-1">$350M</div>
                  <div className="text-white/40 text-sm">Project Value</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-accent-red mb-1">48 Mo</div>
                  <div className="text-white/40 text-sm">Duration</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-accent-red mb-1">650K</div>
                  <div className="text-white/40 text-sm">Square Feet</div>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Discuss Your Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="section-frame text-center">
          <h2 className="headline-md mb-6">Have a Project in Mind?</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can bring your vision to life. Our team is ready to
            help you plan, design, and build your next project.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
