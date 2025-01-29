import type antfu from '@antfu/eslint-config'
import type { OptionsConfig as AntfuOptionsConfig, TypedFlatConfigItem as AntfuTypedFlatConfigItem } from '@antfu/eslint-config'

type EslintConfigReturn = ReturnType<typeof antfu>
type UserConfigParams = Parameters<typeof antfu>[1]

export interface OptionsConfig extends AntfuOptionsConfig, AntfuTypedFlatConfigItem {
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
}

export type EslintConfig = (options: OptionsConfig, ...configs: UserConfigParams[]) =>
EslintConfigReturn
