import { createLogger } from "redux-logger";
import store from "./store-redux-toolkit";
import { cakeActions } from "./store-redux-toolkit/features/cake/cakeSlice";
import { icecreamActions } from "./store-redux-toolkit/features/ice-cream/icecreamSlice";
import { fetchUsers, userActions } from "./store-redux-toolkit/features/user/userSlice";


const reduxToolkitDemo = () => {
    // console.log('>>> Inital state ', store.getState());
    const unsubscribe = store.subscribe(() => {
        // console.log('Updated state ', store.getState());
    });

    // store.dispatch(cakeActions.ordered());
    // store.dispatch(cakeActions.ordered());
    // store.dispatch(cakeActions.ordered());
    // store.dispatch(cakeActions.restocked(3));

    // store.dispatch(icecreamActions.ordered());
    // store.dispatch(icecreamActions.ordered());
    // store.dispatch(icecreamActions.ordered());
    // store.dispatch(icecreamActions.restocked(3));

    store.dispatch(fetchUsers())

    unsubscribe();
}

export default reduxToolkitDemo;