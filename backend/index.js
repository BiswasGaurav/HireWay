import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import coonectDB from "./utils/db.js";
dotenv.config({});

const app = express();

app.get("/home" , (req , res) => {
    res.status(200).json({
        message : "Hello from backend",
        success : true
    });
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    Credentials : true
}

app.use(cors(corsOptions));

const PORT =process.env.PORT || 3000;
app.listen(PORT , () => {
    coonectDB();
    console.log(`Server is running on port ${PORT}`);
})