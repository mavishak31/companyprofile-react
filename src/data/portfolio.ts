import type { IPortfolioItem } from '../types';

// import gambar dari src/assets
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';

export const portfolioItems: IPortfolioItem[] = [
  {
    id: 1,
    category: 'Landing Page',
    title: 'Portfolio 1',
    image: portfolio1,
  },

  {
    id: 2,
    category: 'Landing Page',
    title: 'Portfolio 2',
    image: portfolio2,
  },

  {
    id: 3,
    category: 'Landing Page',
    title: 'Portfolio 3',
    image: portfolio3,
  },
];
