import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDb from "./config/mongoDb.js";

dotenv.config();
const port = process.env.PORT || 8000;

connectMongoDb();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Welcome to Summarizer API...");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));