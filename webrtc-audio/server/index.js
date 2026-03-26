const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// Store users
let users = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (username) => {
    users[username] = socket.id;
    socket.username = username;
  });

  socket.on("offer", ({ to, offer }) => {
    io.to(users[to]).emit("offer", {
      from: socket.username,
      offer,
    });
  });

  socket.on("answer", ({ to, answer }) => {
    io.to(users[to]).emit("answer", {
      answer,
    });
  });

  socket.on("ice-candidate", ({ to, candidate }) => {
    io.to(users[to]).emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => {
    delete users[socket.username];
  });
});

server.listen(5000, () => console.log("Server running on 5000"));