# Comunidade Vitral

Novo site estático para substituir o site atual em Wix.
Conteúdo preservado, design moderno, deploy em GitHub Pages.

## Estrutura

```
/opt/data/projetos/comunidadevitral/
├── README.md
├── AGENTS.md
├── openspec/
│   ├── 001-scope.md
│   ├── 002-content-map.md
│   ├── 003-design-system.md
│   └── 004-deploy.md
├── content/
│   ├── sobre.md
│   ├── mensagens.md
│   ├── encontros.md
│   ├── voluntariado.md
│   ├── como-contribuir.md
│   └── visite-nos.md
├── raw/                         # HTML bruto extraído do Wix
├── src/                         # versão inicial do scaffold
├── index.html                   # site publicado
├── styles.css                   # estilo publicado
├── .nojekyll                    # desativa Jekyll no Pages
└── scripts/
```

## Como trabalhar aqui

- Todo trabalho em `homologacao`
- Deploy só em `main` quando o usuário pedir
- Decisões importantes viram arquivo em `openspec/`
- Nada de conteúdo sensível sem marcação

## Status

- [x] Estrutura de pastas criada
- [x] Conteúdo extraído do Wix
- [x] Protótipo estático publicado
- [x] GitHub Pages ativo
- [x] Repo: `ismaelmmachado/comunidadevitral`
- [ ] Revisão de conteúdo
- [ ] Ajustes visuais finais
- [ ] Deploy em `main`

## Links

- Repo: https://github.com/ismaelmmachado/comunidadevitral
- Site: https://ismaelmmachado.github.io/comunidadevitral/
