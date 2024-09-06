import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...defaultTheme.colors,
        rose: "#FF7575",
        "dark-rose": "#fa5c5c",
        gray: "#ADB7BE",
        "dark-gray": "#181818",
        dark: "#232A3C",
        medium: "#293245",
      },

      boxShadow: {
        custom:
          "0px 4px 10px rgba(255, 255, 255, 0.4), 0px -4px 10px rgba(255, 255, 255, 0.4), 4px 0px 10px rgba(255, 255, 255, 0.4), -4px 0px 10px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
