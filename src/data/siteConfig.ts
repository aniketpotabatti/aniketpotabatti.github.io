import profileImage from '../assets/images/profile.jpg';
import faviconSvg from '../assets/icons/favicon.svg';

export const siteConfig = {
  name: 'Aniket Potabatti',
  logoText: 'AP',
  email: 'aniket.potabatti101@gmail.com',
  availability: {
    active: true,
    text: 'Open to opportunities',
  },
  greeting: "Hello, I'm",
  typingTitles: [
    'Developer Enthusiast',
    'Freelance Data Scientist',
    'Generative AI Engineer',
    'Problem Solver',
  ],
  seo: {
    title: 'Aniket Potabatti — Developer & Data Scientist',
    description: 'Portfolio of Aniket Potabatti — Developer, Data Scientist, and Generative AI engineer. Building intelligent products with Python, LangChain, and Gemini.',
    author: 'Aniket Potabatti',
    themeColor: '#000000',
    url: 'https://aniketpotabatti.github.io',
    image: profileImage,
    twitterHandle: '@aniketpotabatti',
    favicon: faviconSvg,
  },
  navItems: [
    { label: 'About', sectionId: 'about' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Blog', sectionId: 'blog' },
    { label: 'Contact', sectionId: 'contact' },
  ],
};
