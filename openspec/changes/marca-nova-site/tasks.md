# Tasks — Identidade "Marca Nova" no site inteiro

## 1. Tokens e tipografia

- [ ] 1.1 Tornar a paleta Marca Nova o padrão em `css/tokens.css` (petróleo `#005f6b`, petróleo-deep `#00434d`, sálvia `#94a69a`, sálvia claro `#e9ede9`, quase-preto `#1f2421`, cinza `#5b6b63`, borda `#d7ded9`; gradientes `--grad-marca` e `--grad-banner`)
- [ ] 1.2 Definir `--font-serif` e `--font-sans` = Montserrat; preservar as gemas (`--safira/esmeralda/ambar/rubi`) para a tira
- [ ] 1.3 Remover tokens órfãos de café e vitral não referenciados após a re-tinta

## 2. Estilos padrão (`css/estilo.css`)

- [ ] 2.1 Re-tintar header, nav e dropdown para a Marca Nova (transparente branco, `--border-nova`, ativo em petróleo)
- [ ] 2.2 Re-tintar `.page-banner` (`--grad-banner`) e eyebrow do banner
- [ ] 2.3 Re-tintar seções (`--sage-claro`, `--grad-banner`), labels e leads
- [ ] 2.4 Re-tintar cards, feature-list, FAQ, contact-item, tabela e botões (petróleo/off-black)
- [ ] 2.5 Substituir o bloco `body.home` (café) pela re-tinta Marca Nova no hero e componentes
- [ ] 2.6 Restaurar a tira de 4 cores em `.site-footer::before`; footer base `--grad-banner`
- [ ] 2.7 Excluir `css/marca-nova.css` após dobrar o conteúdo

## 3. HTML (8 páginas)

- [ ] 3.1 Trocar a fonte do `index.html` para Montserrat (remover Bree/Kalam/Archivo)
- [ ] 3.2 Trocar a fonte das subpáginas e `404.html` para Montserrat (remover Inter/Playfair)
- [ ] 3.3 Remover de `quem-somos.html` o `<link rel="stylesheet" href="css/marca-nova.css">` e `class="marca-nova"`
- [ ] 3.4 Preservar verbatim conteúdo, dados institucionais e canais

## 4. Verificação e publicação

- [ ] 4.1 Rodar o detector mecânico (`node /root/.opencode/skills/impeccable/scripts/detect.mjs --json <página>`) nas 8 páginas e corrigir achados
- [ ] 4.2 Conferência visual no browser (desktop + mobile 320px): HOME, subpágina com tabela, subpágina com seção escura e 404
- [ ] 4.3 Validar contraste AA nos pares críticos (branco/petróleo, `--sage-lighter`/`--grad-banner`)

## 5. Documentação e specs

- [ ] 5.1 Atualizar `DESIGN.md` para o mundo único "Marca Nova"
- [ ] 5.2 Atualizar `PRODUCT.md` e `AGENTS.md` (mundo visual atual e fontes)
- [ ] 5.3 Sync da spec `marca-nova` para `openspec/specs/` e arquivamento das specs `design-cafe-da-rua` e `design-vitral-arquitetonico`
- [ ] 5.4 Commit e push na `homologacao`; archive do change