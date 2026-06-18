import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-8 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        <div className="flex-1 space-y-6 flex flex-col items-start text-left">
          <p className="text-accent font-medium -mb-1">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight">
            Ana <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Yaghoubi</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-text-primary">Software Developer</h2>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Building practical digital solutions through software development, problem-solving, and modern tools
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <Link to="/projects" className="btn-primary w-full sm:w-auto justify-center sm:px-8 sm:py-3.5 sm:text-base lg:px-6 lg:py-2.5 lg:text-sm">
              View My Work <ArrowRight size={18} />
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary border-white/10 w-full sm:w-auto justify-center sm:px-8 sm:py-3.5 sm:text-base lg:px-6 lg:py-2.5 lg:text-sm"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <div className="badge-available">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for work
            </div>
          </div>
        </div>

        <div className="relative group lg:-translate-x-20 mx-auto lg:mx-0">
          {/* Main Glow */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10 group-hover:bg-accent/30 transition-colors duration-500 animate-pulse"></div>

          {/* Decorative Orbits */}
          <div className="absolute inset-[-40px] md:inset-[-60px] pointer-events-none -z-0">
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-40">
              {/* First Orbit */}
              <ellipse cx="200" cy="200" rx="180" ry="120" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent/30 rotate-[-15deg] origin-center animate-rotate" />
              {/* Second Orbit */}
              <ellipse cx="200" cy="200" rx="160" ry="190" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent/20 rotate-[25deg] origin-center animate-rotate-reverse" />

              {/* Dots on Orbits */}
              <circle cx="370" cy="150" r="3" className="fill-accent shadow-[0_0_8px_theme('colors.accent')]" />
              <circle cx="30" cy="250" r="3" className="fill-accent/60" />
              <circle cx="200" cy="10" r="3" className="fill-accent shadow-[0_0_8px_theme('colors.accent')]" />
            </svg>
          </div>

          {/* Profile Ring */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 border-2 border-accent/40 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] ">
            <img
              src={profileImg}
              alt="Ana Yaghoubi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
