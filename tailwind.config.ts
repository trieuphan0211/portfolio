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
        green: "#64ffda",
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-slate": "#ccd6f6",
      },
      boxShadow: {
        button: "4px 4px 0px 0px #64ffda",
      },
    },
  },
  plugins: [],
};
export default config;
