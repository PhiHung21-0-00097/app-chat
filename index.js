const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("user 1 connection");

  socket.on("on-chat", (data) => {
    // Hàm emit sẽ gửi 1 gói tin đến toàn bộ ng dùng
    io.emit("user-chat", data);
  });
});

//Trang / là trang hiện html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
server.listen(4000),
  () => {
    console.log("Chương trình đã chạy trên post 4000");
  };
