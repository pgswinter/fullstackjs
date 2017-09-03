import React, {Component} from 'react'

class Contest extends Component{
	componentDidMount(){
		this.props.fetchNames(this.props.nameIds);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		// read the value that the user typed
		this.props.addName(this.refs.newNameInput.value, this.props._id)
		this.refs.newNameInput.value = '';
	}
	render(){
		return(
			<div className="Contest">
				<div className="contest-description">
					{this.props.description}
				</div>
				<div className="home-link link"
					onClick={this.props.contestListClick}
				>
					Contest List
				</div>
				<div className="proposed-contest">
					<ul className="item">
						{
							this.props.nameIds.map(nameId =>
								<li key={nameId} className="list-group-item">
									{this.props.lookupName(nameId).name}
								</li>
						)}
					</ul>
				</div>
				<div className="add-contest">
					<form onSubmit={this.handleSubmit}>
						<input type="text" 
							placeholder="New Name Here ..."
							ref="newNameInput"
							/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}
export default Contest