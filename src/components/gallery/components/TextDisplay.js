<<<<<<< HEAD
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

=======
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

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default TextDisplay