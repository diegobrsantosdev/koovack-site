# Koovack Arquitetura — site

Site de portfólio e captação de clientes da **Koovack Arquitetura**, escritório do arquiteto Diogo Koovack (Recife-PE, atendimento em todo o Brasil).

- **No ar (teste):** https://koovack-site.pages.dev
- **Domínio final:** koovackarquitetura.com.br (no lançamento)

> O site está em **pré-lançamento**: todas as páginas pedem ao Google para não indexar (`emConstrucao: true` em `src/config/site.ts`).

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) (site estático) + TypeScript |
| Estilos | CSS puro com variáveis (`src/styles/tokens.css`), sem Tailwind |
| Conteúdo | Content Collections do Astro (Markdown/YAML validados por schema) |
| Imagens | `astro:assets` (gera AVIF/WebP em vários tamanhos no build) |
| Carrossel | Embla Carousel |
| Fontes | Josefin Sans (textos) e Alice (só no logo), via Fontsource, sem Google Fonts |
| Formulário | [Web3Forms](https://web3forms.com) (envia por e-mail) |
| Hospedagem | Cloudflare Pages (cada push na `main` publica) |

## Rodando localmente

Requisito: **Node.js 24** (a versão usada no deploy está em `.node-version`).

```bash
npm install
cp .env.example .env    # e preencha PUBLIC_WEB3FORMS_KEY
npm run dev             # servidor local em http://localhost:4321
```

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento, recarrega ao salvar |
| `npm run build` | Gera o site em `dist/` e **valida o conteúdo** (falha se faltar campo ou `alt`) |
| `npm run preview` | Serve o `dist/` para testar o resultado do build |

Sem a `PUBLIC_WEB3FORMS_KEY`, o formulário mostra um aviso e não envia (o resto do site funciona normalmente).

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home: slideshow, projetos em destaque, como funciona, formas de trabalhar, depoimentos, sobre, contato |
| `/projetos` e `/projetos/<slug>` | Portfólio com filtro por tipo e a página de cada projeto (galeria, modelo 3D × render, materiais) |
| `/formas-de-trabalhar` | Serviços (cards selecionáveis) e perguntas frequentes |
| `/renderizacao` | Serviço de renderização para arquitetos e escritórios (B2B) |
| `/sobre` | Sobre o Diogo |
| `/contato` | WhatsApp e formulário |
| `/links` | Página da bio do Instagram/TikTok |
| `/lp/<campanha>` | Landing pages de anúncios (fora do Google) |
| `/privacidade`, `/obrigado`, `/404` | Política de privacidade, pós-envio do formulário e página não encontrada |

## Onde mudar cada coisa

A maior parte do conteúdo fica separada do código. Para atualizar textos e imagens, normalmente basta mexer nestes arquivos:

| O quê | Onde |
|---|---|
| Nome, WhatsApp, e-mail, redes, menu, textos do topo | `src/config/site.ts` |
| Slideshow da home, "Como funciona", resumo do Sobre | `src/config/home.ts` |
| Página de renderização (textos, pacotes, preços, comparações) | `src/config/renderizacao.ts` |
| Projetos do portfólio | `src/content/projetos/<slug>/index.md` + imagens na mesma pasta |
| Formas de trabalhar (serviços) | `src/content/servicos/*.yaml` |
| Perguntas frequentes | `src/content/faq/*.yaml` (campo `paginas` define onde aparecem) |
| Depoimentos | `src/content/depoimentos/*.yaml` |
| Landing pages de anúncio | `src/content/campanhas/*.yaml` |
| Cores, espaçamentos, fontes, raios | `src/styles/tokens.css` |
| Mensagens pré-preenchidas do WhatsApp | `src/lib/whatsapp.ts` |

Os schemas de todas as coleções estão em `src/content.config.ts`. Se um arquivo tiver campo faltando ou com tipo errado, o `npm run build` falha e diz qual arquivo corrigir.

### Adicionar um projeto

1. Crie a pasta `src/content/projetos/<slug>/` (o nome da pasta vira a URL).
2. Coloque as imagens na pasta e crie o `index.md` seguindo um projeto existente como modelo.
3. Toda imagem precisa de `alt` (descrição da imagem).
4. Use `destaque: true` para aparecer na home e `ordem` para a posição.
5. Enquanto houver dado a confirmar, use `provisorio: true` (mostra a etiqueta "Conteúdo provisório").
6. Rode `npm run build` para validar.

Para o projeto aparecer também no slideshow do topo da home, copie as fotos para `src/assets/hero/` e acrescente em `src/config/home.ts`, mantendo a regra: projetos alternados e com o mesmo número de fotos cada.

## Estrutura

```
src/
├── assets/          imagens usadas por componentes (slideshow, foto do Sobre, renderização)
├── components/      componentes por área: case, forms, home, layout, projetos, servicos, ui
├── config/          conteúdo editável que não é coleção (site, home, renderização)
├── content/         coleções: projetos, servicos, faq, depoimentos, campanhas
├── layouts/         BaseLayout (todas as páginas) e CampanhaLayout (landing pages)
├── lib/             funções de apoio (WhatsApp, projetos, UTMs, rastreio)
├── pages/           uma rota por arquivo
├── scripts/         scripts de conversão (cliques e envios)
└── styles/          tokens.css (variáveis) e global.css
```

## Deploy

O deploy é automático: cada `git push` na `main` publica uma nova versão na Cloudflare Pages.

- A variável `PUBLIC_WEB3FORMS_KEY` precisa estar cadastrada no painel da Cloudflare (**Settings → Environment variables**).
- No painel do Web3Forms, o domínio do site precisa estar autorizado.

### Checklist do lançamento

- [ ] Trocar `emConstrucao: true` para `false` em `src/config/site.ts`
- [ ] Conectar o domínio koovackarquitetura.com.br na Cloudflare
- [ ] Autorizar o domínio final no Web3Forms
- [ ] Revisar e tirar todo conteúdo marcado como provisório (`provisorio: true` e comentários `PROVISÓRIO`)

## Convenções

- **Mobile-first:** testar sempre em 360/375 px antes do desktop.
- **Contato:** o WhatsApp é a ação principal em todos os botões; o formulário é a alternativa.
- **Acessibilidade:** toda imagem tem `alt`; carrosséis e animações respeitam `prefers-reduced-motion`.
- **Conteúdo honesto:** nada de números, clientes ou prêmios inventados. Texto provisório fica marcado como provisório.
- **Commits** no padrão `tipo: descrição` (`feat`, `fix`, `content`, `style`, `chore`).
