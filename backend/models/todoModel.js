import mongoose from "mongoose";

// Simple MongoDB model for todo items
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
        timestamps: true
});

const Todo = mongoose.model("todos", todoSchema);

export default Todo;