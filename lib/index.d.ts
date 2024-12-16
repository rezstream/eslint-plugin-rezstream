import type {
  ESLint,
  Linter,
} from "eslint";

declare const Configs: ESLint.Plugin & {
  configs: {
    /**
     * @description The base ESLint configuration for RezStream projects.
     */
    base: Linter.Config;

    /**
     * @description The recommended ESLint configuration for RezStream projects that will run in the browser.
     */
    browser: Linter.Config[];

    /**
     * @description The recommended ESLint configuration for RezStream projects. Includes everything from `base`.
     */
    recommended: Linter.Config[];

    /**
     * @description The recommended ESLint configuration for RezStream projects that use TypeScript.
     */
    typescript: Linter.Config[];
  };
};

export default Configs;
