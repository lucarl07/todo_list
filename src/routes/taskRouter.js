import { Router } from "express";
import { createNewTask, getAllTasks } from "../controllers/taskController.js"

const router = Router();

router.get("/", getAllTasks)

export default router;