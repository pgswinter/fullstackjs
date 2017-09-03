<<<<<<< HEAD
import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer
})

=======
import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer
})

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default rootReducer