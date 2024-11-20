/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'menlo': ['Menlo Regular', 'monospace'],
      },
      colors: {
        // Background
        synthwaveNachtBlau: '#190E32',

        // Accent colors
        deepPink: '#FF1493',
        blueViolet: '#8A2BE2',
        aquaBlue: '#38EFF5',
        navyBlue: '#00008B',
        deepPurple: '#800080',
        greenMint: '#64ffda',
        powerGray: '#D7FCD4'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.68,-0.6,0.32,1.6)',
        'custom-scale': 'cubic-bezier(0.22,1,0.36,1)'
      },
      animation: {
        tilt: 'tilt 2s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};