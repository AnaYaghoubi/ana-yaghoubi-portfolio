import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projectData';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const featuredProjects = PROJECTS.slice(0, 3);

// Clone slide 3 at beginning and slide 1 at end for infinite smooth looping
const slides = [
  featuredProjects[2], // index 0 (clone of project 3)
  featuredProjects[0], // index 1 (project 1)
  featuredProjects[1], // index 2 (project 2)
  featuredProjects[2], // index 3 (project 3)
  featuredProjects[0], // index 4 (clone of project 1)
];

const Projects = () => {
  // const [activeSlide, setActiveSlide] = useState(1); // Default to project 1 (index 1)
  // const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Carousel
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = useCallback(() => {
    // Guard rail: prevent index from exceeding the clone boundary during fast clicks
    if (activeSlide >= slides.length - 1) return;

    setIsTransitioning(true);
    setActiveSlide((prev) => prev + 1);
  }, [activeSlide]);

  const handlePrev = useCallback(() => {
    // Guard rail: prevent index from dropping below the clone boundary during fast clicks
    if (activeSlide <= 0) return;

    setIsTransitioning(true);
    setActiveSlide((prev) => prev - 1);
  }, [activeSlide]);

  const handleTransitionEnd = useCallback(() => {
    // Seamlessly jump to the real slides without animation when hitting boundaries
    if (activeSlide === 4) {
      setIsTransitioning(false);
      setActiveSlide(1); // Jump back to the first real project
    } else if (activeSlide === 0) {
      setIsTransitioning(false);
      setActiveSlide(3); // Jump back to the last real project
    }
  }, [activeSlide]);

  // Crucial effect for the infinite carousel behavior
  useEffect(() => {
    // If transition was temporarily disabled for the instant jump, re-enable it in the next frame
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);



  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transition on the next tick
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getActiveDotIndex = () => {
    if (activeSlide === 0) return 2;
    if (activeSlide === 4) return 0;
    return activeSlide - 1;
  };
  const activeDot = getActiveDotIndex();

  return (
    <section id="projects" className="py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl flex items-center gap-3 font-bold tracking-tight font-inter">
              <span className="w-2.5 h-12 bg-accent rounded-full shadow-[0_0_20px_rgba(124,58,237,0.5)]"></span>
              Featured Projects
            </h2>
            <p className="text-text-secondary font-inter text-sm max-w-md">Selected highlights from my portfolio.</p>
          </div>
          <Link to="/projects" className="text-accent text-sm flex items-center gap-2 hover:text-accent-light font-bold uppercase tracking-widest transition-all group font-inter">
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`card group overflow-hidden p-0 reveal delay-${(i + 1) * 100} flex flex-col h-full`}
            >
              <Link to={`/projects/${project.id}`} className="relative aspect-video overflow-hidden block">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.id === 2 ? 'object-top' : 'object-center'
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
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[9px] bg-border/50 text-muted px-2 py-0.5 rounded border border-border flex items-center gap-1 font-bold tracking-wide whitespace-nowrap">
                      <Tag size={10} className="text-accent/60" /> {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] text-muted font-bold px-1 whitespace-nowrap">+ {project.tags.length - 3}</span>
                  )}
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
          ))}
        </div>

        {/* Tablet/Mobile View: Infinite Carousel Layout */}
        <div className="lg:hidden relative w-full overflow-hidden py-4">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((project, index) => (
              <div key={`${project.id}-${index}`} className="w-full shrink-0 px-2 box-sizing-border">
                <div className="card group overflow-hidden p-0 flex flex-col h-full animate-none">
                  <Link to={`/projects/${project.id}`} className="relative aspect-video overflow-hidden block">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.id === 2 ? 'object-top' : 'object-center'
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
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] bg-border/50 text-muted px-2 py-0.5 rounded border border-border flex items-center gap-1 font-bold tracking-wide whitespace-nowrap">
                          <Tag size={10} className="text-accent/60" /> {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[9px] text-muted font-bold px-1 whitespace-nowrap">+ {project.tags.length - 3}</span>
                      )}
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

          {/* Navigation Controls (Dots & Arrows below cards) */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (isTransitioning) {
                      setActiveSlide(i + 1);
                    }
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeDot === i ? 'w-8 bg-accent shadow-[0_0_8px_rgba(124,58,237,0.5)]' : 'w-2.5 bg-border hover:bg-muted'} cursor-pointer`}
                  aria-label={`Go to project slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
