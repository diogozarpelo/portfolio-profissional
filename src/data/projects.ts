export type Project = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  highlights: string[]
  repository: string
  status: string
  featured: boolean
  wide?: boolean
}

export const projects: Project[] = [
  {
    slug: 'leadflow',
    title: 'LeadFlow',
    category: 'Plataforma full-stack',
    year: '2026',
    summary:
      'Plataforma de captação, organização e entrega de leads criada com arquitetura full-stack e foco em confiabilidade.',
    description:
      'Uma solução white-label que transforma formulários e diferentes pontos de entrada em um fluxo estruturado de leads, com processamento assíncrono, simulação de integrações e uma base preparada para evolução.',
    image: '/images/projects/leadflow-home.webp',
    imageAlt: 'Página inicial responsiva do projeto LeadFlow',
    technologies: [
      'Laravel',
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'Filas',
      'Testes automatizados',
    ],
    highlights: [
      'Captação de leads por diferentes jornadas de contato',
      'Processamento em filas e fluxo de entrega controlado',
      'Simulação de integração por arquivos CSV',
      'Interface responsiva com suporte a cinco idiomas',
      'Suíte automatizada para validar comportamentos críticos',
    ],
    repository: 'https://github.com/diogozarpelo/leadflow-portfolio',
    status: 'Projeto em evolução',
    featured: true,
  },
  {
    slug: 'braga-budget',
    title: 'Braga Budget',
    category: 'Sistema web',
    year: '2026',
    summary:
      'Sistema local para criar, calcular e gerenciar orçamentos de uma vidraçaria com regras reais de negócio.',
    description:
      'Aplicação desenvolvida para organizar clientes, materiais, medidas, componentes e valores, reduzindo cálculos manuais e centralizando todo o processo de orçamento.',
    image: '/images/projects/braga-budget-home.png',
    imageAlt: 'Painel inicial do sistema Braga Budget',
    technologies: ['Python', 'Flask', 'SQLite', 'Jinja', 'HTML', 'CSS'],
    highlights: [
      'Cadastro e gerenciamento de clientes',
      'Cálculos automáticos de área, materiais e mão de obra',
      'Composição de itens e componentes personalizados',
      'Geração de orçamento pronto para apresentação',
      'Fluxo adaptado à rotina real do negócio',
    ],
    repository: 'https://github.com/diogozarpelo/braga-budget',
    status: 'Versão 1 validada',
    featured: false,
    wide: true,
  },
  {
    slug: 'leiloes-retro-games',
    title: 'Leilões RetroGames',
    category: 'Aplicativo Android',
    year: '2026',
    summary:
      'Aplicativo Android offline para organizar e acompanhar leilões de jogos e consoles retrô.',
    description:
      'Uma ferramenta criada para substituir anotações dispersas por uma visão clara dos leilões ativos, prazos, valores, condições dos itens e resultados.',
    image: '/images/projects/leiloes-retro-games-home.png',
    imageAlt: 'Tela de leilões ativos do aplicativo Leilões RetroGames',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Room',
      'MVVM',
      'Material 3',
    ],
    highlights: [
      'Cadastro completo de leilões e itens',
      'Contagem regressiva e validação de data e horário',
      'Filtros para leilões ativos e encerrados',
      'Controle de resultados, pagamentos e condições',
      'Persistência local com funcionamento offline',
    ],
    repository: 'https://github.com/diogozarpelo/leiloes-retro-games',
    status: 'Versão 1 em validação',
    featured: false,
  },
  {
    slug: 'contas-da-casa',
    title: 'Contas da Casa',
    category: 'Aplicativo Android',
    year: '2026',
    summary:
      'Aplicativo Android offline para organizar contas mensais de maneira simples, rápida e compartilhável.',
    description:
      'Uma solução de uso familiar com perfis locais, visão mensal e acompanhamento de contas pendentes e pagas, sem exigir login ou conexão com a internet.',
    image: '/images/projects/contas-da-casa-overview.png',
    imageAlt: 'Visão mensal de contas no aplicativo Contas da Casa',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Room',
      'MVVM',
      'Material 3',
    ],
    highlights: [
      'Perfis locais sem necessidade de login',
      'Filtros de contas pendentes e pagas',
      'Navegação entre diferentes meses',
      'Cards compactos e expansíveis',
      'Dados armazenados somente no dispositivo',
    ],
    repository: 'https://github.com/diogozarpelo/contasdacasa',
    status: 'Versão 1 validada',
    featured: false,
  },
]

export function findProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

