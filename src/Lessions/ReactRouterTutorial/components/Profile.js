import {useAuth} from './auth'
import {useNavigate} from 'react-router-dom'

function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    return (
        <>
            <div>Welcome {auth.user}</div>
            {
                auth.user && <button onClick={handleLogout}>Logout</button>
            }
            
        </>
    )
}

export default Profile;