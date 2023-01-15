import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';

export const UserView = () => {
    const loading = useSelector(state => state.user.loading);
    const users = useSelector(state => state.user.users);
    const error = useSelector(state => state.user.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (
        <div>
            <h2>List of user</h2>
            {loading ? <div>Loading ...</div> : null}
            {!loading && error ? <div>{error}</div> : null}
            {!loading && users?.length ? <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div> : null}
        </div>
    )
}
