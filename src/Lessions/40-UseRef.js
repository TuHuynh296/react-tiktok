import React, { useEffect, useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(60);
    // case 1: keep state interval
    const intervalNumber = useRef();
    // case 2: compare state before and after
        // useEffect sẽ được gọi sau khi component đã render xong do đó tận dụng useEffect để lưu giá trị cũ
    const prevCount = useRef();
    console.log('prevCount, count', prevCount.current, count);
    // case 3: get element DOM
    const h1Ref = useRef(); 

    useEffect(() => {
        console.log(h1Ref.current);
    })

    const handleStart = () => {
        if(intervalNumber.current) {
            return;
        }

        intervalNumber.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    };

    const handleStop = () => {
        clearInterval(intervalNumber.current);
    }

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    useEffect(() => {
        return () => {
            console.log('>>> clear interval');
            clearInterval(intervalNumber.current);
        }
    }, []);

    return (
        <div style={{padding: 32}}>
            <h1 ref={h1Ref}>
                {count}
            </h1>
            <button onClick={() => handleStart()}>Start</button>
            <button onClick={() => handleStop()}>Stop</button>
        </div>
    )
}

export default UseRef;