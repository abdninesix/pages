/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-1': 'bounce 2s linear infinite',
        'moving': 'translate 10s infinite',
      },
      keyframes: {
        translate: {
          '0%, 100%': { transform: 'translateX(0)' }, // Start and end at point A
          '50%': { transform: 'translateX(800px)' }, // Move to point B
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "mytheme": "#4f46e5"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};