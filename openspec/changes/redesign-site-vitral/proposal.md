## Why

O site atual da Comunidade Vitral roda em Wix com design defasado e dependência da plataforma. Precisamos de um site estático moderno, no novo design "Vitral contemporâneo", que preserve 100% do conteúdo (textos, dados institucionais, links e imagens) e seja de fácil manutenção via GitHub Pages, alinhado aos demais projetos estáticos do usuário.

## What Changes

- Cria site estático multi-página em HTML5 + CSS puro (sem build), substituindo o protótipo de página única existente.
- Extrai e documenta todo o conteúdo das 10 páginas do site Wix (HOME, SOBRE, MENSAGENS, ENCONTROS, VOLUNTARIADO, COMO CONTRIBUIR, VISITE-NOS, TEMPLO, GRANDE BANQUETE, LINK-BIO).
- Hospeda localmente todas as imagens (29 assets) com versões otimizadas para web.
- Aplica novo design system "Vitral contemporâneo" (degradês âmbar/terracota, azul-marinho, dourado; Playfair Display + Inter) — substitui o design system "Stripe" anterior.
- Adiciona SEO (title/description/OG/schema.org), sitemap.xml, robots.txt, favicon, 404.html e acessibilidade AA.
- Reorganiza a documentação openspec para o formato oficial da CLI (specs/ + changes/).

## Capabilities

### New Capabilities
- `site-estatico-vitral`: site estático multi-página com header/footer compartilhados, conteúdo preservado das 10 páginas, SEO, acessibilidade e deploy no GitHub Pages.

### Modified Capabilities
<!-- Nenhuma spec existente; projeto novo. -->

## Impact

- Repo: `ismaelmmachado/comunidadevitral` (branch `homologacao` servida pelo GitHub Pages).
- Substitui: `index.html`/`styles.css` da raiz, `src/` (protótipo), `content/` (extração bruta antiga), `openspec/001-004.md`.
- Sem dependências novas de runtime (HTML/CSS/JS puro; Google Fonts).
