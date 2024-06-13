/** @type {import('tailwindcss').Config} */
const tailwind_theme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ['Ia Writer Mono', ...tailwind_theme.fontFamily.sans],
        mono: ['Ia Writer Mono', ...tailwind_theme.fontFamily.mono],
      },
    },
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false, // light and dark theme only 
    logs: false,
    styled: false  // disable daisyUI colors and design decisions
  }
}
