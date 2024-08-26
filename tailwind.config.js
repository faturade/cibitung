module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru-bg': '#155e75',
        'bg-biru': '#0891b2'
      },
    },
  },
  plugins: [require("daisyui")],
}
