import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F7F9F9",
        black: "#242038",
        purple: "#6369D1",
        turquoise: "#61E1E0",
        pink: "#E36397",
        lightGrey: "#D8D7DB",
        grey: "#7C7988",
        red: "#D64045",
        test: "#aabbcc",
      },
      fontFamily: {
        jost: ["var(--font-jost)"],
        noto: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
