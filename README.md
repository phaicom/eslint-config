# `@phaicom/eslint-config`

phaicom's ESLint configuration.

- Based on [antfu/eslint-config](https://github.com/antfu/eslint-config).
- Enable all unicorn config.
- Forced to always use curly.
- Modified rules including unicorn, stylistic, Vue, etc.
- Integrated with [eslint-plugin-readable-tailwind](https://github.com/schoero/eslint-plugin-readable-tailwind).

## Usage with tailwind
Start by install **eslint-plugin-readable-tailwind**

```bash
pnpm install -D eslint-plugin-readable-tailwind@beta
```

And set the **tailwind** flag to true.

```js
import phaicom from '@phaicom/eslint-config'

export default phaicom({
  tailwind: true,
})
```
The rest of the config you can refer to https://github.com/antfu/eslint-config
