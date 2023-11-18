/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "plugin:perfectionist/recommended-natural",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "perfectionist"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      { children: "never", props: "never" },
    ],
  },
};

export default config;
