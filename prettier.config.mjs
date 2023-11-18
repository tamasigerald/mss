/** @type {import('prettier').Config & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv'],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};

export default config;
