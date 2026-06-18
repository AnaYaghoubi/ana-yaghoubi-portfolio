import { User, Sparkles, Code2, Layout, Users, Brain, Server, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">
        {/* About Me */}
        <div className="card space-y-6 reveal">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
              <User size={24} />
            </div>
            <h3 className="text-2xl">About Me</h3>
          </div>

          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I enjoy analyzing the logic behind software and finding better ways to solve problems. My interest in development started with a simple question: how can I make this work better?
            </p>

            <p>
              Breaking down complex problems into structured, manageable solutions is one of the things I enjoy most about development. This analytical mindset helped me graduate with distinction in Programming and continues to shape the way I approach software development.
            </p>

            <p>
              Whether I’m building responsive user interfaces with React and Next.js, developing applications with C# and .NET, or working with platforms such as HubSpot and Power Platform, I focus on writing clean, maintainable code and creating practical, user-friendly solutions.
            </p>

            <p>
              Through my projects and internship experience, I’ve worked across different stages of the development lifecycle, from analysis and implementation to testing and documentation, while continuously strengthening my technical and problem-solving skills in real-world development environments.
            </p>
          </div>
        </div>

        {/* What I Do Best */}
        <div className="card space-y-6 reveal">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl">What I Do Best</h3>
          </div>

          <div className="space-y-6">
            <FeatureItem
              icon={<Code2 size={20} />}
              title="Frontend Developer"
              desc="Building responsive and interactive user interfaces with React, Next.js and modern tools."
              delay="delay-100"
            />
            <FeatureItem
              icon={<Server size={20} />}
              title="Backend Developer"
              desc="Building structured backend solutions with .NET and REST APIs."
              delay="delay-200"
            />
            <FeatureItem
              icon={<Layout size={20} />}
              title="CMS & Low-code Development"
              desc="Creating scalable solutions with WordPress, HubSpot and Power Platform."
              delay="delay-300"
            />
            <FeatureItem
              icon={<Cpu size={20} />}
              title="AI-Assisted Development"
              desc="Combining software development fundamentals with AI-assisted workflows to analyze problems, explore solutions, and build software more efficiently."
              delay="delay-400"
            />
            <FeatureItem
              icon={<Brain size={20} />}
              title="Analytical Problem Solver"
              desc="Able to analyze requirements and break down complex challenges into clean, structured solutions."
              delay="delay-500"
            />
            <FeatureItem
              icon={<Users size={20} />}
              title="Collaborative & Continuous Learner"
              desc="Continuously learning, adapting to new technologies, and collaborating effectively in Agile teams."
              delay="delay-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay?: string }) => (
  <div className={`flex gap-5 transition-all duration-700 ${delay} reveal`}>
    <div className="mt-1 text-accent bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-accent font-semibold">{title}</h4>
      <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default About;
