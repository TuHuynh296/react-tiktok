import { useState } from "react"
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./hooks";


function Login() {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/'
    
    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, {replace: true});
        
    }

    return (
        <div>
            <input 
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;