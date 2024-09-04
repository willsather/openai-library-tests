import { expect, test } from "@playwright/test";

test("should stream 'Hello Stream Test'", async ({ request }) => {
  const response = await request.get("/api/stream");

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("text/html");
  expect(response.headers()["content-type"]).toContain("charset=utf-8");

  const readable = await response.body();

  if (readable == null) {
    throw new Error("No readable stream available");
  }

  const buffer: number[] = [];
  for await (const chunk of readable) {
    buffer.push(chunk);
  }

  // `Hello Stream Test` is 17 characters long
  expect(buffer.length).toBe(17);

  // Decode buffer to assert against value
  const decoder = new TextDecoder("utf-8");
  expect(decoder.decode(readable)).toBe("Hello Stream Test");
});
