require("dotenv").config();

const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");

const authRoutes = require("./routes/auth");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/auth", authRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// USERS STORE
let users = {};

io.on("connection", (socket) => {

  socket.on("join", (username) => {
    socket.username = username;
    users[username] = socket.id;

    io.emit("users", Object.keys(users));
  });

  socket.on("privateMessage", ({ to, msg, from }) => {

    if(users[to]){
      io.to(users[to]).emit("privateMessage", {
        from,
        msg
      });
    }

    socket.emit("privateMessage", {
      from: "Me",
      msg
    });
  });

  socket.on("disconnect", () => {
    delete users[socket.username];
    io.emit("users", Object.keys(users));
  });

});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});