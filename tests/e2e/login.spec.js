import { test, expect } from "@playwright/test";

test.describe("Login form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login/");
  });

  test("renders the login form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
    await expect(page.getByPlaceholder("Email")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  test("shows client-side validation errors for invalid credentials", async ({
    page,
  }) => {
    await page.getByPlaceholder("Email").fill("user@example.com");
    await page.getByPlaceholder("Password").fill("short");
    await page.getByRole("button", { name: "Login" }).click();

    // Validation runs in the browser before any network request is made.
    await expect(
      page.getByText(
        "Please enter a noroff.no or stud.noroff.no email address.",
      ),
    ).toBeVisible();
    await expect(
      page.getByText("Password must be at least 8 characters long."),
    ).toBeVisible();
  });

  test("accepts a noroff email and only flags the short password", async ({
    page,
  }) => {
    await page.getByPlaceholder("Email").fill("student@stud.noroff.no");
    await page.getByPlaceholder("Password").fill("short");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(
      page.getByText("Password must be at least 8 characters long."),
    ).toBeVisible();
    await expect(
      page.getByText(
        "Please enter a noroff.no or stud.noroff.no email address.",
      ),
    ).toHaveCount(0);
  });
});
