import express, { json } from "express";
import homeRoutes from "./routes/homeRoutes.js";
import cors from "cors";
import corsSetting from "./middleware/corsSetting.js";

const server = express();

server.use(json());
server.use(cors(corsSetting));

server.use("/api/", homeRoutes);

export default server;
