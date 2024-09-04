import { Express } from "express";
import { stream } from "@/chat-completions";

export default function streamApi(app: Express) {
  app.get("/api/stream", async (req, res) => {
    try {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Transfer-Encoding", "chunked");

      await stream((input: string): void => {
        res.write(input);
      });

      res.end().status(200);
    } catch {
      res.status(500).json({ status: 500, message: "Failed Stream" });
    }
  });
}
