import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#21b6ff",
          dark: "#0a0a0a",
          darker: "#090909",
          black: "#050505",
          olive: "#AEC556",
          navy: "#002c8f",
        },
      },
      fontFamily: {
        heading: ["Rajdhani", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 30px rgba(33,182,255,0.3)",
        "glow-lg": "0 20px 60px rgba(33,182,255,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
