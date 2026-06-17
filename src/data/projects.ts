import type { Project } from '../types';
import pdfpalImg from '../assets/images/pdfpal.png';
import nutriguideImg from '../assets/images/nutriguide.png';
import dishcoveryImg from '../assets/images/dishcovery.png';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'PdfPal',
    description: 'An intelligent PDF assistant powered by GenAI to chat, summarize, and extract info from documents.',
    tech: ['Python', 'LangChain', 'Gemini API'],
    image: pdfpalImg,
    url: 'https://github.com/aniketpotabatti/GenAIHub/tree/main/PdfPal',
  },
  {
    id: 'project-2',
    title: 'NutriGuide',
    description: 'A GenAI nutrition advisor analyzing meals and tailoring personalized diet plans.',
    tech: ['Python', 'Streamlit', 'Gemini API'],
    image: nutriguideImg,
    url: 'https://github.com/aniketpotabatti/GenAIHub/tree/main/NutriGuide',
  },
  {
    id: 'project-3',
    title: 'Dishcovery',
    description: 'Discover recipes and culinary ideas from raw ingredients and image uploads using vision AI.',
    tech: ['Python', 'Gemini Vision', 'Streamlit'],
    image: dishcoveryImg,
    url: 'https://github.com/aniketpotabatti/GenAIHub/tree/main/Dishcovery',
  },
];
