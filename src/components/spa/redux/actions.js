let actions = {
	renderText: function(text){
		return {
			type: 'RENDER_TEXT',
			text: text
		}
	},
	// loadData: function(data){
	// 	return {
	// 		type: 'LOAD_DATA',
	// 		data: data
	// 	}
	// }
}

export default actions