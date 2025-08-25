/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checking",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "import/extensions": ["error", "never"],
    "@typescript-eslint/array-type": ["error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": ["error",
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": ["error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": ["error",
      {
        classes: false,
        enums: true,
        functions: false,
        ignoreTypeReferences: true,
        typedefs: true,
        variables: true,
      },
    ],
    "import/order": ["error", {
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "object",
        "type",
      ],
    }],
  },
};

module.exports = config;
