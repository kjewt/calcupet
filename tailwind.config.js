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
          primary: "#f97316",
          secondary: "#fef08a",
          accent: "#facc15",
          neutral: "#fef9c3",
          "base-100": "#ffffff",
          info: "#e9d5ff",
          success: "#bae6fd",
          warning: "#fecaca",
          error: "#dc2626",
        },
      },
    ],
  },
};
