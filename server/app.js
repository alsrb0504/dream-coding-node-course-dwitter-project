import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
// import { Server } from "socket.io";

import tweetRoute from "./router/tweetRouter.js";
import authRoute from "./router/authRouter.js";
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetRoute);
app.use("/auth", authRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

const server = app.listen(config.host.port);
initSocket(server);

// const socketIO = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// socketIO.on("connection", (socket) => {
//   console.log("client is here!");
//   socketIO.emit("dwitter", "hello~");
//   socketIO.emit("dwitter", "hello~");
// });
