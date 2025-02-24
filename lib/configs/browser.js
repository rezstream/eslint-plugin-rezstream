import eslintPluginWc from "eslint-plugin-wc";
import globals from "globals";

/** @type{import("eslint").Linter.Config} */
export default [
  eslintPluginWc.configs["flat/best-practice"],
  {
    languageOptions: { globals: { ...globals.browser } },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
