import { listFruits } from "@/chat-completions/fruit";

describe("fruit", () => {
  it("can successfully list fruit", async () => {
    const fruits = await listFruits();
    console.log(fruits);
    expect(fruits.length).toBeGreaterThan(1);
  });

  it("can successfully only list 5 fruit", async () => {
    const fruits = await listFruits({ limit: 5 });
    console.log(fruits);
    expect(fruits.length).toBeGreaterThanOrEqual(1);
    expect(fruits.length).toBeLessThanOrEqual(5);
  });
});
