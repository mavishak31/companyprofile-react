import type { IServiceItem } from '../types';

import webIcon from '../assets/icon/web-development.png';
import mobileIcon from '../assets/icon/mobile-app.png';
import uiuxIcon from '../assets/icon/uiux.png';
import cloudIcon from '../assets/icon/cloud.png';
import softwareIcon from '../assets/icon/software.png';
import infraIcon from '../assets/icon/infrastructure.png';
import securityIcon from '../assets/icon/security.png';
import qaIcon from '../assets/icon/qa.png';
import supportIcon from '../assets/icon/support.png';

export const services: IServiceItem[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
    icon: webIcon,
  },

  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
    icon: mobileIcon,
  },

  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces.',
    icon: uiuxIcon,
  },

  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
    icon: cloudIcon,
  },

  {
    id: 5,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
    icon: softwareIcon,
  },

  {
    id: 6,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
    icon: infraIcon,
  },

  {
    id: 7,
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
    icon: securityIcon,
  },

  {
    id: 8,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
    icon: qaIcon,
  },

  {
    id: 9,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
    icon: supportIcon,
  },
];
