// Roteador:
import { Router } from "express";

// Métodos auxiliares (middleware):
import checkStatusUpdate from "../middleware/checkStatusUpdate.js";

// Métodos do controlador:
import {
  createNewTask,
  getTasksByPage,
  getTaskByID,
  updateTask,
  updateStatus,
  getTasksByStatus,
} from "../controllers/taskController.js";

// Declarando o roteador:
const router = Router();

// Endpoints:
router.post("/", createNewTask);
router.get("/", getTasksByPage);
router.get("/:id", getTaskByID);
router.put("/:id", updateTask);
router.patch("/:id/status", checkStatusUpdate, updateStatus);
router.get("/status/:situacao", getTasksByStatus);

export default router;
