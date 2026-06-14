import { Mail, ArrowRight } from 'lucide-react';

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto reveal">
        <div className="card bg-accent/5 border-white/10 p-8 md:p-10 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Left Side: Typography */}
          <div className="flex-1 space-y-6 text-center lg:text-left relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Let's Work <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Together</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Interested in working together or discussing a potential opportunity? Feel free to reach out directly via email or LinkedIn.
            </p>
          </div>

          {/* Right Side: Links */}
          <div className="w-full lg:w-[450px] space-y-4 relative z-10">
            <a 
              href="mailto:anna.yaghoubi@gmail.com" 
              className="group flex items-center justify-between p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-widest mb-0.5 font-bold">Email</p>
                  <p className="text-white text-sm font-medium">anna.yaghoubi@gmail.com</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-text-secondary group-hover:text-accent group-hover:-rotate-45 transition-all duration-300" />
            </a>

            <a 
              href="https://linkedin.com/in/ana-yaghoubi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-widest mb-0.5 font-bold">LinkedIn</p>
                  <p className="text-white text-sm font-medium">linkedin.com/in/ana-yaghoubi</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-text-secondary group-hover:text-accent group-hover:-rotate-45 transition-all duration-300" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
