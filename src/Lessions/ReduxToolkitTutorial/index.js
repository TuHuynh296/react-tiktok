import { useEffect } from "react";
import reduxDemo from "./redux-demo";
import reduxToolkitDemo from "./redux-toolkit-demo";
import { CakeView } from "./store-redux-toolkit/features/cake/CakeView";
import { IcecreamView } from "./store-redux-toolkit/features/ice-cream/IcecreamView";
import { UserView } from "./store-redux-toolkit/features/user/UserView";

function ReduxToolkitTutorial() {
    useEffect(() => {
        // reduxDemo();
        // reduxToolkitDemo();
    }, [])

    return (
        <div>
            <CakeView/>
            <IcecreamView/>
            <UserView/>
        </div>
    )
}

export default ReduxToolkitTutorial;