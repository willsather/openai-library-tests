import { expect, test } from "@playwright/test";

test("should say hello", async ({ request }) => {
  const helloResponse = await request.get("/api/hello");
  expect(helloResponse.ok()).toBe(true);

  expect(await helloResponse.json()).toEqual("Hello Test");
});
