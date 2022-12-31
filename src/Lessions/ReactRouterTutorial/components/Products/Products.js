import { Link, Outlet, Route, Routes } from "react-router-dom";

function Products() {
    return (
        <>
            <div>Products Page</div>
            <nav className="nav-primary">
                <Link to="featured">Featured Product</Link>
                <Link style={{marginLeft: 10}} to="new">New Product</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Products;