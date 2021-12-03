import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { buyItem } from '../Redux'

function HooksitemContainer() {
    const numOfItems = useSelector(state => state.numOfItems)
    const dispatch =  useDispatch()
    return (
        <div>
            <h2> Num of items - {numOfItems}</h2>
            <button onClick ={() => dispatch(buyItem())}>Buy item</button>
        </div>
    )
}

export default HooksitemContainer
