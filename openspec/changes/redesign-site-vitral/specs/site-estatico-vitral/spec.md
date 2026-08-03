# site-estatico-vitral Specification

## Purpose
O site estático da Comunidade Vitral apresenta todo o conteúdo institucional da igreja (mensagens, encontros, voluntariado, contribuição, templo, grande banquete e links) em um novo design "Vitral contemporâneo", preservando fielmente textos, dados de contato e redirecionamentos externos, e é publicado via GitHub Pages.

## ADDED Requirements

### Requirement: Preservar o conteúdo institucional das 10 páginas

O site DEVE (MUST) publicar as 10 páginas extraídas do site Wix original com o conteúdo preservado verbatim: HOME (`/`), SOBRE, MENSAGENS, ENCONTROS, VOLUNTARIADO, COMO CONTRIBUIR, VISITE-NOS, TEMPLO, GRANDE BANQUETE e LINK-BIO. Os dados institucionais DEVM (MUST) estar corretos e visíveis: telefone 17 99619-5302, e-mail contato@comunidadevitral.com.br, endereço "Avenida Sebastião Tavares da Silva, 1191 - Jardim Vista Alegre, São José do Rio Preto - SP - CEP 15061660", CNPJ 49.075.286/0001-63, PIX financeiro@comunidadevitral.com.br e banco Itaú Ag 8299 C/C 24420-5.

#### Scenario: Visualizar dados de contato na HOME
- **WHEN** o usuário acessa a página inicial
- **THEN** o telefone, e-mail e endereço da igreja são exibidos no rodapé

#### Scenario: Visualizar dados de contribuição
- **WHEN** o usuário acessa a página "Como contribuir"
- **THEN** os quatro princípios de contribuição, a forma por URNA, o depósito bancário (Itaú Ag 8299 C/C 24420-5), o PIX e os dados institucionais (razão social e CNPJ) são exibidos

### Requirement: Navegação entre as páginas

O site DEVE (MUST) exibir um cabeçalho fixo com o logotipo e o menu de navegação contendo todas as páginas, incluindo um submenu "Mais" com as páginas TEMPLO, GRANDE BANQUETE e LINK-BIO. Todos os links internos DEVM (MUST) usar caminhos relativos para funcionar no subpath do GitHub Pages. Em telas estreitas (mobile), o menu DEVE (MUST) ser acessível via botão toggle.

#### Scenario: Navegar do menu principal
- **WHEN** o usuário clica em "SOBRE" no menu
- **THEN** a página `sobre.html` é aberta

#### Scenario: Abrir submenu "Mais" no mobile
- **WHEN** o usuário toca no botão de menu em um dispositivo móvel
- **THEN** o menu é exibido e os itens, incluindo o submenu "Mais", são acessíveis

### Requirement: Redirecionar para serviços externos

O site DEVE (MUST) manter os redirecionamentos externos originais: os três links de contribuição do templo na ASAAS (mensal `https://www.asaas.com/c/3m32r7l2p3la45jh`, bimestral `https://www.asaas.com/c/eyw4qqd2859mawza`, pontual `https://www.asaas.com/c/p3roqnn1bx733dlq`), o WhatsApp do Grande Banquete (`https://wa.me/17981010555`), as redes sociais (Instagram, YouTube, Facebook, Spotify) e o mapa do Google com o endereço da igreja. Links externos DEVM (MUST) abrir em nova aba com `rel="noopener"`.

#### Scenario: Contribuir para o templo
- **WHEN** o usuário clica em "PROSSEGUIR" no cartão MENSAL da página TEMPLO
- **THEN** uma nova aba abre em `https://www.asaas.com/c/3m32r7l2p3la45jh`

#### Scenario: Contatar o Grande Banquete
- **WHEN** o usuário clica no link de WhatsApp da página GRANDE BANQUETE
- **THEN** uma nova aba abre no WhatsApp com o número 17981010555

### Requirement: SEO e metadados por página

Cada página DEVE (MUST) ter `<title>`, `<meta name="description">`, URL canônica, Open Graph (og:title, og:description, og:image, og:type) e o idioma `lang="pt-BR"`. O site DEVE (MUST) incluir `sitemap.xml`, `robots.txt`, `favicon.svg` e, na HOME, o schema.org JSON-LD `Church` com `address`, `telephone` e `email`.

#### Scenario: Inspecionar metadados da HOME
- **WHEN** o usuário inspeciona o `<head>` da página inicial
- **THEN** ele encontra title, description, canônica, Open Graph e o JSON-LD `Church` com os dados de contato

#### Scenario: Consultar o sitemap
- **WHEN** um crawler acessa `/sitemap.xml`
- **THEN** as 10 URLs canônicas do site são listadas

### Requirement: Acessibilidade e responsividade

O site DEVE (MUST) ser mobile-first e acessível: navegação por teclado, contraste mínimo 4.5:1, `prefers-reduced-motion` respeitado, skip-link para conteúdo principal, imagens com atributo `alt` e lazy-loading. Layout DEVE (MUST) se adaptar a telas de 320px a desktops.

#### Scenario: Navegar por teclado
- **WHEN** o usuário usa Tab no site
- **THEN** o foco é visível e um link "Pular para o conteúdo" aparece

#### Scenario: Visualizar em telas pequenas
- **WHEN** o site é aberto em uma tela de 320px de largura
- **THEN** não há rolagem horizontal e o conteúdo permanece legível

### Requirement: Design Vitral contemporâneo

O site DEVE (MUST) aplicar o design system "Vitral contemporâneo": paleta com degradê âmbar/terracota e azul-marinho profundo, destaques dourados, tipografia Playfair Display para títulos e Inter para o corpo, botões em formato pill e cartões com cantos arredondados. O design system DEVE (MUST) estar centralizado em tokens CSS (`css/tokens.css`).

#### Scenario: Conferir tokens de cor
- **WHEN** o usuário inspeciona `css/tokens.css`
- **THEN** encontra as variáveis de cor do degradê, azul-marinho, dourado e os tokens de tipografia

#### Scenario: Renderizar um botão de CTA
- **WHEN** um botão primário é renderizado
- **THEN** ele usa o formato pill com fundo em gradiente e contraste adequado
