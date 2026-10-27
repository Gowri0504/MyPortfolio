/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',
          light: '#c4b5fd',
          dark: '#6d28d9',
        },
        secondary: {
          DEFAULT: '#0ea5e9',
          light: '#7dd3fc',
        },
        accent: {
          DEFAULT: '#d946ef',
          light: '#f0abfc',
        },
        mint: {
          DEFAULT: '#34d399',
          light: '#6ee7b7',
        },
        dark: {
          DEFAULT: '#070b18',
          lighter: '#0f172a',
          light: '#1e293b',
          card: '#111a30',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 30px rgba(14, 165, 233, 0.35)',
        soft: '0 20px 60px -20px rgba(2, 6, 23, 0.8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'aurora': 'aurora 18s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'beam': 'beam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.12)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.96)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        beam: {
          '0%, 100%': { opacity: '0.25', transform: 'translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
