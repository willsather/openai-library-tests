import client, { MODEL } from "@/client";

export async function basic() {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "Is 1+1=2? Only return a single word answer, only yes or no, and do not use punctuation",
      },
    ],
    model: MODEL,
  });

  return chatCompletion.choices[0].message.content;
}
