import express from "express";
const router = express.Router();
import {
	add,
	requestExercises,
	getData
} from "../controllers/homeController.js";

router.route("/add_entry").post(add);

router.route("/get_exercises").get(requestExercises);

router.route("/get_data").get(getData);

export default router;
