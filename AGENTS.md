# AGENTS.md — Comunidade Vitral

Guia de convenções e contexto para agentes que trabalham neste repositório.

## Regra de Ouro (git — nunca esquecer)

1. **"Salva"** → commit e push na branch `homologacao` (branch de trabalho padrão).
2. **"Salva em main"** (explícito) → `main`.
3. `main` só é usado quando solicitado explicitamente (deploy).

## Projeto

Novo site estático da Comunidade Vitral (IPIB São José do Rio Preto), em substituição ao site Wix.
Publicado via GitHub Pages: `https://ismaelmmachado.github.io/comunidadevitral/`

### Stack
- **HTML5 + CSS puro** — sem build step, zero dependências de runtime.
- Fontes: Playfair Display (títulos) e Inter (corpo), via Google Fonts.
- Design tokens: `css/tokens.css` (paleta "Vitral contemporâneo").
- JS mínimo: `js/menu.js` (menu mobile/dropdown).

### Estrutura
- 10 páginas estáticas na raiz: `index`, `sobre`, `mensagens`, `encontros`,
  `voluntariado`, `como-contribuir`, `visite-nos`, `templo`, `grande-banquete`,
  `link-bio` + `404.html`.
- `css/` (tokens, base, estilo), `js/`, `assets/` (img, logos, favicon, og-image).
- `docs/` — conteúdo extraído (`conteudo/`, `raw/`, `inventario.md`) e specs/plans.
- `openspec/` — documentação spec-driven (change `redesign-site-vitral`).
- `AGENTS.md`, `README.md` — documentação do projeto.

### Conteúdo
- Todo o conteúdo vem de `docs/conteudo/*.md` (fonte da verdade, extraída do Wix).
- Preservar verbatim: textos, telefone 17 99619-5302, e-mail contato@comunidadevitral.com.br,
  endereço, CNPJ 49.075.286/0001-63, PIX financeiro@comunidadevitral.com.br, banco Itaú Ag 8299.
- Header e footer são repetidos em cada página HTML — ao alterar, atualizar **todas** as páginas.

## Deploy (GitHub Pages)

- GitHub Pages serve a raiz (`/`) da branch **`homologacao`**.
- Sem build step: `git push origin homologacao` publica o conteúdo commitado.
- Verificação: `gh api repos/ismaelmmachado/comunidadevitral/pages` → `status: built`.

## Convenções

- Idioma: português (pt-BR).
- Sem emojis em código/comentários; sem comentários no código salvo se solicitado.
- Mobile-first; acessibilidade AA; caminhos relativos (subpath do Pages).
