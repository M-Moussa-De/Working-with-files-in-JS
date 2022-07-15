import express from "express";
import cors from "cors";

const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("some response...");
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
