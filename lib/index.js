import baseConfig from "./configs/base.js";
import browserConfig from "./configs/browser.js";
import recommendedConfig from "./configs/recommended.js";
import typeScriptConfig from "./configs/typescript.js";

import { version } from "../package.json";

/** @type {import("eslint").Linter.Config} */
const plugin = {
  meta: {
    name: "@rezstream/eslint-plugin",
    version,
  },
  configs: {
    base: baseConfig,
    browser: browserConfig,
    recommended: recommendedConfig,
    typescript: typeScriptConfig,
  },
};

export default plugin;
