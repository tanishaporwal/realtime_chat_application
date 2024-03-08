import express from "express";
import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.routes.js'; 
import dotenv from "dotenv";
import database from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app=express();

app.use(express.json());
app.use(cookieParser());
const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    database();
console.log(`Server running successfully at port ${PORT}`);
})
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res)=>{
    res.send("Hello world")
})



