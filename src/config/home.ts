// Conteúdo da home que não pertence a uma coleção (projetos, serviços, depoimentos).
// Para trocar uma imagem do slideshow: coloque o arquivo em src/assets/hero/ e ajuste a lista abaixo.
import lisboaSala from '../assets/hero/lisboa-sala.jpg';
import saireCozinha from '../assets/hero/saire-cozinha.jpg';
import sairePiscina from '../assets/hero/saire-piscina.jpg';
import fotoDiogo from '../assets/sobre/diogo-poltrona.jpg';

// Slideshow do topo da home: os projetos se alternando (Diego, 23/11/2026).
// Apartamento Lisboa (capa, "foto 6") → Casa Sairé (piscina, a capa nova) → Casa Sairé (cozinha).
// A fachada e o jantar da Casa Sairé saíram (a fachada "não valoriza o projeto").
// Novo projeto: copie a imagem para src/assets/hero/ e acrescente aqui. A primeira carrega mais rápido.
// `posicao` (opcional): qual parte da foto fica visível quando a tela corta a imagem (CSS object-position).
// Ex.: 'center 75%' mostra mais a parte de baixo; útil no desktop, onde o topo é largo e baixo.
export const slidesHero: { imagem: ImageMetadata; alt: string; posicao?: string }[] = [
  {
    imagem: lisboaSala,
    alt: 'Sala integrada com mesa de jantar redonda de madeira, pendente de tecido e sofá claro, no Apartamento Lisboa',
  },
  {
    imagem: sairePiscina,
    alt: 'Área externa com piscina, cascata na parede de pedra natural e deck de madeira, na Casa Sairé',
    posicao: 'center 80%', // mostra mais piscina e deck (sem isso, no desktop aparecia quase só a parede)
  },
  { imagem: saireCozinha, alt: 'Cozinha com ilha de mármore e armários de madeira iluminados, na Casa Sairé' },
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
