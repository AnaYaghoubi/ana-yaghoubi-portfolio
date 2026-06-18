
import SkillIcon from './SkillIcon';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Alpine.js", "Splide.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", ".NET", "C#", "MySQL", "REST APIs"]
    },
    {
      title: "AI & Automation",
      skills: ["AI-Assisted Development", "Prompt Engineering", "Workflow Automation"]
    },
    {
      title: "CMS & Platforms",
      skills: ["WordPress", "Strapi", "HubSpot", "HubDB", "HubL"]
    },
    {
      title: "Power Platform",
      skills: ["Power Apps", "Power Automate", "Dataverse"]
    },
    {
      title: "Testing & Tools",
      skills: ["Unit Testing", "Integration Testing", "Git", "GitHub", "Figma", "Vercel", "Docker", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl flex items-center gap-3 font-bold tracking-tight">
          <span className="w-2 h-10 bg-accent rounded-full shadow-[0_0_20px_rgba(124,58,237,0.5)]"></span>
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`card p-6 space-y-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 reveal delay-${(i + 1) * 100}`}>
              <div className="space-y-1">
                <h4 className="text-accent font-bold text-lg tracking-tight uppercase">{cat.title}</h4>
                <div className="h-0.5 w-full bg-accent/20 rounded-full"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 bg-white/5 hover:bg-accent/10 hover:border-accent/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] px-3 py-2 rounded-xl text-[13px] text-text-secondary hover:text-white transition-all cursor-default border border-white/10">
                    <SkillIcon name={skill} />
                    <span className="font-medium whitespace-nowrap tracking-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
