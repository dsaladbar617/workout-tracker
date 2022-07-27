import express from "express";
const router = express.Router();
import { add, request } from "../controllers/homeController.js";

router.route("add_entry").post(add);

router.route("get").get(request);

export default router;
