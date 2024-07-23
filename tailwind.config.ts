import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        main: {
          50: "#FDFDFD",
          100: "#EBEEEF",
          200: "#CCD1D2",
          400: "#99A2A5",
          600: "#667479",
          800: "#242B33",
          1000: "#00171F",
        },
        darkBlue: "#003459",
        monYellow: "#F7DBA7",
        pinkRed: "#FF564F",
        greenLight: "#34C759",
        orangeShine: "#FF912C",
        blueSea: "#00A7E7",
      },
      fontSize: {
        h1: "2.875rem",
        h2: "2.25rem",
        h3: "1.75rem",
        h4: "1.5rem",
        textExtraBig: "1.25rem",
        textBig: "1rem",
        textMedium: "0.875rem",
        textSmall: "0.75rem",
      },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
