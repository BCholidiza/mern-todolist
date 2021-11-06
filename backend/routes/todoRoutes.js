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


// @description     Fetch a single todo
// @route           GET /api/todos/:id
// @access          public
router.get("/:id", asyncHandler( async (req, res) => {

    // Runs through array and tries to find item in array as per req.params.id (url parameters)
    
    // this finds id in mongo using the todo model we created
    const todo = await Todo.findById(req.params.id);

    if (todo){
        res.json(todo);
    }
    else {
        res.status(404);
        throw new Error("To not found");
    }
}));


// @description     post a single todo
// @route           POST /api/todos/add
// @access          public
router.post("/add", asyncHandler( async (req, res) => {
    
    //console.log(req.body.title);
    // this finds id in mongo using the todo model we created
    const todo = await Todo.create({ title: req.body.title });

    if (todo){
        res.json(todo);
    }
    else {
        res.status(500);
        throw new Error(res.statusMessage);
    } 
}));

// @description     post a delete request
// @route           POST /api/todos/delete/:id
// @access          public
router.post("/delete/:id", asyncHandler( async (req, res) => {
    
    const filter = { _id: req.params.id };
    const todo   = await Todo.findOneAndDelete(filter);

    if (todo){
        res.json(todo);
    }
    else {
        res.status(500);
        throw new Error(res.statusMessage);
    } 
}));

// @description     post an update request
// @route           POST /api/todos/update/:id
// @access          public
router.post("/update/:id", asyncHandler( async (req, res) => {
    
    const filter = { _id: req.params.id };
    const update = { title: req.body.title, isCompleted: req.body.isCompleted };

    const todo = await Todo.findOneAndUpdate(filter, update);

    if (todo){
        res.json(todo);
    }
    else {
        res.status(500);
        throw new Error(res.statusMessage);
    } 
}));

export default router;