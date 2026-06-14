// import project1 from '../assets/project-1.png';


// STUA Gallery
import stua1 from '../assets/projects/stua-wordpress/stua-1.jpeg';
import stua2 from '../assets/projects/stua-wordpress/stua-2.jpeg';
import stua3 from '../assets/projects/stua-wordpress/stua-3.jpeg';
import stua4 from '../assets/projects/stua-wordpress/stua-4.jpeg';
import stua5 from '../assets/projects/stua-wordpress/stua-5.jpeg';
import stua6 from '../assets/projects/stua-wordpress/stua-6.jpeg';
import stua7 from '../assets/projects/stua-wordpress/stua-7.jpeg';
import stua8 from '../assets/projects/stua-wordpress/stua-8.jpeg';
import stua9 from '../assets/projects/stua-wordpress/stua-9.jpeg';
import stua10 from '../assets/projects/stua-wordpress/stua-10.jpeg';
import stua11 from '../assets/projects/stua-wordpress/stua-11.jpeg';
import stua12 from '../assets/projects/stua-wordpress/stua-12.jpeg';

// Signature Generator Gallery
import epicdata1 from '../assets/projects/email-signature/signature-epicdata1.png';
import epicdata2 from '../assets/projects/email-signature/signature-epicdata2.png';
import makewaves1 from '../assets/projects/email-signature/signature-makewaves1.png';
import makewaves2 from '../assets/projects/email-signature/signature-makewaves2.png';

// Project Management App Gallery
import paDashboard from '../assets/projects/project-management-app/pa-dashboard.png';
import paDataverse1 from '../assets/projects/project-management-app/pa-dataverse1.png';
import paDataverse2 from '../assets/projects/project-management-app/pa-dataverse2.png';
import paDetail from '../assets/projects/project-management-app/pa-detail.png';
import paFlow from '../assets/projects/project-management-app/pa-flow.png';
import paForm from '../assets/projects/project-management-app/pa-form.png';
import paValidation from '../assets/projects/project-management-app/pa-validation.png';

// Hotel Management API Gallery
import apiSwaggerOverview from '../assets/projects/hotel-management-api/api-swagger-overview.png';
import apiProjectArchitecture from '../assets/projects/hotel-management-api/api-project-architecture.png';
import apiControllerDi from '../assets/projects/hotel-management-api/api-controller-di.png';
import apiDataModel from '../assets/projects/hotel-management-api/api-data-model.png';
import apiSwaggerGet from '../assets/projects/hotel-management-api/api-swagger-get.png';
import apiUnitTests from '../assets/projects/hotel-management-api/api-unit-tests.png';

// Pension Portal Gallery
import pensionHome from '../assets/projects/pension-portal/home.png';
import pensionDetail from '../assets/projects/pension-portal/pension.png';
import pensionPersonsData from '../assets/projects/pension-portal/personsdata.png';
import pensionContactPerson from '../assets/projects/pension-portal/contactperson.png';
import pensionDocuments from '../assets/projects/pension-portal/documents.png';

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  tags: string[];
  live?: string;
  secondaryLive?: string;
  github?: string;
  challenges: string[];
  features: string[];
  learnings: string[];
  type: string;
  platform: string;
  quote?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Email Signature Generator",
    shortDesc: "A multi-brand email signature generator built during my internship using HubSpot CMS, HubL, HubDB, Alpine.js, JavaScript, HTML, and CSS.",
fullDesc: "The Email Signature Generator is a custom HubSpot CMS module designed to support multiple company brands through a scalable and maintainable architecture. The application allows users to generate professional email signatures with real-time previews and copy-to-clipboard functionality for both HTML and plain text formats.\n\nI contributed to the analysis, development, testing, and technical documentation of the project, translating business requirements into scalable technical solutions.\n\nThe system was built to separate branding, presentation, and interactive logic into structured layers, making it easier to maintain, extend, and reuse across different company designs without duplicating the entire module.\n\n### System Architecture\n\nThe module is structured into three main layers:\n\n1. **Data & Branding**: Brand assets, layouts, and styling are managed through HubDB and HubSpot Files, allowing brand-specific customization without changing core module code.\n\n2. **Presentation**: Handled with HubL, HTML, Tailwind CSS, and CSS variables. The template resolves the active brand, injects dynamic CSS variables, loads brand assets, and renders the responsive form and live preview interface.\n\n3. **Behaviour**: Powered by Alpine.js to manage user input state, live preview updates, validation, placeholder handling, error handling, and copy-to-clipboard functionality for both HTML and plain text signatures.",

    challenges: [
      "Building a flexible system that supports two different brand designs without duplicating the entire module",
      "Keeping the signature HTML editable in HubDB while still allowing live preview and copy functionality",
      "Ensuring the generated signature remains compatible with email clients such as Outlook",
      "Managing dynamic fonts, icons, colors, and background assets per brand",
      "Preventing placeholder/demo data from being copied into real signatures",
      "Handling validation without making the form feel too strict",
      "Keeping the code maintainable for future HubSpot developers",
      "Structuring clear technical documentation for handover and future maintenance"
    ],
    features: [
      "Multi-brand support for different company designs",
      "Live signature preview while users fill in the form",
      "Copy-to-clipboard functionality for HTML and plain text",
      "Brand-specific signature layouts controlled through HubDB",
      "Dynamic styling system using HubDB fields and CSS variables",
      "Outlook-compatible email signature rendering using table-based HTML",
      "Form validation for names, email, phone numbers, and social links",
      "Placeholder handling to prevent demo content from being copied",
      "Dynamic locations and social media fields",
      "Developer documentation explaining the architecture and maintenance"
    ],
    learnings: [
      "Building scalable multi-brand modules in HubSpot CMS",
      "Working with HubL templates and dynamic HubDB data",
      "Managing brand assets through HubSpot Files",
      "Using Alpine.js for reactive UI behaviour",
      "Structuring live preview and copy-to-clipboard workflows",
      "Working with Outlook-compatible email signature HTML",
      "Writing technical documentation for real project handover"
    ],
    images: [makewaves1, makewaves2, epicdata1, epicdata2],
    tags: ["HubSpot CMS", "HubL", "HubDB", "Alpine.js", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    live: "https://147124152.hs-sites-eu1.com/makewaves",
    secondaryLive: "https://147124152.hs-sites-eu1.com/epicdata",
    type: "Web Application / HubSpot CMS",
    platform: "Desktop / Mobile",
    quote: "This project focused on building a reusable multi-brand email signature generator in HubSpot CMS with real-time previews, dynamic content management, and interactive user workflows."
  },
  {
    id: 2,
    title: "Vlaams Pensioenfonds – Pension Portal Migration",
    shortDesc: "This project was completed as part of an industry collaboration with Pension Architects during the IT Case course at AP Hogeschool. The goal was to modernise parts of a legacy pension administration platform by rebuilding selected user workflows from Apache Tapestry in a modern React-based frontend architecture.",
fullDesc: "This project was completed as part of an industry collaboration with Pension Architects during the IT Case course at AP Hogeschool. The goal was to modernise parts of a legacy pension administration platform by rebuilding selected user workflows from Apache Tapestry in a modern React-based frontend architecture.\n\nThe application provides pension fund members with access to pension reserves, career records, personal information, official documents, and internal communication tools through a responsive and multilingual web portal.\n\nMy contribution focused entirely on frontend development, including building reusable React components, implementing responsive layouts, integrating REST API data, and developing data-driven user interfaces for pension management workflows.\n\nThe frontend consumed API contracts provided through OpenAPI/Swagger specifications and was designed using a modular component architecture to support maintainability and future scalability.",

    challenges: [
      "Migrating legacy business workflows into a modern React architecture",
      "Designing reusable frontend components for multiple portal sections",
      "Integrating multilingual content consistently across the application",
      "Managing complex pension-related data within responsive interfaces",
      "Translating business-oriented pension requirements into user-friendly interfaces"
    ],
    features: [
      "Pension reserve dashboard with interactive charts",
      "Career history overview and employment records",
      "Personal profile and address management",
      "Beneficiary and contact person management",
      "Internal inbox and messaging functionality",
      "Multi-language support (Dutch, French, German, English)",
      "Responsive layouts for desktop and mobile devices",
      "Dynamic data tables using MUI DataGrid",
      "REST API integration using OpenAPI specifications",
      "Modular React component architecture"
    ],
    learnings: [
      "Building enterprise-scale React applications with TypeScript",
      "Structuring reusable component-based architectures",
      "Working with React Context API for state management",
      "Implementing multilingual interfaces with react-i18next",
      "Integrating REST APIs through OpenAPI/Swagger specifications",
      "Building responsive interfaces for desktop and mobile",
      "Working with Material UI and MUI DataGrid",
      "Collaborating within an Agile development environment",
    ],
    images: [pensionHome, pensionDetail, pensionPersonsData, pensionContactPerson, pensionDocuments],
    tags: ["React.js", "TypeScript", "Material UI", "MUI DataGrid", "React Context API", "react-i18next", "REST API", "OpenAPI / Swagger", "Chart.js"],
    type: "Web Application / React Migration Project",
    platform: "Desktop / Mobile",
    quote: "This project focused on migrating a legacy pension administration platform to a modern React-based frontend architecture, combining responsive user interfaces, multilingual support, data visualisation, and REST API integration."
  },
  {
    id: 3,
    title: "Project Management App",
    shortDesc: "A Power Platform solution designed to help project managers create, manage, and track projects through automated Microsoft Teams integration.",
    fullDesc: "Project Management App is a Power Platform solution designed to help project managers create, manage, and track projects through a structured and maintainable low-code architecture. The application allows users to create projects, assign colleagues, manage project details, and automatically create Microsoft Teams channels through Power Automate.\n\nI contributed to the analysis, development, testing, and technical documentation of the project, focusing on maintainability, realistic architecture, automation, validation, and clean user experience.\n\n### System Architecture\n\nThe solution is structured into three main layers:\n\n1. **User Interface**: Built with Microsoft Power Apps. Includes project creation forms, galleries, and detail screens with responsive card-based layouts.\n\n2. **Data Model**: Managed through Microsoft Dataverse. Uses a relational structure with separate Projects and Project Members tables to improve maintainability and automation reliability.\n\n3. **Automation**: Powered by Power Automate. Flows automatically create Teams channels, retrieve members from Entra ID, and handle status tracking (Pending, Created, Failed).",
    challenges: [
      "Designing a maintainable relational Dataverse structure",
      "Migrating from string-based user storage to a relational Dataverse data model",
      "Handling Teams automation failures gracefully",
      "Structuring clean validation UX without excessive visual noise",
      "Balancing simplicity, maintainability, and realistic business requirements",
      "Designing maintainable and modular Power Automate workflows"
    ],
    features: [
      "Project creation and management",
      "Multi-user project assignment",
      "Microsoft Entra ID / Office365Users integration",
      "Automatic Microsoft Teams channel creation",
      "Teams member automation",
      "Relational Dataverse data model",
      "Project detail screens",
      "Validation and error handling",
      "Teams status tracking and failure handling",
      "User-friendly project dashboards"
    ],
    learnings: [
      "Building business applications with Microsoft Power Apps",
      "Structuring relational data models in Dataverse",
      "Automating workflows with Power Automate",
      "Integrating Microsoft Teams automation",
      "Designing maintainable low-code architectures",
      "Implementing validation and error handling in Power Platform",
      "Writing technical documentation and architectural reasoning",
    ],
    images: [paDashboard, paForm, paFlow, paDetail, paValidation, paDataverse1, paDataverse2],
    tags: ["Power Apps", "Power Fx", "Dataverse", "Power Automate", "Microsoft Teams", "Microsoft Entra ID", "Office365Users Connector"],
    type: "Low-Code Business Application",
    platform: "Desktop / Microsoft Power Platform",
    quote: "This project focused on developing a maintainable low-code business application using Power Apps, Dataverse relational data models, and Microsoft Teams automation workflows."
  },
  {
    id: 4,
    title: "Hotel Management API",
    shortDesc: "A RESTful backend API built with ASP.NET Core and Entity Framework Core to manage hotels, cities, and countries through a relational database architecture.",
    fullDesc: "Hotel Management API is a RESTful backend service built with ASP.NET Core and Entity Framework Core. The project manages relational data between Countries, Cities, and Hotels. It implements the Repository Pattern to decouple data access logic from controller actions, ensuring a layered codebase.\n\nI designed the relational database schema, implemented CRUD endpoints, integrated data validation rules, and wrote automated unit tests.",
    challenges: [
      "Designing relational foreign key constraints and navigation properties in EF Core",
      "Structuring a layered backend with clean separation between Controllers, Repositories, and the DbContext",
      "Handling HTTP verbs (GET, POST, PUT, DELETE) and returning standard REST responses",
      "Implementing model validation using Data Annotations and returning standard HTTP status codes (e.g., 400 Bad Request, 404 Not Found)",
      "Mocking repositories with Moq to isolate and test API controller behavior"
    ],
    features: [
      "RESTful API endpoints (GET, POST, PUT, DELETE)",
      "CRUD operations across related entities (Countries, Cities, and Hotels)",
      "Relational database schema managed with Entity Framework Core migrations",
      "Interactive Swagger/OpenAPI documentation for endpoint testing",
      "Model validation using Data Annotations",
      "Repository Pattern to decouple business logic from EF Core DbContext",
      "Built-in Dependency Injection for service and repository registration",
      "Unit testing controllers using MSTest and Moq for mocked repositories",
      "MySQL relational database integration",
      "Standardized HTTP status responses (200 OK, 201 Created, 400 Bad Request, 404 Not Found)"
    ],
    learnings: [
      "Building RESTful APIs with ASP.NET Core",
      "Defining one-to-many relationships and foreign keys in Entity Framework Core",
      "Implementing the Repository Pattern to write testable, mockable database access code",
      "Structuring layered backend applications to separate concerns",
      "Writing unit tests with MSTest and mocking dependencies with Moq",
      "Exposing interactive API documentation with Swagger/OpenAPI"
    ],
    images: [apiSwaggerOverview, apiProjectArchitecture, apiControllerDi, apiDataModel, apiSwaggerGet, apiUnitTests],
    tags: ["ASP.NET Core", "C#", "Entity Framework Core", "MySQL", "Swagger", "MSTest", "Moq"],
    type: "Backend API",
    platform: "Backend / API",
    quote: "This project focused on building a structured backend API using ASP.NET Core and Entity Framework Core, featuring relational database mapping and automated unit testing."
  },
  {
    id: 5,
    title: "STUA – Students & Antwerp",
    shortDesc: "A WordPress-based platform developed for a student association in Antwerp, featuring secure member access, study-specific agendas, event management, and role-based content visibility.",
    fullDesc: "The platform combines a public-facing website with a protected member area where students can manage their profiles, access personalized agendas, and view member-only content. Different study programs have their own activities and schedules, while selected events are shared across multiple groups.\n\nThe project focused on content management, user authentication, role-based permissions, and integrating multiple WordPress plugins into a consistent and user-friendly experience. Special attention was given to usability, security, and maintaining a clear structure for both public visitors and registered members.",
    challenges: [
      "Managing role-based content visibility for different member groups",
      "Integrating multiple plugins while maintaining a consistent UI",
      "Structuring dynamic event agendas for different study directions",
      "Balancing usability, security, and maintainability within a CMS environment",
      "Ensuring responsive behavior across desktop and mobile devices"
    ],
    features: [
      "User authentication and profile management using Ultimate Member",
      "Role-based permissions and restricted content access",
      "Study-specific event agendas and calendar management",
      "Public and member-only sections",
      "Event creation and management through The Events Calendar",
      "GDPR cookie consent integration",
      "SEO optimization using Yoast SEO",
      "Automated backup and recovery solutions with UpdraftPlus",
      "Responsive multi-page website experience"
    ],
    learnings: [
      "CMS architecture and content management",
      "WordPress plugin integration and customization",
      "User authentication and role-based access control",
      "Managing security and privacy requirements on live websites",
      "Structuring dynamic content for different user groups",
      "Building consistent user experiences across multiple pages and plugins"
    ],
    images: [stua4, stua1, stua2, stua3, stua5, stua6, stua7, stua8, stua9, stua10, stua11, stua12],
    tags: ["WordPress", "PHP", "Ultimate Member", "The Events Calendar", "Yoast SEO", "HTML/CSS", "WPForms", "UpdraftPlus"],
    type: "Web Application / CMS Implementation",
    platform: "Desktop / Mobile",
    quote: "This project focused on building a structured WordPress platform with user authentication, role-based access, event management, and dynamic content for different student groups."
  }
];
