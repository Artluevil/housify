import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './CounterSlice'

export const Counter = () => {

    const state = useSelector(state => state.counter)
    const dispatch = useDispatch()


    return (
        <div>
            <p>{state.value}</p>
            <p onClick={() => dispatch(increment())} >+</p>
        </div>
    )
}
