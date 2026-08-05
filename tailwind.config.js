/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── Light mode surfaces ─────────────── */
        surface: {
          DEFAULT: '#FFFFFF',
          2: '#F4F3F8',
        },
        /* ── Dark mode surfaces (deep charcoal) ─ */
        dark: {
          DEFAULT: '#0A0A0F',
          panel:   '#111118',
          panel2:  '#16161F',
          border:  '#22222E',
        },
        /* ── Accent: electric indigo ─────────── */
        indigo: {
          400: '#7A8FCC',
          500: '#5B72BB',
          600: '#344885',
          700: '#263872',
        },
        /* ── Text ────────────────────────────── */
        ink: {
          DEFAULT: '#0D0D14',
          light:   '#EEEEF5',
        },
        muted: {
          DEFAULT: '#5C5C7A',
          light:   '#9898B4',
        },
        /* ── Borders ─────────────────────────── */
        edge: {
          DEFAULT: '#D8D7E8',
          dark:    '#22222E',
        },
      },
      fontFamily: {
        sans:    ['Inter',               'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter',         'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'dot-light': 'radial-gradient(circle, #C7C5DC 1px, transparent 1px)',
        'dot-dark':  'radial-gradient(circle, #22222E 1px, transparent 1px)',
      },
      boxShadow: {
        card:      '0 1px 8px 0 rgba(0,0,0,0.06), 0 4px 24px 0 rgba(0,0,0,0.04)',
        'card-hov':'0 4px 24px 0 rgba(52,72,133,0.14)',
        glow:      '0 0 32px 6px rgba(91,114,187,0.30)',
        cta:       '0 4px 20px 0 rgba(52,72,133,0.45)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
        slideOutRight: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(100%)' },
        },
        pingSlow: {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '70%':  { transform: 'scale(2.2)', opacity: '0'   },
          '100%': { transform: 'scale(2.2)', opacity: '0'   },
        },
      },
      animation: {
        marquee:       'marquee 32s linear infinite',
        'fade-up':     'fadeUp 0.65s ease forwards',
        'slide-in-r':  'slideInRight 0.35s cubic-bezier(0.32,0.72,0,1) forwards',
        'slide-out-r': 'slideOutRight 0.3s cubic-bezier(0.32,0.72,0,1) forwards',
        'ping-slow':   'pingSlow 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
