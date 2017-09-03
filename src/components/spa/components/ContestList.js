import React, {Component} from 'react'
import ContestPreview from './ContestPreview'
// import PropTypes from 'prop-types'

const ContestList = ({contests,onContestClick}) => (
	<div className="ContestList">
		{Object.keys(contests).map(contestId=>
			<ContestPreview onClick={onContestClick} key={contestId} {...contests[contestId]} />
		)}
	</div>
)

// class ContestList extends Component{
// 	// _renderObject(){
// 	// 	return Object.keys(this.props.contests).map((contestId,i) => {
// 	// 		return(
// 	// 			<ContestPreview onClick={this.props.onContestClick} key={contestId} {...this.props.contests[contestId]} />
// 	// 		)
// 	// 	})
// 	// }
// 	render(){
// 		return(
// 			<div className="ContestList">
// 				{this._renderObject()}
// 			</div>
// 		)
// 	}
// }

// ContestList.propTypes = {
// 	contests: PropTypes.object
// };

export default ContestList;