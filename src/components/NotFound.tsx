import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const NotFound = () => {
  useSEO({
    title: 'Page Not Found | Ana Yaghoubi',
    description: 'The requested page could not be found.'
  });

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center pt-16">
      <div className="max-w-md space-y-6 animate-fade-in-up">
        {/* Large 404 Accent Number */}
        <h1 className="text-8xl md:text-9xl font-bold font-inter tracking-tighter text-glow text-accent">
          404
        </h1>
        
        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold font-inter text-text-primary">
            Page Not Found
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed font-inter">
            Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        {/* Navigation Action */}
        <div className="pt-4">
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 mx-auto font-inter text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]"
          >
            <ArrowLeft size={16} />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
