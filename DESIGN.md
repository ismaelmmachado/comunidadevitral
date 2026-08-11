---
name: Comunidade Vitral — O Café da Rua
description: Mundo visual "O Café da Rua" (letreiro pintado e lousa de café do interior) aplicado à HOME; marca do vitral preservada.
colors:
  pedra-lavada: "#f7f3ea"
  creme: "#f5efe2"
  cafe: "#4a3528"
  cafe-entardecer: "#3a2b1f"
  cafe-leite: "#7a5f48"
  giz-ink: "#f2ead2"
  letreiro-ink: "#3a2416"
  ambar: "#d99b2b"
  ambar-deep: "#a06a18"
  rubi: "#b3493a"
  safira: "#2f5f92"
  esmeralda: "#3f6f5a"
  surface: "#ffffff"
  ink: "#1d262e"
  border: "#e5e1d7"
  navy: "#0f1f2c"
typography:
  display:
    fontFamily: "\"Bree Serif\", Georgia, serif"
    fontSize: "clamp(2.2rem, 6vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.06
  chalk:
    fontFamily: "\"Kalam\", cursive"
    fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "\"Archivo\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "\"Archivo\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "8px"
spacing:
  space: "clamp(1.1rem, 3vw, 2.2rem)"
  section: "clamp(3rem, 7vw, 6rem)"
  card: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.cafe}"
    textColor: "{colors.creme}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  button-gold:
    backgroundColor: "{colors.ambar-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  button-outline-dark:
    textColor: "{colors.cafe}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  card:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.letreiro-ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.card}"
  card-dark:
    backgroundColor: "{colors.cafe-entardecer}"
    textColor: "{colors.giz-ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.card}"
---

# Design System: Comunidade Vitral — O Café da Rua

## Overview

**Creative North Star: "O Café da Rua"**

A HOME se apresenta como a fachada de um café do interior paulista: um convite pintado à mão, uma lousa de giz com a informação prática e a janela de vitral acesa na vitrine. O sistema traduz a promessa "puxe uma cadeira e respire fundo" em hospitalidade material — pedra lavada e creme como o chão da rua, marrom-café nos painéis e no rodapé, e o letreiro pintado (Bree Serif) como a voz do convite. A lousa (Kalam) cuida do cotidiano — horários, café, passos; o corpo (Archivo) fica quieto e legível.

As quatro gemas do vitral (safira, esmeralda, âmbar, rubi) — marca inegociável — aparecem como tintas pintadas em doses precisas, e a janela de vitral entra no hero como o vidro pintado da vitrine, numa moldura de madeira. O sistema é deliberadamente anti-"religioso genérico": sem cruz decorativa, sem dourado, sem dourado de megachurch.

**Estado de migração:** esta versão documenta o mundo aplicado à **HOME**. As subpáginas e a 404 ainda usam o mundo anterior ("Vitral Arquitetônico", paleta vidro sobre pedra) até a rodada de extensão. O padrão de componentes aqui vale para a Home.

**Key Characteristics:**
- Fachada pintada: letreiro (Bree Serif) + lousa de giz (Kalam) + janela de vitral em moldura.
- Tom de cor Committed quente: chão claro (pedra lavada/creme) e marrom-café em painéis (Café, Café do Entardecer).
- Sem eyebrow/kicker acima de heading; o heading carrega o peso.
- Componentes planos e quentes (raio 6px), com filete pintado (2px âmbar) sob títulos.
- Citação em painel de lousa (giz sobre café), sem borda colorida lateral.
- Marca preservada: janela de vitral (`assets/vitral.svg`) e tira de 4 cores.

## Colors

A paleta é "café e gemas": neutros quentes de café sobre uma rua clara, com as quatro gemas do vitral como tintas pintadas.

### Primary
- **Letreiro Tinta** (#3a2416): o marrom quase-preto do letreiro pintado; texto de títulos e o botão primário.
- **Café** (#4a3528): o marrom do painel de lousa e do CTA primário (texto creme, AA ~10:1).
- **Café do Entardecer** (#3a2b1f): painéis escuros, rodapé e seção institucional.
- **Âmbar Profundo** (#a06a18): o acento quente dos CTAs secundários/gold (texto branco, AA 4.6:1).

### Secondary
- **Âmbar** (#d99b2b): filete pintado sob títulos, links em fundos escuros, faixa de foco.

### Tertiary
- **Rubi** (#b3493a): carimbo dos passos, estados ativos da navegação, tintas do vitral.
- **Safira** (#2f5f92) e **Esmeralda** (#3f6f5a): tintas do vitral e da tira de 4 cores; superfícies de conteúdo não as usam.

### Neutral
- **Pedra Lavada** (#f7f3ea): o chão claro da Home (background).
- **Creme** (#f5efe2): cards (mesas), seções alternadas, menus mobile.
- **Café com Leite** (#7a5f48): texto secundário e bordas — contraste AA (5.3:1 sobre pedra lavada).
- **Giz** (#f2ead2): texto sobre painéis de café (contraste ~9.5:1).

### Named Rules
**The Rarity of Paint Rule.** As quatro gemas aparecem em superfícies pequenas e precisas (tintas, filetes, carimbos, tira); o marrom-café é o único "cheio" além dos neutros. O acúmulo de gema mateia o vidro.

**The Café Ink Rule.** Toda ação primária é café/tinta-marrom com texto creme (AA); o âmbar profundo é o segundo quente. Nenhum CTA primário usa gradiente — o mundo é tinta chapada, não luz.

## Typography

**Display Font (Letreiro):** Bree Serif 400 (fallback: Georgia, serif)
**Chalk Font (Lousa):** Kalam 400/700 (fallback: cursive)
**Body Font (Corpo):** Archivo 400/500/600/700 (fallback: system-ui; grotesca brasileira, Omnibus-Type)

**Character:** a voz do convite é pintada à mão (Bree), generosa e quente; a voz do cotidiano é giz (Kalam); a voz do corpo é Archivo, grotesca limpa e brasileira. O contraste "pintado × quieto" ecoa o convite "venha como você está".

### Hierarchy
- **Display** (Bree 400, clamp(2.2rem → 4rem), 1.06): H1 do hero (o letreiro). Máximo 2-3 linhas.
- **Headline** (Bree 400, clamp(1.5rem → 2.2rem), 1.15): H2 de seção; um por seção.
- **Title** (Bree 400, clamp(1.15rem → 1.4rem), 1.15): H3 de cards, com filete pintado (2px âmbar) sob o título.
- **Body** (Archivo 400, clamp(1rem → 1.125rem), 1.65): corpo; medidas 42–60ch (leads/hero).
- **Chalk** (Kalam 700, clamp(1.1rem → 1.3rem), 1.4): linhas de lousa (informação prática) sobre painel café, ou citação em lousa.

### Named Rules
**The Painted Voice Rule.** Bree é para títulos e números; Kalam para o que "está na lousa"; Archivo para corpo, botões e inputs. Nunca usar a serif pintada em parágrafos longos.

**The No-Kicker Rule.** Nenhuma eyebrow/kicker acima de heading na Home; o H1/H2 carrega o peso inteiro. (O mundo pintado não precisa de rótulo em caixa alta.)

## Layout

Container único de 1120px, padding lateral em `--space`; seções com `--section` de respiro. A Home alterna chão de pedra lavada e faixas creme (`section-alt`) separadas por fio de café-com-leite; a seção institucional é o "interior ao entardecer" (café do entardecer). Héros e grids herdados (hero-inner 1.25fr/0.75fr; grades de 3 colunas colapsando a 1 na quebra de 760px). A janela de vitral fica na coluna direita do hero com moldura pintada.

### Named Rules
**The One-At-a-Time Rule.** Um H2 por seção; um convite por viewport; o letreiro nunca compete com outro display.

## Elevation & Depth

Sistema plano com profundidade de tinta, não de sombra: as coisas "se erguem" por filete pintado, moldura e tom, não por sombras empilhadas. O hover de botão escurece a tinta (`--letreiro-ink` sobre `--cafe`) a 1px; o foco usa a faixa âmbar do sistema. Não há sombras coloridas nem sombras duras na Home do café.

### Named Rules
**The Ink Depth Rule.** Nenhuma sombra em card/marrom nesta Home; a profundidade vem de camadas de tinta (filete, moldura, painel), não de box-shadow.

## Shapes

Forma reta e curta: raio de 6px em componentes do café (botões, cards, painéis de lousa, tabela); a moldura da vitrine tem raio de 8px no topo. Pílulas não aparecem na Home (sem eyebrows). Filetes de 2px — âmbar sob títulos, café-com-leite em divisores — são a gramática de linha.

## Components

### Buttons
- **Shape:** retangular, raio 6px, padding 13px 26px, peso 700 (Archivo), micro-elevação de 1px no hover.
- **Primary:** tinta marrom `--cafe` com texto creme (AA ~10:1). É o CTA de conversão (visitar, WhatsApp).
- **Outline Dark:** borda 2px `--cafe` + texto café; hover inverte para tinta cheia com creme.
- **Outline (sobre painel escuro):** borda giz translúcida + texto giz; usado na Trilha sobre o card do entardecer.
- **Gold:** âmbar profundo com texto branco (AA).
- **Hover/Focus:** hover escurece a tinta; foco usa a faixa âmbar do sistema.

### Cards ("Mesas")
- **Corner:** raio 6px; **Border:** 1px café-com-leite.
- **Background:** creme; **Filete:** 2px âmbar sob o H3 (inline-block).
- **Internal Padding:** 1.5rem. Sem sombra; sem hover de elevação.
- **Card Dark (entardecer):** fundo café do entardecer, texto giz, borda giz translúcida — 1–3 destaques.

### Feature List ("Passaporte")
- **Item:** linha em creme com borda café-com-leite, raio 6px.
- **Stamp (num):** círculo de 2px rubi com número em Bree — o carimbo do passo.

### Chalkboard Panel (citação)
- **Style:** painel `--cafe` com texto giz em Kalam, raio 6px; sem borda lateral colorida.
- **Uso:** citação da marca ("Existimos para que...") e linhas de lousa do hero.

### Tabela (Cordão de Três Dobras)
- **Style:** creme, borda café-com-leite, raio 6px; **Header:** café com texto giz; rolagem horizontal dentro de `.table-wrap` no mobile.

### Navigation
- **Desktop:** links em letreiro-tinta (Archivo 600), raio 4px; hover/atual com tinta âmbar a 16% e texto rubi. Sem dropdown na Home.
- **Mobile (≤760px):** botão "Menu" com borda café-com-leite (alvo ≥44px); painel creme suspenso à direita.

## Do's and Don'ts

### Do:
- **Do** fazer do 1º viewport uma fachada: letreiro com o convite, linha de lousa com horário/café, CTA e a janela de vitral na moldura.
- **Do** usar café/tinta para as ações primárias (texto creme, AA) e âmbar profundo para o segundo quente.
- **Do** deixar o heading carregar o peso — sem eyebrow/kicker acima dele.
- **Do** usar filete pintado (2px) e moldura para profundidade, não sombras em cards.
- **Do** manter a janela de vitral (`assets/vitral.svg`) e a tira de 4 cores como marca nas páginas.
- **Do** usar Kalam apenas para o que "está na lousa" e Bree para letreiros/títulos.

### Don't:
- **Don't** pintar páginas inteiras das gemas; o café e os neutros são o chão, as gemas são tintas em doses.
- **Don't** usar gradiente de texto, glass/blur decorativo ou sombras duras na Home do café.
- **Don't** colocar eyebrow/kicker/pílula acima de heading.
- **Don't** usar borda lateral colorida (>1px) em quotes ou cards — a citação é painel de lousa.
- **Don't** criar estética "religiosa genérica" (cruz decorativa, dourado de megachurch, banco de sorrisos).