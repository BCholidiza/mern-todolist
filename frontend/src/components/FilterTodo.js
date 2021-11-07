import { Link } from "react-router-dom"

const FilterTodo = () => {
    return (  
        <nav className="filter-todo">
            <span><Link to="/">All</Link></span>
            <span><Link to="/todos/active">Active</Link></span>
            <span><Link to="/todos/completed">Completed</Link></span>
            <span><Link to="#">Clear Completed</Link></span>
        </nav>
    );
}
 
export default FilterTodo;