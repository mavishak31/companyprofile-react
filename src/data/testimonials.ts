import type { ITestimonial } from '../types';
import johnlee from '../assets/johnlee.png';
import sarahtan from '../assets/sarahtan.png';
import emilychen from '../assets/emilychen.png';

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: 'John Lee',
    role: 'Director',
    company: 'Innovate Corp',
    message:
      '"A game-changer for our project. They turned our idea into reality efficiently and effectively."',
    avatar: johnlee,
    // rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager',
    company: 'Finovate',
    message:
      '"The team delivered exactly what we needed on time and with outstanding quality."',
    avatar: sarahtan,
    // rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Head',
    company: 'TechSphere',
    message:
      '"The collaboration was seamless. Their expertise truly helped us succeed."',
    avatar: emilychen,
    // rating: 5,
  },
];
