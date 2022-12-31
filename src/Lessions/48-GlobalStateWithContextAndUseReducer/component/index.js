import { useRef } from "react";
import { useStore, actions } from "../store";


const GlobalStateWithContextAndUseReducer = () => {
    const [state, dispatch] = useStore();
    const { todoInput, todos } = state;
    const inputRef = useRef();
    const handleAddTodo = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.editTodoInput(''));
        inputRef.focus();
    }

    return (
        <div style={{ padding: 32 }}>
            <input
                ref={inputRef}
                placeholder="Enter todo"
                value={todoInput}
                onChange={(e) => dispatch(actions.editTodoInput(e.target.value))}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {
                    todos.map((todo) => (
                        <div style={{display: "flex", gap: 8}}>
                            <li key={todo}>{todo}</li>
                            <button onClick={() => dispatch(actions.deleteTodo(todo))}>X</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default GlobalStateWithContextAndUseReducer