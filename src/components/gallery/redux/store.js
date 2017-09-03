<<<<<<< HEAD
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
// TODO: add middleware
let finalCreateStore = compose(
	applyMiddleware(thunk, createLogger())
)(createStore)

/*** LEGACY REDUCER */
// export default function configureStore(initialState = {todos: []}){
// 	return finalCreateStore(reducer, initialState)
// }

/* ADVANCE REDUCER */
export default function configureStore(initialState = {todos: [], user: {}}){
	return finalCreateStore(rootReducer, initialState)
=======
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
// TODO: add middleware
let finalCreateStore = compose(
	applyMiddleware(thunk, createLogger())
)(createStore)

/*** LEGACY REDUCER */
// export default function configureStore(initialState = {todos: []}){
// 	return finalCreateStore(reducer, initialState)
// }

/* ADVANCE REDUCER */
export default function configureStore(initialState = {todos: [], user: {}}){
	return finalCreateStore(rootReducer, initialState)
>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
}