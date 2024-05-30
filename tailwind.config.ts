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
    },
  },
  plugins: [nextui()],
};
export default config;
