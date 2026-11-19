// Configuração central do site: tudo o que pode mudar fica aqui (como um application.yml).
// Na fase 1 entram os textos do hero, o prazo de resposta etc.

export const site = {
  nome: 'Koovack Arquitetura',
  arquiteto: 'Diogo Koovack',
  url: 'https://koovackarquitetura.com.br',
  descricao: 'Arquitetura e interiores de alto padrão. Recife e todo o Brasil.',
  atendimento: 'Recife e todo o Brasil',
  email: 'diogokoovack@gmail.com',

  // Só números, com DDI e DDD (formato exigido pelo wa.me)
  whatsapp: '5581979127146',
  textoBotaoWhatsApp: 'Pedir orçamento no WhatsApp',

  redes: {
    instagram: { usuario: '@koovackarquitetura', url: 'https://www.instagram.com/koovackarquitetura' },
    tiktok: { usuario: '@koovackarquitetura', url: 'https://www.tiktok.com/@koovackarquitetura' },
  },

  menu: [
    { texto: 'Início', href: '/' },
    { texto: 'Projetos', href: '/projetos' },
    { texto: 'Formas de trabalhar', href: '/formas-de-trabalhar' },
    { texto: 'Sobre', href: '/sobre' },
    { texto: 'Contato', href: '/contato' },
  ],
} as const;
