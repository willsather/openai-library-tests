import { stream } from "./";

describe("stream", () => {
  it("can successfully say hello test using stream", async () => {
    const writeSpy = vi.fn();

    await stream(writeSpy);

    expect(writeSpy).toHaveBeenCalledWith("Hello");
    expect(writeSpy).toHaveBeenCalledWith(" Stream");
    expect(writeSpy).toHaveBeenCalledWith(" Test");
  });
});
