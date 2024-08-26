import { Router } from "express";
import { getAll } from "../controllers/taskController.js"

const router = Router();

router.get("/", getAll)

export default router;