let reducer = function(state,action){
	switch(action.type){
		case 'RENDER_TEXT':
			return Object.assign({},state,{
				todos:[{
					text: action.text,
					completed: false
				}, ...state.todos]
			})
		// case 'LOAD_DATA':
		// 	return Object.assign({},state,{
		// 		renders:[{
		// 			data: action.data
		// 		}, ...state.renders]
		// 	})
		default:
			return state;
	}
		
}
export default reducer