import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe, CheckCircle2, Layout, Layers, ChevronLeft, ChevronRight, Sparkles, X, ZoomIn } from 'lucide-react';
import { PROJECTS } from '../data/projectData';
import { useEffect, useState, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = PROJECTS.findIndex(p => p.id === Number(id));
  const project = PROJECTS[projectIndex];
  const nextProject = projectIndex !== -1 && projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  useSEO({
    title: project ? `${project.title} | Ana Yaghoubi Portfolio` : 'Project Not Found | Ana Yaghoubi Portfolio',
    description: project ? project.shortDesc : 'The requested project could not be found.',
    imageUrl: project && project.images.length > 0 ? project.images[0] : undefined,
    jsonLd: project ? {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': project.title,
      'description': project.shortDesc,
      'image': project.images[0],
      'creator': {
        '@type': 'Person',
        'name': 'Ana Yaghoubi',
        'jobTitle': 'Software Developer'
      },
      'keywords': project.tags.join(', ')
    } : undefined
  });

  const selectedImage = selectedImgIndex !== null && project ? project.images[selectedImgIndex] : null;
  const currentImgIndex = selectedImgIndex !== null ? selectedImgIndex : -1;

  const handleNextImage = useCallback(() => {
    if (project && selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex + 1) % project.images.length);
    }
  }, [project, selectedImgIndex]);

  const handlePrevImage = useCallback(() => {
    if (project && selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex - 1 + project.images.length) % project.images.length);
    }
  }, [project, selectedImgIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImgIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setSelectedImgIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImgIndex, handleNextImage, handlePrevImage]);

  // Swipe Gestures for Mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

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
      handleNextImage();
    } else if (isRightSwipe) {
      handlePrevImage();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Disable background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImgIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImgIndex]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-12 px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-3xl font-bold font-inter tracking-tight">Project not found</h1>
        <Link to="/projects" className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit mx-auto py-2">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32 overflow-hidden selection:bg-accent selection:text-white">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] bg-accent/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Refined Hero Header Section */}
      <header className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12">
            <Link to="/projects" className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit py-2">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Title & Description Column */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10 reveal">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <span className="px-3 py-1 rounded bg-accent/5 border border-accent/10 text-[9px] font-bold text-accent uppercase tracking-[0.2em] w-fit">{project.type}</span>
                  <div className="hidden sm:block h-px w-12 bg-border"></div>
                  <span className="text-[9px] font-bold text-muted uppercase tracking-[0.2em] sm:pl-0 pl-1">{project.platform}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight leading-[1.1] text-white">
                  {project.title}
                </h1>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-inter max-w-2xl font-light">
                  {project.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent px-6 py-3.5 sm:px-8 sm:py-5 flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_40px_rgba(124,58,237,0.4)] transition-all"
                  >
                    <Globe size={18} /> {project.secondaryLive ? 'Live: MakeWaves' : 'Live Experience'}
                  </a>
                )}
                {project.secondaryLive && (
                  <a
                    href={project.secondaryLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent px-6 py-3.5 sm:px-8 sm:py-5 flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest shadow-[0_10px_30px_rgba(124,58,237,0.3)]"
                  >
                    <Globe size={18} /> Live: Client Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent-outline px-6 py-3.5 sm:px-8 sm:py-5 flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest"
                  >
                    <Github size={18} /> View Source
                  </a>
                )}
              </div>
            </div>

            {/* Smaller Integrated Hero Image */}
            <div className="lg:col-span-5 relative reveal delay-200">
              <button
                onClick={() => setSelectedImgIndex(0)}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group w-full cursor-zoom-in text-left block"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ${
                    project.id === 2 ? 'object-top' : 'object-center'
                  }`}
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-background/80 text-white p-3 rounded-full backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </button>
              {/* Decorative Empty Space Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 relative">

          {/* Left Column: Side Info (Sticky) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8 sm:space-y-12 order-2 lg:order-1">
            {/* Tech Stack Card (Desktop Only) */}
            <div className="hidden lg:block card p-8 bg-card/20 backdrop-blur-3xl border-white/5 space-y-8 reveal">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-accent uppercase tracking-[0.3em] font-bold text-[10px]">
                  <Layers size={14} /> Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-background/50 border border-border rounded-lg text-xs font-bold font-inter text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-8">
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Project Type</span>
                  <span className="block text-sm font-semibold text-text-primary leading-tight">{project.type}</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Platform</span>
                  <span className="block text-sm font-semibold text-text-primary leading-tight">{project.platform}</span>
                </div>
                {project.github && (
                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:translate-x-1 transition-transform"
                    >
                      <Github size={16} /> Repository Access <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats/Links */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/5 to-transparent reveal delay-200">
              <p className="text-text-secondary text-sm font-inter leading-relaxed italic opacity-80">
                "{project.quote || 'This project focused on building a scalable and maintainable backend API with clean architecture and structured data relationships.'}"
              </p>
            </div>

            {/* Growth & Achievements (Moved to Sidebar) */}
            <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-accent/5 border border-accent/10 overflow-hidden reveal delay-300">
              <div className="absolute top-0 right-0 p-6 text-accent opacity-10 rotate-12">
                <Sparkles size={80} />
              </div>
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 text-accent uppercase tracking-[0.3em] font-bold text-[10px]">
                  <Sparkles size={14} /> Technical Growth
                </div>
                <h2 className="text-2xl font-bold font-inter tracking-tight text-white leading-tight">Key <br /><span className="text-accent">Learnings</span></h2>
                <div className="flex flex-col gap-y-4 pt-2">
                  {project.learnings?.map((learning, i) => (
                    <div key={i} className="flex gap-3 group items-start">
                      <div className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                        <CheckCircle2 size={10} />
                      </div>
                      <p className="text-text-secondary font-inter text-sm leading-snug group-hover:text-text-primary transition-colors">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery (Moved to Sidebar) */}
            {project.images.length > 1 && (
              <div className="space-y-6 pt-8 reveal delay-500">
                <div className="flex items-center gap-3 text-muted uppercase tracking-[0.3em] font-bold text-[10px]">
                  <div className="w-6 h-px bg-muted/30"></div>
                  Interface Showcase
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImgIndex(i)}
                      className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-card hover:border-accent/30 transition-all duration-500 shadow-md cursor-zoom-in w-full block text-left"
                    >
                      {/* Delicate Mini-Browser Bar */}
                      <div className="h-3 sm:h-3.5 bg-white/5 border-b border-white/5 flex items-center px-1.5 sm:px-2 gap-0.5 sm:gap-1">
                        <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-white/10"></div>
                        <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-white/10"></div>
                        <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-white/10"></div>
                      </div>
                      <img src={img} alt={`Showcase ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-background/80 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-all duration-300">
                          <ZoomIn size={14} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24 order-1 lg:order-2">
            {/* Mobile Tech Stack Card (Visible on Mobile/Tablet Only) */}
            <div className="block lg:hidden card p-6 bg-card/20 backdrop-blur-3xl border-white/5 space-y-6 reveal">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent uppercase tracking-[0.3em] font-bold text-[10px]">
                  <Layers size={14} /> Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-background/50 border border-border rounded-lg text-xs font-bold font-inter text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-6">
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Project Type</span>
                  <span className="block text-sm font-semibold text-text-primary leading-tight">{project.type}</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Platform</span>
                  <span className="block text-sm font-semibold text-text-primary leading-tight">{project.platform}</span>
                </div>
              </div>
            </div>

            {/* The Story */}
            <article className="space-y-8 reveal">
              <div className="flex items-center gap-3 text-accent uppercase tracking-[0.3em] font-bold text-[10px]">
                <Layout size={14} /> Project Overview
              </div>
              <div className="text-text-secondary text-lg leading-relaxed font-inter space-y-8">
                {project.fullDesc.split('\n\n').map((para, i) => {
                  const isHeader = para.startsWith('###');
                  const cleanText = isHeader ? para.replace('###', '').trim() : para;

                  // Helper to parse bold markdown **text**
                  const parseBold = (text: string) => {
                    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    });
                  };

                  return isHeader ? (
                    <h3 key={i} className="text-2xl font-bold text-text-primary pt-8 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {parseBold(cleanText)}
                    </h3>
                  ) : (
                    <p key={i}>{parseBold(cleanText)}</p>
                  );
                })}
              </div>
            </article>



            {/* Features & Challenges Comparison */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div className="space-y-8 reveal">
                <div className="flex items-center gap-3 text-emerald-400 uppercase tracking-[0.3em] font-bold text-[10px]">
                  <div className="w-6 h-px bg-emerald-400/30"></div>
                  Key Features
                </div>
                <ul className="space-y-6">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-text-secondary font-inter text-lg leading-tight group-hover:text-text-primary transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="space-y-8 reveal delay-100">
                <div className="flex items-center gap-3 text-amber-400 uppercase tracking-[0.3em] font-bold text-[10px]">
                  <div className="w-6 h-px bg-amber-400/30"></div>
                  Challenges
                </div>
                <ul className="space-y-6">
                  {project.challenges?.map((challenge, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-text-secondary font-inter text-lg leading-tight group-hover:text-text-primary transition-colors">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>


        {/* Footer Navigation */}
        <div className="pt-20 sm:pt-32 pb-8 sm:pb-12 reveal border-t border-white/5 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject ? (
              <Link 
                to={`/projects/${prevProject.id}`}
                className="card group flex flex-col items-start text-left gap-4 hover:border-accent/40 transition-all p-6 sm:p-8"
              >
                <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                  <ChevronLeft size={14} /> Previous Project
                </span>
                <span className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-1 font-inter tracking-tight">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div className="hidden md:block" />}

            {nextProject ? (
              <Link 
                to={`/projects/${nextProject.id}`}
                className="card group flex flex-col items-end text-right gap-4 hover:border-accent/40 transition-all p-6 sm:p-8"
              >
                <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                  Next Project <ChevronRight size={14} />
                </span>
                <span className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-1 font-inter tracking-tight">
                  {nextProject.title}
                </span>
              </Link>
            ) : <div className="hidden md:block" />}
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-background/95 backdrop-blur-2xl transition-all duration-300 select-none"
          onClick={() => setSelectedImgIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-3 sm:p-4 text-muted hover:text-white bg-white/5 hover:bg-accent rounded-full transition-all z-20"
            onClick={() => setSelectedImgIndex(null)}
          >
            <X size={24} />
          </button>

          {/* Left Arrow Button (Absolute Overlay) */}
          <button
            className="absolute left-2 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 text-muted hover:text-white bg-white/5 hover:bg-accent rounded-full transition-all z-20 shadow-lg border border-white/5 hover:border-accent/30 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Image Container with Index Counter */}
          <div
            className="relative flex flex-col items-center gap-4 w-full max-w-[88vw] sm:max-w-[80vw] lg:max-w-[70vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
            />
            {currentImgIndex !== -1 && (
              <span className="text-[11px] text-muted font-bold font-mono bg-white/5 px-4 py-1.5 rounded-full border border-white/5 uppercase tracking-widest shadow-md">
                {currentImgIndex + 1} / {project.images.length}
              </span>
            )}
          </div>

          {/* Right Arrow Button (Absolute Overlay) */}
          <button
            className="absolute right-2 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 text-muted hover:text-white bg-white/5 hover:bg-accent rounded-full transition-all z-20 shadow-lg border border-white/5 hover:border-accent/30 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
