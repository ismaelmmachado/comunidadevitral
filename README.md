# Comunidade Vitral — Site

Novo site estático da **Comunidade Vitral** (Igreja Presbiteriana Independente Vitral),
em substituição ao site em Wix. A HOME adota o mundo visual **"O Café da Rua"** (letreiro
pintado, lousa de giz e o emblema oficial da marca); as subpáginas ainda usam o
"Vitral Arquitetônico" (migração pendente). Sistema visual documentado em `DESIGN.md`.

Versão atual: **v2.1.0** · Branch de trabalho: `homologacao`

Publicado em: <https://ismaelmmachado.github.io/comunidadevitral/>

## Páginas

| Página | Arquivo |
|---|---|
| HOME | `index.html` |
| Quem Somos | `quem-somos.html` |
| A Jornada & Trilha de Novos | `jornada.html` |
| Encontros & PGs | `encontros-e-pgs.html` |
| Crianças & Família | `criancas-e-familia.html` |
| Causas & Cidade | `causas-e-cidade.html` |
| Contato & Guia do Visitante | `contato.html` |
| 404 | `404.html` |

## Stack

- **HTML5 + CSS puro** — sem build step, zero dependências.
- Fontes: Bree Serif + Kalam + Archivo na HOME; Playfair Display + Inter nas subpáginas (via Google Fonts).
- Design tokens: `css/tokens.css` — paleta "vidro sobre pedra" (subpáginas) + tokens café do mundo "O Café da Rua" (Home).
- Emblema oficial da marca no hero (`assets/logos/logo-ipi-comunidade-vitral.png`) e tira de 4 cores no footer.
- JS mínimo: `js/menu.js`.

## Design

- **HOME — "O Café da Rua"** (v2.1): fachada de café com letreiro pintado (Bree Serif) + lousa de giz (Kalam)
  e o emblema oficial da marca em quadro pintado; corpo Archivo. North Star: "O Café da Rua".
- **Subpáginas — "Vitral Arquitetônico"** (v1.1): banner marinho + foto; Playfair Display + Inter; migração pendente.
- Fonte do sistema visual: `DESIGN.md` (+ `.impeccable/design.json`).
- Specs OpenSpec: `openspec/specs/site-estatico-vitral/`, `openspec/specs/design-vitral-arquitetonico/`,
  `openspec/specs/design-cafe-da-rua/` (changes concluídos em `openspec/changes/archive/`).

## Conteúdo

- Fonte da verdade das 7 páginas: `docs/conteudo/novo/` (a Home está em `docs/conteudo/homepage.md`).
- Conteúdo antigo (10 páginas Wix) preservado em `docs/conteudo/` e `docs/raw/` para referência.
- Imagens: `assets/img/` (fotos) e `assets/logos/`.

## Rodar localmente

Abra `index.html` diretamente no navegador (site estático, sem servidor).

## Publicar

O GitHub Pages serve a raiz da branch `homologacao`. Basta fazer push nessa branch.
`main` só é usada em deploys explícitos.
