import { useState, useEffect, useRef, useMemo } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const isManualScrollingRef = useRef(false);
  const navItems = useMemo(() => ['About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact'], []);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Compute active item for non-home pages or initial render
  const currentActive = useMemo(() => {
    if (!isHomePage) {
      if (location.pathname.startsWith('/blog')) return 'Blog';
      if (location.pathname.startsWith('/projects')) return 'Projects';
      return '';
    }
    return activeItem;
  }, [isHomePage, location.pathname, activeItem]);

  useEffect(() => {
    if (!isHomePage) return;

    // Set initial active item if hash exists
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const formattedId = id.charAt(0).toUpperCase() + id.slice(1);
      if (navItems.includes(formattedId)) {
        setTimeout(() => {
          setActiveItem(formattedId);
        }, 0);

        // Disable observer temporarily while browser auto-scrolls to the hash section
        isManualScrollingRef.current = true;
        const timer = setTimeout(() => {
          isManualScrollingRef.current = false;
        }, 1000);
        return () => clearTimeout(timer);
      }
    }

    const handleScroll = () => {
      if (isManualScrollingRef.current) return;

      const scrollPosition = window.scrollY + 200;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
        setActiveItem('Contact');
      } else if (window.scrollY < 100) {
        setActiveItem('Home');
      } else {
        for (const item of navItems) {
          if (item === 'Blog') continue; // Blog is a separate page, not a section on the homepage

          const element = document.getElementById(item.toLowerCase());
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveItem(item);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call once to initialize
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.hash, navItems]);

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    setIsOpen(false);

    if (isHomePage && item !== 'Blog') {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        isManualScrollingRef.current = true;
        element.scrollIntoView({ behavior: 'smooth' });

        // Re-enable observer after smooth scroll completes
        setTimeout(() => {
          isManualScrollingRef.current = false;
        }, 1000);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => handleNavClick('Home')} className="flex items-center gap-3 group">
          <div className="text-accent group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /> <polyline points="8 6 2 12 8 18" /> <line x1="14" y1="4" x2="10" y2="20" /></svg>
          </div>
          <span className="text-text-primary font-semibold text-lg">Ana <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Yaghoubi</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : item === 'Blog' ? '/blog' : `/#${item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
              className={`hover:text-accent transition-all duration-300 relative py-1 ${currentActive === item ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
            >
              {item}
              {currentActive === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in shadow-[0_0_8px_rgba(124,58,237,0.5)]"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://github.com/AnaYaghoubi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/ana-yaghoubi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </div>

          <Link to="/cv" className="hidden lg:flex btn-accent-outline py-1.5 px-4 text-xs group">
            <Download size={14} className="text-accent group-hover:text-white transition-colors" />
            <span>Download CV</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-text-primary p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen border-b border-border opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-6 bg-background">
          {navItems.map((item, i) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : item === 'Blog' ? '/blog' : `/#${item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
              className={`text-lg font-medium transition-all duration-300 flex items-center justify-between group ${currentActive === item ? 'text-accent' : 'text-text-secondary'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
              <span className={`w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${currentActive === item ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`}></span>
            </Link>
          ))}
          <div className="flex flex-col gap-6 pt-6 border-t border-border">
            <Link to="/cv" onClick={() => setIsOpen(false)} className="btn-accent-outline w-full justify-center py-3 group">
              <Download size={18} className="text-accent group-hover:text-white transition-colors" />
              <span>Download CV</span>
            </Link>
            <div className="flex items-center gap-6">
              <a href="https://github.com/AnaYaghoubi" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub Profile">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ana-yaghoubi" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
