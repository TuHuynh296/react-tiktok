import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Navbar() {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const auth = useAuth();

    return (
        <nav>
            <ul>
                <NavLink style={navLinkStyles} to="/">Home</NavLink>
                <NavLink style={navLinkStyles} to="/about">About</NavLink>
                <NavLink style={navLinkStyles} to="/products">Products</NavLink>
                <NavLink style={navLinkStyles} to="/users">Users</NavLink>
                <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
                {
                    !auth.user && <NavLink style={navLinkStyles} to="/login">Login</NavLink>
                }
                
            </ul>
        </nav>
    )
}

export default Navbar;