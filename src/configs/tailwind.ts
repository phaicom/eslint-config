import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { ensurePackages, interopDefault } from '@antfu/eslint-config'

export async function tailwind(): Promise<TypedFlatConfigItem[]> {
  await ensurePackages([
    'eslint-plugin-readable-tailwind',
  ])

  const [
    pluginTailwind,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-readable-tailwind')),
  ] as const)

  return [
    {
      name: 'phaicom/tailwind',
      plugins: {
        'readable-tailwind': pluginTailwind,
      },
      rules: {
        // enable all recommended rules to error
        ...pluginTailwind.configs.error.rules,
      },
    },
  ]
}
