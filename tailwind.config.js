import daisyui from "daisyui";

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      xl2: "1360px",
    },
    // fontSize: {
    //   sm: "0.65rem",
    //   base: "0.8rem",
    //   lg: "1rem",
    //   "2xl": "1.25rem",
    //   "3xl": "1.563rem",
    //   "4xl": "1.953rem",
    //   "5xl": "2.441rem",
    // },
  },
  plugins: [daisyui],
  daisyui: {
    base: true, // 기본 스타일을 활성화
    utils: {
      // fontSize 설정
      "text-base": "0.8rem", // 브라우저 기본 폰트 크기를 기준으로 조정
      // 다른 fontSize 설정...
    },
    themes: [
      {
        mytheme: {
          primary: "#7648FA",
          secondary: "#fca5a5",
          accent: "#4A494E",
          neutral: "#115e59",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
