import { ADD_TODO, DELETE_TODO, EDIT_TODO_INPUT } from "./constants"

const initState = {
    todoInput: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case EDIT_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo !== action.payload)
            }
        default:
            throw new Error(`Invalid action ${action.type}`)
    }
}

export {
    initState,
}

export default reducer
