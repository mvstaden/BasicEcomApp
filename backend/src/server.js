import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "API is running" });
});

app.listen(1000, () => {
  console.log("Server running on localhost:1000");
});
