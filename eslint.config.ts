import globals from "globals";
import tsEslint from "typescript-eslint";

import eslintPluginRezStream from "./lib";

export default tsEslint.config(
  eslintPluginRezStream.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2025,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslintPluginRezStream.configs.typescript,
    ],
  },
);
