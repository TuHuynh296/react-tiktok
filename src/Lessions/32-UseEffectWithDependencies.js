import React, { useEffect, useState } from "react";

function ToDoList() {
    const tabs = ['posts', 'comments', 'albums'];
    const [tab, setTab] = useState('posts');
    const [listItem, setListItem] = useState([]);
    const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);
    const [time, setTime] = useState(180);
    const [srcImg, setSrcImg] = useState(null);

    const lessions = [
        {
            id: 1,
            title: 'Lession 1'
        },
        {
            id: 2,
            title: 'Lession 2'
        },
        {
            id: 3,
            title: 'Lession 3'
        },
    ]
    const [selectedLession, setSelectedLession] = useState(1);
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${tab}`)
    //         .then((res) => res.json())
    //         .then((data) => setListItem(data));
    // }, [tab]);

    // Effect with DOM event
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const wrapper = document.getElementById("wrapper");
    //         setIsShowScrollToTop(() => {
    //             return wrapper.scrollHeight - (window.innerHeight + window.scrollY) > 200
    //         })
    //     }

    //     console.log('>>> event useEffect');
    //     document.addEventListener('scroll', handleScroll)

    //     // Clean up function, unmounted
    //     return () => {
    //         console.log('remove event listener');
    //         document.removeEventListener('scroll', handleScroll)
    //     }
    // }, []);

    // useEffect with timer function
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('time', time);
    //         setTime(prevTime => prevTime - 1);
    //     }, 1000);

    //     // return () => {
    //     //     clearInterval(interval);
    //     // }
    // }, [])

    // useEffect with preview avatar
    // useEffect(() => {
    //     return () => {
    //         srcImg && URL.revokeObjectURL(srcImg.preview)
    //     };
    // }, [srcImg])

    // const readFile = (input) => {
    //     if (input.target.files && input.target.files[0]) {
    //         const file = input.target.files[0]; 
    //         file.preview = URL.createObjectURL(file)

    //         setSrcImg(file);
    //     }
    // }

    // useEffect with fake chat
    useEffect(() => {
        const handleEventLession = ({detail}) => {
            console.log(detail);
        }

        selectedLession && window.addEventListener(`lession-${selectedLession}`, handleEventLession);

        return () => {
            selectedLession && window.removeEventListener(`lession-${selectedLession}`, handleEventLession);        
        }
    }, [selectedLession])

    return (
        <div id="wrapper" style={{ padding: 32, position: "relative" }}>
            <ul>
                {
                    lessions.map((lession) => (
                        <li style={
                            {
                                color: selectedLession === lession.id ? "green" : "black",
                                cursor: "pointer"
                            }
                        }
                            key={lession.id}
                            onClick={() => { setSelectedLession(lession.id) }}>
                            {lession.title}
                        </li>
                    ))
                }
            </ul>

            {/* <form>
                <input
                    type="file"
                    accept="image/*"
                    onChange={readFile}
                />
            </form>
            {
                srcImg && <img
                    id="img"
                    src={srcImg.preview}
                    alt="your image"
                />
            } */}

            {/* <div>Time remaining: {time}</div> */}

            {/* {
                tabs.map((_tab) => (
                    <button
                        key={_tab}
                        onClick={() => setTab(_tab)}
                        style={_tab === tab ? { color: "white", backgroundColor: "black" } : {}}
                    >
                        {_tab}
                    </button>
                ))
            }
            <ul>
                {
                    listItem.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
            {
                !isShowScrollToTop &&
                <button
                    style={{ position: "absolute", bottom: 400, right: 20 }}>
                    Back to top
                </button>
            } */}
        </div>
    )
}

export default ToDoList;