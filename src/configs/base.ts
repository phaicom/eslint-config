import type { OptionsConfig } from '../types'

const base = {
  name: 'phaicom/base',
  rules: {
    'curly': ['error', 'all'],
    // style rule customizations
    'style/arrow-parens': ['error', 'always'],
    'style/function-call-spacing': ['error', 'never'],
    //  unicorn rule customizations
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
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
  },
} satisfies OptionsConfig

const phaicom = { base, vue }

export default phaicom
