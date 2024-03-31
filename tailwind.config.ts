import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        backdrop: "#F6F9F9",
        brand: {
          teal: "#D3DBDA",
          dark: "#020A05",
          indigo: "#410DEB",
          lime: "#79E003",
        },
      },
    },
  },
};

export default config;
