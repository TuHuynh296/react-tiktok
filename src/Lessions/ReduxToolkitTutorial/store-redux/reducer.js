import { combineReducers } from "redux"
import { CAKE_ORDERED, CAKE_RESTOCKED, CAKE_SUGAR_UPDATED, ICE_CREAM_ORDERED, ICE_CREAM_RESTOCKED } from "./constants"
import { produce } from "immer"

const cakeInitialState = {
    numOfCakes: 10,
    ingredients: {
        sugar: true
    }
}

const iceCreamInitialState = {
    numOfIceCreams: 20
}
const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        case CAKE_SUGAR_UPDATED:
            // handle nested object
            return produce(state, (draft) => {
                draft.ingredients.sugar = action.payload;
            })

        default:
            return state;
    }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch (action.type) {
        case ICE_CREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICE_CREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }

        // case CAKE_ORDERED:
        //     return {
        //         ...state,
        //         numOfIceCreams: state.numOfIceCreams - 1
        //     }
    
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;
