// Conteúdo da home que não pertence a uma coleção (projetos, serviços, depoimentos).
// Para trocar uma imagem do slideshow: coloque o arquivo em src/assets/hero/ e ajuste a lista abaixo.
import saireJantar from '../assets/hero/saire-jantar.jpg';
import saireFachada from '../assets/hero/saire-fachada.jpg';
import saireCozinha from '../assets/hero/saire-cozinha.jpg';
import sairePiscina from '../assets/hero/saire-piscina.jpg';
import fotoDiogo from '../assets/sobre/diogo.jpg';

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

// Foto e texto do "Sobre" (home e página Sobre). A foto atual tem só ~700 px: trocar pela
// original em alta resolução quando possível.
export const sobreResumo = {
  foto: fotoDiogo,
  alt: 'Diogo Koovack, de óculos e jaqueta clara, de braços cruzados encostado em uma parede branca',
  titulo: 'Diogo Koovack',
  subtitulo: 'Arquiteto e urbanista',
  // Adaptado do post de apresentação do Diogo no Instagram. Revisar com ele.
  texto:
    'Arquiteto e urbanista em Recife, cheguei à arquitetura depois de um caminho que começou na História. Quatro anos de estágios me ensinaram que um bom projeto começa por entender quem vai viver o espaço.',
};
