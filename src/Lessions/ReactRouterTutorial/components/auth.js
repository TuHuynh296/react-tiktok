import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "./hooks";

const USER = 'user'
const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useLocalStorage(USER, null);
    
    const login = (user) => {
        setUser(user);
    }
    

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {
    AuthProvider, useAuth
}