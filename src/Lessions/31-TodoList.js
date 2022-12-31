import React, { useState } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState('');
    const [listToDo, setListToDo] = useState([]);

    const addToDo = () => {
        if (!toDo) {
            return;
        }

        setListToDo(prev => [...prev, toDo])
        setToDo('');
    }

    return (
        <div style={{ padding: 32 }}>
            <input
                value={toDo}
                onChange={(event) =>
                    setToDo(event.target.value)
                } />
            <button onClick={addToDo}>Add</button>
            <ul>
                {
                    listToDo.map((toDo) => (
                        <li key={toDo}>{toDo}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList;