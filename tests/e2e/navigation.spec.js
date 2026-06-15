import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("home page renders heading and menu", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Workflow CA");
    await expect(
      page.getByRole("heading", { name: "Welcome to this site" }),
    ).toBeVisible();

    // The menu is rendered client-side by createMenu().
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Register" })).toBeVisible();
  });

  test("can navigate from home to the login page", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Login" }).click();

    await expect(page).toHaveURL(/\/login\/?$/);
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  });
});
