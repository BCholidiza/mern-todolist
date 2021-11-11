import { useDispatch, useSelector } from "react-redux";
import FilterTodo from '../components/FilterTodo';
import { listTodos } from "../actions/todoActions";
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

const DisplayTodo = () => {

    // function handles toggle of isCompleted
    const handleIsCompletedToggle = (event) => {

        const selectedTodoId = event.target.dataset.key;
        const selectedTodoCompleteStatus = { isCompleted: event.target.dataset.iscompleted === "true" ? false : true };
        sendRequest(selectedTodoCompleteStatus, selectedTodoId);
    }

    const handleNoLeft = (todos) => {
        
        let activeTodo = 0;
        todos.foreach( (todo) => !todo.isCompleted ? activeTodo++ : activeTodo );
        return activeTodo;

    }

    // post this to backend
    const sendRequest = async (data, todoId) => {
        
        try{
            
            const response = await axios.post(`api/todos/update/${todoId}`, data);
            
            if (response.status === 200){

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
        <div>
            <div className="display-todo">
                
                { loading ? <div>Loading...</div> : 
                error ? <div>{ error }</div> : 
                    <ul>{ todos.map( todo => 
                            <li key={ todo._id } >
                                <span className="list-todo" data-iscompleted={ todo.isCompleted } data-key={ todo._id } 
                                    key={ todo._id } 
                                    style={{ textDecoration: !todo.isCompleted || "line-through" }}
                                    onClick={ (e) => handleIsCompletedToggle(e) }
                                >
                                { todo.title }
                                </span>
                                <span>X</span>
                            </li>) 
                        }
                        <FilterTodo noTodoLeft={ todos.filter( (todo) => todo.isCompleted !== true) }/>
                    </ul>
                }
            </div>
        </div>
    );
}
 
export default DisplayTodo;