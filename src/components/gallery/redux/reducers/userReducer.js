<<<<<<< HEAD
let userReducer = function(user= {}, action){
	switch(action.type){
		case 'CREATE_USER_ID':
			return {
				username: user.username,
				id: action.id
			}
		default:
			return user;
	}
}

=======
let userReducer = function(user= {}, action){
	switch(action.type){
		case 'CREATE_USER_ID':
			return {
				username: user.username,
				id: action.id
			}
		default:
			return user;
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default userReducer