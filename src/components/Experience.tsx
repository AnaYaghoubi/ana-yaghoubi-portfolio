import { type ReactNode } from 'react';
import { Calendar, Search, Code, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <section id="experience" className="py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl flex items-center gap-3 font-bold tracking-tight">
          <span className="w-2 h-10 bg-accent rounded-full shadow-[0_0_15px_rgba(124,58,237,0.4)]"></span>
          Experience & Learning
        </h2>

        <div className="card p-0 relative overflow-hidden border-white/10 bg-[#050508] reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* 1. Company Info */}
            <div className="lg:col-span-3 p-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <div className="w-20 h-20 bg-[#1a1a2e] rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                MW
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MakeWaves</h3>
                <p className="text-accent text-sm font-semibold mt-0.5">Frontend Developer Intern</p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[13px] text-text-secondary mt-3 font-medium">
                  <Calendar size={14} className="text-text-secondary/60" />
                  Sep 2025 – Dec 2025
                </div>
              </div>
            </div>

            {/* 2. What I Did */}
            <div className="lg:col-span-4 p-6">
              <h4 className="text-accent font-bold text-[13px] uppercase tracking-wider mb-4">What I Did</h4>
              <ul className="space-y-3">
                {[
                  "Built front-end components using Alpine.js, Tailwind CSS, HubSpot CMS, HubDB, and Splide.js.",
                  "Translated UI/UX designs into pixel-perfect and functional webpages in collaboration with designers.",
                  "Developed a reusable multi-brand email signature generator with live preview and copy-to-clipboard functionality.",
                  "Analyzed project requirements and translated them into technical solutions.",
                  "Worked within Agile workflows alongside designers and developers.",
                  "Focused on maintainability, reusability, performance, and code quality."
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] text-text-secondary leading-relaxed group reveal">
                    <span className="w-1.5 h-1.5 bg-text-secondary/30 rounded-full mt-1.5 group-hover:bg-accent transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Container (3 & 4) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                {/* 3. What I Learned */}
                <div className="p-6">
                  <h4 className="text-accent font-bold text-[13px] uppercase tracking-wider mb-4">What I Learned</h4>
                  <ul className="space-y-3">
                    {[
                      "Learned to write maintainable and scalable code.",
                      "Improved debugging and problem-solving skills.",
                      "Gained hands-on experience with HubSpot CMS and real-world development workflows.",
                      "Strengthened teamwork and communication skills within an Agile company environment."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-[13px] text-text-secondary leading-relaxed group reveal">
                        <span className="w-1.5 h-1.5 bg-text-secondary/30 rounded-full mt-1.5 group-hover:bg-accent transition-colors"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Writing & Sharing */}
                <div className="p-6">
                  <h4 className="text-accent font-bold text-[13px] uppercase tracking-wider mb-4">Writing & Sharing</h4>
                  <p className="text-[13px] text-text-secondary leading-relaxed mb-6">
                    Sharing my internship journey through weekly posts on frontend development and technical learnings.
                  </p>
                  <Link to="/blog" className="flex items-center justify-between w-full p-3.5 rounded-xl border border-white/10 bg-transparent hover:bg-white/5 transition-all group">
                    <span className="text-sm font-bold text-white">View Blog</span>
                    <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* 5. Development Lifecycle (Spanning under 3 & 4) */}
              <div className="p-6 pt-2">
                <h4 className="text-accent font-bold text-[13px] uppercase tracking-wider mb-3">Development Lifecycle</h4>
                <div className="bg-[#0a0a14] border border-white/5 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 shadow-xl">
                  <LifecycleStep icon={<Search size={18} />} label="Analysis" />
                  <div className="h-4 w-[1px] ml-[9px] sm:ml-0 sm:h-auto sm:w-auto sm:flex-1 border-l sm:border-l-0 sm:border-t border-dashed border-white/10 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-white/10 rotate-45 sm:hidden"></div>
                    <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-t border-r border-white/10 rotate-45 hidden sm:block"></div>
                  </div>
                  <LifecycleStep icon={<Code size={18} />} label="Development" />
                  <div className="h-4 w-[1px] ml-[9px] sm:ml-0 sm:h-auto sm:w-auto sm:flex-1 border-l sm:border-l-0 sm:border-t border-dashed border-white/10 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-white/10 rotate-45 sm:hidden"></div>
                    <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-t border-r border-white/10 rotate-45 hidden sm:block"></div>
                  </div>
                  <LifecycleStep icon={<CheckCircle size={18} />} label="Testing" />
                  <div className="h-4 w-[1px] ml-[9px] sm:ml-0 sm:h-auto sm:w-auto sm:flex-1 border-l sm:border-l-0 sm:border-t border-dashed border-white/10 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-white/10 rotate-45 sm:hidden"></div>
                    <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-t border-r border-white/10 rotate-45 hidden sm:block"></div>
                  </div>
                  <LifecycleStep icon={<FileText size={18} />} label="Documentation" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="card p-6 md:p-10 flex flex-col items-center text-center gap-6 border-accent/20 bg-accent/5 reveal">
          <div className="flex-shrink-0">
            <svg width="40" height="28" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-60">
              <path d="M19.2 0V14.4H11.52C11.52 19.2 13.44 21.12 17.28 21.12V28.8C7.68 28.8 3.84 21.12 3.84 14.4V0H19.2ZM44.16 0V14.4H36.48C36.48 19.2 38.4 21.12 42.24 21.12V28.8C32.64 28.8 28.8 21.12 28.8 14.4V0H44.16Z" fill="currentColor" />
            </svg>
          </div>

          <div className="space-y-4 max-w-4xl">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed font-medium">
              "Ana is a motivated and professional developer who shows initiative, collaborates effectively with her team, and is eager to learn and grow."
            </p>

            <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-medium pt-2">
              Based on feedback received during my internship at MakeWaves
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LifecycleStep = ({ icon, label }: { icon: ReactNode, label: string }) => (
  <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-2 group flex-shrink-0">
    <div className="text-white/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
      {icon}
    </div>
    <span className="text-[11px] text-text-secondary font-medium tracking-wide group-hover:text-white transition-colors">
      {label}
    </span>
  </div>
);

export default Experience;
