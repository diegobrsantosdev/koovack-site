// Conteúdo da home que não pertence a uma coleção (projetos, serviços, depoimentos).
// Para trocar uma imagem do slideshow: coloque o arquivo em src/assets/hero/ e ajuste a lista abaixo.
import saireJantar from '../assets/hero/saire-jantar.jpg';
import saireFachada from '../assets/hero/saire-fachada.jpg';
import saireCozinha from '../assets/hero/saire-cozinha.jpg';
import sairePiscina from '../assets/hero/saire-piscina.jpg';
import fotoDiogo from '../assets/sobre/diogo-poltrona.jpg';

// Renders reais da Casa Sairé. Quando houver outros projetos, misturar ambientes de projetos
// diferentes (4 a 6 imagens horizontais). A primeira é a que carrega mais rápido.
export const slidesHero = [
  {
    imagem: saireJantar,
    alt: 'Sala de jantar com mesa de mármore, cadeiras de madeira e luminárias circulares, na Casa Sairé',
  },
  { imagem: saireFachada, alt: 'Fachada da Casa Sairé, com muro de pedra natural e ripado de madeira' },
  { imagem: saireCozinha, alt: 'Cozinha com ilha de mármore e armários de madeira iluminados, na Casa Sairé' },
  { imagem: sairePiscina, alt: 'Piscina com cascata na parede de pedra e deck de madeira, na Casa Sairé' },
];

// PROVISÓRIO: passos de exemplo. O Diogo confirma como funciona o processo dele.
export const passosComoFunciona = [
  {
    titulo: 'Conversa inicial',
    texto: 'Texto provisório: você conta o que precisa, pelo WhatsApp ou em uma reunião online.',
  },
  {
    titulo: 'Proposta',
    texto: 'Texto provisório: você recebe o escopo, o prazo e o valor do projeto.',
  },
  {
    titulo: 'Projeto e renders',
    texto: 'Texto provisório: o projeto é desenvolvido e apresentado em renders 3D.',
  },
  {
    titulo: 'Entrega',
    texto: 'Texto provisório: você recebe os arquivos para executar a obra.',
  },
];

// Foto e texto do "Sobre" (home e página Sobre).
// Foto: fotoperfil3 (docs/referencias), recortada em RETRATO 3:4 (o mesmo espaço da foto antiga),
// da cabeça aos joelhos, em alta resolução (1688 × 2250). Diego, 23/11/2026: manter o tamanho/
// formato de antes e só encaixar a foto nova (o layout horizontal 4:3 foi testado e recusado).
// Texto: reescrito em 23/11/2026 sem os "4 anos de estágio", a partir do que o próprio Diogo diz
// (História → arquitetura, foco em interiores, renders e vídeos). Revisar com ele.
export const sobreResumo = {
  foto: fotoDiogo,
  alt: 'Diogo Koovack sorrindo, de camiseta preta, sentado em uma poltrona clara diante de um painel de madeira',
  titulo: 'Diogo Koovack',
  subtitulo: 'Arquiteto e urbanista',
  texto:
    'Arquiteto e urbanista em Recife, com foco em arquitetura de interiores. Do primeiro estudo ao render final, cuido de cada etapa para que você enxergue o seu espaço antes mesmo da obra.',
};
