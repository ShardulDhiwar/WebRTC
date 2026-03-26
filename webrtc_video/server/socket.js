const users = {};

module.exports = (io) => {
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
        from: socket.username,
        answer,
      });
    });

    socket.on("ice-candidate", ({ to, candidate }) => {
      io.to(users[to]).emit("ice-candidate", {
        from: socket.username,
        candidate,
      });
    });

    socket.on("disconnect", () => {
      delete users[socket.username];
    });
  });
};