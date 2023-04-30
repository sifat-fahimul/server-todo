import express from "express";

import { verifyToken } from "../utils/verifyToken.js";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  getSingleTodo,
  updateTodo,
} from "../controllers/todo.js";

const router = express.Router();

// create todo
router.post("/", createTodo);

// get all Todo
router.get("/", getAllTodo);

// get single Todo
router.get("/:id", getSingleTodo);

// update todo
router.put("/:id", updateTodo);

// delete todo
router.delete("/:id", deleteTodo); // verifyToken

export default router;
