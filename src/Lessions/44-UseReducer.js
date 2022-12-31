import React, { useReducer } from "react";

// State
const initState = 0;
// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action type');
    }
}

function UseReducer() {
    const [count, countDispatch] = useReducer(reducer, initState)

    return (
        <div style={{ padding: 32 }}>
            <h1>
                {count}
            </h1>
            <div>
                <button onClick={() => countDispatch(DOWN_ACTION) }>Down</button>
                <button onClick={() => countDispatch(UP_ACTION) }>Up</button>
            </div>
        </div>
    )
}

export default UseReducer;