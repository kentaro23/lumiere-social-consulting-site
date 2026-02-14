import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#111111',
        accent: '#b08d57'
      },
      boxShadow: {
        soft: '0 15px 40px -20px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
