// Conteúdo da página /renderizacao (serviço de render para escritórios e construtoras).
// ESQUELETO: textos e valores PROVISÓRIOS. O Diogo ainda decide preços, prazos, revisões,
// o que entrega e quanto falar de "IA" (ver o PDF de preços de 23/11/2026).
// Para mudar um texto ou um preço, mexa só aqui; a página lê tudo deste arquivo.
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

  publico: 'Para arquitetos e escritórios', // etiqueta acima do título: deixa claro que não é para o cliente final
  titulo: 'Renderização realista para o seu projeto', // PROVISÓRIO
  subtitulo:
    'Você envia o modelo 3D, eu entrego imagens prontas para apresentar ao seu cliente.', // PROVISÓRIO. O público já está na etiqueta acima do título.

  mensagemWhatsApp:
    'Olá! Sou de um escritório de arquitetura e quero um orçamento de renderização.', // PROVISÓRIO

  // Ambientes "modelo 3D × render", usados em 2 lugares, NESTA ordem:
  // - topo da página (modelo virando render, um ambiente por vez; a cozinha abre, pedido do Diego 24/11/2026);
  // - seção "Do modelo ao render" (uma aba por ambiente; a primeira é a que abre).
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
  // Avulsa e vídeo: valores definidos pelo Diogo em 23/11/2026. Os pacotes de 5 e 10 são CONTAS
  // PROVISÓRIAS (o Diogo confirma):
  // - 10 imagens: o antigo pacote de 3 (R$ 249,90, do Diogo) dava R$ 83,30 por imagem, ~16% menos
  //   que a avulsa; aplicando a mesma queda de novo, ~R$ 70 por imagem → R$ 699,90.
  // - 5 imagens (24/11/2026, substituiu o de 3 a pedido do Diego: degraus 1 → 5 → 10): desconto
  //   proporcional entre o de 3 e o de 10, ~R$ 77,65 por imagem → R$ 389,90 (R$ 77,98 por imagem).
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
      id: 'pacote-5',
      nome: 'Pacote de 5 imagens',
      preco: 'R$ 389,90', // PROVISÓRIO (ver a conta acima)
      para_quem: 'Os principais ambientes de um projeto.',
      inclui: ['5 imagens em alta resolução', 'Ajustes incluídos (texto provisório)'],
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
