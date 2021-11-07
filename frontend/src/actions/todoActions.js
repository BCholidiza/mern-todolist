import axios from "axios";
import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL } from "../constants/todoConstants";

export const listTodos = (pathname) => async (dispatch) => {

    try {
        dispatch({ type: TODO_LIST_REQUEST });

        const { data } = await axios.get("api/todos/" +pathname);

        dispatch({ type: TODO_LIST_SUCCESS, payload: data });
    } 
    catch (error) {
        
        dispatch({ type: TODO_LIST_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};