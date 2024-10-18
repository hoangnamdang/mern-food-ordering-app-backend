import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRouter";
mongoose.connect(process.env.MONGODB_CONNECT_STRING as string).then(() => {
    console.log("connect database success")
})

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/my/user", myUserRoute)

app.listen(7000, () => {
    console.log("listed in port : ", 7000)
})