import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './Home';
import NewsPage from './News';
import ContactPage from './Contact';


function ReactRouterV6() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/news' element={<NewsPage/>}></Route>
                <Route path='/contact' element={<ContactPage/>}></Route>
            </Routes>
        </div>
    )
}

export default ReactRouterV6;