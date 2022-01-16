// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  darkMode: "media",
  theme: {
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
