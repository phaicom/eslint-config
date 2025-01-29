import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  shims: true,
  dts: true,
  minify: true,
  format: ['esm'],
})
