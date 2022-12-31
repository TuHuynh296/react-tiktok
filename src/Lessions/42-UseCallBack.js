import React, { memo, useCallback, useState } from "react";

// Higher Order Component (HOC)
function ComponentA({ onIncrease }) {
    console.log('>>> render ComponentA');
    return (
        <>
            <button onClick={onIncrease}>Increase</button>
        </>
    )

}

const ComponentAMemoized = memo(ComponentA);

function UseCallBack() {
    const [count, setCount] = useState(0);

    

    const handleIncrease = useCallback(() => {
        console.log('>>> handleCallback');
        setCount(prev => prev + 1);
    }, [])



    return (
        <div style={{ padding: 32 }}>
            <ComponentAMemoized onIncrease={handleIncrease}/>
            <h1>
                {count}
            </h1>
        </div>
    )
}

export default UseCallBack;