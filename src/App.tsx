import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteConfig } from './data/siteConfig';
import { Loader } from './components/Loader/Loader';
import { Cursor } from './components/Cursor/Cursor';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Blog } from './components/Blog/Blog';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary SEO */}
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="author" content={siteConfig.seo.author} />
        <meta name="theme-color" content={siteConfig.seo.themeColor} />

        {/* Open Graph */}
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:image" content={siteConfig.seo.image} />
        <meta property="og:url" content={siteConfig.seo.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.seo.twitterHandle} />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={siteConfig.seo.image} />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href={siteConfig.seo.favicon} />
      </Helmet>

      <Loader />
      <Cursor />
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
