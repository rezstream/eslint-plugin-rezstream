/* eslint-disable global-require */

/** @type {import("eslint").Linter.Config} */
const config = {
  configs: {
    browser: require("./configs/browser"),
    recommended: require("./configs/recommended"),
    typescript: require("./configs/typescript"),
  },
};

module.exports = config;
