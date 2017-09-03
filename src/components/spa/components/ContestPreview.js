import React, {Component} from 'react';

class ContestPreview extends Component{
	handleClick(e) {
		e.preventDefault()
		this.props.onClick(this.props._id)
	};
	render(){
		return (
			<div className="ContestPreview">
				<div className="category-name" >
					{this.props.categoryName}
				</div>
				<div className="contest-name" onClick={this.handleClick.bind(this)}>
					{this.props.contestName}
				</div>
			</div>
		) 
	}
}

// ContestPreview.propTypes = {
// 	categoryName: React.PropTypes.string.isRequired,
// 	contestName: React.PropTypes.string.isRequired
// }
export default ContestPreview