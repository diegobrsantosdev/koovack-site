// Conteúdo da página /renderizacao (serviço de render para escritórios e construtoras).
// ESQUELETO: textos e valores PROVISÓRIOS. O Diogo ainda decide preços, prazos, revisões,
// o que entrega e quanto falar de "IA" (ver o PDF de preços de 23/11/2026).
// Para mudar um texto ou um preço, mexa só aqui; a página lê tudo deste arquivo.
import heroImagem from '../assets/hero/saire-cozinha.jpg';
// Pares "modelo 3D × render" da Casa Sairé, ALINHADOS (mesmo enquadramento) para o comparador
// de arrastar. Originais em docs/casa-saire (render nº × modelo nº, anotados abaixo).
import cozinhaModelo from '../assets/renderizacao/cozinha-modelo.jpg';
import cozinhaRender from '../assets/renderizacao/cozinha-render.jpg';
import salaModelo from '../assets/renderizacao/sala-modelo.jpg';
import salaRender from '../assets/renderizacao/sala-render.jpg';
import piscinaModelo from '../assets/renderizacao/piscina-modelo.jpg';
import piscinaRender from '../assets/renderizacao/piscina-render.jpg';
import lavaboModelo from '../assets/renderizacao/lavabo-modelo.jpg';
import lavaboRender from '../assets/renderizacao/lavabo-render.jpg';

export const renderizacao = {
  provisorio: true, // mostra a etiqueta "Conteúdo provisório" no topo. No lançamento: false.

  titulo: 'Renderização realista para o seu projeto', // PROVISÓRIO
  subtitulo:
    'Você envia o modelo 3D, eu entrego imagens prontas para apresentar ao seu cliente. Para escritórios de arquitetura, designers de interiores e construtoras.', // PROVISÓRIO
  hero: {
    imagem: heroImagem,
    alt: 'Cozinha com ilha de mármore e armários de madeira iluminados, render da Casa Sairé',
  },

  mensagemWhatsApp:
    'Olá! Sou de um escritório de arquitetura e quero um orçamento de renderização.', // PROVISÓRIO

  // "Do modelo ao render": uma aba por ambiente. A primeira é a que abre.
  comparacoes: [
    {
      nome: 'Cozinha', // render 18 × modelo 63
      modelo: { imagem: cozinhaModelo, alt: 'Tela do modelo 3D no SketchUp da cozinha, com geladeira inox, armários de madeira e ilha de mármore' },
      render: { imagem: cozinhaRender, alt: 'Render realista da mesma cozinha, com geladeira inox, armários de madeira iluminados e ilha de mármore' },
    },
    {
      nome: 'Sala', // render 8 × modelo 47
      modelo: { imagem: salaModelo, alt: 'Tela do modelo 3D no SketchUp da sala de TV, com parede de pedra, painel de madeira e jantar ao fundo' },
      render: { imagem: salaRender, alt: 'Render realista da mesma sala de TV, com parede de pedra natural, painel de madeira iluminado e jantar ao fundo' },
    },
    {
      nome: 'Área externa', // render 34 × modelo 80
      modelo: { imagem: piscinaModelo, alt: 'Tela do modelo 3D no SketchUp da área externa, com piscina, parede de pedra e deck de madeira' },
      render: { imagem: piscinaRender, alt: 'Render realista da mesma área externa, com piscina, cascata na parede de pedra, plantas e deck de madeira' },
    },
    {
      nome: 'Lavabo', // render 27 × modelo 68
      modelo: { imagem: lavaboModelo, alt: 'Tela do modelo 3D no SketchUp do lavabo, com espelho orgânico, cuba de apoio e janela' },
      render: { imagem: lavaboRender, alt: 'Render realista do mesmo lavabo, com espelho orgânico iluminado, cuba de apoio branca e metais dourados' },
    },
  ],

  // Nossas entregas (como o menu da Renderize Já: internas, externas, vídeo…)
  entregas: [
    { titulo: 'Ambientes internos', texto: 'Texto provisório: salas, cozinhas, quartos, banheiros e áreas comerciais.' },
    { titulo: 'Fachadas e áreas externas', texto: 'Texto provisório: fachada, paisagismo, piscina e área de lazer.' },
    { titulo: 'Vídeos e animações', texto: 'Texto provisório: vídeos e animações para apresentar o projeto e divulgar nas redes.' },
  ],

  // Pacotes: mesmos cards da página Formas de trabalhar (selecionáveis), com "A partir de".
  // Valores definidos pelo Diogo em 23/11/2026, menos o de 10 imagens, que é uma CONTA PROVISÓRIA:
  // de 1 para 3 imagens o preço por imagem cai ~16% (R$ 99 → R$ 83,30); aplicando a mesma queda
  // de novo, fica ~R$ 70 por imagem → 10 imagens por R$ 699,90. O Diogo confirma.
  // "inclui" ainda é provisório (prazo e ajustes dependem dele).
  pacotes: [
    {
      id: 'imagem-avulsa',
      nome: 'Imagem avulsa',
      preco: 'R$ 99,00',
      para_quem: 'Um ambiente ou uma fachada.',
      inclui: ['1 imagem em alta resolução', 'Ajustes incluídos (texto provisório)'],
      recomendado: false,
      online: false,
    },
    {
      id: 'pacote-3',
      nome: 'Pacote de 3 imagens',
      preco: 'R$ 249,90',
      para_quem: 'Ângulos diferentes do mesmo projeto.',
      inclui: ['3 imagens em alta resolução', 'Ajustes incluídos (texto provisório)'],
      recomendado: false,
      online: false,
    },
    {
      id: 'pacote-10',
      nome: 'Pacote de 10 imagens',
      preco: 'R$ 699,90',
      para_quem: 'Projetos completos ou escritórios que enviam trabalho com frequência.',
      inclui: ['10 imagens em alta resolução', 'Ajustes incluídos (texto provisório)'],
      recomendado: true,
      online: false,
    },
    {
      id: 'video',
      nome: 'Vídeo curto',
      preco: 'R$ 1.499,00',
      para_quem: 'Apresentação do projeto e divulgação nas redes.',
      inclui: ['Vídeo de 15 a 30 segundos (texto provisório)', 'Ajustes incluídos (texto provisório)'],
      recomendado: false,
      online: false,
    },
  ],
  notaPacotes:
    'Texto provisório: valores para quem envia o modelo 3D pronto (de preferência em SketchUp). Se você ainda não tem o modelo, a modelagem é orçada à parte.',
  // Mensagem do WhatsApp quando a pessoa escolhe um pacote ({nome} = pacote escolhido)
  mensagemPacote: 'Olá! Sou de um escritório de arquitetura e tenho interesse em renderização: {nome}. Pode me passar os prazos?', // PROVISÓRIO

  // Como funciona (4 passos, mesmo componente da home)
  passos: [
    { titulo: 'Você envia o modelo', texto: 'Texto provisório: o arquivo 3D e as referências de cores, materiais e entorno.' },
    { titulo: 'Orçamento e prazo', texto: 'Texto provisório: você recebe o valor e a data de entrega.' },
    { titulo: 'Eu crio as imagens', texto: 'Texto provisório: renders realistas, com acabamento final.' },
    { titulo: 'Ajustes e entrega', texto: 'Texto provisório: você pede os ajustes e recebe as imagens em alta resolução.' },
  ],
};
