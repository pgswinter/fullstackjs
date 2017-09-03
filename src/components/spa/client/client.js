import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import axios from 'axios';
// import configureStore from '../redux/store'
import {Provider} from 'react-redux'

// let initialState = {
// 	todos:[{
// 		id: 0,
// 		completed: false,
// 		text: 'Hello World'
// 	}]
// }

// let store = configureStore(initialState)

// axios.get('/api/contests')
// 	.then(resp=>{
// 		render(
// 			<App initialContest={resp.data.contests}/>,
// 			document.getElementById('app')
// 		)
// 	})
// 	.catch(console.error)

render(
	// **** before refactor
	// <App initialContests={window.initialData.contests}/>,
	// **** before refactor
	// **** after refactor
	<App initialData={window.initialData}/>,
	// **** after refactor
	document.getElementById('app')
)
setTimeout(function(){
	render(
		<h2>Clear</h2>,
		document.getElementById('root')
	)
},5000)
