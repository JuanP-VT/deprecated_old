import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import categoriesRoute from "./routes/categoriesRoute";
//dotenv file
dotenv.config();

const app: Application = express();
const port = process.env.DB_PORT || 8800;

//setup JSON
app.use(express.json());
//set up CORS
app.use(cors());
//mongodb connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING ?? "invalid url"); //typescript forcing to check nullish values;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.use("/categories", categoriesRoute);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
