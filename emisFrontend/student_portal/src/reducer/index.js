import { combineReducers } from 'redux'
import studentReducer from './studentReducer'

const reducers = combineReducers({
    user: studentReducer
})

export default reducers