import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted">
          © 2026 Ana Yaghoubi. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-border hover:bg-accent text-muted hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
          aria-label="Scroll to top of page"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
