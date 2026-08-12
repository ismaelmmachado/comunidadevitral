---
name: Comunidade Vitral — Marca Nova (verde petróleo/acinzentado)
description: Identidade visual única do site inteiro — verde petróleo e verde acinzentado (sálvia) com Montserrat; emblema oficial e tira de 4 cores como marca inegociável.
colors:
  petroleo: "#005f6b"
  petroleo-deep: "#00434d"
  sage: "#94a69a"
  sage-lighter: "#c6d6cc"
  sage-claro: "#e9ede9"
  off-black: "#1f2421"
  muted-nova: "#5b6b63"
  border-nova: "#d7ded9"
  safira: "#2f5f92"
  esmeralda: "#3f6f5a"
  ambar: "#d99b2b"
  rubi: "#b3493a"
  surface: "#ffffff"
  ink: "#1f2421"
typography:
  display:
    fontFamily: "\"Montserrat\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.06
  headline:
    fontFamily: "\"Montserrat\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "\"Montserrat\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "\"Montserrat\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "\"Montserrat\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "8px"
spacing:
  space: "clamp(1.1rem, 3vw, 2.2rem)"
  section: "clamp(3rem, 7vw, 6rem)"
  card: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.petroleo}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-gold:
    backgroundColor: "{colors.petroleo-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-outline-dark:
    textColor: "{colors.off-black}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.off-black}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  card-dark:
    backgroundColor: "{colors.petroleo-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
---

# Design System: Comunidade Vitral — Marca Nova

## Overview

**Creative North Star: "Marca Nova" — verde petróleo e verde acinzentado (sálvia), comunicação serena e institucionalmente acolhedora.**

O site inteiro (HOME, 6 subpáginas e 404) usa o mesmo sistema visual: a serenidade dos verdes petróleo e acinzentado traduz confiança, profundidade e calma — o contraponto visual ao cansaço e à pressa da cidade. O título carrega o peso em Montserrat 700; o corpo fica quieto e legível; o emblema oficial da marca (logo IPI Comunidade Vitral) entra no hero da HOME numa moldura clara, e a tira de 4 cores (safira, esmeralda, âmbar, rubi) permanece no topo do rodapé como marca inegociável.

Este documento substitui os mundos anteriores ("O Café da Rua" na HOME e "Vitral Arquitetônico" nas subpáginas) — a Marca Nova é **padrão único** do site.

**Key Characteristics:**
- Paleta solo: verde petróleo (`#005f6b`) como tinta de ações, verde petróleo profundo em seções/footer escuros, e sálvia-acinzentado como chão claro e detalhes.
- Tipo único Montserrat 400–800: display B700, corpo B400, labels B700 com tracking 0.16em.
- Sem eyebrow acima de heading nas seções; a subpágina abre com banner em gradiente petróleo e eyebrow translúcido.
- Componentes planos com raio 8px e borda `--border-nova`; card branco com sombra sutil petróleo.
- Marca preservada: emblema oficial no hero (HOME) e tira de 4 cores no topo do footer.

## Colors

A paleta é "petróleo e sálvia": verdes profundos e acinzentados com um chão claro e quase-preto para texto.

### Primary
- **Petróleo** (#005f6b): a tinta das ações primárias (CTA, tabelas, links, faixa de foco) — texto branco AA ~7.4:1.
- **Petróleo Profundo** (#00434d): seções e banner escuros, footer, botão gold — texto branco AA ~11:1.

### Secondary
- **Sálvia Escura** (#94a69a): detalhes e labels sobre neutros claros.
- **Sálvia Clara** (#c6d6cc): links e rótulos sobre fundos escuros/petróleo — AA ~4.9:1.

### Neutral
- **Quase-Preto** (#1f2421): texto de títulos e corpo — AA ~15.8:1 sobre branco.
- **Cinza Novo** (#5b6b63): texto secundário — AA ~5.6:1 sobre branco.
- **Borda Nova** (#d7ded9): bordas e divisores.
- **Sálvia Claro** (#e9ede9): chão de seções alternadas e hero da HOME.
- **Branco** (#ffffff): fundo do body e cards.

### Named Rules
**The Petróleo Conduz as Ações Rule.** Toda ação primária é verde petróleo com texto branco (AA); o profundo vira o "escuro" das seções de autoridade. Nenhum CTA usa gradiente de alto contraste — a tinta é chapada.

**The Gems Stay Small Rule.** As quatro gemas (safira/esmeralda/âmbar/rubi) aparecem **apenas** na tira de 4 cores como identidade de marca — nunca como cores de CTA ou fundo de seção.

## Typography

**Display Font:** Montserrat 700 (fallback: system-ui)
**Body Font:** Montserrat 400/500/600/700 (fallback: system-ui)

**Character:** Montserrat é geométrica e contemporânea, com personalidade sem ser decorativa — sustenta a serenidade "petróleo" e a clareza do convite. Um único tipo elimina a dupla identidade anterior e reforça a coesão do site.

### Hierarchy
- **Display** (Montserrat 700, clamp(2.2rem → 4rem), 1.06): H1 do hero da HOME.
- **Headline** (Montserrat 700, clamp(1.5rem → 2.2rem), 1.15): H2 de seção; um por seção.
- **Title** (Montserrat 700, clamp(1.15rem → 1.4rem), 1.15): H3 de cards.
- **Body** (Montserrat 400, clamp(1rem → 1.125rem), 1.65): corpo; medidas 42–60ch.
- **Label** (Montserrat 700, 0.72rem, tracking 0.16em): eyebrow do banner, labels de contato e seção.

### Named Rules
**The One-Type Rule.** Montserrat é a única família: título, corpo e labels. A hierarquia vem de peso (700 vs 400) e tamanho, não de troca de fonte.

**The No-Kicker Rule.** Nas seções, nenhum eyebrow/kicker acima do heading — o H2 carrega o peso. (O eyebrow vive apenas no banner de subpágina e nos labels de contato.)

## Layout

Container único de 1120px, padding lateral em `--space`; seções com `--section` de respiro. Alternância de chão branco e faixas `section-alt` (`--sage-claro`); a seção institucional e o footer usam `--grad-banner` (petróleo profundo → petróleo). O hero-inner da HOME segue `1.25fr/0.75fr` com o emblema oficial na moldura clara à direita.

### Named Rules
**The One-At-a-Time Rule.** Um H2 por seção; um convite por viewport; o display nunca compete com outro display.

## Elevation & Depth

Sistema predominantemente plano: profundidade por tom e gradiente discreto, não sombras empilhadas. Cards brancos têm sombra sutil em petróleo (a sombra de um objeto sobre o chão claro); o hover de botão escurece a tinta e aprofunda a sombra; o foco usa a faixa petróleo. Sombras coloridas só nas ações (petróleo), nunca nas superfícies.

### Named Rules
**The Ink Depth Rule.** A profundidade vem de camadas de tinta (borda, tom, gradiente), nunca de sombras duras em superfícies claras.

## Shapes

Forma reta e curta: raio 8px em componentes (botões, cards, tabela, FAQ, contact-item), raio da faixa de informação (HOME) como pílula 999px, e a moldura do emblema com raio 8px no topo. Sem pílulas em eyebrows de seção.

## Components

### Buttons
- **Shape:** retangular, raio 8px, padding 13px 26px, peso 700 (Montserrat), micro-elevação de 1px no hover.
- **Primary:** verde petróleo com texto branco (AA ~7.4:1). É o CTA de conversão (visitar, WhatsApp).
- **Outline Dark:** borda 1px quase-preto + texto quase-preto; hover inverte para tinta cheia.
- **Gold:** petróleo profundo com texto branco (AA ~11:1).
- **Outline (sobre painel escuro):** borda branca translúcida + texto branco; usado em seções escuras.

### Cards
- **Corner:** raio 8px; **Border:** 1px `--border-nova`.
- **Background:** branco; **Sombras:** sutil em petróleo.
- **Internal Padding:** 1.6rem.
- **Card Dark:** gradiente `--grad-banner`, texto branco, borda branca translúcida — 1–3 destaques.

### Feature List ("Passos")
- **Item:** linha branca com borda `--border-nova`, raio 8px.
- **Num:** número em Montserrat petróleo 700.

### FAQ
- **Item:** `details` branco com borda `--border-nova`, raio 8px; título `summary` quase-preto.

### Tabela (Cordão / dados)
- **Style:** branca, borda `--border-nova`, raio 8px; **Header:** petróleo com texto branco; rolagem horizontal dentro de `.table-wrap` no mobile.

### Banner de Subpágina
- **Background:** `--grad-banner`; **Eyebrow:** translúcido branco; **H1/lead:** branco.

### Navigation
- **Desktop:** links em quase-preto (Montserrat 600), raio 4px; hover/atual com fundo petróleo a 8% e texto petróleo.
- **Mobile (≤760px):** botão "Menu" com borda `--border-nova`; painel branco suspenso.

## Do's and Don'ts

### Do:
- **Do** usar verde petróleo para CTAs primários (texto branco, AA) e petróleo profundo para seções/footer de autoridade.
- **Do** usar sálvia claro como chão de seções alternadas e hero da HOME.
- **Do** manter a tira de 4 cores no topo do footer e o emblema oficial no hero — marca inegociável.
- **Do** deixar o heading carregar o peso — sem eyebrow/kicker acima de headings de seção.
- **Do** usar Montserrat 700 para display/labels e 400 para corpo.

### Don't:
- **Don't** pintar páginas inteiras de verde; o quase-preto e os neutros claros são o chão.
- **Don't** usar as quatro gemas fora da tira de 4 cores (sem CTAs ou fundos de gema).
- **Don't** usar gradiente de texto, glass/blur decorativo ou sombras duras em superfícies claras.
- **Don't** recriar a dupla identidade anterior ("Café da Rua" / "Vitral Arquitetônico") — a Marca Nova é o padrão único.