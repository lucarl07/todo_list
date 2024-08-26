// Roteador:
import { Router } from "express";

// Métodos auxiliares (middleware):
import checkTaskFields from "../middleware/checkTaskFields.js";

// Métodos do controlador:
import { 
  createNewTask, 
  getAllTasks 
} from "../controllers/taskController.js"

// Declarando o roteador:
const router = Router();

// Endpoints:
router.post("/", checkTaskFields, createNewTask)
router.get("/", getAllTasks)

export default router;