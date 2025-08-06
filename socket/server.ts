import { Server } from "socket.io";

const io = new Server(8080, {
  cors: {
    origin: "*", // 本地開發可 *, 正式環境建議鎖定
  },
});

io.on("connection", (socket) => {
  console.log("A user connected!");

  socket.on("chat message", (msg: string) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected!");
  });
});

console.log("Socket.IO server running at http://localhost:8080");
