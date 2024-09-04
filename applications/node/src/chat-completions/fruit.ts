import client, { MODEL } from "@/client";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

const FruitSchema = z.string();
export type Fruit = z.infer<typeof FruitSchema>;

interface ListFruitOptions {
  limit?: number;
}

export async function listFruits(options?: ListFruitOptions): Promise<Fruit[]> {
  const chatCompletion = await client.beta.chat.completions.parse({
    messages: [
      {
        role: "user",
        content:
          "Please list a various amount of fruits.  Only respond with the fruit name",
      },
    ],
    model: MODEL,
    response_format: zodResponseFormat(
      z.object({ fruits: z.array(FruitSchema) }),
      "fruit_extraction",
    ),
    max_tokens: options?.limit,
  });

  if (chatCompletion.choices[0].message.parsed?.fruits == null) {
    throw new Error("Unable to generate fruit");
  }

  return chatCompletion.choices[0].message.parsed.fruits;
}
