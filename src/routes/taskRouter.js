// Roteador:
import { Router } from "express";

// Métodos auxiliares (middleware):
import checkNewTaskBody from "../middleware/checkNewTaskBody.js";
import checkTaskUpdate from "../middleware/checkTaskUpdate.js"

// Métodos do controlador:
import {
  createNewTask,
  getTasksByPage,
  getTasksByID
} from "../controllers/taskController.js"

// Declarando o roteador:
const router = Router();

// Endpoints:
router.post("/", checkNewTaskBody, createNewTask)
router.get("/", getTasksByPage)
router.get("/:id", getTasksByID)
router.put("/:id", checkTaskUpdate)

export default router;