<<<<<<< HEAD
import React, {Component} from 'react';
// import TextInput from './TextInput'
import ToDoInput from './ToDoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {
	render(){
		/*
		**** BIND WITH DISPATCH ****
		return (
			<div>
				<div className="app"><h1>Todo List</h1></div>
				<ToDoInput dispatch={this.props.dispatch} />
				<TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
			</div>
		)
		*/
		
		/* BIND WITHOUT DISPATCH */
		/*
		return (
			<div>
				<div className="app"><h1>Todo List</h1></div>
				<UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>
				<ToDoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
		)
		*/

		/* USING THUNK - RETURN A FUNCTION INSTEAD OF AN OBJECT */
		return (
			<div>
				<div className="app"><h1>Todo List</h1></div>
				<UserInfo user={this.props.user} actions={this.props.actions}/>
				<ToDoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
		)
		
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

=======
import React, {Component} from 'react';
// import TextInput from './TextInput'
import ToDoInput from './ToDoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {
	render(){
		/*
		**** BIND WITH DISPATCH ****
		return (
			<div>
				<div className="app"><h1>Todo List</h1></div>
				<ToDoInput dispatch={this.props.dispatch} />
				<TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
			</div>
		)
		*/
		
		/* BIND WITHOUT DISPATCH */
		/*
		return (
			<div>
				<div className="app"><h1>Todo List</h1></div>
				<UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>
				<ToDoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
		)
		*/

		/* USING THUNK - RETURN A FUNCTION INSTEAD OF AN OBJECT */
		return (
			<div>
				<div className="app"><h1>Todo List</h1></div>
				<UserInfo user={this.props.user} actions={this.props.actions}/>
				<ToDoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
		)
		
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default connect(mapStateToProps,mapDispatchToProps)(App)