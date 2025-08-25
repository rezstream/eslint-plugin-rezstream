/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2022,
    },
    sourceType: "module",
  },
  env: {
    es2022: true,
  },
  extends: [
    "airbnb-base",
    "plugin:unicorn/recommended",
  ],
  plugins: [
    "unicorn",
  ],
  rules: {
    "max-len": 0,
    "no-restricted-syntax": "off",
    quotes: ["error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    "unicode-bom": [
      "error",
      "never",
    ],
    "import/no-extraneous-dependencies": [
      "error", {
        devDependencies: [
          "**/.*rc.js",
          "**/.*rc.cjs",
          "**/.*rc.ts",
          "**/*.config.js",
          "**/*.config.cjs",
          "**/*.config.ts",
          "**/*.test.ts",
        ],
      },
    ],
    "import/prefer-default-export": "off",
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
  overrides: [
    {
      files: ["*.cjs"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};

module.exports = config;
