<<<<<<< HEAD
function getId(todos){
	return todos.reduce((maxId,todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

let todoReducer = function(todos = [], action){
	switch(action.type){
		case 'ADD_TODO':
			console.log('got to correct to do case')
			return [{
					text: action.text,
					complete: false,
					id: getId(todos)
				}, ...todos]
		case 'COMPLETE_TODO':
			return todos.map((todo) => {
					return todo.id === action.id ? 
					Object.assign({}, todo, {completed: !todo.completed}) : todo
				})
		case 'DELETE_TODO':
			return todos.filter((todo) => {
					return todo.id !== action.id
				})
		default:
			return todos;
	}
}

=======
function getId(todos){
	return todos.reduce((maxId,todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

let todoReducer = function(todos = [], action){
	switch(action.type){
		case 'ADD_TODO':
			console.log('got to correct to do case')
			return [{
					text: action.text,
					complete: false,
					id: getId(todos)
				}, ...todos]
		case 'COMPLETE_TODO':
			return todos.map((todo) => {
					return todo.id === action.id ? 
					Object.assign({}, todo, {completed: !todo.completed}) : todo
				})
		case 'DELETE_TODO':
			return todos.filter((todo) => {
					return todo.id !== action.id
				})
		default:
			return todos;
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default todoReducer