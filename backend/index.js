import express from "express";
import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.routes.js'; 
import dotenv from "dotenv";
import database from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import { app, server } from './socket/socket.js';
import path from "path"

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
dotenv.config();

// Import the 'cors' module
import cors from 'cors';

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use(cookieParser());

// app.listen(8005, ()=> console.log("server is running on 5000"));
// WebSocket setup
server.listen(PORT, () => {
    database();
    console.log(`Server running successfully at port ${PORT}`);
});

// Define API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")));
// Define a basic route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist","index.html"));
});

// Export the app for use elsewhere if needed
