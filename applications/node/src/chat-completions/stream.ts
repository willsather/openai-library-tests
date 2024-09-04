import client, { MODEL } from "@/client";

export async function stream(write: (str: string) => void): Promise<void> {
  const stream = await client.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: "user",
        content: "Please repeat this and only this once: Hello Stream Test",
      },
    ],
    stream: true,
  });

  for await (const chunk of stream) {
    write(chunk.choices[0]?.delta?.content ?? "");
  }
}
