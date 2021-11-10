import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const AddToDo = () => {

    const [newTodo, setNewTodo] = useState({});
    const initialRender = useRef(true);

    // function handles addition of a new todo item
    const handleAdd = (event) => {
    
        // if this is an enter button, then add to state
        if (event.keyCode === 13){

            const addTodo = { "title": event.target.value, isCompleted: false, isDeleted: false };
            setNewTodo(addTodo);
            event.target.value = "";
        }
    }

    // post this to backend
    const sendPost = async (toDo) =>{

        try {
            const res = await axios.post("api/todos/add", toDo);
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect( () => {
        
        if (initialRender.current){
            initialRender.current = false;
        }
        else {
            sendPost(newTodo);  
        }
    }, [newTodo])

    return (  
        <div className="add-todo">
            <input className="new-todo" type='text' onKeyUp={ (e)=>handleAdd(e) } />
        </div>
    );
}
 
export default AddToDo;