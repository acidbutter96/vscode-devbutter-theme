const fs = require("fs");
const path = require("path");

const files = ["package.json", path.join("themes", "devbutter-dark.json")];

for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    JSON.parse(fs.readFileSync(fullPath, "utf8"));
    console.log(`✓ ${file} is valid JSON`);
}

const pkg = require(path.join(process.cwd(), "package.json"));
const themes = pkg?.contributes?.themes ?? [];
if (!themes.length)
    throw new Error("package.json must contribute at least one theme.");

for (const theme of themes) {
    if (!theme.label || !theme.uiTheme || !theme.path) {
        throw new Error(
            "Each contributed theme needs label, uiTheme and path.",
        );
    }
    const themePath = path.join(process.cwd(), theme.path);
    if (!fs.existsSync(themePath)) {
        throw new Error(`Theme file not found: ${theme.path}`);
    }
}

console.log("✓ VS Code theme contribution looks valid");
