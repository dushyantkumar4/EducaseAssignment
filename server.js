import dotenv from "dotenv";
dotenv.config();
import express from "express";
import pool from "./config/db.js";
import cors from "cors";
import schoolRoute from "./routes/schoolRoutes.js";
import { errorHandler } from "./middleware/errorhandler.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", schoolRoute);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
