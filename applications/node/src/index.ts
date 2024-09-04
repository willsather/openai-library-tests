import express from "express";

import basicApi from "@/api/basic";
import calculateApi from "@/api/calculate";
import helloApi from "@/api/hello";
import streamApi from "@/api/stream";

const app = express();
app.use(express.json());

// api routes
basicApi(app);
calculateApi(app);
helloApi(app);
streamApi(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`== Started server on ${PORT} ==`);
});
