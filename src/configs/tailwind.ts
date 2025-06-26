import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { interopDefault } from '@antfu/eslint-config'

export async function tailwind(): Promise<TypedFlatConfigItem[]> {
  // Cannot specify version. Might have to write the function myself
  // or wait for the plugin to get stable.
  // await ensurePackages([
  //   'eslint-plugin-better-tailwindcss',
  // ])

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
        'better-tailwindcss/no-unregistered-classes': 'warn',
      },
    },
  ]
}
