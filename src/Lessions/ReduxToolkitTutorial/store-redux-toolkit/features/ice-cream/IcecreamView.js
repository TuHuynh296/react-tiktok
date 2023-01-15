import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icecreamActions } from './icecreamSlice'

export const IcecreamView = () => {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch();

    const handleOrder = () => {
        dispatch(icecreamActions.ordered())
    }

    const handleRestock = () => {
        dispatch(icecreamActions.restocked(3))
    }

    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <button onClick={handleOrder}>Order ice cream</button>
            <button onClick={handleRestock}>Restock ice creams</button>
        </div>
    )
}
