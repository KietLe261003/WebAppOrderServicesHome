import express from "express";
import * as dotenv from 'dotenv';
import connect from "./database/database.js";
import {print,OutputType} from "./Helper/print.js";
const app=express();
dotenv.config();

const Port = process.env.PORT || 2000;

//Router 
import { userRouter } from "./routes/index.js";

app.use(express.json());
app.use("/user",userRouter);

app.listen(`${Port}`, async ()=>{
    await connect();
    print(`Đang chạy cổng: ${Port}`,OutputType.SUCCESS);
})