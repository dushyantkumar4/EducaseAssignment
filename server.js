import dotenv from "dotenv";
dotenv.config();
import express from "express";
import pool from "./config/db.js";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
