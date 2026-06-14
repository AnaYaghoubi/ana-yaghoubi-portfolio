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

const CVDutch = () => {
  useSEO({
    title: 'Ana_Yaghoubi_CV_NL',
    description: 'Nederlandstalige Curriculum Vitae van Ana Yaghoubi. Softwareontwikkelaar gespecialiseerd in moderne webtechnologieën.'
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
              <Link to="/cv" className="px-6 sm:px-3 py-1.5 sm:py-1 text-xs font-semibold rounded text-slate-400 hover:text-white transition-colors flex-1 sm:flex-none text-center">EN</Link>
              <Link to="/cv-nl" className="px-6 sm:px-3 py-1.5 sm:py-1 text-xs font-semibold rounded bg-accent text-white shadow-sm flex-1 sm:flex-none text-center">NL</Link>
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
              href="/Ana_Yaghoubi_CV_NL.pdf"
              download="Ana_Yaghoubi_CV_NL.pdf"
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
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-slate-600 pb-1.5 text-slate-300">Persoonlijke Info</h2>
              <ul className="space-y-3 text-[11px] print:text-[10px]">
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
                  <span>Antwerpen, België</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={14} className="text-accent-light shrink-0" />
                  <span>18/11/1998, Teheran</span>
                </li>
                <li className="flex items-center gap-3">
                  <Car size={14} className="text-accent-light shrink-0" />
                  <span>Rijbewijs B</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-slate-600 pb-1.5 text-slate-300">Talen</h2>
              <ul className="space-y-1.5 text-[11px] print:text-[10px]">
                <li className="flex justify-between"><span>Nederlands</span> <span className="font-semibold text-accent-light">Vloeiend</span></li>
                <li className="flex justify-between"><span>Engels</span> <span className="font-semibold text-accent-light">Vloeiend</span></li>
                <li className="flex justify-between"><span>Perzisch</span> <span className="font-semibold text-accent-light">Moedertaal</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-slate-600 pb-1.5 text-slate-300">Vaardigheden</h2>
              <div className="space-y-2.5 text-[11px] print:text-[10px] leading-relaxed text-slate-200">
                <p><strong className="text-white block mb-0.5">Front-end:</strong> JavaScript, TypeScript, React.js, Next.js, HTML, CSS, Tailwind, Alpine.js, Splide.js</p>
                <p><strong className="text-white block mb-0.5">Back-end & APIs:</strong> Node.js, Express, .NET, C#, REST APIs</p>
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
              <h2 className="text-xs font-bold tracking-widest uppercase border-b-2 border-slate-200 pb-1.5 text-slate-800">Over Mij</h2>
              <p className="text-xs print:text-[11px] text-slate-600 leading-relaxed text-justify">
                Software Developer met ervaring in het ontwikkelen van webapplicaties, CMS-oplossingen en backenddiensten. Ervaring met technologieën zoals React, Next.js, .NET, HubSpot CMS en Power Platform. Analytisch en oplossingsgericht, met een focus op onderhoudbare code, gebruiksvriendelijke interfaces en schaalbare softwareoplossingen. Leert snel, past zich vlot aan nieuwe omgevingen aan en blijft zich voortdurend verdiepen in nieuwe technologieën.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b-2 border-slate-200 pb-1.5 text-slate-800">Opleiding</h2>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">AP Hogeschool</h3>
                  <p className="text-[11px] font-medium text-slate-600">Graduaat Programmeren</p>
                  <p className="text-[10px] text-slate-500 italic">Afgestudeerd met onderscheiding</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500">09/2021 - 01/2026</p>
                </div>
              </div>

              <div className="flex justify-between items-start mt-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">CVO Antwerpen</h3>
                  <p className="text-[11px] font-medium text-slate-600">ICT en Administratie</p>
                  <p className="text-[10px] text-slate-500 italic">Succesvol afgerond</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500">2017 - 2021</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-widest uppercase border-b-2 border-slate-200 pb-1.5 text-slate-800">Ervaring</h2>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">MakeWaves</h3>
                  <p className="text-[10px] font-bold text-slate-500">09/2025 - 12/2025</p>
                </div>
                <p className="text-[11px] font-semibold text-accent mb-1.5">Stagiair Front-end Developer</p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-1 mb-2">
                  <li>Front-endcomponenten gebouwd met Alpine.js, Tailwind CSS, HubSpot CMS en Splide.js.</li>
                  <li>UI-designs vertaald naar functionele en pixel-perfecte webpagina's.</li>
                  <li>Een multi-brand e-mailhandtekeninggenerator ontwikkeld met live preview en kopieerfunctionaliteit.</li>
                  <li>Gewerkt met HubL, HubDB en herbruikbare CMS-modules.</li>
                  <li>Bijgedragen aan de analyse, ontwikkeling, testing en technische documentatie van CMS-oplossingen.</li>
                  <li>Agile samengewerkt met designers en developers.</li>
                </ul>
                <p className="text-[10px] italic text-slate-500 mt-1">
                  Aanbevelingsbrief beschikbaar op aanvraag
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">Horeca & Catering</h3>
                  <p className="text-[10px] font-bold text-slate-500">2023 - heden</p>
                </div>
                <p className="text-[11px] font-semibold text-accent mb-1.5">Keukenmedewerker / Hulpkok (Studentenjob)</p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-1">
                  <li>Nauwkeurig en efficiënt gewerkt met aandacht voor kwaliteit, hygiëne en het volgen van procedures.</li>
                  <li>Ervaring opgebouwd in dynamische werkomgevingen waar efficiëntie, teamwork en communicatie essentieel zijn.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">Bibliotheek Stad Antwerpen</h3>
                  <p className="text-[10px] font-bold text-slate-500">07/2025 - 08/2025</p>
                </div>
                <p className="text-[11px] font-semibold text-accent mb-1.5">Medewerker (Studentenjob)</p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-1">
                  <li>Ondersteuning geboden bij digitale content en sociale media.</li>
                  <li>Gewerkt met digitale systemen en databanken voor registratie- en opzoekwerk.</li>
                  <li>Medewerkers ondersteund bij basis IT-vragen en technische problemen.</li>
                  <li>Bezoekers geholpen met digitale diensten, informatieverstrekking en klantgerichte ondersteuning.</li>
                  <li>Boeken en bibliotheekmaterialen georganiseerd binnen het bibliotheeksysteem.</li>
                </ul>
              </div>
            </div>

          </div>
        </PageWrapper>

        {/* PAGE 2 */}
        <PageWrapper className="py-8 px-6 sm:px-10 print:py-8 print:px-10 bg-white text-slate-800 animate-fade-in-up delay-200 flex flex-col print:h-[297mm]">

          <div className="mb-4 pb-2 border-b-2 border-slate-200 flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-end print:items-end gap-1 sm:gap-0 print:gap-0 shrink-0">
            <h2 className="text-xl font-bold tracking-wider uppercase text-slate-900">Projectervaring</h2>
            <p className="text-[11px] font-medium text-slate-500">Ana Yaghoubi - Pagina 2</p>
          </div>

          <div className="flex flex-col gap-4 print:gap-3 flex-1 content-start">

            <div className="flex flex-col sm:flex-row print:flex-row gap-4 print:gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm print:shadow-none print:break-inside-avoid">
              <div className="w-full sm:w-1/3 print:w-[35%] shrink-0">
                <h3 className="text-sm font-bold text-slate-800">Email Signature Generator</h3>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">HubSpot CMS, HubL, Alpine.js, Tailwind, JavaScript</p>
              </div>
              <div className="w-full sm:w-2/3 print:w-[65%]">
                <p className="text-[11px] print:text-[10px] text-slate-600 leading-snug text-justify mb-1.5">
                  Een HubSpot CMS-module ontwikkeld voor het genereren van professionele e-mailhandtekeningen voor meerdere bedrijfsmerken binnen één schaalbare architectuur.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Branding, presentatie en logica opgesplitst in afzonderlijke lagen.</li>
                  <li>HubDB gebruikt voor het genereren van merkspecifieke lay-outs.</li>
                  <li>Responsief formulier gebouwd met live preview-functionaliteit via Alpine.js.</li>
                  <li>Outlook-compatibele HTML-opmaak voor e-mailhandtekeningen ontwikkeld.</li>
                  <li>Formvalidatie, placeholderverwerking en foutafhandeling geïmplementeerd voor een betere gebruikerservaring.</li>
                  <li>Analyse, ontwikkeling, testing en documentatie uitgevoerd gedurende de volledige ontwikkelcyclus.</li>
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
                  Teamproject ontwikkeld voor Pension Architects binnen AP Hogeschool, gericht op de modernisering van een pensioenplatform door geselecteerde workflows opnieuw te ontwikkelen in React.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Responsieve React-interfaces ontwikkeld voor pensioen- en gebruikersbeheer.</li>
                  <li>Herbruikbare React-componenten en modulaire frontendstructuren opgebouwd met aandacht voor onderhoudbaarheid en schaalbaarheid.</li>
                  <li>Meertalige ondersteuning geïmplementeerd met react-i18next (Nederlands, Frans, Duits en Engels).</li>
                  <li>REST API's geïntegreerd via OpenAPI/Swagger en gedeelde applicatiestatus beheerd met React Context API.</li>
                  <li>Datagedreven gebruikersinterfaces ontwikkeld met Material UI, MUI DataGrid en interactieve grafieken.</li>
                  <li>Samengewerkt binnen een agile ontwikkelteam via sprintplanning, refinements, stand-ups en projectpresentaties.</li>
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
                  Een low-code Power Platform-applicatie ontwikkeld voor het beheren en opvolgen van projecten met geautomatiseerde Microsoft Teams-integratie.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Relationeel datamodel opgebouwd in Dataverse met meerdere gekoppelde tabellen.</li>
                  <li>Microsoft Teams-channels automatisch aangemaakt via Power Automate bij het aanmaken van nieuwe projecten.</li>
                  <li>Integratie met Microsoft Entra ID en Office365Users voor gebruikersbeheer en projecttoewijzingen.</li>
                  <li>Validatie- en statusopvolging geïmplementeerd voor een consistente gebruikerservaring.</li>
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
                  Een RESTful API ontwikkeld met ASP.NET Core en Entity Framework Core voor het beheren van hotels, steden en landen binnen een relationele databank.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>CRUD-functionaliteit ontwikkeld voor hotels, steden en landen.</li>
                  <li>Repository Pattern en Dependency Injection toegepast voor een onderhoudbare en schaalbare architectuur.</li>
                  <li>Entity Framework Core-migraties en modelvalidatie geïmplementeerd met Data Annotations.</li>
                  <li>Swagger/OpenAPI gebruikt voor API-documentatie en endpointtesting.</li>
                  <li>Unit tests ontwikkeld met MSTest en Moq.</li>
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
                  Een WordPress-platform ontwikkeld voor een studentenvereniging in Antwerpen met gebruikersauthenticatie, rolgebaseerde toegangscontrole en evenementenbeheer.
                </p>
                <ul className="list-disc pl-4 text-[11px] print:text-[10px] text-slate-600 space-y-0.5">
                  <li>Ledenzones ingericht met rolgebaseerde toegangsrechten.</li>
                  <li>WordPress-plugins geïntegreerd en geconfigureerd voor een consistente gebruikerservaring.</li>
                  <li>Agenda's, evenementenbeheer en gepersonaliseerde content opgezet voor verschillende studentengroepen.</li>
                  <li>GDPR-functionaliteiten en SEO-optimalisaties geïmplementeerd.</li>
                </ul>
              </div>
            </div>

          </div>
        </PageWrapper>

      </div>
    </div>
  );
};

export default CVDutch;
