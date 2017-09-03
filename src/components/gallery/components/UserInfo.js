<<<<<<< HEAD
import React, {Component} from 'react'

class UserInfo extends Component{

	handleNewId(){
		this.props.actions.createNewUserId()
	}
	handleNewIdIfOdd(){
		this.props.actions.createNewUserIdIfOdd()
	}
	handleNewIdAsync(){
		this.props.actions.createNewUserIdAsync()
	}
	render(){
		return(
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if Odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
			</li>
		)
	}
}

=======
import React, {Component} from 'react'

class UserInfo extends Component{

	handleNewId(){
		this.props.actions.createNewUserId()
	}
	handleNewIdIfOdd(){
		this.props.actions.createNewUserIdIfOdd()
	}
	handleNewIdAsync(){
		this.props.actions.createNewUserIdAsync()
	}
	render(){
		return(
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if Odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
			</li>
		)
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default UserInfo