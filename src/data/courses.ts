import type { ImageMetadata } from 'astro';

import devmediaLogo from '@/assets/images/formation/devmedia-logo.jpg';
import udemyLogo from '@/assets/images/formation/udemy-logo.svg';

export type CourseStatus = 'completed' | 'in-progress';

export interface Course {
  titleLead: string;
  titleDetail?: string;
  provider: string;
  period?: string;
  periodShort?: string;
  status: CourseStatus;
  icons?: Array<{
    src: ImageMetadata;
    alt: string;
  }>;
}

// Em cada situação, mantenha os cursos mais recentes primeiro. A página exibe
// quatro registros antes de disponibilizar a rolagem para os anteriores.
export const courses: Course[] = [
  {
    titleLead: 'Git e Github',
    titleDetail: 'na Vida Real',
    provider: 'Udemy',
    period: 'Março de 2021',
    periodShort: 'Mar 2021',
    status: 'completed',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
  {
    titleLead: 'DevOps na Prática:',
    titleDetail: 'Criando uma Pipeline do Zero',
    provider: 'Udemy',
    period: 'Fevereiro de 2021',
    periodShort: 'Fev 2021',
    status: 'completed',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
  {
    titleLead: 'Kanban Aplicado',
    titleDetail: 'ao Desenvolvimento de Software',
    provider: 'Udemy',
    period: 'Janeiro de 2021',
    periodShort: 'Jan 2021',
    status: 'completed',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
  {
    titleLead: 'Delphi Memory Leak:',
    titleDetail: 'Criando e destruindo objetos',
    provider: 'DevMedia',
    period: 'Janeiro de 2021',
    periodShort: 'Jan 2021',
    status: 'completed',
    icons: [
      {
        src: devmediaLogo,
        alt: 'DevMedia',
      },
    ],
  },
  {
    titleLead: 'C# COMPLETO:',
    titleDetail: 'Programação Orientada a Objetos + Projetos',
    provider: 'Udemy',
    status: 'in-progress',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
  {
    titleLead: 'Delphi Mobile Avançado:',
    titleDetail: 'Delphi 10 com MySQL',
    provider: 'Udemy',
    status: 'in-progress',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
  {
    titleLead: 'MongoDB e NoSQL',
    titleDetail: 'com Python para DEVs SQL',
    provider: 'Udemy',
    status: 'in-progress',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
  {
    titleLead: 'DataSnap:',
    titleDetail: 'Servidor de Aplicação',
    provider: 'Udemy',
    status: 'in-progress',
    icons: [
      {
        src: udemyLogo,
        alt: 'Udemy',
      },
    ],
  },
];
