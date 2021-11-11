import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listTodos } from "../actions/todoActions";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const AddToDo = () => {

    const [newTodo, setNewTodo] = useState({});
    const initialRender = useRef(true);

    // function handles addition of a new todo item
    const handleAdd = (event) => {
    
        // if this is an enter button, then add to state
        if (event.keyCode === 13){

            const addTodo = { "title": event.target.value, isCompleted: false, isDeleted: false };
            setNewTodo(addTodo);
            event.target.value = "";
        }
    }

    const pathname = useLocation().pathname;

    const dispatch = useDispatch();

    const todoList = useSelector(state => state.todoList);
    const { loading, error, todos } = todoList;

    // post this to backend
    const sendPost = async (toDo) =>{

        try {
            const res = await axios.post("api/todos/add", toDo);

            if (res.status === 200){

                dispatch(listTodos(pathname));
            }
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect( () => {
        
        if (initialRender.current){
            initialRender.current = false;
        }
        else {
            sendPost(newTodo);  
        }
    }, [newTodo, dispatch])

    return (  
        <div className="add-todo">
            <input className="new-todo" type='text' onKeyUp={ (e)=>handleAdd(e) } />
        </div>
    );
}
 
export default AddToDo;