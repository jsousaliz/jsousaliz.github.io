import type { ImageMetadata } from 'astro';

import arquiteturaLimpaCover from '@/assets/images/formation/arquitetura-limpa-capa.jpg';
import cleanCraftsmanshipCover from '@/assets/images/formation/clean-craftsmanship-capa.jpg';
import codigoLimpoCover from '@/assets/images/formation/codigo-limpo-capa.jpg';
import pragmaticProgrammerCover from '@/assets/images/formation/o-programador-pragmático.jpg';
import proudTech2021Logo from '@/assets/images/formation/proud-tech-2021.jpg';
import proudTech2022Logo from '@/assets/images/formation/proud-tech-2022.jpg';
import proudTech2024Logo from '@/assets/images/formation/proud-tech-summit-2024.jpg';
import techLeadsClubLogo from '@/assets/images/formation/tech-leads-club.png';
import unifacvestLogo from '@/assets/images/formation/unifacvest-logo-oficial.png';
import uniplacLogo from '@/assets/images/formation/uniplac-logo-oficial.png';

export interface FormationItem {
  title: string;
  institution: string;
  period: string;
  icon: ImageMetadata;
  iconAlt: string;
}

export interface Book {
  title: string;
  cover: ImageMetadata;
}

export interface FormationActivity {
  period: string;
  icon: ImageMetadata;
  titleLead: string;
  titleDetail: string;
}

export const higherEducation: FormationItem[] = [
  {
    title: 'Licenciatura em Matemática',
    institution: 'UNIPLAC',
    period: 'Dezembro de 2016',
    icon: uniplacLogo,
    iconAlt: 'UNIPLAC',
  },
  {
    title: 'Ciência da Computação',
    institution: 'UNIFACVEST',
    period: 'Dezembro de 2011',
    icon: unifacvestLogo,
    iconAlt: 'Centro Universitário UNIFACVEST',
  },
];

export const technicalBooks: Book[] = [
  {
    title: 'Clean Craftsmanship',
    cover: cleanCraftsmanshipCover,
  },
  {
    title: 'Código Limpo',
    cover: codigoLimpoCover,
  },
  {
    title: 'Arquitetura Limpa',
    cover: arquiteturaLimpaCover,
  },
  {
    title: 'O Programador Pragmático',
    cover: pragmaticProgrammerCover,
  },
];

// Mantenha as atividades da mais recente para a mais antiga. Assim, quando a
// lista ultrapassar quatro itens, os registros atuais permanecem visíveis.
export const events: FormationActivity[] = [
  {
    period: 'Set 2024',
    icon: proudTech2024Logo,
    titleLead: 'Proud Tech Summit:',
    titleDetail: 'Inovação e Inteligência Artificial',
  },
  {
    period: 'Out 2022',
    icon: proudTech2022Logo,
    titleLead: 'Proud Tech:',
    titleDetail:
      'Conhecimento prático do dia a dia sobre Tecnologia, Produto e Carreira',
  },
  {
    period: 'Nov 2021',
    icon: proudTech2021Logo,
    titleLead: 'Proud Tech:',
    titleDetail: 'Troca de conhecimento prático com foco técnico',
  },
];

export const workshops: FormationActivity[] = [
  {
    period: 'Set 2026',
    icon: techLeadsClubLogo,
    titleLead: 'Desenvolvimento',
    titleDetail: 'Assistido por IA',
  },
];
