import React, { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, deleteJob, setJob } from "./actions";
import { logger } from "./logger";

function ToDoAppWithUseReducer() {
    const [listTodo, listTodoDispatch] = useReducer(logger(reducer), initState);
    const { job, jobs } = listTodo;
    const todoRef = useRef();
    const handleAddJob = () => {
        listTodoDispatch(addJob(job));
        listTodoDispatch(setJob(''));
        todoRef.current.focus();
    };

    return (
        <div style={{ padding: 32 }}>
            <h1>
                Todo
            </h1>
            <input
                ref={todoRef}
                value={job}
                placeholder="Enter todo"
                onChange={(e) => listTodoDispatch(setJob(e.target.value))} />
            <button onClick={handleAddJob}>Add</button>
            <ul>
                {
                    jobs.map((todo, index) => (
                        <div key={index} 
                             style={{display: "flex"}}>
                            <li>{todo}</li>
                            <button
                                style={{marginLeft: 20}}
                                onClick={() => listTodoDispatch(deleteJob(todo))}>
                                X
                            </button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoAppWithUseReducer;