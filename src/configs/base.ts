import type { OptionsConfig } from '../types'

const base = {
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
    // node customizations
    'node/prefer-global/process': 'off',
  },
} satisfies OptionsConfig

const vue = {
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

const phaicom = { base, vue }

export default phaicom
