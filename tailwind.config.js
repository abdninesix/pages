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
      zIndex:{
        '1':'1',
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9',
        '10':'10',
        '11':'11',
        '12':'12',
        '13':'13',
        '14':'14',
        '15':'15',
        '16':'16'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-1' : 'bounce 1.25s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "mytheme" : "#dc2626"
      },
    },
  },
  plugins: [],
};