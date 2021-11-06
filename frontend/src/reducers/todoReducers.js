import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL } from "../constants/todoConstants";

export const todoListReducer = (state = { todos: []}, action) => {

    switch (action.type) {
        case TODO_LIST_REQUEST:
            return { loading: true, todos: [] };
            break;
        case TODO_LIST_SUCCESS:
            return { loading: false, todos: action.payload };
            break
        case TODO_LIST_FAIL:
            return { loading: false, error: action.payload };
            break;
        default:
            return state;
    }
}