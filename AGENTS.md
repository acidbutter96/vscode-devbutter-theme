# AGENTS

## AI Patterns

- A fonte canônica publicada do tema é `themes/devbutter-dark.json`.
- Mudanças visuais devem preservar a identidade DevButter: verde `#00D26A`, rosa `#FF4FA3`, ciano `#70E1EC`, fundo escuro principal `#141628` e apoio `#0F1115`.
- Otimizações de performance devem priorizar reduzir granularidade de `tokenColors` antes de mexer em background, branding ou paleta principal.
- `semanticTokenColors` deve continuar cobrindo a maior parte da semântica; `tokenColors` deve ficar focado em linguagens e casos realmente distintivos.
- Antes de introduzir novas regras específicas por linguagem, verificar se uma regra genérica ou semântica já resolve o caso.
- Papéis cromáticos devem ser estáveis: tipos e estruturas em rosa, funções e propriedades em ciano, strings em verde, números e erros em vermelho, texto inativo e bordas estruturais em neutros escuros.
- Bordas estruturais do workbench não devem usar verde neon por padrão; reservar acentos fortes para foco, seleção ativa e feedback importante.
- Ícones de interface e símbolos do workbench não devem usar verde nem ciano; preferir rosa para manter a identidade principal do tema.
