<<<<<<< HEAD
import React, {Component} from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component{
	render(){
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						/* HAVE DISPATCH */
						/* return <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>*/
						/* WITHOUT DISPATCH */
						return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
					})
				}
			</ul>
		)
	}
}

=======
import React, {Component} from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component{
	render(){
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						/* HAVE DISPATCH */
						/* return <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>*/
						/* WITHOUT DISPATCH */
						return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
					})
				}
			</ul>
		)
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default TodoList