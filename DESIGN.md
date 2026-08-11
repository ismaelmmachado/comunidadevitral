---
name: Comunidade Vitral — Vitral Arquitetônico
description: Site institucional da Comunidade Vitral (IPI Vitral) — pedra clara, vidro translúcido e acentos de gema.
colors:
  ambar: "#d99b2b"
  ambar-deep: "#a06a18"
  rubi: "#b3493a"
  safira: "#2f5f92"
  esmeralda: "#3f6f5a"
  navy: "#0f1f2c"
  navy-soft: "#16324e"
  pedra: "#f7f6f2"
  surface: "#ffffff"
  ink: "#1d262e"
  muted: "#5d6a75"
  border: "#e5e1d7"
typography:
  display:
    fontFamily: "\"Playfair Display\", Georgia, serif"
    fontSize: "clamp(2rem, 4.6vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "\"Playfair Display\", Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "\"Playfair Display\", Georgia, serif"
    fontSize: "clamp(1.15rem, 2vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  md: "8px"
  pill: "999px"
spacing:
  space: "clamp(1.1rem, 3vw, 2.2rem)"
  section: "clamp(3rem, 7vw, 6rem)"
  card: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.ambar-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-gold:
    backgroundColor: "{colors.ambar-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-outline-dark:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  card-dark:
    backgroundColor: "{colors.ambar-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: Comunidade Vitral — Vitral Arquitetônico

## Overview

**Creative North Star: "O Vitral Translúcido"**

A Comunidade Vitral se apresenta como uma igreja em pessoas — não um prédio — e o sistema visual traduz isso como pedra clara sob a luz do dia, com a luz passando por facetas de vidro colorido. Cada superfície é luminosa e respirável: o fundo pedra (#f7f6f2) e o branco dos cards funcionam como a moldura de janela; as quatro gemas (safira, esmeralda, âmbar, rubi) aparecem em doses precisas, como os cacos do vitral, nunca como pintura inteira. A profundidade é tátil e suave: sombras ambientais discretas, elevação gentil no hover e o drop-shadow que faz a janela de vitral parecer vidro de verdade.

A tipografia carrega a alma: Playfair Display pesada e editorial nos títulos, Inter calma e legível no corpo — o contraste entre a voz poética (serif) e a voz cotidiana (sans) ecoa o convite "venha como você está". O sistema é deliberadamente anti-"igreja corporativa": sem banco de imagens de sorrisos, sem acúmulo de dourado, sem telhados de megachurch. A assinatura é a janela de vitral em arco (assets/vitral.svg) e a tira de quatro cores que divide seções e coroa o rodapé.

**Key Characteristics:**
- Pedra clara e luminosa como fundo; marinho profundo para âncoras (banners, seções escuras, rodapé).
- Acentos de gema em doses: gradiente âmbar profundo→rubi em CTAs e destaques; safira para estados de navegação e eyebrow; rubi para links e labels.
- Radii retos e discretos (8px); pílulas apenas em eyebrows e selos.
- Sombras suaves e camadas leves; elevação como resposta a hover/foco.
- Playfair Display (700/800) para títulos; Inter (400–700) para corpo e labels em caixa alta espaçada.

## Colors

A paleta é "vidro sobre pedra": neutros de pedra e marinho sobre os quais as quatro gemas do vitral emitem cor, como luz através de cacos.

### Primary
- **Âmbar do Café** (#d99b2b): o calor do convite. Lidera o gradiente de CTA primário, preenche a faixa de foco (:focus-visible) e links sobre fundos escuros. É a cor "da mesa".
- **Âmbar Profundo** (#a06a18): o mesmo âmbar, escurecido para AA — usado em toda superfície que carrega texto branco (botões primário e gold, cards escuros, cabeçalho de tabela).

### Secondary
- **Rubi Terracota** (#b3493a): a segunda faceta do gradiente, o acento de vínculo. Links, labels de seção, números da lista de passos e o destaque do card escuro. É a cor "do coração".

### Tertiary
- **Safira do Rio Preto** (#2f5f92): a faceta da confiança. Estados de navegação (hover/atual), eyebrow e a primeira cor da tira de vitral.
- **Esmeralda da Esperança** (#3f6f5a): faceta rara, usada apenas na tira de vitral (footer e divisores) e no desenho da janela — não em superfícies de conteúdo.

### Neutral
- **Pedra de Rio Preto** (#f7f6f2): o fundo claro do site inteiro — o "chão" de pedra da janela.
- **Superfície** (#ffffff): cards, menus, seções alternadas.
- **Tinta** (#1d262e): texto principal e elementos de alto contraste.
- **Cinza Sussurrado** (#5d6a75): texto secundário, leads e metadados.
- **Fio de Cal** (#e5e1d7): bordas e divisores.
- **Marinho Profundo** (#0f1f2c) e **Marinho Suave** (#16324e): o azul da noite — banners de subpágina, seções escuras, rodapé e o gradiente de âncora.

### Named Rules
**The Rarity of Glass Rule.** As quatro gemas aparecem em superfícies pequenas e precisas, nunca como fundo generalizado de páginas inteiras (exceto marinho, que é âncora estrutural). A raridade do acento é o que faz o vitral brilhar.

**The Warm Action Rule.** Toda ação primária é quente (gradiente âmbar profundo→rubi ou âmbar profundo sólido) e mantém contraste AA com texto branco; o marinho reserva-se para âncoras e contextos escuros, nunca para o CTA de conversão. O âmbar claro é reservado para acentos e estados, onde não carrega texto sobre si.

## Typography

**Display Font:** Playfair Display 700/800 (fallback: Georgia, serif)
**Body Font:** Inter 400/500/600/700 (fallback: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif)

**Character:** Editorial e íntima ao mesmo tempo. A Playfair dá peso poético a frases longas de acolhimento; a Inter mantém tudo legível e calmo. O par fala a língua de quem chega cansado — sem jargão, com respiro.

### Hierarchy
- **Display** (700, clamp(2rem → 3.4rem), 1.2): H1 de hero e banners. Título de página é o único Display por viewport.
- **Headline** (700, clamp(1.5rem → 2.2rem), 1.2): H2 de seção. Só um por seção.
- **Title** (700, clamp(1.15rem → 1.4rem), 1.2): H3 de cards e grupos.
- **Body** (400, clamp(1rem → 1.125rem), 1.65): texto corrente; leads e citações usam clamp próprio (1.1→1.35rem e 1.3→1.8rem).
- **Label** (700, 0.72rem, letter-spacing 0.16em, uppercase): eyebrows, labels de seção e de contato. O único "texto de marca" em caixa alta.

### Named Rules
**The One Serif Voice Rule.** Playfair é para títulos e números de destaque; corpo, botões e inputs são sempre Inter. Nunca usar a serif em parágrafos longos de conteúdo.

**The Rested Hero Rule.** Títulos de hero respeitam máximos de largura (16ch no H1, 40ch no subtítulo) para frases de acolhimento não virarem paredes de texto.

## Layout

Container único com max-width de 1120px, padding lateral em `--space` (clamp 1.1→2.2rem). Seções respiram com `--section` (clamp 3→6rem) de padding vertical; as seções alternadas (branco, `section-alt`) separam blocos com fio de cal no topo e na base.

Grades utilitárias de 3 colunas (`grid`, gap 1.2rem) e 2 colunas (`grid-2`); `section-head` e `hero-inner` usam duas colunas assimétricas (1.2fr/1fr e 1.25fr/0.75fr) para pares título+lead ou texto+vitral. Na quebra de 760px (`--bp-mobile`), tudo vira uma coluna e o hero centraliza texto e vitral.

### Named Rules
**The One-Seat Rule.** Cada seção tem um único H2 e um foco claro; cards em grade contam uma história por coluna — sem sobreposição de mensagens na mesma linha.

## Elevation & Depth

Sistema em camadas suaves, "Layered com sombras ambientais": profundidade vem de sombras difusas e elevação em resposta a estados, não de camadas empilhadas. Fundos planos descansam à vista; o hover ergue o card, o foco acende o contorno.

### Shadow Vocabulary
- **Ambient (repouso)** (`0 4px 14px rgba(15,31,44,0.06)`): cards e itens de lista em repouso.
- **Hover (erguido)** (`0 10px 24px rgba(15,31,44,0.10)`): card sob hover, com translateY(-3px).
- **Menu/painel (suspenso)** (`0 12px 30px rgba(15,31,44,0.12)`): dropdowns e menu mobile.
- **CTA (chama)** (`0 8px 20px rgba(179,73,58,0.30)` → `0 12px 26px rgba(179,73,58,0.40)` no hover): botão primário — a única sombra colorida do sistema.
- **Vidro (translúcido)** (`drop-shadow(0 18px 34px rgba(15,31,44,0.18))`): a janela de vitral no hero.

### Named Rules
**The Flat-By-Default Rule.** Superfícies são planas em repouso; sombras aparecem como resposta a estado (hover, menu aberto, foco) ou como material (o vidro). Nenhuma sombra permanente sobre o corpo de texto.

## Shapes

Forma reta e discreta: raio único de 8px (`--radius`) para quase tudo — botões, cards, menus, tabelas, listas. Pílulas (`--radius-pill`, 999px) são reservadas a eyebrows e selos. Bordas de 1px em `--border` (fio de cal) definem a maioria das superfícies; o marinho usa-se em blocos cheios, sem borda. A única geometria expressiva é o arco da janela de vitral e seus cacos.

### Named Rules
**The Straight Corner Rule.** Nenhum componente de conteúdo (card, botão, campo, menu) excede 8px de raio. O drama fica no vitral, não nos cantos.

## Components

### Buttons
- **Shape:** retangular, raio 8px, padding 13px 26px, peso 700, com transição de transform/sombra (0.15s) e micro-elevação de 1px no hover. Alvos de toque ≥ 44px no mobile.
- **Primary:** gradiente âmbar profundo→rubi com sombra colorida quente. É o CTA de conversão (visitar, falar no WhatsApp).
- **Gold:** âmbar profundo sólido, para chamadas dentro de cards escuros e seções coloridas.
- **Navy:** marinho sólido, para ações sólidas sem a "chama" do primário.
- **Outline:** transparente com borda branca (60%), para CTAs sobre fundos escuros.
- **Outline Dark:** transparente com borda de tinta; hover inverte para tinta com texto branco.
- **Hover / Focus:** todos elevam 1px; foco usa o contorno de 3px âmbar do sistema.

### Cards
- **Corner Style:** raio 8px; **Border:** 1px fio de cal.
- **Background:** superfície branca; **Shadow Strategy:** ambient em repouso, hover erguido (ver Elevation).
- **Internal Padding:** `--space` (1.6rem), com imagem de topo sangrando o padding (margem negativa 1.6rem).
- **Card Dark:** gradiente âmbar profundo→rubi, texto branco, sem borda — reservado a 1–3 destaque por página.

### Feature List (passos numerados)
- **Style:** item como card compacto (superfície, borda 1px, raio 8px, padding 1rem 1.2rem).
- **Number:** Playfair 1.4rem 700 em rubi — o toque editorial que liga a lista à serif dos títulos.

### Tabela (info)
- **Style:** superfície, borda 1px, raio 8px; células com padding 0.8rem 1.1rem e divisor de fio de cal.
- **Header:** gradiente âmbar profundo→rubi com texto branco; rolagem horizontal dentro de `.table-wrap` no mobile.

### Navigation
- **Desktop:** links com padding 8px 12px, raio 8px, peso 600; hover/atual com fundo safira a 8% e texto safira. Dropdown suspenso (210px, borda, sombra de painel).
- **Mobile (≤760px):** botão "Menu" (borda de fio de cal); painel suspenso à direita com pilha vertical, mesma linguagem de sombra e borda.

### Eyebrow (selo de seção)
- **Style:** pílula em caixa alta espaçada (0.16em), safira sobre fundo safira a 8% com borda safira a 25%; variante branca translúcida sobre marinho.

## Do's and Don'ts

### Do:
- **Do** usar pedra + branco como maioria da página; acentos de gema em superfícies pequenas e precisas.
- **Do** fazer todo CTA primário quente (gradiente âmbar profundo→rubi ou âmbar profundo, sempre AA sobre texto branco) e reservar marinho para âncoras e contextos escuros.
- **Do** manter um único H2 por seção e uma única mensagem por card.
- **Do** respeitar raio de 8px em componentes e pílulas apenas em eyebrows/selos.
- **Do** usar sombras apenas como resposta a estado (hover/foco/menu) ou como material (vidro).
- **Do** preservar o contraste AA: tinta sobre pedra para corpo; branco sobre marinho/gradiente para texto em fundos escuros.

### Don't:
- **Don't** pintar páginas inteiras de uma gema; o marinho é a única cor estrutural além dos neutros.
- **Don't** usar Playfair em parágrafos de conteúdo nem Inter em títulos.
- **Don't** usar sombras coloridas fora do CTA primário.
- **Don't** exceder 8px de raio em componentes de conteúdo.
- **Don't** adotar estética de "igreja corporativa" genérica (banco de imagens, acúmulo de dourado, telhados de megachurch) — o sistema é pedra e vidro, não publicidade.
