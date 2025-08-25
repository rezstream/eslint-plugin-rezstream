/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:wc/best-practice",
  ],
  plugins: [
    "wc",
  ],
  rules: {
    "no-console": ["error",
      {
        allow: ["warn", "error"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".cjs", ".mjs", ".ts"],
      },
    },
  },
};

module.exports = config;
