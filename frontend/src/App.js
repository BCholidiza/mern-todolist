import './App.css';
import AddToDo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import FilterTodo from './components/FilterTodo';
import React, { useState, useEffect } from 'react';
import axios from "axios"

function App() {

    const [todos, setTodos] = useState([]);
    useEffect( () => {

        const fetchTodos = async () => {

            const { data } = await axios.get("/api/todos");
        }
        axios.get("api/todos");

    }, []);

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
