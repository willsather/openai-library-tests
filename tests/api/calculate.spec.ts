import { expect, test } from "@playwright/test";

test.describe("calculate", () => {
  const cases = [
    ["2+2", "4"],
    ["0-0", "0"],
    ["0*4", "0"],
    ["1*4", "4"],
    ["4/4", "1"],
    ["3*(4/4)", "3"],
    ["3*(16/4)", "12"],
  ];

  for (const [equation, result] of cases) {
    test(`should calculate ${equation} to ${result}`, async ({ request }) => {
      const calculateResponse = await request.post("/api/calculate", {
        data: {
          equation,
        },
      });

      expect(calculateResponse.ok()).toBe(true);
      expect(await calculateResponse.json()).toEqual(result);
    });
  }
});
