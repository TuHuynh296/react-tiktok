import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../..'
import { cakeActions } from './cakeSlice'

export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch();
    const handleOrderCake = () => {
        dispatch(cakeActions.ordered())
    }

    const handleRestockCake = () => {
        dispatch(cakeActions.restocked(3))
    }

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={handleOrderCake}>Order cake</button>
            <button onClick={handleRestockCake}>Restock cakes</button>
        </div>
    )
}
