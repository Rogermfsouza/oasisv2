const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const { Server } = require("socket.io");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://www.oasistv.com.br");
  next();
});

const server = https.createServer({
  key: fs.readFileSync("/etc/letsencrypt/live/oasistv.com.br/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/oasistv.com.br/fullchain.pem")
}, app);


const io = new Server(server, {
  cors: {
    origin: "https://www.oasistv.com.br",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING HTTPS portas");
})