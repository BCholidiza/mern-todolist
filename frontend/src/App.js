import './App.css';
import AddToDo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import FilterTodo from './components/FilterTodo';
import React, { useState } from 'react';

function App() {

    return (
        <div className="App">
            <AddToDo />
            <DisplayTodo />
            <FilterTodo />
        </div>
    );
}

export default App;
