# eslint-plugin-rezstream

An opinionated collection of ESLint shared configs and rules used by rezStream projects.

## Installation

```bash
npm install --save-dev @rezstream/eslint-plugin
```

Inside your `.eslintrc.cjs` file:

```js
{
  extends: [
    "plugin:@rezstream/recommended",
  ],
  plugins: [
    "@rezstream",
  ],
}
```

## Available configs

Name | Description
-- | --
`@rezstream/recommended` | Base config for all projects
`@rezstream/browser` | Config for browser based projects
`@rezstream/typescript` | Config for TypeScript projects

### Using with Typescript

When adding this plugin to a TypeScript project, you'll need to install the following packages:

```bash
npm install --save-dev eslint-import-resolver-typescript
```

And then add the following to your `.eslintrc.cjs` file:

```js
{
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: join(__dirname, "./tsconfig.json"),
      },
    },
  },
}
```
