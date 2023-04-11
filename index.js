import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

// import All Routes
import authRoutes from "./Backend/Routes/Auth_routes.js";
import UserRoutes from "./Backend/Routes/User_routes.js";
import BlogRoutes from "./Backend/Routes/Blog_routes.js"

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", UserRoutes)
app.use("/api/blog", BlogRoutes)

app.listen(process.env.LOCAL_HOST_PORT, () => {
  connect();
  console.log(
    `server is running on http://localhost:${process.env.LOCAL_HOST_PORT}`
  );
});
