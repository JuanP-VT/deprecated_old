import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//dotenv file
dotenv.config();
//mongodb connection
mongoose.connect(process.env.MONGO_URL);

const app: Application = express();
const port = process.env.DB_PORT || 8800;

//setup JSON
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
