import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import schoolRoute from "./routes/schoolRoutes.js";
import { errorHandler } from "./middleware/errorhandler.js";
import { initDB } from "./config/initdb.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

initDB();

app.use("/api", schoolRoute);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
