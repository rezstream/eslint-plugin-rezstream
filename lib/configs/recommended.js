import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

import baseConfig from "./base.js";

/**
 * @description The recommended ESLint configuration for RezStream projects. Includes everything from `base`.
 * @type{Array<import("eslint").Linter.Config>}
 */
export default [
  baseConfig,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    name: "rezstream-eslint/recommended",
    languageOptions: { globals: { ...globals.es2024 } },
    rules: {
      "no-restricted-syntax": "off",
      "unicode-bom": [
        "error",
        "never",
      ],
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": [
        "error", {
          replacements: {
            e: false,
            el: false,
            ev: false,
            str: false,
          },
        },
      ],
    },
  },
];
