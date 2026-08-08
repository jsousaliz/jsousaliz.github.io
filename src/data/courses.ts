export type CourseStatus = 'completed' | 'in-progress';

export interface Course {
  title: string;
  provider: string;
  period?: string;
  status: CourseStatus;
}

export const courses: Course[] = [
  {
    title: 'Git e Github na Vida Real',
    provider: 'Udemy',
    period: 'Março de 2021',
    status: 'completed',
  },
  {
    title: 'DevOps na Prática: Criando uma Pipeline do Zero',
    provider: 'Udemy',
    period: 'Fevereiro de 2021',
    status: 'completed',
  },
  {
    title: 'Kanban Aplicado ao Desenvolvimento de Software',
    provider: 'Udemy',
    period: 'Janeiro de 2021',
    status: 'completed',
  },
  {
    title: 'Delphi Memory Leak: Criando e destruindo objetos',
    provider: 'DevMedia',
    period: 'Janeiro de 2021',
    status: 'completed',
  },
];
