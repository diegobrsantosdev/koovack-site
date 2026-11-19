// Configuração central do site: tudo o que pode mudar fica aqui (como um application.yml).
// Itens com "PROVISÓRIO" ainda precisam ser confirmados pelo Diogo.

export const site = {
  nome: 'Koovack Arquitetura',
  arquiteto: 'Diogo Koovack',
  url: 'https://koovackarquitetura.com.br',
  descricao: 'Arquitetura e interiores de alto padrão. Recife e todo o Brasil.',
  atendimento: 'Recife e todo o Brasil',
  email: 'diogokoovack@gmail.com',

  // Só números, com DDI e DDD (formato exigido pelo wa.me)
  whatsapp: '5581979127146',
  textoBotaoWhatsApp: 'Pedir orçamento', // o mesmo em todos os botões de WhatsApp do site
  // Lido só por leitores de tela, depois do texto do botão, para avisar para onde ele leva
  complementoAcessivelWhatsApp: 'no WhatsApp (abre em outra aba)',

  redes: {
    instagram: { usuario: '@koovackarquitetura', url: 'https://www.instagram.com/koovackarquitetura' },
    tiktok: { usuario: '@koovackarquitetura', url: 'https://www.tiktok.com/@koovackarquitetura' },
  },

  // Textos do topo da home
  hero: {
    frase: 'Interiores que contam a sua história', // PROVISÓRIO
    linha: 'Arquitetura e interiores de alto padrão',
  },

  // Faixa de áreas da home
  areas: ['Residencial', 'Comercial', 'Projeto e render 3D'],

  prazoResposta: 'Resposta em até 1 dia útil', // PROVISÓRIO: o Diogo confirma

  // Preenchidos nas fases 5 (formulário) e 7 (medição)
  web3formsChave: '',
  gtmId: '',

  menu: [
    { texto: 'Início', href: '/' },
    { texto: 'Projetos', href: '/projetos' },
    { texto: 'Formas de trabalhar', href: '/formas-de-trabalhar' },
    { texto: 'Sobre', href: '/sobre' },
    { texto: 'Contato', href: '/contato' },
  ],
} as const;
