import React, { memo, useState } from "react";

// Higher Order Component (HOC)
function ComponentA({count}) {
    console.log('>>> render ComponentA');
}

const ComponentAMemoized = memo(ComponentA);

function Memo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);


    return (
        <div style={{padding: 32}}>
            <ComponentAMemoized count={count}/>
            <h1>
                {count}
            </h1>
            <h1>
                {count2}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount2(count2 + 1)}>Increase 2</button>
        </div>
    )
}

export default Memo;