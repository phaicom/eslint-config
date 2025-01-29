import type { OptionsConfig } from '../types'

export const baseConfig = {
  name: 'phaicom/base',
  rules: {
    'curly': ['error', 'all'],
    // style rule customizations
    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/quote-props': 'off',
    'style/function-call-spacing': ['error', 'never'],
    //  unicorn rule customizations
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
    // ignore composable/hook based filenames, LICENSE, and README
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [
          // This regex matches files that start with 'use' followed by an uppercase letter
          // and then any sequence of characters, ending with '.ts'. Useful for React hooks.
          String.raw`^use[A-Z].*\.ts$`,
          'LICENSE',
          'README',
          'CHANGELOG',
        ],
      },
    ],
    // jsonc rule customizations
    'jsonc/sort-keys': 'off',
    // node customizations
    'node/prefer-global/process': 'off',
  },
} satisfies OptionsConfig

export const vueConfig = {
  name: 'phaicom/vue',
  rules: {
    // vue rule customizations
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 10 },
      multiline: { max: 1 },
    }],
    'vue/multi-word-component-names': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
  },
} satisfies OptionsConfig
