import type { ImageMetadata } from 'astro';

import daikitExample from '@/assets/images/daikit-example.png';
import daikitLogo from '@/assets/images/daikit-logo.svg';
import amqpPerformance from '@/assets/images/delphi-amqp-core-performance.png';
import deskprompterApp from '@/assets/images/deskprompter-app.png';
import deskprompterLogo from '@/assets/images/deskprompter-logo.svg';

export type ProjectDiagram =
  'providers' | 'amqp-stack' | 'capture' | 'portfolio-flow';

export interface ProjectSection {
  title: string;
  paragraphs: string[];
}

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  meta: string;
  summary: string;
  highlights: string[];
  sections: ProjectSection[];
  technologies: string[];
  diagram: ProjectDiagram;
  logo?: ImageMetadata;
  image?: ImageMetadata;
  imageAlt?: string;
  imageCaption?: string;
  repository?: string;
  repositoryStatus?: string;
  featured?: boolean;
  portfolio?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'daikit',
    name: 'Daikit',
    eyebrow: 'Projeto principal',
    meta: 'Delphi · IA',
    summary:
      'Suíte de componentes Delphi que simplifica a integração com diferentes provedores de IA por meio de uma API unificada.',
    highlights: [
      'OpenAI, Anthropic e Gemini',
      'Win32 e Win64',
      'Execução assíncrona',
      'Release v0.1.0',
    ],
    sections: [
      {
        title: 'O ponto de partida',
        paragraphs: [
          'Ao conhecer uma solução comercial para integrar aplicações Delphi a serviços de IA, percebi que poderia criar uma alternativa pública, extensível e construída somente com recursos nativos da linguagem.',
        ],
      },
      {
        title: 'Uma interface, diferentes provedores',
        paragraphs: [
          'O desenvolvedor configura sua chave, vincula os componentes e inicia uma conversa sem implementar separadamente os contratos da OpenAI, Anthropic e Gemini.',
          'Cada provedor adapta seus dados para um modelo compartilhado pelo domínio. Assim, novos serviços podem ser adicionados sem alterar o restante da aplicação.',
        ],
      },
      {
        title: 'VCL responsiva',
        paragraphs: [
          'As requisições são executadas fora da thread da interface. Ao terminar, o fluxo comunica sucesso ou erro por eventos tratados pela aplicação, com suporte a cancelamento, timeout e operações simultâneas.',
        ],
      },
      {
        title: 'Validação e distribuição',
        paragraphs: [
          'Revisei o código, compilei o projeto, executei os testes automatizados, usei o aplicativo de exemplo e validei manualmente as integrações com os três provedores.',
          'A automação compila e testa Win32 e Win64, constrói o instalador, gera checksum e prepara a release. A versão v0.1.0 representa a primeira base utilizável.',
        ],
      },
      {
        title: 'Próximos passos',
        paragraphs: [
          'As prioridades planejadas são suporte a MCP, RAG e recursos de áudio e imagens.',
        ],
      },
    ],
    technologies: [
      'Delphi 12',
      'VCL',
      'DUnitX',
      'REST.Json',
      'THTTPClient',
      'Threads',
      'GitHub Actions',
    ],
    diagram: 'providers',
    logo: daikitLogo,
    image: daikitExample,
    imageAlt:
      'Aplicativo de exemplo do Daikit conversando com um modelo da OpenAI e exibindo logs estruturados',
    imageCaption:
      'Aplicativo de exemplo com conversa, seleção do provedor e logs da integração.',
    repository: 'https://github.com/jsousaliz/daikit',
    featured: true,
  },
  {
    slug: 'delphi-amqp-core',
    name: 'Delphi AMQP Core',
    eyebrow: 'Open source',
    meta: 'AMQP 0-9-1',
    summary:
      'Biblioteca Delphi para comunicação nativa com RabbitMQ e brokers compatíveis, sem componentes externos.',
    highlights: [
      'TCP nativo',
      'Consumo assíncrono',
      'ack, nack e reject',
      'Release 1.0.0',
    ],
    sections: [
      {
        title: 'O ponto de partida',
        paragraphs: [
          'O Delphi não oferece uma solução nativa específica para RabbitMQ. Depois de observar problemas de conexão em uma integração baseada em outro protocolo sob alta demanda, criei uma alternativa independente com controle direto do AMQP 0-9-1.',
        ],
      },
      {
        title: 'Do socket à mensagem',
        paragraphs: [
          'A biblioteca implementa comunicação TCP com WinSock e RTL, cuidando de handshake, autenticação, conexões, canais e frames binários. A API pública mantém esses detalhes fora do código da aplicação.',
          'A aplicação pode operar filas, publicar mensagens e iniciar consumers assíncronos, controlando confirmações por ack, nack e reject.',
        ],
      },
      {
        title: 'Concorrência e observabilidade',
        paragraphs: [
          'Worker threads processam o consumo e podem entregar callbacks em segundo plano ou sincronizados com a interface. Eventos estruturados registram conexão, canais, filas, publicação, consumo, duração e erros.',
        ],
      },
      {
        title: 'Estratégia de testes',
        paragraphs: [
          'O projeto combina testes de contrato sem RabbitMQ, integração com um broker real e perfis manuais de performance. A suíte mede tempo, throughput, mensagens faltantes, duplicadas e erros.',
          'A release 1.0.0 está disponível. Heartbeat ativo, basic.return e reconexão automática permanecem como evoluções futuras.',
        ],
      },
    ],
    technologies: [
      'Delphi 10.4+',
      'RabbitMQ',
      'AMQP 0-9-1',
      'TCP',
      'WinSock',
      'Worker threads',
      'Docker',
    ],
    diagram: 'amqp-stack',
    image: amqpPerformance,
    imageAlt:
      'Resultado do teste pesado do Delphi AMQP Core no terminal do Windows',
    imageCaption:
      'Perfil pesado: 100 mil mensagens publicadas e consumidas, sem faltantes, duplicadas ou erros.',
    repository: 'https://github.com/jsousaliz/delphi-amqp-core',
  },
  {
    slug: 'deskprompter',
    name: 'Deskprompter',
    eyebrow: 'Windows',
    meta: 'Delphi 12',
    summary:
      'Teleprompter local cujo roteiro pode permanecer visível para o apresentador sem aparecer no OBS Studio.',
    highlights: [
      'OBS Studio e Print Screen',
      'Rolagem automática',
      'Biblioteca de roteiros',
      'Offline',
    ],
    sections: [
      {
        title: 'Uma necessidade real',
        paragraphs: [
          'O Deskprompter nasceu enquanto eu preparava vídeos sobre o Daikit. Eu precisava acompanhar um roteiro durante a gravação sem mostrar esse texto no conteúdo capturado pelo OBS Studio.',
        ],
      },
      {
        title: 'Visível apenas para o apresentador',
        paragraphs: [
          'A aplicação utiliza SetWindowDisplayAffinity, uma API do Windows que permite excluir a janela de mecanismos de captura compatíveis. Validei o comportamento no OBS Studio, em captura de janela e da tela inteira, e também com o Print Screen.',
          'Outros aplicativos compatíveis com esse recurso do Windows também podem ocultar a janela. Como o comportamento depende do método de captura, o aplicativo informa o estado da proteção para que o usuário possa validá-la antes da gravação ou apresentação.',
        ],
      },
      {
        title: 'Foco na apresentação',
        paragraphs: [
          'O usuário organiza roteiros em uma biblioteca, controla a rolagem automática e ajusta velocidade e atalhos. Textos e configurações ficam no próprio computador, sem conta ou serviço em nuvem.',
        ],
      },
      {
        title: 'Arquitetura e validação',
        paragraphs: [
          'Domínio, casos de uso, infraestrutura e interface VCL permanecem separados. SQLite e FireDAC cuidam da persistência local, enquanto contratos isolam rolagem e proteção contra captura.',
          'Além de revisão, compilação e testes, os comportamentos ligados à VCL e à API do Windows foram verificados manualmente no OBS Studio e com o Print Screen.',
        ],
      },
    ],
    technologies: [
      'Delphi 12 CE',
      'VCL Win64',
      'Windows API',
      'SQLite',
      'FireDAC',
      'DUnitX',
    ],
    diagram: 'capture',
    logo: deskprompterLogo,
    image: deskprompterApp,
    imageAlt:
      'Tela principal do Deskprompter com biblioteca de roteiros, controles de leitura e área de apresentação',
    imageCaption:
      'Tela principal com organização dos roteiros, controles de apresentação e personalização da leitura.',
    repository: 'https://github.com/jsousaliz/deskprompter',
  },
  {
    slug: 'portfolio',
    name: 'Este portfólio',
    eyebrow: 'Você está usando este projeto agora',
    meta: 'Astro · TypeScript',
    summary:
      'Portfólio profissional construído por entrevistas, aprovações incrementais e implementação pública em uma página única.',
    highlights: [
      'Conteúdo por entrevistas',
      'Página única',
      'Acessibilidade',
      'Publicação automatizada',
    ],
    sections: [
      {
        title: 'O projeto antes do código',
        paragraphs: [
          'A construção começou pelo conteúdo. Cada seção foi produzida a partir de entrevistas, revisada e aprovada antes de entrar na interface.',
        ],
      },
      {
        title: 'Decisões de implementação',
        paragraphs: [
          'Astro gera uma página estática leve, TypeScript protege as interações e o CSS autoral mantém a identidade visual sem depender de uma biblioteca de componentes.',
          'A navegação por âncoras, os componentes expansíveis e o carrossel foram pensados para funcionar também por teclado e com redução de movimento.',
        ],
      },
      {
        title: 'Construção assistida por IA',
        paragraphs: [
          'Defino objetivos, requisitos e decisões de produto, divido o trabalho em etapas e uso IA na produção de código e documentação. Cada entrega passa por revisão, compilação, testes e validação prática.',
        ],
      },
      {
        title: 'Estado verificado',
        paragraphs: [
          'O projeto possui cálculo automático de experiência, testes unitários, verificação do Astro e build estático. Métricas finais de desempenho e a URL pública serão registradas na etapa de publicação.',
        ],
      },
    ],
    technologies: [
      'Astro',
      'TypeScript',
      'CSS',
      'Vitest',
      'GitHub Actions',
      'GitHub Pages',
    ],
    diagram: 'portfolio-flow',
    repository: 'https://github.com/jsousaliz/jsousaliz.github.io',
    portfolio: true,
  },
];
