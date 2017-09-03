import React, {Component} from 'react'

class TextDisplay extends Component{

	handleClick(){
		this.props.deleteLetter()
	}

	render(){
		return (
			<div>
				<div>{this.props.text}</div>
				<button onClick={this.handleClick.bind(this)}>Delete a text</button>		
			</div>
		)
	}
}

export default TextDisplay