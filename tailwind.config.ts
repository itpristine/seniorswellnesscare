import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFCF7',
          100: '#F7F4E7',
          200: '#EAE5D8',
          300: '#D6CEBE',
        },
        midnight: {
          DEFAULT: '#0D1B2A',
          light: '#1A2E40',
          dark: '#08111B',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: {
        'sans-body': ['var(--font-ibm-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif-heading': ['var(--font-ibm-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-ibm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-ibm-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'clinical': '0 4px 20px -2px rgba(13, 27, 42, 0.06), 0 2px 6px -1px rgba(13, 27, 42, 0.04)',
        'elevated': '0 20px 40px -15px rgba(13, 27, 42, 0.08), 0 0 1px 1px rgba(13, 27, 42, 0.03)',
        'teal-glow': '0 10px 25px -5px rgba(13, 148, 136, 0.25)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
