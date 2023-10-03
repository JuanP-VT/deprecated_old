import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

//dotenv file
dotenv.config();

const app: Application = express();
const port = process.env.DB_PORT || 8800;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
