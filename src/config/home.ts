// Conteúdo da home que não pertence a uma coleção (projetos, serviços, depoimentos).
// Para trocar uma imagem do slideshow: coloque o arquivo em src/assets/hero/ e ajuste a lista abaixo.
import hero01 from '../assets/hero/01.jpg';
import hero02 from '../assets/hero/02.jpg';
import hero03 from '../assets/hero/03.jpg';
import hero04 from '../assets/hero/04.jpg';
import fotoDiogo from '../assets/sobre/diogo.jpg';

// PROVISÓRIO: imagens de exemplo. Trocar por 4 a 6 renders reais (horizontais, de alta qualidade).
export const slidesHero = [
  { imagem: hero01, alt: 'Render provisório 1 do slideshow da home' },
  { imagem: hero02, alt: 'Render provisório 2 do slideshow da home' },
  { imagem: hero03, alt: 'Render provisório 3 do slideshow da home' },
  { imagem: hero04, alt: 'Render provisório 4 do slideshow da home' },
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

// PROVISÓRIO: foto e texto de exemplo para a seção "Sobre" da home.
export const sobreResumo = {
  foto: fotoDiogo,
  alt: 'Foto provisória de Diogo Koovack',
  titulo: 'Diogo Koovack',
  subtitulo: 'Arquiteto e urbanista',
  texto:
    'Texto provisório: duas ou três linhas sobre o Diogo, a forma como ele trabalha e o que valoriza em cada projeto. O texto real vem dele.',
};
