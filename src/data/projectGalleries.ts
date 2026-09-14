export type GalleryImage = {
  src: string
  alt: string
  caption: string
  format: 'desktop' | 'mobile' | 'document'
}

export const projectGalleries: Record<string, GalleryImage[]> = {
  leadflow: [
    {
      src: '/images/projects/leadflow/02-sectors.webp',
      alt: 'Seção de setores atendidos no LeadFlow',
      caption: 'Apresentação responsiva dos setores e aplicações',
      format: 'desktop',
    },
    {
      src: '/images/projects/leadflow/03-blog.webp',
      alt: 'Página de conteúdo do LeadFlow',
      caption: 'Área de conteúdo integrada à experiência institucional',
      format: 'desktop',
    },
    {
      src: '/images/projects/leadflow/04-home-mobile.webp',
      alt: 'Página inicial do LeadFlow em um dispositivo móvel',
      caption: 'Experiência adaptada para navegação em celulares',
      format: 'mobile',
    },
  ],
  'braga-budget': [
    {
      src: '/images/projects/braga-budget/02-clients.png',
      alt: 'Tela de clientes do Braga Budget',
      caption: 'Organização e consulta do cadastro de clientes',
      format: 'desktop',
    },
    {
      src: '/images/projects/braga-budget/03-quote-detail.png',
      alt: 'Detalhes de um orçamento no Braga Budget',
      caption: 'Composição detalhada de itens, valores e regras de negócio',
      format: 'desktop',
    },
    {
      src: '/images/projects/braga-budget/04-quote-pdf.png',
      alt: 'Documento de orçamento gerado pelo Braga Budget',
      caption: 'Orçamento formatado para apresentação e impressão',
      format: 'document',
    },
  ],
  'leiloes-retro-games': [
    {
      src: '/images/projects/leiloes-retro-games/02-encerrados.png',
      alt: 'Lista de leilões encerrados no aplicativo',
      caption: 'Histórico e acompanhamento dos leilões encerrados',
      format: 'mobile',
    },
    {
      src: '/images/projects/leiloes-retro-games/03-detalhes-leilao.png',
      alt: 'Detalhes de um leilão no aplicativo',
      caption: 'Informações, valores e situação de cada item',
      format: 'mobile',
    },
    {
      src: '/images/projects/leiloes-retro-games/04-cadastro-leilao.png',
      alt: 'Cadastro de leilão no aplicativo',
      caption: 'Fluxo completo para adicionar um novo leilão',
      format: 'mobile',
    },
  ],
  'contas-da-casa': [
    {
      src: '/images/projects/contas-da-casa/01-profile-selection.png',
      alt: 'Seleção de perfil no aplicativo Contas da Casa',
      caption: 'Perfis locais para diferentes pessoas da família',
      format: 'mobile',
    },
    {
      src: '/images/projects/contas-da-casa/03-new-bill.png',
      alt: 'Cadastro de conta no aplicativo Contas da Casa',
      caption: 'Criação rápida de uma nova conta mensal',
      format: 'mobile',
    },
    {
      src: '/images/projects/contas-da-casa/04-next-month.png',
      alt: 'Visualização do próximo mês no Contas da Casa',
      caption: 'Navegação mensal para planejamento das próximas contas',
      format: 'mobile',
    },
  ],
}

