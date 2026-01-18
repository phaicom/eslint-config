import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { ensurePackages, interopDefault } from '@antfu/eslint-config'

export async function tailwind(): Promise<TypedFlatConfigItem[]> {
  await ensurePackages([
    'eslint-plugin-better-tailwindcss',
  ])

  const [
    pluginTailwind,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-better-tailwindcss')),
  ] as const)

  return [
    {
      name: 'phaicom/tailwind',
      plugins: {
        'better-tailwindcss': pluginTailwind,
      },
      rules: {
        // enable all recommended rules to error
        ...pluginTailwind.configs['recommended-error'].rules,
        'better-tailwindcss/no-unknown-classes': 'warn',
      },
    },
  ]
}
