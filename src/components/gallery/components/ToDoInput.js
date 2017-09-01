import React, {Component} from 'react'
// Using DISPATCH
import actions from '../redux/actions'
class ToDoInput extends Component{
	constructor(props, context){
		super(props,context);
		this.state = {
			inputText: ''
		}
	}

	// deleteLetter(){
		// take current this.state.inputText
		// delete letter
		// update state
		// this.setState({
			// inputText: this.state.inputText.substring(0,this.state.inputText.length-1)
		// })
	// }

	handleChange(e){
		this.setState({
			inputText: e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault()
		// *** Using DISPATCH
		// this.props.dispatch(actions.addTodo(this.state.inputText))
		// *** WITHOUT DISPATCH
		this.props.addTodo(this.state.inputText)
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input 
					type="text" 
					placeholder="Type in yout todo"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
					/>
					<input type="submit" text="Submit"/>
				</form>
			</div>
		)
	}
}

export default ToDoInput