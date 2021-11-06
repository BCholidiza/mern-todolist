export const todoListReducer = (state = { todos: []}, action) => {

    switch (action.type) {
        case "TODO_LIST_REQUEST":
            return { loading: true, products: [] };
            break;
        case "TODO_LIST_SUCCESS":
            return { loading: false, products: action.payload };
            break
        case "TOD_LIST_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
            break;
    }
}