# Software Developer Portfolio

A responsive and optimized developer portfolio website built to showcase professional projects, technical skills, work experience, and weekly blog reflections.

---

## Tech Stack

* **Frontend**: React 19, TypeScript, Vite
* **Routing**: React Router 7 (Client-side routing)
* **Styling**: Tailwind CSS 4, custom CSS transitions and animations
* **Icons**: Lucide React
* **Quality Assurance**: ESLint, TypeScript compiler checking

---

## Key Features

* **Responsive Design**: Mobile, tablet, and desktop layouts with cohesive spacing, glassmorphic UI components, and theme colors.
* **Custom Project Carousel**: An infinite-looping, swipe-capable carousel optimized for touch interactions on mobile and tablet screen sizes.
* **Filterable Content**: Interactive text search and tag filters for the projects listing and internship blog indexes.
* **Dynamic Lightbox**: Full-screen image modal supporting navigation, mouse click closures, and touchscreen swipe gestures.
* **Print-Optimized CV**: Structured resume pages supporting print-specific style overrides (using CSS `@media print` directives) to ensure clean A4 page breaking.
* **Work Timeline & Diagram**: A chronological timeline tracking work history, alongside a responsive flowchart representing a standardized development lifecycle.

---

## Pages Included

* **Homepage (`/`)**: Core sections including Hero, About Me, Skills, Experience, Projects Carousel, and Contact Form.
* **Projects Index (`/projects`)**: Searchable index of all software projects.
* **Project Details (`/projects/:id`)**: Technical summaries detailing project features, development challenges, and key learnings, with relative next/prev navigation links.
* **Blog Index (`/blog`)**: Collection of weekly internship logs.
* **Blog Details (`/blog/:id`)**: Dynamic blog post reader with next/prev navigation buttons.
* **Curriculum Vitae (`/cv` & `/cv-nl`)**: Localized English and Dutch versions of the resume.
* **404 Route (`*`)**: Fallback error screen for unmatched links.

---

## SEO and Accessibility (a11y)

* **Dynamic Metadata**: The custom `useSEO` hook manages page-specific titles, meta descriptions, Open Graph parameters, and Twitter Cards on route navigation.
* **JSON-LD Schema**: Injects structured data schemas (`Person`, `CreativeWork`, `BlogPosting`) dynamically into the document head to support semantic search indexing.
* **Accessibility**: Screen-reader friendly structures, including descriptive `alt` tags on images and appropriate `aria-label` or `aria-expanded` attributes on interactive links and toggle buttons.
* **Indexing Files**: Pre-configured crawler directives in `public/robots.txt` and route indexes in `public/sitemap.xml`.

---

## CV Download Behavior

* **Desktop**: Clicking "Print / Save PDF" triggers browser printing (`window.print()`). Print-specific styles format the page margins and hide header/navigation bars.
* **Mobile / Tablet**: The print layout is hidden and replaced by a download link pointing directly to static assets (`public/Ana_Yaghoubi_CV_EN.pdf` and `public/Ana_Yaghoubi_CV_NL.pdf`) using the HTML5 `download` attribute to ensure reliable device downloads.

---

## Local Development

### Prerequisites
Ensure that Node.js (version 18 or higher) is installed on your local machine.

### Instructions
1. Clone the repository to your local folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the application in your browser at the local port displayed in the console (typically http://localhost:5173).

---

## Production Build

To run type checks, check formatting rules, and bundle files:
```bash
# Run ESLint linter
npm run lint

# Compile and package static assets
npm run build
```
Production code will be packaged into the `dist/` directory.

---

## Deployment (Vercel)

This project is configured for Vercel deployment.
* **Single Page Routing**: Single Page Applications require redirection rules to prevent hosting-level 404 errors when reloading subpages. This redirect is handled by Vercel edge servers using the rewrite rules declared in [vercel.json](./vercel.json).
* **Setup**: Connect the repository to Vercel, set the build command to `npm run build`, and point the output folder to `dist`.
