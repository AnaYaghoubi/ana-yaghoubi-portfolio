import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPostDetail from './components/BlogPostDetail';
import AllProjects from './components/AllProjects';
import ProjectDetail from './components/ProjectDetail';
import CV from './components/CV';
import CVDutch from './components/CVDutch';
import NotFound from './components/NotFound';

import { useReveal } from './hooks/useReveal';
import { useEffect } from 'react';
import { useSEO } from './hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Ana Yaghoubi | Software Developer Portfolio',
    description: 'Software Developer Portfolio of Ana Yaghoubi. Creating responsive, structured web applications and digital tools with a focus on usability and clean, maintainable code.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Ana Yaghoubi',
      'jobTitle': 'Software Developer',
      'url': window.location.origin,
      'description': 'Software Developer creating responsive, structured web applications with a focus on usability and maintainable code.',
      'sameAs': [
        'https://github.com/AnaYaghoubi',
        'https://linkedin.com/in/ana-yaghoubi'
      ]
    }
  });

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  useReveal();
  const location = useLocation();

  // Scroll to top or to hash on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to allow content to render
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/cv-nl" element={<CVDutch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
