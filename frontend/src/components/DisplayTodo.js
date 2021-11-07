import { useDispatch, useSelector } from "react-redux";
import { listTodos, activeTodos, completedTodos } from "../actions/todoActions"
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const DisplayTodo = () => {
    
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
               error ? <div>{ error }</div> : todos.map( todo => <div className="list-todo" key={ todo._id } >{ todo.title }</div>)
            }
        </div>
    );
}
 
export default DisplayTodo;