const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const setupSocket = require("./socket");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Setup socket logic
setupSocket(io);

server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});