import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
         colors: {
            black: "#020202",
            white: "#fafafa",
            lightBlue: "#D4D8FF",
            purple: "#573BE9",
            pink: "#FFDBCF",
            grey: "rgba(255, 255, 255, 0.14)",
            inputBg: "#F0F0F0",
            grad: "linear-gradient(153deg, #FEE4E5 7.77%, #E5FFD9 74.58%)",
         },
         boxShadow: {
            btnShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
         },
         screens: {
            md: "500px",
            lg: "960px",
            xl: "1440px",
         },
      },
   },
   plugins: [],
};
export default config;
