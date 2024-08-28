// Roteador:
import { Router } from "express";

// Métodos auxiliares (middleware):
import checkTaskFields from "../middleware/checkTaskFields.js";

// Métodos do controlador:
import {
  createNewTask,
  getTasksByPage,
  getTasksByID
} from "../controllers/taskController.js"

// Declarando o roteador:
const router = Router();

// Endpoints:
router.post("/", checkTaskFields, createNewTask)
router.get("/", getTasksByPage)
router.get("/:id", getTasksByID)

export default router;