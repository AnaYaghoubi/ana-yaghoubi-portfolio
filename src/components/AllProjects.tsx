import { useState, useMemo, useEffect } from 'react';
import { Search, ArrowLeft, ExternalLink, Tag, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projectData';
import { useSEO } from '../hooks/useSEO';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const AllProjects = () => {
  useSEO({
    title: 'Web Development Projects | Ana Yaghoubi',
    description: 'Explore the full portfolio of software projects and development work completed by Ana Yaghoubi.'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(project => project.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.01,
      rootMargin: '0px 0px 100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in-view');
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll('.card-reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <Link to="/" className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit py-2">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold font-inter tracking-tight">All <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Projects</span></h1>
              <p className="text-text-secondary max-w-2xl font-inter text-lg">
                A collection of my web development projects, including academic, internship, and personal work.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm font-inter"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="pb-2">
          {/* Desktop tags */}
          <div className="hidden lg:block relative -mx-6 px-6 overflow-hidden">
            {/* Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-3 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-3 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

            <div className="flex overflow-x-auto scrollbar-none gap-2 pb-3 px-8">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all font-inter tracking-wider shrink-0 ${!selectedTag ? 'bg-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]' : 'bg-card border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary'}`}
              >
                All Projects
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all font-inter tracking-wider shrink-0 ${selectedTag === tag ? 'bg-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]' : 'bg-card border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet dropdown selector */}
          <div className="block lg:hidden w-full">
            <div className="relative">
              <select
                value={selectedTag || ''}
                onChange={(e) => setSelectedTag(e.target.value || null)}
                className="w-full bg-card border border-border text-text-primary rounded-xl py-3.5 px-4 pr-10 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm font-inter font-medium appearance-none cursor-pointer"
              >
                <option value="">All Projects</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="card-reveal h-full"
                style={{ transitionDelay: `${(i % 3) * 50}ms` }}
              >
                <div className="card group overflow-hidden p-0 flex flex-col h-full">
                  <Link to={`/projects/${project.id}`} className="block relative aspect-video overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        project.id === 2 ? 'object-top' : 'object-center'
                      }`}
                    />
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  <div className="p-8 flex flex-col flex-1 gap-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-inter tracking-tight group-hover:text-accent transition-colors">
                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed font-inter line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] bg-border/50 text-muted px-2 py-0.5 rounded border border-border flex items-center gap-1 font-bold tracking-wide whitespace-nowrap">
                          <Tag size={10} className="text-accent/60" /> {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-text-primary flex items-center gap-1.5 hover:text-accent transition-colors font-bold uppercase tracking-widest">
                            Live <ExternalLink size={14} />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-primary flex items-center gap-1.5 hover:text-accent transition-colors font-bold uppercase tracking-widest">
                            Repo <Github size={14} />
                          </a>
                        )}
                      </div>
                      {(!project.live && !project.github) ? (
                        <Link to={`/projects/${project.id}`} className="text-text-primary group-hover:text-accent transition-colors duration-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                          VIEW DETAILS
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <Link to={`/projects/${project.id}`} className="text-text-primary group-hover:text-accent transition-colors duration-300">
                          <ArrowRight size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center space-y-4 bg-card rounded-3xl border border-dashed border-border reveal">
            <p className="text-text-secondary font-inter text-lg">No projects found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
              className="text-accent hover:underline font-bold uppercase tracking-widest text-xs"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
