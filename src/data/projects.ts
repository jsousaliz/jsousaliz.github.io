import type { ImageMetadata } from 'astro';

import daikitLogo from '@/assets/images/daikit-logo.svg';
import deskprompterLogo from '@/assets/images/deskprompter-logo.svg';

export interface Project {
  name: string;
  eyebrow: string;
  meta: string;
  summary: string;
  highlights: string[];
  logo?: ImageMetadata;
  repository: string;
}

export const projects: Project[] = [
  {
    name: 'Daikit',
    eyebrow: 'Open source',
    meta: 'Delphi · IA',
    summary:
      'Suíte de componentes Delphi que simplifica a integração com diferentes provedores de IA por meio de uma API unificada.',
    highlights: [
      'OpenAI, Anthropic e Gemini',
      'Win32 e Win64',
      'Execução assíncrona',
    ],
    logo: daikitLogo,
    repository: 'https://github.com/jsousaliz/daikit',
  },
  {
    name: 'Delphi AMQP Core',
    eyebrow: 'Open source',
    meta: 'AMQP 0-9-1',
    summary:
      'Biblioteca Delphi para comunicação nativa com RabbitMQ e brokers compatíveis, sem componentes externos.',
    highlights: ['TCP nativo', 'Consumo assíncrono', 'ack, nack e reject'],
    repository: 'https://github.com/jsousaliz/delphi-amqp-core',
  },
  {
    name: 'Deskprompter',
    eyebrow: 'Windows',
    meta: 'Delphi 12',
    summary:
      'Teleprompter local cujo roteiro pode permanecer visível para o apresentador sem aparecer no OBS Studio.',
    highlights: ['OBS Studio e Print Screen', 'Rolagem automática', 'Offline'],
    logo: deskprompterLogo,
    repository: 'https://github.com/jsousaliz/deskprompter',
  },
  {
    name: 'Portfólio',
    eyebrow: 'Esta página',
    meta: 'Astro · React · TypeScript',
    summary:
      'Portfólio profissional construído com aprovações incrementais, testes e publicação automatizada ',
    highlights: ['Página única', 'Publicação automatizada'],
    repository: 'https://github.com/jsousaliz/jsousaliz.github.io',
  },
];
