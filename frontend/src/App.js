import './App.css';
import AddToDo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import FilterTodo from './components/FilterTodo';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <div className="content">
                    <AddToDo />
                    <Routes>
                        <Route exact path="/" element={ <DisplayTodo /> } />
                        <Route exact path="/active" element={ <DisplayTodo /> } />
                        <Route exact path="/completed" element={ <DisplayTodo /> } />
                        <Route exact path="/remove"  element={ <DisplayTodo /> } />
                    </Routes>
                    <FilterTodo />
                </div>
            </div>
        </Router>
    );
}

export default App;
