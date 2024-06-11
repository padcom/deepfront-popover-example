import { type Config } from 'tailwindcss'

export default {
  content: [
    './src/tailwind.css',
    './src/components/**/*.{css,vue}',
    './node_modules/@deepfront/**/dist/style.css',
  ],
} as Config
