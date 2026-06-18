import { useState, useMemo, useEffect } from 'react';
import { Search, ArrowLeft, Calendar, Tag, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { useSEO } from '../hooks/useSEO';

const Blog = () => {
  useSEO({
    title: 'Internship Journey | Ana Yaghoubi',
    description: 'Technical learnings, project insights, and experiences from my software development journey.'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
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
  }, [filteredPosts]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <Link to="/" className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit py-2">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold font-inter tracking-tight">Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Journey</span></h1>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Company</span>
                    <span className="text-sm font-semibold text-text-primary">MakeWaves</span>
                  </div>
                  <div className="w-px h-8 bg-border hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Role</span>
                    <span className="text-sm font-semibold text-text-primary">Front End Developer</span>
                  </div>
                  <div className="w-px h-8 bg-border hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Duration</span>
                    <span className="text-sm font-semibold text-text-primary">15 Weeks</span>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary max-w-3xl font-inter text-lg leading-relaxed">
                A collection of weekly posts documenting my Front-End Development internship at MakeWaves, covering responsive component development, HubSpot CMS solutions, and a multi-brand Email Signature Generator built with HubSpot CMS, HubDB, HubL, Alpine.js, Tailwind CSS, and JavaScript.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm font-inter"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="pb-2">
          {/* Desktop tags */}
          <div className="hidden lg:flex flex-wrap gap-2 pb-4">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all font-inter ${!selectedTag ? 'bg-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'bg-card border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary'}`}
            >
              All Weeks
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all font-inter ${selectedTag === tag ? 'bg-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'bg-card border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Mobile/Tablet dropdown selector */}
          <div className="block lg:hidden w-full">
            <div className="relative">
              <select
                value={selectedTag || ''}
                onChange={(e) => setSelectedTag(e.target.value || null)}
                className="w-full bg-card border border-border text-text-primary rounded-xl py-3.5 px-4 pr-10 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm font-inter font-medium appearance-none cursor-pointer"
              >
                <option value="">All Weeks</option>
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

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <div
                key={post.id}
                className="card-reveal h-full"
                style={{ transitionDelay: `${(i % 3) * 50}ms` }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="card group overflow-hidden p-0 flex flex-col h-full hover:border-accent/40 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-accent/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm z-10">
                      WEEK {post.week}
                    </div>
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-muted font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-accent/60" /> {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2 leading-tight font-inter">
                        {post.title}
                      </h3>

                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 font-inter">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-border/50 text-muted px-2 py-0.5 rounded border border-border flex items-center gap-1 font-bold tracking-wide">
                            <Tag size={10} className="text-accent/60" /> {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        className="text-text-primary group-hover:text-accent transition-colors duration-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4 bg-card rounded-2xl border border-dashed border-border">
            <p className="text-text-secondary">No posts found matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
              className="text-accent hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
