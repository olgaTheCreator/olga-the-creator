/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vibur: ["var(--font-vibur)"],
        roboto: ["var(--font-roboto-mono)"],
      },
      colors: {
        yellow_bright: "#F9E63D",
        yellow_light: "#FAED77",
        red_bright: "#F90000",
        red_light: "#fa4c4c",
        blue_bright: "#3D9FF9",
        blue_light: "#77bbfa",
        green_bright: "#00d415",
        green_light: "#4ce05b",
      },
    },
  },
  plugins: [],
};
