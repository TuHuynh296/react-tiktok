import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { useEffect, useState } from "react";

function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();
    const [isChecking, setIsChecking] = useState(true);
    const [isAuthenticated , setIsAuthenticated ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkIsAuthValid = async () => {
            const getAuth = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true);
                        //
                        // reject(false);
                    }, 2000);
                });
    
            }

            getAuth().then((value) => {
                setIsAuthenticated(value);
            }).catch((err) => {
                setIsAuthenticated(false);
            }).finally(() => {
                setIsChecking(false);
            })
        }

        checkIsAuthValid();
    }, []);


    return (
        <>
            {
                isChecking
                    ? <div>Loading ...</div>
                    : isAuthenticated 
                        ? children
                        : (
                            <Navigate
                                to="/login"
                                state={{ path: location.pathname }}
                            />
                        )
            }
        </>
    );

    // https://stackoverflow.com/questions/70658559/protected-routes-in-react-router-v6-using-usestate-but-always-returns-false
}

export default RequireAuth;