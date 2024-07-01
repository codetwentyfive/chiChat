import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;
const MONGO_URI = "your-mongodb-connection-string";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
