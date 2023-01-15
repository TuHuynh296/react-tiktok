import logger from 'redux-logger';
import { orderCake, orderIceCream, restockCake, restockIceCream, updateSugarOfCake } from './store-redux/actions';
import rootReducer from './store-redux/reducer';
import asycnAction from './asyncActions';
import { useEffect } from 'react';

//  https://github.com/gopinav/Redux-Toolkit-Tutorials

const reduxDemo = () => {
    const redux = require('redux');
    const createStore = redux.createStore;
    const bindActionCreators = redux.bindActionCreators;
    const applyMiddleware = redux.applyMiddleware;
    
    const store = createStore(rootReducer, applyMiddleware(logger));
    const cakeUnsubscibe = store.subscribe(() => {
        console.log('Update state cake', store.getState().cake);
    })
    
    // const iceCreamUnsubscibe = store.subscribe(() => {
    //     console.log('Update state ice cream', store.getState().iceCream);
    // })
    
    store.dispatch(orderCake());
    store.dispatch(orderCake());
    store.dispatch(orderCake());
    store.dispatch(restockCake(3));
    // store.dispatch(updateSugarOfCake(false));
    
    
    // const actions = bindActionCreators({orderCake, restockCake}, store.dispatch);
    // actions.orderCake();
    // actions.orderCake();
    // actions.orderCake();
    // actions.restockCake(3);
    
    // cakeUnsubscibe();
    // iceCreamUnsubscibe();   

    // asycnAction();
}

export default reduxDemo;
