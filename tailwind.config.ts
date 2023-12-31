import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5em, 17.5rem) minmax(17.5rem, 1fr) minmax(0, 15rem)',
      },
      maxWidth: {
        app: '700px',
      },
    },
  },
  plugins: [],
}
export default config
