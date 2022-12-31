import React, { useState } from "react";

function TwoWayBinding() {
    const gifts = [
        'CPU i9',
        'RAM 32GB',
        'RGB keyboard'
    ]

    const [gift, setGift] = useState(null);

    const updateGift = () => {
        setGift(gifts[Math.floor(Math.random() * gifts.length)]);
    }

    const [inputValue, setInputValue] = useState('toi di tim');;

    const courses = [
        {
            id: 1,
            name: 'HTML, CSS'
        },
        {
            id: 2,
            name: 'Javascript'
        },
        {
            id: 3,
            name: 'Reactjs'
        }
    ]

    const [selectedCheckboxes, setSelectedCheckboxes] = useState(() => {
        const defaultSelectedCheckboxes = {}

        courses.forEach((course) => {
            defaultSelectedCheckboxes[course.id] = false;
        })
        return defaultSelectedCheckboxes;
    });

    console.log(Object.entries(selectedCheckboxes).filter((item) => item[1]).map((item) => item[0]));
    return (
        <div style={{ padding: 32 }}>
            {/* <h1>{gift ? gift : 'Have no gift'}</h1>
            <button onClick={updateGift}>Get gift</button> */}

            {/* <input value={inputValue}
                onChange={e => setInputValue(e.target.value)}></input> */}
            {/* {
                courses.map(course => (
                    <div key={course.id}>
                        <input
                            type="radio"
                            checked={courseSelected.id === course.id}
                            onChange={() => setCourse(course)} />
                        <label>{course.name}</label>
                    </div>
                ))
            } */}


            {
                courses.map(course => (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            checked={selectedCheckboxes[course.id]}
                            onChange={(event) => {
                                console.log('>>> event.target.value', event.target.checked)
                                setSelectedCheckboxes({
                                    ...selectedCheckboxes,
                                   [course.id]: event.target.checked
                                })
                            }} />
                        <label>{course.name}</label>
                    </div>
                ))
            }

        </div>
    )
}

export default TwoWayBinding;