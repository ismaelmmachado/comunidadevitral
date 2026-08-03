# Comunidade Vitral — Site

Novo site estático da **Comunidade Vitral** (Igreja Presbiteriana Independente Vitral),
em substituição ao site em Wix. Conteúdo preservado, design **"Vitral Arquitetônico" (v1.1)**
— Direção A, Playfair Display, paleta "vidro sobre pedra" —, publicado em GitHub Pages.

Versão atual: **v1.1.0** · Branch de trabalho: `homologacao`

Publicado em: <https://ismaelmmachado.github.io/comunidadevitral/>

## Páginas

| Página | Arquivo |
|---|---|
| HOME | `index.html` |
| Sobre | `sobre.html` |
| Mensagens | `mensagens.html` |
| Encontros | `encontros.html` |
| Voluntariado | `voluntariado.html` |
| Como contribuir | `como-contribuir.html` |
| Visite-nos | `visite-nos.html` |
| Templo | `templo.html` |
| Grande Banquete | `grande-banquete.html` |
| Link-bio | `link-bio.html` |
| 404 | `404.html` |

## Stack

- **HTML5 + CSS puro** — sem build step, zero dependências.
- Fontes: Playfair Display (títulos) e Inter (corpo), via Google Fonts.
- Design tokens: `css/tokens.css` — paleta "vidro sobre pedra" (pedra `#f7f6f2`, grafite `#1d262e`, marinho `#0f1f2c`, vidro safira `#2f5f92` / esmeralda `#3f6f5a` / âmbar `#d99b2b` / rubi `#b3493a`).
- Janela de vitral (assinatura): `assets/vitral.svg` (hero da HOME e tira no footer).
- JS mínimo: `js/menu.js`.

## Design — "Vitral Arquitetônico" (v1.1)

- Hero da HOME editorial e claro, com a janela de vitral ao lado do título "venha como você está".
- Subpáginas com banner marinho + foto; TEMPLO segue esse padrão.
- Cards e botões retangulares (raio 8px); degradê âmbar→rubi apenas em facetas (botão primário, card de destaque).
- Spec: `docs/superpowers/specs/2026-08-03-design-vitral-arquitetonico.md`
- OpenSpec change: `openspec/changes/design-vitral-arquitetonico/`

## Conteúdo

- Extraído do site Wix original em 2026-08-03.
- Fonte da verdade: `docs/conteudo/` (markdown por página) e `docs/inventario.md`.
- HTML bruto baixado: `docs/raw/`.
- Imagens: `assets/img/` (fotos) e `assets/logos/`.

## Rodar localmente

Abra `index.html` diretamente no navegador (site estático, sem servidor).

## Publicar

O GitHub Pages serve a raiz da branch `homologacao`. Basta fazer push nessa branch.
`main` só é usada em deploys explícitos.
