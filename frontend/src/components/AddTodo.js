import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddToDo = () => {

    const [newTodo, setNewTodo] = useState({});

    // function handles addition of a new todo item
    const handleAdd = (event) => {
    
        // if this is an enter button, then add to state
        if (event.keyCode === 13){

            const addTodo = { title: event.target.value, isCompleted: false, isDeleted: false };
            setNewTodo(addTodo);
            event.target.value = "";
            
            // post this to backend
            const response = async () => await axios.post("api/todos/add", newTodo);
        }
    }

    useEffect( () => {
                
        //const response = await axios.post("api/todos/add", newTodo);

    }, [newTodo])

    return (  
        <div className="add-todo">
            <input className="new-todo" type='text' onKeyUp={ (e)=>handleAdd(e) } />
        </div>
    );
}
 
export default AddToDo;