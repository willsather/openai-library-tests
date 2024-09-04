import { Express } from "express";
import { basic } from "@/chat-completions";

export default function basicApi(app: Express) {
  app.get("/api/basic", async (req, res) => {
    try {
      const hello = await basic();
      res.status(200).json(hello);
    } catch {
      res.status(500).json({ status: 500, message: "Failed Hello" });
    }
  });
}
