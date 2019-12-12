import {createStore,applyMiddleware,combineReducers} from 'redux'

import thunk from 'redux-thunk'
import indexReduce from './index'

const reducer=combineReducers({
    index:indexReduce
})
console.log(reducer)
let store=createStore(reducer,applyMiddleware(thunk))

export default store