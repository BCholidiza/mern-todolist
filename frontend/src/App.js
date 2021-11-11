import './App.css';
import DisplayTodo from './components/DisplayTodo';
import AddToDo from './components/AddTodo';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <Router>
            
            <div className="App">
                <h2>TO DO</h2>
                <AddToDo />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={ <DisplayTodo /> } />
                        <Route exact path="/active" element={ <DisplayTodo /> } />
                        <Route exact path="/completed" element={ <DisplayTodo /> } />
                        <Route exact path="/remove"  element={ <DisplayTodo /> } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
