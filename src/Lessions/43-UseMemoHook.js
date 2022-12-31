import React, { memo, useCallback, useMemo, useRef, useState } from "react";

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [listItem, setListItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const nameRef = useRef();

    const handleAdd = () => {
        console.log('>>> handleAdd');
        setListItem([...listItem, {name, price}]);
        setTotalPrice(prev => parseInt(prev) + parseInt(price));
        setName('');
        setPrice(0);

        if(nameRef.current) {
            nameRef.current.focus();
        }
    }

    // ví dụ như tính count bằng một function phức tạp
    const total = useMemo(() => {
        return listItem.reduce((acc, prod) => {
            console.log('>>> total');
            return parseInt(acc) + parseInt(prod.price);
        }, 0)
    }, [listItem]) 


    return (
        <div style={{ padding: 32 }}>
            <div>
                <input
                    ref={nameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name" />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price" />
            </div>
            <button onClick={handleAdd}>Add</button>
            <div>
                Total: {total}
                <ul>
                    {
                        listItem.map((item, index) => (
                            <li key={index}>
                                {item.name}, {item.price}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default UseMemoHook;