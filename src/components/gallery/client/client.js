<<<<<<< HEAD
import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purchase'
	}],
	user: {
		username: 'kurt',
		id: 13
	}
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
=======
import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purchase'
	}],
	user: {
		username: 'kurt',
		id: 13
	}
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
)