import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          blue: "#103853",
          white: "#FFFFFF",
          grey: "#E2DEDC",
          black: "#100F1B",
        },
        secondary: {
          blue: "#42AFF2",
          grey: "#9CA2A5",
        },
      },
      fontFamily: {
        sans: ["var(--font-futura)"],
      },
    },
  },
  plugins: [],
};
export default config;
