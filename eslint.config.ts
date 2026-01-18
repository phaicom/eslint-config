import configs from './src'

export default configs({
  tailwind: true,
  vue: true,
  formatters: {
    css: true,
    html: true,
  },
}, {
  files: ['**/ui/**/*.ts', '**/ui/**/*.tsx', '**/tools/theme-provider.tsx'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
})
