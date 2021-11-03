import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Todo from "../models/todoModel.js";

// @description     Fetch all todos
// @route           GET /api/todos
// @access          public
// using asyncHandler just in case something breaks
router.get("/", asyncHandler( async (req, res) => {

    const todo = await Todo.find({});
    res.json(todo);
}));