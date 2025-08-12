import type { EslintConfig, OptionsConfig } from './types'

import antfu from '@antfu/eslint-config'
import { phaicom, tailwind } from './configs'

const eslintConfig: EslintConfig = (options: OptionsConfig, ...configs) => {
  const {
    phaicom: enablePhaicom = true,
    tailwind: enableTailwind = false,
    vue: enableVue,
    rules: customRules = {},
  } = options

  if (enableTailwind) {
    configs.push(tailwind())
  }

  if (enablePhaicom) {
    options.unicorn = true
    configs.push(phaicom.base)
    if (enableVue) {
      configs.push(phaicom.vue)
    }
  }

  // Add custom rules after applied phaicom rules
  configs.push({ rules: customRules })
  const { rules, ...restOptions } = options

  return antfu(restOptions, ...configs)
}

export default eslintConfig
