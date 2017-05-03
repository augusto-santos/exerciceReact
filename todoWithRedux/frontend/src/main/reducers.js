import { combineReducers } from 'redux'
import todoReducers from '../todo/todoReducers'

const rootReducers = combineReducers({
    todo: todoReducers
})

export default rootReducers