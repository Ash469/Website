/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm dark backgrounds
        bg: {
          DEFAULT: '#0C0A08',
          surface: '#141210',
          elevated: '#1E1A16',
          card: '#181410',
        },
        // Border system
        border: {
          subtle: '#2A2420',
          warm: '#3A3028',
          accent: 'rgba(232, 98, 42, 0.3)',
        },
        // Orange accent system
        orange: {
          50: '#FFF4EE',
          100: '#FFE4D1',
          200: '#FFC4A0',
          300: '#FF9A6A',
          400: '#F28C54',
          500: '#E8622A',
          600: '#D4501E',
          700: '#B03D14',
          800: '#8C2E0F',
          900: '#6B200A',
        },
        // Gold accent
        gold: {
          light: '#E8C878',
          DEFAULT: '#D4A853',
          dark: '#B88A3A',
        },
        // Text system
        text: {
          primary: '#F5F0E8',
          secondary: '#9A8878',
          muted: '#6B5A4E',
          accent: '#E8622A',
        },
        // Semantic
        success: '#4ADE80',
        warning: '#FCD34D',
      },
      fontFamily: {
        display: ['Exo 2', 'sans-serif'],
        heading: ['Exo 2', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.4rem, 4vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.8rem, 3vw, 2.8rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['clamp(1.6rem, 2.5vw, 2.2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'card-title': ['1.2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.05rem', { lineHeight: '1.7' }],
        'body-md': ['0.95rem', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'mono-sm': ['0.78rem', { lineHeight: '1.5' }],
        'mono-xs': ['0.72rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.25rem',
        'xl4': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.6)',
        'orange-glow': '0 0 30px rgba(232,98,42,0.15)',
        'orange-sm': '0 0 12px rgba(232,98,42,0.1)',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #E8622A, #D4A853)',
        'warm-surface': 'linear-gradient(135deg, #1E1A16, #141210)',
        'subtle-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(74, 222, 128, 0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(74, 222, 128, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
