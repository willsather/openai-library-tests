import { expect, test } from "@playwright/test";

test("should say yes", async ({ request }) => {
  const basicResponse = await request.get("/api/basic");
  expect(basicResponse.ok()).toBe(true);

  expect(await basicResponse.json()).toEqual("yes");
});
