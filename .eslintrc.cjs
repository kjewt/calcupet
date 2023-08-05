module.exports = {
  root: true,
  env: {browser: true, es2020: true, node: true},
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
  },
  overrides: [
    {
      files: ["tailwind.config.js"],
      parserOptions: {
        ecmaVersion: 2017, // tailwind.config.js 파일의 ECMAScript 버전 설정
      },
    },
  ],
};
