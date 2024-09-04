import { sayHello, sayHelloStream, sayHelloTwice } from "./";

describe("sayHello", () => {
  it("can successfully say hello test", async () => {
    const response = await sayHello();
    expect(response).toBe("Hello Test");
  });

  it("can successfully say hello test", async () => {
    const response = await sayHelloTwice();
    expect(response).toHaveLength(2);
    expect(response[0]).toBe("Hello Test");
    expect(response[1]).toBe("Hello Test");
  });
});
