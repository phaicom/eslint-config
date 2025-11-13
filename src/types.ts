import type antfu from '@antfu/eslint-config'
import type { OptionsConfig as AntfuOptionsConfig, TypedFlatConfigItem as AntfuTypedFlatConfigItem } from '@antfu/eslint-config'

type EslintConfigReturn = ReturnType<typeof antfu>
type UserConfigParams = Parameters<typeof antfu>[1]

export interface OptionsConfig extends Omit<AntfuOptionsConfig, 'ignores'>, Omit<AntfuTypedFlatConfigItem, 'ignores'> {
  /**
   * Used phaicom's base rules:
   * @default true
   */
  phaicom?: boolean
  /**
   * Used recommended rules:
   * @see https://github.com/schoero/eslint-plugin-readable-tailwind
   * @default false
   */
  tailwind?: boolean
  ignores?: string[]
}

export type EslintConfig = (options: OptionsConfig, ...configs: UserConfigParams[]) =>
EslintConfigReturn
