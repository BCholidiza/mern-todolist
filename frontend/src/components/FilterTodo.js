import { Link } from "react-router-dom"
import axios from "axios";

const FilterTodo = (props) => {
    
    const num = props.noTodoLeft.length;
    
    const removeRequest = async () => {
        
        await axios.post(`api/todos/remove`);
    }
    
    return (  
        <li className="filter-todo">
            { num ? <span>{ num } items left</span> : <span></span> }
            <Link to="/">All</Link>
            <Link to="/active">Active</Link>
            <Link to="/completed">Completed</Link>
            <Link onClick={ removeRequest } to="">Clear Completed</Link>
        </li>
    );
}
 
export default FilterTodo;