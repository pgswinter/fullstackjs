function getId(state){
	return state.todos.reduce((maxId,todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

let reducer = function(state, action){
	switch(action.type){
		case 'ADD_TODO':
			console.log('got to correct to do case')
			return Object.assign({},state, {
				todos:[{
					text: action.text,
					complete: false,
					id: getId(state)
				}, ...state.todos]
			})
		case 'COMPLETE_TODO':
			return Object.assign({}, state, {
				todos: state.todos.map((todo) => {
					return todo.id === action.id ? 
					Object.assign({}, todo, {completed: !todo.completed}) : todo
				})
			})
		case 'DELETE_TODO':
			return Object.assign({}, state, {
				todos: state.todos.filter((todo) => {
					return todo.id !== action.id
				})
			})
		case 'CREATE_USER_ID':
			return Object.assign({},state,{
				user:{
					username: state.user.username,
					id: action.id
				}
			})
		default:
			return state;
	}
}

export default reducer