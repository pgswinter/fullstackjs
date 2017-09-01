// function getId(products){
// 	return products.reduce((maxId,products) => {
// 		return Math.max(products.id, maxId)
// 	}, -1) + 1
// }

let productReducer = function(product = {}, action){
	switch(action.type){
		case 'LINKING':
			return {
					patch_url: product.patch_url,
					id: action.id
				}
			// return products.map((product) => {
			// 	return product.patch_url === product.patch_url ? 
			// 	Object.assign({}, product, {completed: !product.completed}) : product
			// })
		// case 'INFO_PRODUCT':
		// 	return {
		// 		name: products.name,
		// 		price: products.price,
		// 		id: action.id
		// 	}
		// case 'INCREASE_NUMBER':
		// 	return {
		// 		quantity: action.quantity,
		// 	}
		// case 'DECREASE_NUMBER':
		// 	return {
		// 		quantity: action.quantity,
		// 	}
		default:
			return product;
	}
}

export default productReducer