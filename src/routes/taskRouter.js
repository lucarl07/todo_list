// Roteador:
import { Router } from "express";

// Métodos auxiliares (middleware):
import checkTaskUpdate from "../middleware/checkTaskUpdate.js"
import checkStatusUpdate from "../middleware/checkStatusUpdate.js"

// Métodos do controlador:
import {
  createNewTask,
  getTasksByPage,
  getTasksByID,
  updateTask,
  updateStatus,
  getTasksByStatus
} from "../controllers/taskController.js"

// Declarando o roteador:
const router = Router();

// Endpoints:
router.post("/", createNewTask)
router.get("/", getTasksByPage)
router.get("/:id", getTasksByID)
router.put("/:id", checkTaskUpdate, updateTask)
router.patch("/:id/status", checkStatusUpdate, updateStatus)
router.get("/status/:situacao", getTasksByStatus)

export default router;