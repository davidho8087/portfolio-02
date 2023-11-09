import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px"
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        serif: ['var(--font-Inter)', 'sans-serif'],
        sans: ['var(--font-MontSerrat)', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)"
      },
      colors: {
        // assuming these are your dark theme colors
        dark: {
          bodyColor: "#0A192F",
          textGreen: "#FFA64D",
          textLight: "#CCD6F6",
          textDark: "#8892B0",
          hoverColor: "rgba(100,255,218,0.1)",
        },
        // add your light theme colors here
        light: {
          bodyColor: "#FFFFFF", // Example: a light background
          textGreen: '#FFA64D', // Example: a darker green for visibility on light bg
          textLight: "#2F4F4F", // Example: a dark slate gray for light theme text
          textDark: "#696969", // Example: dim gray for secondary text
          hoverColor: "rgba(100,255,218,0.3)", // Example: more opacity for light theme
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // enable the 'class' strategy for dark mode
}
export default config
