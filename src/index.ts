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

  const baseConfigs = []

  if (enableTailwind) {
    baseConfigs.push(tailwind())
  }

  if (enablePhaicom) {
    options.unicorn = true
    baseConfigs.push(phaicom.base)
    if (enableVue) {
      baseConfigs.push(phaicom.vue)
    }
  }

  // Add custom rules after applied phaicom rules
  const { rules, ...restOptions } = options

  return antfu(
    restOptions,
    ...baseConfigs,
    { rules: customRules },
    ...configs,
  )
}

export default eslintConfig
