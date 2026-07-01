# AGENTS

## AI Patterns

- A fonte canônica publicada do tema é `themes/devbutter-dark.json`.
- Mudanças visuais devem preservar a identidade DevButter: verde `#00D26A` e rosa `#FF4FA3` como cores principais, com `#70E1EC` e `#28B1BE` disponíveis como acentos secundários.
- Otimizações de performance devem priorizar reduzir granularidade de `tokenColors` antes de mexer em background, branding ou paleta principal.
- `semanticTokenColors` deve continuar cobrindo a maior parte da semântica; `tokenColors` deve ficar focado em linguagens e casos realmente distintivos.
- Antes de introduzir novas regras específicas por linguagem, verificar se uma regra genérica ou semântica já resolve o caso.
- Papéis cromáticos devem ser estáveis: tipos e estruturas em rosa; variáveis, parâmetros e strings em verde; funções, propriedades e escapes em ciano/teal; números e erros em vermelho; texto inativo e bordas estruturais em neutros escuros.
- Bordas estruturais do workbench não devem usar verde neon por padrão; reservar acentos fortes para foco, seleção ativa e feedback importante.
- Ícones de interface e símbolos do workbench devem priorizar rosa, mas podem receber ciano/teal em contextos utilitários ou informativos quando isso melhorar a leitura visual.
- Ciano e teal podem aparecer como acentos secundários elegantes, especialmente para estados informativos, modificações e utilidades, sem substituir o protagonismo de verde e rosa.
- Line numbers e estados auxiliares devem ser legíveis, mas não competir com o conteúdo principal do editor.
