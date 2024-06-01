import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|modal|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sky-gradient": 'linear-gradient(174deg, #36CFF1 0%, #0E7DCE 93%)',
        'maths-pattern': "url('/background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '88': '22rem',
        '178': '46rem',
      },
      maxWidth: {
        '100vw': '100vw',
        '90vw': '90vw',
      },
      height: {
        '46': '11.5rem',
        '120': '30rem',
      },
      animation: {  
        "fade-in-down-10": "fade-in-down-10 0.5s ease-in-out ",
        "fade-in-down-20": "fade-in-down-10 0.5s ease-in-out ",
        "fade-in-up-10": "fade-in-up-10 0.7s ease-in-out",
        "fade-in-up-20": "fade-in-up-20 1s ease-out",
        "fade-in-left": "fade-in-left 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",

        "growing": "growing 0.3s ease-in-out",
      },
      keyframes: {
        growing: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
            filter: "blur(10px)",
            transformOrigin: "90% 100%",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
            filter: "blur(0)",
            transformOrigin: "90% 100%",
          },
        },

        "fade-in-up-10": {
          "0%": {
            opacity: "0",
            transform: "translateY(7px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-20": {
          "0%": {
            opacity: "0",
            transform: "translateY(14px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down-10": {
          "0%": {
            opacity: "0",
            transform: "translateY(-7px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down-20": {
          "0%": {
            opacity: "0",
            transform: "translateY(-14px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
