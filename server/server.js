import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import cookieParse from 'cookie-parser'
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import { parse } from "path";

dotenv.config();

const PORT = 8080;
const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(cookieParse());
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use((socket, next) => {
  const token = socket.handshake.query.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return next(new Error("Authentication error"));
      socket.user = decoded.user;
      next();
    });
  } else {
    next(new Error("Authentication error"));
  }
}).on("connection", (socket) => {
  console.log("A user connected", socket.user);

  // Example: Send a message to the connected user
  socket.emit("message", "Welcome to the WebSocket connection!");

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.user);
  });
});


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

// Database connection
const dburl = process.env.MONGODB_URL;

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
