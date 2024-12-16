import type { Linter } from "eslint";

type Config = Linter.Config;

declare const Configs: {
  configs: {
    /**
     * @description The base ESLint configuration for RezStream projects.
     */
    base: Config;

    /**
     * @description The recommended ESLint configuration for RezStream projects that will run in the browser.
     */
    browser: Config[];

    /**
     * @description The recommended ESLint configuration for RezStream projects. Includes everything from `base`.
     */
    recommended: Config[];

    /**
     * @description The recommended ESLint configuration for RezStream projects that use TypeScript.
     */
    typescript: Config[];
  };
};

export default Configs;
