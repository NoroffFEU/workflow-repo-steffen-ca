import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    // Playwright owns the e2e specs in tests/e2e (run via `npm run test:e2e`).
    // Keep Vitest to the unit tests so the two runners don't collide.
    exclude: [...configDefaults.exclude, "tests/e2e/**"],
  },
});
