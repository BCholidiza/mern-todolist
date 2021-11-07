import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL,
         TODO_ACTIVE_REQUEST, TODO_ACTIVE_SUCCESS, TODO_ACTIVE_FAIL,
         TODO_COMPLETED_REQUEST, TODO_COMPLETED_SUCCESS, TODO_COMPLETED_FAIL } from "../constants/todoConstants";

export const todoListReducer = (state = { todos: []}, action) => {

    switch (action.type) {
        case TODO_LIST_REQUEST:
            return { loading: true, todos: [] };
        case TODO_LIST_SUCCESS:
            return { loading: false, todos: action.payload };
        case TODO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}