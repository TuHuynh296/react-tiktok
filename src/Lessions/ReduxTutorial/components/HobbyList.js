import PropsTypes from 'prop-types'

HobbyList.propsTypes = {
    hobbyList: PropsTypes.array,
    activeId: PropsTypes.string,
    onClickHobby: PropsTypes.function
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onClickHobby: () => { },
}

function HobbyList({ hobbyList, activeId, onClickHobby }) {


    return (
        <div>
            <ul>
                {
                    hobbyList.map(hobby => (
                        <li style={
                            hobby.id === activeId
                                ? { color: "green", cursor: "pointer" }
                                : {}}
                            key={hobby.id}
                            onClick={() => onClickHobby(hobby.id)}>
                            {hobby.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HobbyList;