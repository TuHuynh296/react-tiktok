import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                Home page
            </div>
            <button onClick={() => navigate('order-summary', {replace: false})}>Place order</button>
            {/* replace top url of history stack with current url*/}
        </>
    )
}

export default Home;