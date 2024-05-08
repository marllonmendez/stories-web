import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      'font-title': '4.75rem',
      'font-title-hero': '2.2rem',
      'font-description': '1.2rem',
      'font-description-hero': '1.25rem',
      'font-topics': '1.25rem',
    },
    extend: {
      colors: {
        purple: '#520AD1',
        light: '#F4F4F4',
        gray: '#4E4B59',
        dark: '#01010c',
      },
    },
  },
  plugins: [],
}
export default config
