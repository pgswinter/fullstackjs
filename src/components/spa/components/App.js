import React, {Component} from 'react';
// get data from api folder
// import axios from 'axios';
import {connect} from 'react-redux';
import actions from '../redux/actions';
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../../../api'

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

class App extends Component{
	constructor(props, context){
		super(props, context)
		
		// **** before refactor
		// this.state = {
		// 	contests: this.props.initialContests
		// }
		// **** before refactor

		// **** after refactor
		this.state = this.props.initialData;
		// **** after refactor

		this.fetchContest = this.fetchContest.bind(this);
	};
	componentDidMount(){
		// axios.get('/api/contests')
		// 	.then(resp=>{
		// 		this.setState({
		// 			contests: resp.data.contests
		// 		})
		// 	})
		// 	.catch(console.error)
	}
	fetchContest(contestId){
		pushState(
			{currentContestId: contestId},
			`/contest/${contestId}`
		);
		// **** fetch Data from server
		api.fetchContest(contestId).then(contest => {
			this.setState({
				currentContestId: contest.id,
				contests:{
					...this.state.contests,
					[contest.id]: contest
				}
			});
		});
		// **** end fetch Data from server

		// **** fetch Data from client
		// this.setState({
		// 	inputText: this.state.contests[contestId].contestName,
		// 	currentContestId: contestId
		// });
		// **** end fetch Data from client
	};
	// handleChange(e){
	// 	this.setState({
	// 		inputText: e.target.value
	// 	})
	// }
	// handleSubmit(e){
	// 	e.preventDefault()
	// 	// this.props.dispatch(actions.renderText(this.state.inputText))
	// }
	pageHeader(){
		if(this.state.currentContestId){
			return this.currentContest().contestName;
		}
		return 'Naming Contests';
	}
	currentContest(){
		return this.state.contests[this.state.currentContestId];
	}
	currentContent(){
		// **** before Refactor 
		// if(this.state.currentContestId){
		// 	return <Contest {...this.state.contests[this.state.currentContestId]}/>
		// }
		// **** before Refactor

		// **** after Refactor
		if(this.state.currentContestId){
			return <Contest {...this.currentContest()}/>
		}
		// **** after Refactor
		return <ContestList 
				onContestClick={this.fetchContest}
				contests={this.state.contests}
				/>
	}
	render(){
		return(
			<div>
				<div className="header">{this.pageHeader()}</div>
				{this.currentContent()}
			</div>
		)
	}
}

function mapStateToProps(state){
	return state;
}

// function mapDispatchToProps(dispatch){
// 	return{
// 		actions: bindActionCreators(actions, dispatch)
// 	}
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)

// export default connect(mapStateToProps)(App)
export default App