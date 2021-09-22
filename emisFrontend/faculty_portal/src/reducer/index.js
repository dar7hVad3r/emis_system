import { combineReducers } from 'redux'
import facultyReducer from './facultyReducer'

const reducers = combineReducers({
    user: facultyReducer
})

export default reducers