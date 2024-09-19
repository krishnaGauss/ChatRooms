import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "../server/routes/AuthRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN], //frontend urls which send requests
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, //enable cookies
  })
);

app.use(cookieParser()); //getting cookies
app.use(express.json());

app.use("/api/auth", authRoutes)

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("DB Running Successfully");
  })
  .catch((err) => console.log(err.message));
