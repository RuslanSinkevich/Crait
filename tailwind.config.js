/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./tailwind.config.js",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray_10_my: '#F0F0F0;',
        gray_20_my: "#FAFAFA;",
        gray_50_my: "#F8F8F8;",
        gray_60_my: "#F5F5F5;",
        gray_70_my: "#8F8F8F;",
        gray_80_my: "#A2A2A2;",
        gray_90_my: "#DDDDDD;",
        gray_95_my: "#DADADA;",
        gray_100_my: "#E8E7E7;",
        gray_110_my: "#D0D0D0;",
        gray_115_my: "#D3D3D3;",
        gray_120_my: "#D9D9D9;",
        gray_200_my: "#909090;",
        gray_300_my: "#C9C9C9;",
        gray_400_my: "#979797;",
        gray_500_my: "#505050;",
        gray_800_my: "#303030;",
        gray_900_my: "#495159;",
        
        orange_500_my: "#E24B33;",
        orange_600_my: "#EA8C48;",

        lime_500_my: "#A7E492;",

        grey_600_my: "#5B8A8F;",

        green_600_my: "#43807F;",
        red_400_my: "#E46942;",
        red_600_my: "#E46942;",

        gold_500_my: "#E1A661;",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        prata: ["Prata", "sans-serif"],
        roboto_condensed: ["Roboto Condensed", "sans-serif"],
      },
      boxShadow: {
        "sale-1": "0px 16px 32px rgba(0, 0, 0, 0.1) ",
        "my-1": "0px 8px 20px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        opacity: 'opacity 1s',
      },
      keyframes: {
        opacity: {
          from: {  opacity: 0 },
          to: {  opacity: 1 },
        }
      },
      fontSize: {
        "my-10": [
          "10px",
          {
            lineHeight: "100%",
          },
        ],
        "my-11": [
          "11px",
          {
            lineHeight: "11px",
          },
        ],
        "my-12": [
          "12px",
          {
            lineHeight: "12px",
          },
        ],
        "my-13": [
          "13px",
          {
            lineHeight: "13px",
          },
        ],
        "my-14": [
          "14px",
          {
            lineHeight: "14px",
          },
        ],
        "my-16": [
          "16px",
          {
            lineHeight: "16px",
          },
        ],
        "my-18": [
          "18px",
          {
            lineHeight: "18px",
          },
        ],
        "my-20": [
          "20px",
          {
            lineHeight: "20px",
          },
        ],
        "my-24": [
          "24px",
          {
            lineHeight: "24px",
          },
        ],
        "my-32": [
          "32px",
          {
            lineHeight: "32px",
          },
        ],
        "my-36": [
          "36px",
          {
            lineHeight: "36px",
          },
        ],
        "my-40": [
          "40px",
          {
            lineHeight: "40px",
          },
        ],
        "my-50": [
          "50px",
          {
            lineHeight: "50px",
          },
        ],
      },
      backgroundPosition: {
        arrow_l: 'left 10px center', 
        arrow_r: 'right 10px center', 
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
