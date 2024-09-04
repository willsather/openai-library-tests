import { basic } from "./";

describe("basic", () => {
  it("can successfully say yes", async () => {
    const response = await basic();
    expect(response).toBe("yes");
  });
});
