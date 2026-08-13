export interface FormationItem {
  title: string;
  institution: string;
  period: string;
  icon: string;
  iconAlt: string;
}

export interface Book {
  title: string;
  cover: string;
}

export interface FormationActivity {
  period: string;
  icon: string;
  titleLead: string;
  titleDetail: string;
}

export const higherEducation: FormationItem[] = [
  {
    title: 'Licenciatura em Matemática',
    institution: 'UNIPLAC',
    period: 'Dezembro de 2016',
    icon: '/images/uniplac-logo-oficial.png',
    iconAlt: 'UNIPLAC',
  },
  {
    title: 'Ciência da Computação',
    institution: 'UNIFACVEST',
    period: 'Dezembro de 2011',
    icon: '/images/unifacvest-logo-oficial.png',
    iconAlt: 'Centro Universitário UNIFACVEST',
  },
];

export const technicalBooks: Book[] = [
  {
    title: 'Clean Craftsmanship',
    cover: '/images/clean-craftsmanship-capa.jpg',
  },
  {
    title: 'Código Limpo',
    cover: '/images/codigo-limpo-capa.jpg',
  },
  {
    title: 'Arquitetura Limpa',
    cover: '/images/arquitetura-limpa-capa.jpg',
  },
  {
    title: 'O Programador Pragmático',
    cover: '/images/o-programador-pragmático.jpg',
  },
];

// Mantenha as atividades da mais recente para a mais antiga. Assim, quando a
// lista ultrapassar quatro itens, os registros atuais permanecem visíveis.
export const events: FormationActivity[] = [
  {
    period: 'Set 2024',
    icon: '/images/proud-tech-summit-2024.jpg',
    titleLead: 'Proud Tech Summit:',
    titleDetail: 'Inovação e Inteligência Artificial',
  },
  {
    period: 'Out 2022',
    icon: '/images/proud-tech-2022.jpg',
    titleLead: 'Proud Tech:',
    titleDetail:
      'Conhecimento prático do dia a dia sobre Tecnologia, Produto e Carreira',
  },
  {
    period: 'Nov 2021',
    icon: '/images/proud-tech-2021.jpg',
    titleLead: 'Proud Tech:',
    titleDetail: 'Troca de conhecimento prático com foco técnico',
  },
];

export const workshops: FormationActivity[] = [
  {
    period: 'Set 2026',
    icon: '/images/tech-leads-club.png',
    titleLead: 'Desenvolvimento',
    titleDetail: 'Assistido por IA',
  },
];
