import express, { json } from "express";
import { homeRoutes } from "./routes/index.js";
import cors from "cors";

const server = express();

server.use(json());
server.use(cors());

server.use("/api/", homeRoutes);

export default server;
