import { Express, Request, Response } from "express";
import { calculate } from "@/chat-completions";

export default function calculateApi(app: Express) {
  app.post("/api/calculate", async (req: Request, res: Response) => {
    try {
      const equation = req.body.equation;
      const response = await calculate(equation);
      res.json(response);
    } catch (error) {
      console.error(`Failed to calculate $${JSON.stringify(req.body)}`, error);
      res.status(500).json({ error: "Failed to get a response" });
    }
  });
}
