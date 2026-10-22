/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FDF9F8', // Romantic rose-tinted ivory matching the blush logo
          light: '#FFFFFF',
          warm: '#FAF4F2',
          cream: '#F6ECE8',
          dark: '#EFE2DC'
        },
        champagne: {
          light: '#FAF2ED',
          DEFAULT: '#F3E5DE',
          dark: '#E5D1C7',
          deep: '#D1B8AC'
        },
        blush: {
          light: '#FAF1EF',
          DEFAULT: '#F6E5E2',
          dark: '#E7CBC6'
        },
        rose: {
          light: '#E2A8AB',
          DEFAULT: '#BD777B',
          dark: '#93484D'
        },
        sage: {
          light: '#C7D2C0',
          DEFAULT: '#A8B5A0',
          dark: '#85937C'
        },
        gold: {
          light: '#E2C39B',
          DEFAULT: '#C39A68',
          dark: '#9B7443',
          metallic: '#BA8E57'
        },
        charcoal: {
          light: '#6E6761',
          DEFAULT: '#38332F',
          dark: '#24201D',
          muted: '#8C827A'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(56, 51, 47, 0.07)',
        'luxury-hover': '0 30px 60px -20px rgba(56, 51, 47, 0.14)',
        'subtle': '0 4px 20px rgba(189, 119, 123, 0.08)',
        'gold-glow': '0 0 25px rgba(195, 154, 104, 0.25)',
      },
      letterSpacing: {
        'luxury': '0.2em',
        'loose-luxury': '0.3em',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
