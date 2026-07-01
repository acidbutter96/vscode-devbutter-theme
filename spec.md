# Spec

## Objective

Manter o tema DevButter visualmente consistente com a identidade atual, reduzindo custo de carregamento no VS Code por meio de simplificação de regras de tokenização.

## Constraints

- Manter a paleta principal e a identidade visual.
- Não alterar o background nem a estratégia de imagem externa.
- Preferir redução de `tokenColors` redundantes.
- Preservar cobertura semântica com `semanticTokenColors`.
- Tornar os papéis de cor consistentes entre `tokenColors` e `semanticTokenColors`.
- Evitar variáveis em branco no editor principal.

## Current approach

- Tratar `themes/devbutter-dark.json` como fonte efetiva do tema publicado.
- Remover regras específicas de Python que duplicam regras genéricas ou semânticas.
- Manter regras específicas apenas quando diferenciam claramente a leitura do código.
- Reduzir variantes semânticas redundantes como `declaration`, `static` e `defaultLibrary` quando repetem a cor base.
- Usar bordas estruturais neutras e acentos fortes apenas nos elementos realmente interativos.
- Concentrar a leitura do código no eixo verde/rosa, mas permitir ciano e teal como acentos secundários quando melhorarem a hierarquia visual.
- Garantir que line numbers, seleção e destaques auxiliares sustentem a leitura sem introduzir uma terceira família cromática dominante.
- Distribuir ciano/teal também na sintaxe principal, não só em utilidades do workbench, para evitar que a paleta pareça colapsada em verde/rosa.
