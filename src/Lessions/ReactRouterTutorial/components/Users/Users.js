import { useEffect } from "react";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";

function User() {
    const users = [
        {
            name: 'User 1',
            id: 1
        },
        {
            name: 'User 2',
            id: 2
        },
        {
            name: 'User 3',
            id: 3
        }
    ];
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const isActiveFilter = searchParams.get('filter');

    useEffect(() => {
        console.log(searchParams);
    })

    return (
        <>
            <div>Users Page</div>
            <nav>
                {
                    users.map((user) => (
                        <li style={{ cursor: "pointer" }}
                            key={user.id}
                            onClick={() => { navigate(user.id + "") }}
                        >
                            {user.name}
                        </li>
                    ))
                }
            </nav>
            <Outlet/>
            <div>
                <button onClick={()=>setSearchParams({filter: 'active', name: 'tu', email: 'tu@a.com'})}>Active Users</button>
                <button onClick={()=>setSearchParams({})}>Reset Filter</button>
            </div>
            {
                isActiveFilter ? <h2>Active User</h2>  : <h2>All User</h2>
            }
        </>
    )
}

export default User;