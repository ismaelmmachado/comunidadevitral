# Comunidade Vitral — Site

Novo site estático da **Comunidade Vitral** (Igreja Presbiteriana Independente Vitral),
em substituição ao site em Wix. Design **"Vitral Arquitetônico" (v1.1)**
— Direção A, Playfair Display, paleta "vidro sobre pedra" —, publicado em GitHub Pages.

Versão atual: **v2.0.0** · Branch de trabalho: `homologacao`

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
- Fontes: Playfair Display (títulos) e Inter (corpo), via Google Fonts.
- Design tokens: `css/tokens.css` — paleta "vidro sobre pedra" (pedra `#f7f6f2`, grafite `#1d262e`, marinho `#0f1f2c`, vidro safira `#2f5f92` / esmeralda `#3f6f5a` / âmbar `#d99b2b` / rubi `#b3493a`).
- Emblema oficial da marca no hero (`assets/logos/logo-ipi-comunidade-vitral.png`) e tira de 4 cores no footer.
- JS mínimo: `js/menu.js`.

## Design — "Vitral Arquitetônico" (v1.1)

- Hero da HOME editorial e claro, com o emblema da marca ao lado do título.
- Subpáginas com banner marinho + foto.
- Cards e botões retangulares (raio 8px); degradê âmbar→rubi apenas em facetas (botão primário, card de destaque).
- Spec: `docs/superpowers/specs/2026-08-03-design-vitral-arquitetonico.md`
- OpenSpec change: `openspec/changes/design-vitral-arquitetonico/`

## Conteúdo

- Fonte da verdade das 7 páginas: `docs/conteudo/novo/` (a Home está em `docs/conteudo/homepage.md`).
- Conteúdo antigo (10 páginas Wix) preservado em `docs/conteudo/` e `docs/raw/` para referência.
- Imagens: `assets/img/` (fotos) e `assets/logos/`.

## Rodar localmente

Abra `index.html` diretamente no navegador (site estático, sem servidor).

## Publicar

O GitHub Pages serve a raiz da branch `homologacao`. Basta fazer push nessa branch.
`main` só é usada em deploys explícitos.
