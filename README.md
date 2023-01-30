# eslint-plugin-rezstream

[![CI](https://github.com/rezstream/eslint-plugin-rezstream/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rezstream/eslint-plugin-rezstream/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@rezstream/eslint-plugin)](https://www.npmjs.com/package/@rezstream/eslint-plugin)

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

You may also need to add some or all of the following settings to your `.eslintrc.cjs` file:

```js
{
  parserOptions: {
    project: "./tsconfig.json",
  },
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
