import path from "node:path";

import tsEslint from "typescript-eslint";

export default tsEslint.config(
  tsEslint.configs.recommendedTypeChecked,
  {
    name: "rezstream-eslint/typescript",
    languageOptions:
    {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.resolve(),
      },
    },
    plugins: { "@typescript-eslint": tsEslint.plugin },
    rules: {
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: false }],
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
    },
  },
  {
    name: "rezstream-eslint/typescript-tests",
    files: ["**/*.test.ts"],
    rules: {
    }
  },
);
