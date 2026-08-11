# Proposta de Redesign Visual — "O Café da Rua"

**Status:** Proposta aprovada (direção) · **Escopo:** novo mundo visual, conteúdo inalterado · **Modo:** Persuade (Home = 1ª superfície) · **Data:** 2026-08-11

Gerada com o fluxo `new-work` da skill impeccable: entrevista → 7 direções do mundo do público → rolagem `concept-seed` → decisão.

## Contexto

O site atual usa o mundo "Vitral Arquitetônico" (pedra + vidro, Playfair/Inter). O conteúdo institucional (fonte da verdade em `docs/conteudo/novo/`) permanece idêntico; o que muda é a linguagem visual, mais fiel ao conceito central do conteúdo: **a mesa e a hospitalidade** — "puxe uma cadeira", café, pertencimento sem exigência.

Decisões registradas na entrevista:
- 1º viewport deve provar **clareza do convite** (em segundos).
- Conceito-âncora: **mesa e hospitalidade**.
- Anti-referências: religioso genérico (cruz, dourado, "igreja corporativa"); craft lúdico; escuro/tech.
- **Marca inegociável:** a janela de vitral (`assets/vitral.svg`) e a tira de 4 cores (safira/esmeralda/âmbar/rubi) permanecem — a janela entra como o vidro pintado da vitrine do café.

## Direção escolhida — "O Café da Rua" (Letreiros de Café do Interior)

**Mundo:** a linguagem das fachadas pintadas à mão e das lousas de café de uma cidade do interior paulista. Fundos de pedra lavada e creme quente; letreiro pintado à mão para os convites; lousa de giz para a informação prática; a janela de vitral como painel de vidro pintado da vitrine.

### Primeiro viewport (Home)
A fachada de um café — um letreiro pintado que lê o convite *"Cansado de fingir? Puxe uma cadeira e respire fundo."* com uma linha de lousa: *"Domingos às 10h · café quentinho te espera."* A janela de vitral brilha na vitrine. O visitante entende em segundos: é um lugar para sentar e ser bem-vindo.

### Caminho do visitante (Home)
Letreiro (convite) → empatia como a "carta do café" → os 3 jeitos como cartões na lousa → de-risking como "como é o café" (roupa, estacionamento, café, crianças) → jornada como o passaporte carimbado do café → convite como a porta aberta. Conteúdo institucional (IPIB) como o "quadro da história" na parede do fundo.

### Alcance nas 7 páginas
Subpáginas = cômodos do café (cozinha, mesa, quintal); o banner marinho dá lugar ao interior quente da casa ao entardecer; a tira de 4 cores vira detalhe do letreiro/porta.

### Cor e tipografia
- **Estratégia de cor:** Committed quente — chão de pedra lavada/creme e marrom-café; as 4 gemas como tintas pintadas em doses; âmbar/caramelo como acento quente primário. Cena física: um visitante cansado passa na rua à luz do dia, é atraído pela vitrine e entra.
- **Tipografia:** Letreiro (display pintado à mão): **Bree Serif**; Lousa (informação prática): **Kalam**; Corpo (companheiro quieto): **Archivo** (grotesca brasileira, Omnibus-Type). Nenhuma face do default saturado.

### Assinatura interativa
A lousa "escreve" no hover/foco; a janela de vitral acende na vitrine.

## Riscos honestos

- O lettering pintado à mão precisa ser autorado com capricho (nada de fonte script genérica); a voz pintada precisa de companheiro quieto (Archivo) nas páginas densas.
- A janela de vitral entra como o vidro pintado — integrada, não como adesivo.
- Fotografias reais da comunidade precisam de um enquadramento/moldura coerente com a linguagem do letreiro/lousa.

## Registros
- Surface brief: `.impeccable/surfaces/index-html.md`.
- Novo `DESIGN.md` a ser escrito no **finish**, quando houver build.

## Próximos passos (quando você quiser)
1. Build da Home com o mundo "O Café da Rua" (fase de reprodução + responsivo).
2. Ajustes via re-roll ou steer da direção.
3. Depois da build: `detect.mjs` + finish review + novo `DESIGN.md` + nova spec no OpenSpec.
