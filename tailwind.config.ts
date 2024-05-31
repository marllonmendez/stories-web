import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        purple: '#7B68EE',
        purpleDark: '#520AD1',
        yellow: '#FFD700',
        yellowDark: '#FFA500',
        light: '#F4F4F4',
        dark: '#05041B',
        darkSecondary: '#131429',
      },
      screens: {
        // xlz: { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        xs: { max: '479px' },
      },
    },
  },
  plugins: [],
}
export default config
