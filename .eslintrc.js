/** @type{import("eslint").Linter.Config} */
const config = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    require.resolve("./lib/configs/recommended"),
  ],
  rules: {
    "unicorn/prefer-module": "off",
  },
};

module.exports = config;
