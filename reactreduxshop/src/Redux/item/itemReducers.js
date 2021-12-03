import { BUY_ITEM } from "./itemTypes"




const intialState = {
    numOfItems: 100
}

const itemReducer = ( state  = intialState , action ) => {
    switch(action.type){
        case BUY_ITEM : return {
            ...state,
            numOfItems: state.numOfItems - 1  
        }
        default: return  state
        
    }
}

export default itemReducer