import { useDispatch, useSelector } from "react-redux";
import { listTodos } from "../actions/todoActions";
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import Checked from "../icon-check.svg";
import Unchecked from "../icon-cross.svg";
import axios from "axios";

const DisplayTodo = () => {
    
    const [isCompleted, setIsCompleted] = useState({});

    // function handles toggle of isCompleted
    const handleIsCompletedToggle = (event) => {

        const id = event.target.dataset.key;
        const isCompletedStatus = event.target.dataset.iscompleted;

        console.log(id)
        console.log(isCompletedStatus)
        const todoCompletedStatus = { isCompleted: !isCompletedStatus };
        setIsCompleted(todoCompletedStatus);
        
        // post this to backend
        const response = async () => await axios.post(`/update/${id}`, isCompleted);
    }

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
                            onClick={ e => handleIsCompletedToggle(e) }
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