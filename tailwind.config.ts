import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      'font-title': '1.75rem',
      'font-title-hero': '2.2rem',
      'font-description': '1.2rem',
      'font-description-hero': '1.25rem',
    },
    extend: {
      colors: {
        'primary-purple': '#520AD1',
        'second-purple': '#820AD1',
        'primary-white': '#F4F4F4',
        'primary-gray': '#4E4B59',
        'second-gray': '#111',
      },
    },
  },
  plugins: [],
}
export default config
