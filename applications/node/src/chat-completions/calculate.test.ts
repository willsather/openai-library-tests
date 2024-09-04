import { calculate } from "@/chat-completions";

describe("calculate", () => {
  const cases = [
    ["2+2", "4"],
    ["0-0", "0"],
    ["0*4", "0"],
    ["1*4", "4"],
    ["4/4", "1"],
    ["3*(4/4)", "3"],
    ["3*(16/4)", "12"],
  ];

  test.each(cases)(
    "can successfully calculate %s to %s",
    async (equation, result) => {
      const response = await calculate(equation);
      expect(response).toBe(result);
    },
  );
});
