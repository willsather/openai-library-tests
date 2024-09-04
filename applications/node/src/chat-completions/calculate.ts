import client, { MODEL } from "@/client";

export async function calculate(equation: string) {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a calculator. Only return the answer to the user's question",
      },
      { role: "user", content: equation },
    ],
    model: MODEL,
  });

  return chatCompletion.choices[0].message.content;
}
