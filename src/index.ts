import type { EslintConfig } from './types'

import antfu from '@antfu/eslint-config'
import { phaicomConfig, tailwind } from './configs'

const eslintConfig: EslintConfig = ({ phaicom: enablePhaicom = true, tailwind: enableTailwind = false, ...options }, ...configs) => {
  if (enableTailwind) {
    configs.push(tailwind())
  }

  if (enablePhaicom) {
    configs.push(phaicomConfig.base)
    if (options.vue) {
      configs.push(phaicomConfig.vue)
    }
    options.unicorn = true
  }

  return antfu(options, ...configs)
}

export default eslintConfig
