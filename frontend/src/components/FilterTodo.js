import { Link } from "react-router-dom"
import axios from "axios";

const FilterTodo = () => {
    
    const removeRequest = async () => await axios.post(`api/todos/remove`);
    
    return (  
        <nav className="filter-todo">
            <span><Link to="/">All</Link></span>
            <span><Link to="/active">Active</Link></span>
            <span><Link to="/completed">Completed</Link></span>
            <span><Link onClick={ removeRequest } to="">Clear Completed</Link></span>
        </nav>
    );
}
 
export default FilterTodo;