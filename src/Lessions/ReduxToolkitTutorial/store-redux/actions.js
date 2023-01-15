import { CAKE_ORDERED, CAKE_RESTOCKED, CAKE_SUGAR_UPDATED, ICE_CREAM_ORDERED, ICE_CREAM_RESTOCKED } from "./constants";

const orderCake = () => ({
    type: CAKE_ORDERED,
    payload: 1
})

const restockCake = (qty = 1) => ({
    type: CAKE_RESTOCKED,
    payload: qty
})

const updateSugarOfCake = (payload) => ({
    type: CAKE_SUGAR_UPDATED,
    payload
})

const orderIceCream = () => ({
    type: ICE_CREAM_ORDERED,
    payload: 1
})

const restockIceCream = (qty = 1) => ({
    type: ICE_CREAM_RESTOCKED,
    payload: qty
})



export {
    orderCake,
    restockCake,
    orderIceCream,
    restockIceCream,
    updateSugarOfCake
}
