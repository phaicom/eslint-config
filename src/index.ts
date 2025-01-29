import type { EslintConfig } from './types'

import antfu from '@antfu/eslint-config'
import { phaicom, tailwind } from './configs'

const eslintConfig: EslintConfig = ({ phaicom: enablePhaicom = true, tailwind: enableTailwind = false, ...options }, ...configs) => {
  if (enableTailwind) {
    configs.push(tailwind())
  }

  if (enablePhaicom) {
    configs.push(phaicom.base)
    if (options.vue) {
      configs.push(phaicom.vue)
    }
    options.unicorn = true
  }

  return antfu(options, ...configs)
}

export default eslintConfig
