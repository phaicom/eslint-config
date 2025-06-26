# `@phaicom/eslint-config`

Personal ESLint configuration preset.

✨ Features:
- Built on [antfu/eslint-config](https://github.com/antfu/eslint-config)
- Enforces curly brackets for all blocks
- Custom rule sets for unicorn, stylistic, and Vue
- Tailwind support with [eslint-plugin-readable-tailwind](https://github.com/schoero/eslint-plugin-readable-tailwind)

## Usage

1. Install the package:
```bash
pnpm i -D @phaicom/eslint-config
```

2. Create `eslint.config.mjs` in your project root:
```js
// eslint.config.mjs
import configs from '@phaicom/eslint-config'

export default configs()
```

3. Configure VS Code:
  - Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - Add the following settings to `.vscode/settings.json`:

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## Disable base rules
You can disable the base rules by setting `phaicom: false`:

```js
// eslint.config.mjs
import configs from '@phaicom/eslint-config'

export default configs({
  phaicom: false,
})
```

## Tailwind Support
To enable Tailwind support and enforce consistent class ordering:

1. Install the required plugin:
```bash
pnpm i -D eslint-plugin-better-tailwindcss
```

2. Enable Tailwind support in your config:
```js
// eslint.config.mjs
import configs from '@phaicom/eslint-config'

export default configs({
  tailwind: true,
})
```

This will enforce consistent ordering of Tailwind classes for better readability.
## Additional Configurations

For other configuration options like TypeScript, Vue, React, Prettier, and more, please refer to [antfu/eslint-config](https://github.com/antfu/eslint-config).
