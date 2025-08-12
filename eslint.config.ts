import configs from './src'

export default configs({
  tailwind: true,
  vue: true,
  formatters: {
    css: true,
    html: true,
  },
  rules: {
    'better-tailwindcss/no-unregistered-classes': 'error',
  },
})
