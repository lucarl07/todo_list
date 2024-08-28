// Roteador:
import { Router } from "express";

// Métodos auxiliares (middleware):
import checkTaskFields from "../middleware/checkTaskFields.js";

// Métodos do controlador:
import { 
  createNewTask
} from "../controllers/taskController.js"

// Declarando o roteador:
const router = Router();

// Endpoints:
router.post("/", checkTaskFields, createNewTask)

export default router;