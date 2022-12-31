import React, { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutEffect() {

    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0);
        }
    }, [count])

    const handleSetCount = () => {
        if(count > 3) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }

    return (
        <div style={{padding: 32}}>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <h1>{count}</h1>
        </div>
    )
}

export default UseLayoutEffect;