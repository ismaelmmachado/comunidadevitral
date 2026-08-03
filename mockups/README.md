# Mockups — Revisão de Design do Site da Comunidade Vitral

> Proposta de novo visual: **"Vitral Arquitetônico"** — o vitral como janela por onde a luz entra. Fundo limpo, ordem e acolhimento, com a identidade "vitral" evoluída.

## Como acessar os mockups

Os mockups estão publicados nesta branch (`teste`) no GitHub Pages. Abra os links abaixo:

| Mockup | Link | O que mostra |
|---|---|---|
| **HOME — A/B** | `https://ismaelmmachado.github.io/comunidadevitral/mockups/home-ab.html` | Duas direções de design lado a lado para a página inicial |
| **Tipografia** | `https://ismaelmmachado.github.io/comunidadevitral/mockups/tipografia.html` | Playfair Display vs Fraunces nos títulos |
| **Paleta** | `https://ismaelmmachado.github.io/comunidadevitral/mockups/paleta.html` | Cores do "vidro sobre pedra" + janela de vitral + botões |

## O que está sendo avaliado

### 1. Direção de design (HOME) — escolha A ou B
- **A · Vitral Luminoso** — cálido e presente: janela de vitral em destaque no hero, botão em gradiente âmbar→rubi, mais acolhedor. Alinhado à marca "vitral".
- **B · Vitral Estrutural** — sóbrio e minimal: vitral reduzido a uma faixa de cores, muito espaço em branco, tipografia dominante. Mais "premium editorial".
- É possível **misturar**: hero de A com seções de B.

### 2. Tipografia dos títulos — escolha Playfair ou Fraunces
- **Playfair Display** (atual) — serif clássica e confiável.
- **Fraunces** — serif moderno com personalidade, visual mais premium.
- O corpo permanece em **Inter** nas duas opções.

### 3. Paleta de cores — validação visual
- Vidro: **safira** `#2f5f92` · **esmeralda** `#3f6f5a` · **âmbar** `#d99b2b` · **rubi** `#b3493a`
- Neutros: pedra `#f7f6f2` (fundo) · grafite `#1d262e` (texto) · marinho `#0f1f2c` (footer/seções escuras)
- O degradê atual (rosa/terracota) deixa de dominar os fundos e vira **faceta** em elementos pequenos.

## Como dar o feedback

Depois de abrir os links, responda no terminal algo como:
- `A` ou `B` para a direção da HOME
- `Playfair` ou `Fraunces` para os títulos
- Ajustes na paleta, se houver (ex.: "âmbar mais dourado", "marinho mais claro")

Também é possível clicar nos botões dentro de cada mockup para marcar a escolha (fica salvo no navegador).

## Contexto do redesenho

- Site atual (v1.0.0): design "Vitral contemporâneo" com degradê dominante — em produção em `https://ismaelmmachado.github.io/comunidadevitral/`.
- Conteúdo: 10 páginas da igreja (Home, Sobre, Mensagens, Encontros, Voluntariado, Como contribuir, Visite-nos, Templo, Grande Banquete, Link-bio).
- Identidade: igreja reformada presbiteriana (IPI) — simplicidade, reverência, acolhimento e foco na Palavra. Mantendo a marca "Vitral" e evoluindo o visual.

## Restaurar o site normal

Enquanto o GitHub Pages apontar para a branch `teste`, a raiz `.../comunidadevitral/` mostra o conteúdo desta branch (site + mockups).
Para **voltar ao site oficial**: em **Settings → Pages → Source → "Deploy from a branch"** → branch **`homologacao`** → Save.
