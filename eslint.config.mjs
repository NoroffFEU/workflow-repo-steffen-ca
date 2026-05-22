import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    // Tooling and end-to-end tests run in Node, not the browser.
    files: ["playwright.config.js", "eslint.config.mjs", "tests/**/*.js"],
    languageOptions: { globals: globals.node },
  },
]);
