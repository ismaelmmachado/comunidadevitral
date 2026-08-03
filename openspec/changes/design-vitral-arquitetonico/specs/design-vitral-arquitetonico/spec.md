# design-vitral-arquitetonico Specification

## Purpose
O site aplica o sistema visual "Vitral Arquitetônico" (Direção A): paleta "vidro sobre pedra", janela de vitral como assinatura, componentes retangulares editoriais, mantendo conteúdo, navegação e URLs.

## ADDED Requirements

### Requirement: Paleta "Vidro sobre Pedra"

O site DEVE (MUST) usar a paleta de tokens: fundo pedra `#f7f6f2`, superfície `#ffffff`, texto grafite `#1d262e`, texto secundário `#5d6a75`, borda `#e5e1d7`, marinho `#0f1f2c` (footer e seções escuras), e cores de vidro safira `#2f5f92`, esmeralda `#3f6f5a`, âmbar `#d99b2b` e rubi `#b3493a` para acentos. O degradê âmbar→rubi DEVE (MUST) ser usado apenas em elementos pequenos (botão primário, card de destaque, painel de vitral).

#### Scenario: Verificar tokens de cor
- **WHEN** o usuário inspeciona `css/tokens.css`
- **THEN** encontra as variáveis da paleta "vidro sobre pedra" acima

### Requirement: Janela de vitral como assinatura

A HOME DEVE (MUST) exibir no hero uma janela de vitral (SVG de facetas nas cores safira/esmeralda/âmbar/rubi) ao lado do título "venha como você está". O footer DEVE (MUST) exibir uma tira de vitral no topo. O favicon e a og-image DEVEM (MUST) refletir a nova paleta.

#### Scenario: Renderizar o hero da HOME
- **WHEN** o usuário acessa a página inicial
- **THEN** o título, o subtítulo, os CTAs e a janela de vitral são exibidos sobre o fundo pedra claro

### Requirement: Componentes retangulares editoriais

Cards e botões DEVEM (MUST) usar raio de 8px (não mais pill/18px). O botão primário DEVE (MUST) usar o gradiente âmbar→rubi; os botões secundários DEVEM (MUST) ser outline grafite (fundo claro) ou outline branco (fundo escuro).

#### Scenario: Renderizar botão primário
- **WHEN** um botão primário é renderizado
- **THEN** ele usa raio 8px e fundo em gradiente âmbar→rubi

### Requirement: Hero da HOME editorial e claro

O hero da HOME DEVE (MUST) ser claro (fundo pedra) e assimétrico, com eyebrow safira, título grande em Playfair Display, subtítulo em cinza e a janela de vitral à direita. Em telas estreitas, DEVE (MUST) empilhar e centralizar.

#### Scenario: Empilhar no mobile
- **WHEN** o hero é aberto em tela de 320px
- **THEN** o texto e a janela de vitral ficam empilhados e centralizados, sem rolagem horizontal

### Requirement: Banner marinho nas subpáginas

Subpáginas e a página TEMPLO DEVEM (MUST) usar o banner marinho com foto e eyebrow claro sobre texto branco.

#### Scenario: Exibir banner do TEMPLO
- **WHEN** o usuário acessa a página TEMPLO
- **THEN** o banner marinho exibe a foto, o título "Construa conosco o novo templo da Vitral" e os CTAs
