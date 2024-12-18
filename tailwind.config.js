const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {},
    darkMode: "class",
    screens: {
      'sm': '640px',
      'md': '853px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      slate: colors.slate,
      gray: colors.gray,
      stone: colors.stone,
      green: colors.green,
      indigo: colors.indigo,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      sky: colors.sky,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.amber,
      white: colors.white,
      neutral: {
        DEFAULT: "rgba(var(--color-neutral), <alpha-value>)",
        50: "rgba(var(--color-neutral-50), <alpha-value>)",
        100: "rgba(var(--color-neutral-100), <alpha-value>)",
        200: "rgba(var(--color-neutral-200), <alpha-value>)",
        300: "rgba(var(--color-neutral-300), <alpha-value>)",
        400: "rgba(var(--color-neutral-400), <alpha-value>)",
        500: "rgba(var(--color-neutral-500), <alpha-value>)",
        600: "rgba(var(--color-neutral-600), <alpha-value>)",
        700: "rgba(var(--color-neutral-700), <alpha-value>)",
        800: "rgba(var(--color-neutral-800), <alpha-value>)",
        900: "rgba(var(--color-neutral-900), <alpha-value>)",
      },
      primary: {
        50: "rgba(var(--color-primary-50), <alpha-value>)",
        100: "rgba(var(--color-primary-100), <alpha-value>)",
        200: "rgba(var(--color-primary-200), <alpha-value>)",
        300: "rgba(var(--color-primary-300), <alpha-value>)",
        400: "rgba(var(--color-primary-400), <alpha-value>)",
        500: "rgba(var(--color-primary-500), <alpha-value>)",
        600: "rgba(var(--color-primary-600), <alpha-value>)",
        700: "rgba(var(--color-primary-700), <alpha-value>)",
        800: "rgba(var(--color-primary-800), <alpha-value>)",
        900: "rgba(var(--color-primary-900), <alpha-value>)",
      },
      secondary: {
        50: "rgba(var(--color-secondary-50), <alpha-value>)",
        100: "rgba(var(--color-secondary-100), <alpha-value>)",
        200: "rgba(var(--color-secondary-200), <alpha-value>)",
        300: "rgba(var(--color-secondary-300), <alpha-value>)",
        400: "rgba(var(--color-secondary-400), <alpha-value>)",
        500: "rgba(var(--color-secondary-500), <alpha-value>)",
        600: "rgba(var(--color-secondary-600), <alpha-value>)",
        700: "rgba(var(--color-secondary-700), <alpha-value>)",
        800: "rgba(var(--color-secondary-800), <alpha-value>)",
        900: "rgba(var(--color-secondary-900), <alpha-value>)",
      },
    },
  },
  plugins: [],
}
