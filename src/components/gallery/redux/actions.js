<<<<<<< HEAD
let actions = {
	addTodo: function(text){
		return{
			type: 'ADD_TODO',
			text: text
		}
	},

	completeTodo: function(id){
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},

	deleteTodo: function(id){
		return {
			type: 'DELETE_TODO',
			id: id
		}
	},

	createNewUserId: function(){
		return{
			type: 'CREATE_USER_ID',
			id: Math.round(Math.random() * 100)
		}
	},

	createNewUserIdIfOdd: function(){
		return (dispatch, getState) => {
			const {user} = getState();
			if(user.id % 2 === 0){
				return 
			}
			dispatch(actions.createNewUserId())
		}
	},

	createNewUserIdAsync: function(){
		return (dispatch) => {
			// $.get('url',{
			// 	success: (res) =>{
			// 		dispatch(createNewUserId(res.data))
			// 	}
			// })
			setTimeout(()=>{
				dispatch(actions.createNewUserId())	
			},2500)
		}
	}
}

export default actions

=======
let actions = {
	addTodo: function(text){
		return{
			type: 'ADD_TODO',
			text: text
		}
	},

	completeTodo: function(id){
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},

	deleteTodo: function(id){
		return {
			type: 'DELETE_TODO',
			id: id
		}
	},

	createNewUserId: function(){
		return{
			type: 'CREATE_USER_ID',
			id: Math.round(Math.random() * 100)
		}
	},

	createNewUserIdIfOdd: function(){
		return (dispatch, getState) => {
			const {user} = getState();
			if(user.id % 2 === 0){
				return 
			}
			dispatch(actions.createNewUserId())
		}
	},

	createNewUserIdAsync: function(){
		return (dispatch) => {
			// $.get('url',{
			// 	success: (res) =>{
			// 		dispatch(createNewUserId(res.data))
			// 	}
			// })
			setTimeout(()=>{
				dispatch(actions.createNewUserId())	
			},2500)
		}
	}
}

export default actions

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
// dispatch(addTodo('some text'))