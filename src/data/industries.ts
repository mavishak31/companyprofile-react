import type { IIndustryItem } from '../types';
import fintech from '../assets/industry-fintech.png';
import ecommerce from '../assets/industry-ecommerce.png';
import healthcare from '../assets/industry-healthcare.png';

export const industries: IIndustryItem[] = [
  {
    id: 'fintech',
    title: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: fintech,
  },

  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ecommerce,
  },

  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: healthcare,
  },
];
