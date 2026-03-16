import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0F1A',
          surface: '#111827',
          elevated: '#1F2937',
          muted: '#374151',
          border: '#1F2937',
          accent: '#D4850F',
          'accent-hover': '#B8740D',
          'accent-subtle': 'rgba(212,133,15,0.08)',
          text: '#F9FAFB',
          'text-muted': '#9CA3AF',
          light: '#F9FAFB',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
