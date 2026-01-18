import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  shims: false,
  dts: true,
  clean: true,
  format: ['esm'],
})
