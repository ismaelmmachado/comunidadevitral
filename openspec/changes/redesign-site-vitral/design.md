# Design — Redesign do Site Comunidade Vitral

## Context

Estado atual: repo `ismaelmmachado/comunidadevitral` com protótipo de página única, extração parcial de conteúdo e design system "Stripe" (a ser substituído). O conteúdo completo das 10 páginas foi extraído do Wix para `docs/conteudo/` e as imagens otimizadas para `assets/`. Motivação em `proposal.md`.

## Goals / Non-Goals

**Goals**
- Site estático multi-página, HTML5 + CSS puro, sem build step.
- Header/footer compartilhados com tokens de design centralizados.
- Conteúdo verbatim; caminhos relativos para subpath do Pages.

**Non-Goals**
- Backend, CMS, build pipeline, PWA, integração com o app de eventos do Wix.
- Não usar framework JS nem pré-processadores CSS.

## Decisions

1. **HTML multi-arquivo com header/footer copiados por página** (sem partials/build).
   - Alternativa: Astro/Nunjucks com build → descartada para manter zero dependências e o fluxo de Pages sem build, como nos demais projetos do usuário.
   - Custo: atualização de header/footer exige editar N arquivos. Mitigação: documentar no AGENTS.md.

2. **Design tokens em `css/tokens.css`** (cores vitral, tipografia, espaçamento, raios, breakpoints) + `css/base.css` (reset/utilidades) + `css/estilo.css` (componentes e páginas).
   - Alternativa: CSS inline por página → descartada (duplicação e inconsistência).

3. **Paleta "Vitral contemporâneo"**: degradê âmbar→terracota, azul-marinho profundo, dourado, neutros quentes. Tipografia Playfair Display (títulos) + Inter (corpo) via Google Fonts.

4. **Imagens hospedadas localmente** com versões web otimizadas (redimensionadas via CDN do Wix antes do download).

5. **Deploy**: branch `homologacao` servida pelo GitHub Pages (regra única, como nos projetos `trilhas`); `main` só em deploy explícito.

## Risks / Trade-offs

- [Alterar header/footer em várias páginas] → Manter header/footer idênticos entre páginas e documento no AGENTS.md; scripts de busca (grep) para localizar trechos.
- [Imagens de alta resolução aumentam o repo] → Já otimizadas para ~60–260KB cada.
- [Conteúdo Wix pode mudar após a extração] → Data da extração registrada no inventário; site novo é a fonte futura.

## Migration Plan

1. Implementar páginas em `homologacao` (branch de trabalho).
2. Publicar; validar conteúdo versus site Wix.
3. Deploy final apenas quando o usuário solicitar merge/deploy em `main`.

## Open Questions

- Nenhuma em aberto. Decisões de stack, escopo, design e deploy foram confirmadas pelo usuário.
