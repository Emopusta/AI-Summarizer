import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Welcome to Summarizer API...");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));