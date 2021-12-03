import { createStore } from 'redux'
import itemReducer from './itemReducers'

const store = createStore(itemReducer)



export default store