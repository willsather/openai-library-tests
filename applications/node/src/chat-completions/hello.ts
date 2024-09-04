import client, { MODEL } from "@/client";

export async function sayHello() {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      { role: "user", content: "Please repeat this and only this. Hello Test" },
    ],
    model: MODEL,
  });

  return chatCompletion.choices[0].message.content;
}

export async function sayHelloTwice() {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      { role: "user", content: "Please repeat this and only this. Hello Test" },
    ],
    model: MODEL,
    n: 2,
  });

  return chatCompletion.choices.map(({ message }) => message.content);
}
