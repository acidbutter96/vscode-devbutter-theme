# DevButter VS Code Theme

A dark Visual Studio Code theme inspired by the DevButter identity: science, software, AI, automation and clean engineering.

## Palette

| Token           | Hex       |
| --------------- | --------- |
| DevButter Green | `#00D26A` |
| DevButter Pink  | `#FF4FA3` |
| Main Dark       | `#0F1115` |
| Background      | `#141628` |
| White           | `#FFFFFF` |

## Included theme

- `DevButter Dark`

The official VS Code theme contribution lives in:

```txt
themes/devbutter-dark.json
```

and is registered in:

```txt
package.json → contributes.themes
```

## Language and file coverage

The theme includes TextMate scopes and semantic token colors for:

- HTML / XML
- CSS / SCSS
- JavaScript / TypeScript
- JSX / TSX
- Python
- PHP
- Swift
- Markdown
- `.env`
- INI
- TOML
- YAML / YML
- JSON / JSONC
- Dockerfile
- Shell / Bash
- SQL
- Git-related files like `.gitignore`

Syntax examples are available in `examples/`.

## Background screen template

The previous DevButter background template is included in:

```txt
templates/background/
```

The template already uses the local illustration asset with the correct relative path in `templates/background/style.css`:

```css
background-image:
    radial-gradient(
        circle at 20% 20%,
        rgba(255, 79, 163, 0.2),
        transparent 32%
    ),
    radial-gradient(
        circle at 80% 20%,
        rgba(0, 210, 106, 0.18),
        transparent 30%
    ),
    linear-gradient(rgba(20, 22, 40, 0.82), rgba(20, 22, 40, 0.94)),
    url("../../assets/Illustration - composition 22.png");
```

For GitHub or Marketplace-facing Markdown previews, use:

```md
![DevButter Preview](assets/Illustration%20-%20composition%2022.png)
```

## Local development

Open this repo in VS Code and press `F5` to launch an Extension Development Host.

Then select:

```txt
Preferences: Color Theme → DevButter Dark
```

## Validate files

```bash
npm run validate
```

## Package as VSIX

```bash
npm install
npm run package
```

The generated `.vsix` will be created in `build/`.
