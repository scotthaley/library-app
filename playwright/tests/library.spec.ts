import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/The Library/);
});

test("has featured books", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByTestId("book-card")).toHaveCount(4);
});

test("can checkout book", async ({ page, request }) => {
  await page.goto("http://localhost:3000");
  await page.getByTestId("book-card").first().getByRole("button").click();
  await page.waitForURL("**/checkout/**");
  await page.getByLabel("Library Card Number").fill("12345");
  await page.getByLabel("Pin Number").fill("678");
  await page.getByText("Confirm Checkout").click();
  await expect(page.getByText("Successfully checked out book!")).toBeVisible();

  const response = await request.post("http://localhost:3000/api/user/books", {
    data: {
      card: "12345",
      pin: "678",
    },
  });

  const books = (await response.json()) as { copy_id: number }[];
  for (let book of books) {
    const response = await request.post("http://localhost:3000/api/return", {
      data: {
        card: "12345",
        pin: "678",
        id: book.copy_id,
      },
    });

    expect(response.ok()).toBeTruthy();
  }
});

test("can return books", async ({ page, request }) => {
  const response = await request.post("http://localhost:3000/api/checkout", {
    data: {
      id: 1,
      card: "12345",
      pin: "678",
    },
  });

  expect(response.ok()).toBeTruthy();

  await page.goto("http://localhost:3000");
  await page.getByText("My Books").click();
  await page.getByPlaceholder("Card (12345)").fill("12345");
  await page.getByPlaceholder("Pin (678)").fill("678");
  const card = page.getByTestId("book-card").first();
  await card.getByRole("button").click();
  await expect(card).toBeHidden();
});
