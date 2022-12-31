import { ADD_TODO, DELETE_TODO, EDIT_TODO_INPUT } from "./constants"

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

const editTodoInput = (payload) => ({
    type: EDIT_TODO_INPUT,
    payload
})

const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
})

export {
    addTodo,
    editTodoInput,
    deleteTodo
}