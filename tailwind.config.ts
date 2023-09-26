import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)",
        "gradient-primary":
          "linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);",
        "gradient-middlefooter":
          "linear-gradient(135deg,#7d4dbc 12%,#5e4282 13%,#8460af 44%,#c594ff 50%,#2a1141 90%,#3c195c 97%)",
        "gradient-bgmiddlefooter":
          "linear-gradient(#091a34,rgba(9,26,52,0)),url(https://global-uploads.webflow.com/6418f5b…/6498eac…_Ellipse%20blur.webp)",
        "gradient-titleheaderfooter":
          "linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)",
        "gradient-footerIntro":
          "linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);",
      },

      maxWidth: {
        container: "1440px",
        contentContainer: "1260px",
        containerSmall: "1024px",
        containerxs: "768px",
      },

      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },

      colors: {
        textGray: "#9696a5",
        textPurple: "#a157f6",
        textPurpleBorder: "#b982f8",
        textPurpleHover: "#DFCCFB ",
        textBlue: "#006dfa",
        textGreen: "#16d982",
        textYellow: "#f5b218",
        textBlack: "#081934",
        textWhite: "#fff",
        bgBlack: "#0c131f",
        bgGray: "#edf5ff",
        bgPurple: "#ac52ff",
        bgPurplePower: "#933ff4",
        bgDark: "rgba(24,33,50,0.4)",
      },

      boxShadow: {
        white: "0 3px 2px rgba(20,45,82,.01)",
        purple: "0 4px 24px rgba(172,82,255,.7)",
        boxheaderfooter: "inset -1px -1px #3c195c, inset 1px 1px #7d4dbc",
      },

      gridTemplateRows: {
        auto: "auto",
      },

      gridTemplateColumns: {
        auto: "auto auto 1fr",
      },

      animation: {
        marquee: "marquee 10s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
