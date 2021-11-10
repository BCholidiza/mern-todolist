import { useDispatch, useSelector } from "react-redux";
import { listTodos } from "../actions/todoActions";
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

const DisplayTodo = () => {
    
    const initialRender = useRef(true);

    // function handles toggle of isCompleted
    const handleIsCompletedToggle = (event) => {

        const selectedTodoId = event.target.dataset.key;
        const selectedTodoCompleteStatus = { isCompleted: event.target.dataset.iscompleted === "true" ? false : true };
        sendRequest(selectedTodoCompleteStatus, selectedTodoId);
    }

    // post this to backend
    const sendRequest = async (data, todoId) => {
        
        try{
            
            const response = await axios.post(`api/todos/update/${todoId}`, data);
            
            if (response.data){

                dispatch(listTodos(pathname));
            }
        } catch {

        }
    };

    const pathname = useLocation().pathname;

    const dispatch = useDispatch();

    const todoList = useSelector(state => state.todoList);
    const { loading, error, todos } = todoList;

    useEffect( () => {

        dispatch(listTodos(pathname));
    }, [dispatch, pathname]);

    return (
        <div className="display-todo">
            
            { loading ? <div>Loading...</div> : 
               error ? <div>{ error }</div> : 
                <ul>{ todos.map( todo => 
                        <li className="list-todo" data-iscompleted={ todo.isCompleted } data-key={ todo._id } 
                            key={ todo._id } 
                            style={{ textDecoration: !todo.isCompleted || "line-through" }}
                            onClick={ (e) => handleIsCompletedToggle(e) }
                        >
                            { todo.title }
                        </li>) 
                }
                </ul>
            }
        </div>
    );
}
 
export default DisplayTodo;