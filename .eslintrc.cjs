/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "import"],
  ignorePatterns: ["*.cjs"],
  settings: {
    "import/internal-regex": "^(~|#|\\$)",
    "import/resolver": {
      typescript: {},
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    "import/order": ["warn", { groups: ["builtin", "external", "internal", "parent", "sibling"] }],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
