// Configuração central do site: tudo o que pode mudar fica aqui (como um application.yml).
// Itens com "PROVISÓRIO" ainda precisam ser confirmados pelo Diogo.

export const site = {
  nome: 'Koovack Arquitetura',
  arquiteto: 'Diogo Koovack',
  url: 'https://koovackarquitetura.com.br',
  descricao: 'Arquitetura e interiores. Recife e todo o Brasil.',
  atendimento: 'Recife e todo o Brasil',
  email: 'koovackarquitetura@gmail.com', // e-mail público da marca

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
    linha: 'Arquitetura e interiores',
  },

  // Faixa de áreas da home
  areas: ['Residencial', 'Comercial', 'Projeto e render 3D'],

  prazoResposta: 'Resposta em até 1 dia útil', // PROVISÓRIO: o Diogo confirma

  // Formulário de contato (Web3Forms). As mensagens chegam em koovackarquitetura@gmail.com.
  // A chave vem da variável de ambiente PUBLIC_WEB3FORMS_KEY (arquivo .env, fora do Git;
  // na Cloudflare, em Settings → Environment variables). Veja o .env.example.
  // Vazia = formulário desligado (mostra um aviso e não envia).
  web3formsChave: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',

  // PRÉ-LANÇAMENTO: enquanto for true, TODAS as páginas pedem ao Google para não indexar (noindex).
  // Assim o site pode ficar online para testes (ex.: koovack.pages.dev) sem aparecer nas buscas
  // com conteúdo provisório. No lançamento (fase 9), trocar para false.
  emConstrucao: true,

  // hCaptcha ("não sou um robô") no formulário. DESLIGADO de propósito: pode pedir para a pessoa
  // resolver desafios e espantar clientes. O honeypot já barra a maioria dos robôs.
  // Ligar (true) só se começar a chegar spam. Se ligar, citar o hCaptcha na página de Privacidade.
  hcaptchaAtivo: false,

  // Preenchido na fase 7 (medição)
  gtmId: '',

  menu: [
    { texto: 'Início', href: '/' },
    { texto: 'Projetos', href: '/projetos' },
    { texto: 'Formas de trabalhar', href: '/formas-de-trabalhar' },
    { texto: 'Sobre', href: '/sobre' },
    { texto: 'Contato', href: '/contato' },
  ],
} as const;
