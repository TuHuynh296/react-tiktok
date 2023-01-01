import { useDispatch, useSelector } from "react-redux";
import { HobbyList } from "./components";
import { hobbyActions } from "./store/actions";


function ReduxTutorial() {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    
    const dispatch = useDispatch();

    const handleAddNewHobby = () => {
        const newId = Math.floor(Math.random() *99999);
        
        dispatch(hobbyActions.addNewHobby({
            id: newId,
            title: newId
        }));
    }

    const handleClickHobby = (hobbyId) => {
        dispatch(hobbyActions.setActiveHobby(hobbyId));
    }
    
    console.log('>>> hobby list', hobbyList);
    return (
        <div>
            <h1> REDUX HOOKS</h1>
            <button onClick={handleAddNewHobby}> Add new hobby </button>
            <HobbyList hobbyList={hobbyList}
                       activeId={activeId}
                       onClickHobby={handleClickHobby}/>
        </div>
    )
}

export default ReduxTutorial;