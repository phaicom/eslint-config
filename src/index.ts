import type { EslintConfig, OptionsConfig } from './types'

import antfu from '@antfu/eslint-config'
import { phaicom, tailwind } from './configs'

const eslintConfig: EslintConfig = (options: OptionsConfig, ...configs) => {
  const {
    phaicom: enablePhaicom = true,
    tailwind: enableTailwind = false,
  } = options

  if (enableTailwind) {
    configs.push(tailwind())
  }

  if (enablePhaicom) {
    options.unicorn = true
    configs.push(phaicom.base)
    if (options.vue) {
      configs.push(phaicom.vue)
    }
  }

  return antfu(options, ...configs)
}

export default eslintConfig
