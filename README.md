# Comunidade Vitral — Documentação do Projeto

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
├── src/                         # scaffold inicial
├── index.html                   # site publicado na raiz
├── styles.css                   # estilo publicado na raiz
├── .nojekyll                    # desativa Jekyll no Pages
└── scripts/
```

## Status

- [x] Estrutura de pastas criada
- [x] Conteúdo extraído do Wix
- [x] Protótipo estático publicado
- [x] GitHub Pages ativo
- [x] Repo: `ismaelmmachado/comunidadevitral`
- [x] Branch padrão de trabalho: `homologacao`
- [x] Deploy em `main` executado para avaliação
- [x] Caminhos de assets ajustados para subpath do Pages
- [ ] Revisão final de conteúdo
- [ ] Ajustes visuais finais
- [ ] Deploy definitivo

## Links

- Repo: https://github.com/ismaelmmachado/comunidadevitral
- Site: https://ismaelmmachado.github.io/comunidadevitral/

## Decisões tomadas

- Site 100% estático; sem backend/CMS por enquanto
- Toda alteração entra em `homologacao`
- Deploy só em `main` quando solicitado explicitamente
- Caminhos relativos para funcionar no subpath do Pages
- `.nojekyll` mantido para evitar processamento do Jekyll

## Problemas encontrados e resolvidos

- Pages serviu `README.md` renderizado antes de usar `index.html` → resolvido com `.nojekyll` + `index.html` na raiz
- Caminhos absolutos quebrados no Pages → resolvidos com caminhos relativos
- Ajustes locais não refletiam no Pages em alguns momentos → identificada divergência entre branch e configuração do Pages

## Problemas pendentes

- Telefone: link `tel:` continua mascarado no arquivo publicado; suspeita de sobrescrita externa/cache; precisa verificação manual no repositório/navegador
- Revisão de conteúdo em `content/` ainda não finalizada

## Próximos passos recomendados

1. Validar manualmente o site publicado e ajustar telefone se necessário
2. Revisar conteúdo em `content/`
3. Ajustar textos e layout conforme feedback
4. Aplicar deploy final em `main` quando aprovado
