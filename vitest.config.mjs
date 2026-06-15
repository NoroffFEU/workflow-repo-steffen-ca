import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/unit/**/*.test.js", "js/**/*.test.js"],
    exclude: [...configDefaults.exclude, "tests/e2e/**"],
  },
});
