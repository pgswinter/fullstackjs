let actions = {
	linking: function(){
		return {
			type: 'LINKING',
			id: Math.round(Math.random() * 100)
		}
	},
	// createInfoProduct: function(){
	// 	return{
	// 		type: "INFO_PRODUCT",
	// 		id: Math.round(Math.random() * 100)
	// 	}
	// },
	// increaseNumber: function(quantity){
	// 	return{
	// 		type: "INCREASE_NUMBER",
	// 		quantity: quantity + 1
	// 	}
	// },
	// decreaseNumber: function(quantity){
	// 	return{
	// 		type: "DECREASE_NUMBER",
	// 		quantity: quantity - 1
	// 	}
	// }
}

export default actions