import './App.css';
import AddToDo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import FilterTodo from './components/FilterTodo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listTodos } from "./actions/todoActions"

function App() {

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch(listTodos());
    }, [dispatch]);

    return (
        <div className="App">
{/*             <nav className="navigation-todo">
                 
            </nav> */}
            <AddToDo />
            <DisplayTodo />
            <FilterTodo />
        </div>
    );
}

export default App;
