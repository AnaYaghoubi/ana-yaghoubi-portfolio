import { Printer, ArrowLeft, Mail, MapPin, Calendar, Car, Globe, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/cv-photo.jpg';
import { useSEO } from '../hooks/useSEO';

const Linkedin = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const PageWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full max-w-[210mm] min-h-[297mm] print:min-h-0 mx-auto bg-white text-slate-800 shadow-2xl print:shadow-none font-inter mb-8 print:mb-0 shrink-0 overflow-hidden ${className}`}>
    {children}
  </div>
);

const CV = () => {
  useSEO({
    title: 'Ana_Yaghoubi_CV_EN',
    description: 'Curriculum Vitae of Ana Yaghoubi, showcasing experience in React, TypeScript, ASP.NET Core, CMS development, and modern web application development.',
    noindex: true
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-12 px-4 lg:px-8 print:py-0 print:px-0 print:bg-white overflow-x-hidden"
    >
      <div className="w-full max-w-[210mm] mx-auto flex flex-col items-center">
        {/* Print Controls - Hidden when printing */}
        <div className="w-full mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 print:hidden animate-fade-in-up">
          <Link
            to="/"
            className="group flex items-center gap-3 text-muted hover:text-accent transition-all font-bold text-[11px] uppercase tracking-[0.2em] font-inter w-fit py-2"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700 w-full sm:w-auto justify-center">
              <Link to="/cv" className="px-6 sm:px-3 py-1.5 sm:py-1 text-xs font-semibold rounded bg-accent text-white shadow-sm flex-1 sm:flex-none text-center">EN</Link>
              <Link to="/cv-nl" className="px-6 sm:px-3 py-1.5 sm:py-1 text-xs font-semibold rounded text-slate-400 hover:text-white transition-colors flex-1 sm:flex-none text-center">NL</Link>
            </div>
            {/* Desktop Print Button */}
            <button
              onClick={handlePrint}
              className="hidden lg:flex btn-primary w-auto justify-center"
            >
              <Printer size={18} /> Print / Save PDF
            </button>

            {/* Mobile / Tablet Button */}
            <a
              href="/Ana_Yaghoubi_CV_EN.pdf"
              download="Ana_Yaghoubi_CV_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex lg:hidden btn-primary w-full justify-center px-4 py-2.5 text-sm"
            >
              <Download size={16} /> View / Download PDF
            </a>
          </div>
        </div>

        {/* PAGE 1 */}
        <PageWrapper className="print:break-after-page flex flex-col lg:flex-row print:flex-row animate-fade-in-up print:h-[297mm]">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[35%] print:w-[35%] bg-[#1e293b] text-white py-6 px-6 sm:px-8 print:py-6 print:px-8 flex flex-col gap-6 print:gap-5 print:bg-[#1e293b] print:text-white" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>

            {/* Mobile Title (Hidden on Desktop/Print) */}
            <div className="space-y-1 text-center lg:hidden print:hidden mt-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-none">Ana Yaghoubi</h1>
              <p className="text-sm text-accent-light font-semibold uppercase tracking-widest mt-1">Software Developer</p>
            </div>

            <div className="flex justify-center mb-0 mt-2 lg:mt-10 print:mt-8">
              <div className="w-32 h-32 print:w-28 print:h-28 rounded-full border-4 border-slate-600 overflow-hidden shadow-xl bg-slate-800 shrink-0">
                <img src={profileImg} alt="Ana Yaghoubi" className="w-full h-full object-cover object-[50%_20%] scale-[1.2]" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-slate-600 pb-1.5 text-slate-300">Personal Info</h2>
              <ul className="space-y-3 text-[11px] print:text-[10px]">
                {/* <li className="flex items-center gap-3">
                <Phone size={14} className="text-accent-light shrink-0" />
                <span>+32 488 89 40 40</span>
              </li> */}
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-accent-light shrink-0" />
                  <span>anna.yaghoubi@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin size={14} className="text-accent-light shrink-0" />
                  <a href="https://linkedin.com/in/ana-yaghoubi" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">
                    linkedin.com/in/ana-yaghoubi
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={14} className="text-accent-light shrink-0" />
                  <a href="https://anayaghoubi.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">
                    anayaghoubi.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={14} className="text-accent-light shrink-0" />
                  <span>Antwerp, Belgium</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={14} className="text-accent-light shrink-0" />
                  <span>18/11/1998, Tehran</span>
                </li>
                <li className="flex items-center gap-3">
                  <Car size={14} className="text-accent-light shrink-0" />
                  <span>Driving License B</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-slate-600 pb-1.5 text-slate-300">Languages</h2>
              <ul className="space-y-1.5 text-[11px] print:text-[10px]">
                <li className="flex justify-between"><span>Dutch</span> <span className="font-semibold text-accent-light">Fluent</span></li>
                <li className="flex justify-between"><span>English</span> <span className="font-semibold text-accent-light">Fluent</span></li>
                <li className="flex justify-between"><span>Persian</span> <span className="font-semibold text-accent-light">Native</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-slate-600 pb-1.5 text-slate-300">Skills</h2>
              <div className="space-y-2.5 text-[11px] print:text-[10px] leading-relaxed text-slate-200">
                <p><strong className="text-white block mb-0.5">Front-end:</strong> JavaScript, TypeScript, React.js, Next.js, HTML, CSS, Tailwind, Alpine.js, Splide.js</p>
                <p><strong className="text-white block mb-0.5">Back-end & APIs:</strong> Node.js, Express, .NET, C#, REST APIs</p>
                <p><strong className="text-white block mb-0.5">AI & Automation:</strong> AI-Assisted Development, Prompt Engineering, Workflow Automation</p>
                <p><strong className="text-white block mb-0.5">Power Platform:</strong> Power Apps, Power Automate, Dataverse</p>
                <p><strong className="text-white block mb-0.5">Testing:</strong> Unit Testing, Integration Testing</p>
                <p><strong className="text-white block mb-0.5">Tools & Platforms:</strong> Docker, Vercel, GitHub, Strapi, WordPress, HubSpot, Figma</p>
                <p><strong className="text-white block mb-0.5">Databases:</strong> MySQL</p>
                <p><strong className="text-white block mb-0.5">Methodologies:</strong> Agile, Scrum</p>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="w-full lg:w-[65%] print:w-[65%] py-8 px-6 sm:px-10 print:py-6 print:px-10 flex flex-col gap-6 print:gap-5 bg-white text-slate-800">

            <div className="hidden lg:block print:block space-y-1 lg:mt-8 print:mt-6 mt-2 text-left print:text-left">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase leading-none">Ana Yaghoubi</h1>
              <p className="text-lg text-accent font-semibold uppercase tracking-widest mt-1">Software Developer</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b-2 border-slate-200 pb-1.5 text-slate-800">About Me</h2>
              <p className="text-xs print:text-[11px] text-slate-600 leading-relaxed text-justify">
                Experience building responsive web applications, frontend interfaces, CMS-driven platforms, backend APIs, and business solutions using technologies such as React, Next.js, .NET, HubSpot CMS, and Power Platform. Analytical and solution-oriented mindset with a focus on maintainable code, clean user experiences, and scalable digital solutions. Fast learner, adaptable, and motivated to continuously explore new technologies and development workflows.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b-2 border-slate-200 pb-1.5 text-slate-800">Education</h2>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">AP Hogeschool</h3>
                  <p className="text-[11px] font-medium text-slate-600">Associate Degree in Programming</p>
                  <p className="text-[10px] text-slate-500 italic">Graduated with distinction</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500">09/2021 - 01/2026</p>
                </div>
              </div>

              <div className="flex justify-between items-start mt-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">CVO Antwerpen</h3>
                  <p className="text-[11px] font-medium text-slate-600">ICT and Administration</p>
                  <p className="text-[10px] text-slate-500 italic">Successfully completed</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500">2017 - 2021</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b-2 border-slate-200 pb-1.5 text-slate-800">Experience</h2>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">MakeWaves</h3>
                  <p className="text-[10px] font-bold text-slate-500">09/2025 - 12/2025</p>
                </div>
                <p className="text-[11px] font-semibold text-accent mb-1.5">Front-end Developer Intern</p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-1 mb-2">
                  <li>Built front-end components using Alpine.js, Tailwind CSS, HubSpot CMS, and Splide.js.</li>
                  <li>Translated UI designs into functional and pixel-perfect webpages.</li>
                  <li>Developed a multi-brand email signature generator with live preview and copy-to-clipboard functionality.</li>
                  <li>Worked with HubL, HubDB, and reusable CMS modules.</li>
                  <li>Worked on analysis, development, testing, and technical documentation for CMS-based solutions.</li>
                  <li>Agile collaboration with designers & developers.</li>
                </ul>
                <p className="text-[10px] italic text-slate-500 mt-1">
                  Recommendation letter available upon request
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">Horeca & Catering</h3>
                  <p className="text-[10px] font-bold text-slate-500">2023 - present</p>
                </div>
                <p className="text-[11px] font-semibold text-accent mb-1.5">Kitchen Staff / Prep Cook (Student job)</p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-1">
                  <li>Accurate & efficient work: quality control, hygiene, following procedures.</li>
                  <li>Teamwork & communication in fast-paced work environments.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">Bibliotheek Stad Antwerpen</h3>
                  <p className="text-[10px] font-bold text-slate-500">07/2025 - 08/2025</p>
                </div>
                <p className="text-[11px] font-semibold text-accent mb-1.5">Staff Member (Student job)</p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-1">
                  <li>Assisted with digital content and social media communication.</li>
                  <li>Worked with digital systems and databases for registration and research tasks.</li>
                  <li>Supported employees with basic IT-related questions and technical troubleshooting.</li>
                  <li>Assisted visitors with customer-oriented communication and information support.</li>
                  <li>Organized and categorized books and library materials within structured library systems.</li>
                </ul>
              </div>
            </div>

          </div>
        </PageWrapper>

        {/* PAGE 2 */}
        <PageWrapper className="py-8 px-6 sm:px-10 print:py-8 print:px-10 bg-white text-slate-800 animate-fade-in-up delay-200 flex flex-col print:h-[297mm]">

          <div className="mb-4 pb-2 border-b-2 border-slate-200 flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-end print:items-end gap-1 sm:gap-0 print:gap-0 shrink-0">
            <h2 className="text-xl font-bold tracking-wider uppercase text-slate-900">Project Experience</h2>
            <p className="text-[11px] font-medium text-slate-500">Ana Yaghoubi - Page 2</p>
          </div>

          <div className="flex flex-col gap-4 print:gap-3 flex-1 content-start">

            <div className="flex flex-col sm:flex-row print:flex-row gap-4 print:gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm print:shadow-none print:break-inside-avoid">
              <div className="w-full sm:w-1/3 print:w-[35%] shrink-0">
                <h3 className="text-sm font-bold text-slate-800">Email Signature Generator</h3>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">HubSpot CMS, HubL, Alpine.js, Tailwind, JavaScript</p>
              </div>
              <div className="w-full sm:w-2/3 print:w-[65%]">
                <p className="text-[11px] print:text-[10px] text-slate-600 leading-snug text-justify mb-1.5">
                  A custom HubSpot CMS module designed to support multiple company brands through a scalable architecture. Developed during my internship, it allows users to generate professional signatures with real-time previews and copy-to-clipboard functionality.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Separated branding, presentation, and logic into structured layers.</li>
                  <li>Data handled via HubDB allowing brand-specific layout generation.</li>
                  <li>Responsive form with real-time previews powered by Alpine.js.</li>
                  <li>Outlook-compatible email signature HTML formatting.</li>
                  <li>Form validation, placeholder handling, and error handling for improved UX.</li>
                  <li>Worked on analysis, development, testing, and documentation.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row print:flex-row gap-4 print:gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm print:shadow-none print:break-inside-avoid">
              <div className="w-full sm:w-1/3 print:w-[35%] shrink-0">
                <h3 className="text-sm font-bold text-slate-800">Pension Architects – Pension Portal Migration</h3>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">React, TypeScript, Material UI, MUI DataGrid, React Context API, react-i18next, REST APIs</p>
              </div>
              <div className="w-full sm:w-2/3 print:w-[65%]">
                <p className="text-[11px] print:text-[10px] text-slate-600 leading-snug text-justify mb-1.5">
                  Team-based academic project developed for Pension Architects as part of the AP Hogeschool IT Case program, focused on modernising a legacy pension administration platform by rebuilding selected user workflows from Apache Tapestry in a modern React-based frontend architecture.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Developed responsive React interfaces for pension management, user profiles, document management, and internal communication workflows.</li>
                  <li>Built reusable React components and modular frontend structures to support maintainability and future scalability.</li>
                  <li>Implemented multilingual support (Dutch, French, German, and English) using react-i18next.</li>
                  <li>Integrated REST APIs based on OpenAPI/Swagger specifications and managed shared application state through React Context API.</li>
                  <li>Developed data-driven user interfaces using Material UI, MUI DataGrid, and interactive chart components.</li>
                  <li>Collaborated within an Agile development team through sprint planning, refinement sessions, stand-ups, and project presentations.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row print:flex-row gap-4 print:gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm print:shadow-none print:break-inside-avoid">
              <div className="w-full sm:w-1/3 print:w-[35%] shrink-0">
                <h3 className="text-sm font-bold text-slate-800">Project Management App</h3>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">Power Apps, Dataverse, Power Automate</p>
              </div>
              <div className="w-full sm:w-2/3 print:w-[65%]">
                <p className="text-[11px] print:text-[10px] text-slate-600 leading-snug text-justify mb-1.5">
                  A low-code Power Platform solution designed to help project managers create, manage, and track projects through automated Microsoft Teams integration. Built with a structured and maintainable architecture.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Relational Dataverse data model using multiple connected tables.</li>
                  <li>Automatic Microsoft Teams channel creation via Power Automate.</li>
                  <li>Microsoft Entra ID / Office365Users integration for user assignment.</li>
                  <li>Robust validation and status tracking UX.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row print:flex-row gap-4 print:gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm print:shadow-none print:break-inside-avoid">
              <div className="w-full sm:w-1/3 print:w-[35%] shrink-0">
                <h3 className="text-sm font-bold text-slate-800">Hotel Management API</h3>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">ASP.NET Core, C#, Entity Framework Core, MySQL, Swagger, MSTest, Moq</p>
              </div>
              <div className="w-full sm:w-2/3 print:w-[65%]">
                <p className="text-[11px] print:text-[10px] text-slate-600 leading-snug text-justify mb-1.5">
                  A RESTful backend API built with ASP.NET Core and Entity Framework Core to manage hotels, cities, and countries through a relational database structure.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>CRUD operations across related entities: Countries, Cities, and Hotels.</li>
                  <li>Repository Pattern architecture with Dependency Injection.</li>
                  <li>Swagger/OpenAPI documentation for endpoint testing and API exploration.</li>
                  <li>Entity Framework Core migrations and model validation using Data Annotations.</li>
                  <li>Unit testing implementation with MSTest and Moq.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row print:flex-row gap-4 print:gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm print:shadow-none print:break-inside-avoid">
              <div className="w-full sm:w-1/3 print:w-[35%] shrink-0">
                <h3 className="text-sm font-bold text-slate-800">STUA – Students & Antwerp</h3>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">WordPress, PHP, Ultimate Member, The Events Calendar, WPForms</p>
              </div>
              <div className="w-full sm:w-2/3 print:w-[65%]">
                <p className="text-[11px] print:text-[10px] text-slate-600 leading-snug text-justify mb-1.5">
                  A WordPress-based platform developed for a student association in Antwerp, featuring user authentication, role-based access control, study specific agendas, and event management.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Implemented protected member-only areas and customized content visibility based on user roles.</li>
                  <li>Integrated and customized multiple WordPress plugins to deliver a unified and user-friendly experience.</li>
                  <li>Structured dynamic event agendas and personalized content for different study groups.</li>
                  <li>Integrated event calendars, GDPR compliance, and SEO optimization through WordPress plugins.</li>
                </ul>
              </div>
            </div>

          </div>
        </PageWrapper>

      </div>
    </div>
  );
};

export default CV;
