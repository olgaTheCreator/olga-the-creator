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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marquee2: "marquee2 40s linear infinite",
      },
      transitionProperty: {
        all_no_border:
          "color, background-color, text-decoration-color, fill, stroke, opacity, border-y, border-t, box-shadow, transform, filter, backdrop-filter, padding, height, width, font",
      },
    },
  },
  plugins: [],
};
