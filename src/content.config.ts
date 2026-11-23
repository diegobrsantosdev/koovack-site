// Schemas das coleções de conteúdo.
// Pense em cada coleção como uma "tabela" e no schema como a entidade com Bean Validation:
// se um arquivo de conteúdo tiver campo faltando ou com tipo errado, o build falha e diz onde.
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Marca conteúdo provisório (texto ou imagem de exemplo). Antes do lançamento, nada pode ficar `true`.
const provisorio = z.boolean().default(false);

// Tipos de projeto aceitos (usados no filtro de Projetos e nas campanhas)
export const TIPOS_PROJETO = ['apartamento', 'casa', 'loja', 'comercial'] as const;
const tipoProjeto = z.enum(TIPOS_PROJETO);

// Páginas onde uma pergunta do FAQ pode aparecer
export const PAGINAS_FAQ = ['formas-de-trabalhar', 'contato', 'campanha', 'renderizacao'] as const;

// ───────────────────────── Projetos ─────────────────────────
// Uma pasta por projeto: src/content/projetos/<slug>/index.md + imagens.
// O slug (URL do case) vem do nome da pasta.
const projetos = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projetos' }),
  schema: ({ image }) => {
    // Toda imagem exige `alt` (texto alternativo para acessibilidade e SEO)
    const imagemComAlt = z.object({
      imagem: image(),
      alt: z.string().min(5, 'Descreva a imagem no alt'),
    });

    return z.object({
      titulo: z.string(),
      tipo: tipoProjeto,
      cidade: z.string(),
      area_m2: z.number().positive(),
      ano: z.number().int().min(2000).max(2100),
      escopo: z.string(),
      ferramentas: z.array(z.string()).min(1),
      resumo: z.string().max(180, 'O resumo é 1 frase curta (até 180 caracteres)'),

      capa: imagemComAlt,
      galeria: z.array(imagemComAlt.extend({ legenda: z.string().optional() })).min(1),
      // Comparação "antes × render": `planta` guarda a imagem de referência (planta baixa OU tela do
      // modelo 3D) e `render_comparacao` o render correspondente.
      planta: imagemComAlt.optional(),
      render_comparacao: imagemComAlt.optional(),
      comparacao_tipo: z.enum(['planta', 'modelo']).default('planta'), // muda títulos e rótulos
      // "deslizar": linha de arrastar (as duas imagens precisam do MESMO enquadramento);
      // "lado-a-lado": duas imagens separadas (quando os ângulos não coincidem exatamente)
      comparacao_estilo: z.enum(['deslizar', 'lado-a-lado']).default('deslizar'),

      materiais: z
        .array(
          z
            .object({
              nome: z.string(),
              cor: z
                .string()
                .regex(/^#[0-9a-fA-F]{6}$/, 'Use uma cor hex, ex.: #A89F91')
                .optional(),
              imagem: image().optional(),
            })
            .refine((m) => m.cor || m.imagem, 'Cada material precisa de cor ou imagem'),
        )
        .optional(),

      depoimento: reference('depoimentos').optional(),
      destaque: z.boolean().default(false), // entra no carrossel da home
      ordem: z.number().default(99), // menor aparece primeiro
      credito: z.string().optional(), // ex.: "Projeto acadêmico"
      provisorio,
    });
  },
});

// ───────────────────────── Formas de trabalhar ─────────────────────────
const servicos = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/servicos' }),
  schema: z.object({
    nome: z.string(),
    para_quem: z.string(),
    inclui: z.array(z.string()).min(1),
    recomendado: z.boolean().default(false), // mostra a etiqueta "Recomendado"
    online: z.boolean().default(false), // disponível com atendimento remoto
    ordem: z.number(),
    provisorio,
  }),
});

// ───────────────────────── Depoimentos ─────────────────────────
const depoimentos = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/depoimentos' }),
  schema: z.object({
    texto: z.string(),
    nome: z.string(),
    tipo_projeto: tipoProjeto,
    cidade: z.string(),
    projeto: reference('projetos').optional(),
    provisorio,
  }),
});

// ───────────────────────── FAQ ─────────────────────────
const faq = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/faq' }),
  schema: z.object({
    pergunta: z.string(),
    resposta: z.string(),
    paginas: z.array(z.enum(PAGINAS_FAQ)).min(1),
    ordem: z.number().default(99),
    provisorio,
  }),
});

// ───────────────────────── Campanhas (landing pages de anúncio) ─────────────────────────
// Um arquivo YAML por campanha: src/content/campanhas/apartamento.yaml → /lp/apartamento
const campanhas = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/campanhas' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(), // a promessa, no topo da página
      subtitulo: z.string(),
      imagem: image(), // render de fundo do topo
      imagem_alt: z.string().min(5, 'Descreva a imagem no alt'),
      tipo: tipoProjeto, // filtra os projetos mostrados
      beneficios: z
        .array(z.object({ titulo: z.string(), texto: z.string() }))
        .min(2, 'Liste pelo menos 2 benefícios'),
      depoimento: reference('depoimentos').optional(),
      mensagem_whatsapp: z.string(),
      provisorio,
    }),
});

export const collections = { projetos, servicos, depoimentos, faq, campanhas };
