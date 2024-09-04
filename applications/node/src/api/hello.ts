import { Express, Request, Response } from "express";
import { sayHello } from "@/chat-completions";

export default function helloApi(app: Express) {
  app.get("/api/hello", async (req: Request, res: Response) => {
    try {
      const hello = await sayHello();
      res.status(200).json(hello);
    } catch {
      res.status(500).json({ status: 500, message: "Failed Hello" });
    }
  });
}
