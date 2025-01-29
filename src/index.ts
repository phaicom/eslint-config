import type { EslintConfig } from './types'

import antfu from '@antfu/eslint-config'
import pluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import { baseConfig, vueConfig } from './base'

const eslintConfig: EslintConfig = ({ tailwind = false, ...options }, ...configs) => {
  if (tailwind) {
    const files: string[] = ['**/*.{js,jsx,ts,tsx,vue,astro,svelte}']

    const extensionMap = {
      react: ['jsx', options.typescript && 'tsx'],
      solid: ['jsx', options.typescript && 'tsx'],
      vue: ['vue'],
      astro: ['astro'],
      svelte: ['svelte'],
    }

    for (const [framework, extensions] of Object.entries(extensionMap)) {
      if (framework in options && options[framework as keyof typeof options]) {
        files.push(...extensions.filter(Boolean).map((ext) => `**/*.${ext}`))
      }
    }

    configs.unshift({
      name: 'phaicom/tailwind',
      files,
      plugins: {
        'readable-tailwind': pluginReadableTailwind,
      },
      rules: {
        // enable all recommended rules to warn
        ...pluginReadableTailwind.configs.warning.rules,
        // enable all recommended rules to error
        ...pluginReadableTailwind.configs.error.rules,
      },
    })
  }

  const userConfigs = [
    baseConfig,
    ...(options.vue ? [vueConfig] : []),
  ]

  options.unicorn = true
  return antfu(options, ...userConfigs, ...configs)
}

export default eslintConfig
