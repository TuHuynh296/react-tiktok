import { useParams } from "react-router-dom";

function UserDetail() {
    const {userId} = useParams();

    return (
        <>
            <div>User Detail with id is {userId}</div>
        </>
    )
}

export default UserDetail;