import React from 'react'
import {render} from 'react-dom'
import AppCart from '../components/AppCart'
import configureStore from '../redux/cart_store'
import {Provider} from 'react-redux'

let initialState = {
	product: {
		name: 'hammer',
		price: '$10',
		id: 13
	}
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<AppCart/>
	</Provider>,
	document.getElementById('app-cart')
)