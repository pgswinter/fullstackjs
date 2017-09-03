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

const onPopState = handler => {
	window.onpopstate = handler;
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
		onPopState((event) => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			});
		});
	}

	componentWillUnmount(){
		// clean timers, listeners
		onPopState(null)
	}

	fetchContest = (contestId) => {
		pushState(
			{currentContestId: contestId},
			`/contest/${contestId}`
		);
		// **** fetch Data from server
		api.fetchContest(contestId).then(contest => {
			this.setState({
				currentContestId: contest._id,
				contests:{
					...this.state.contests,
					[contest._id]: contest
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

	// *** navigating to list
	fetchContestList = () => {
		pushState(
			{currentContestId: null},
			`/`
		);

		api.fetchContestList().then(contests => {
			this.setState({
				currentContestId: null,
				contests
			});
		});

	};
	// *** navigating to list

	// **** fetch Names DB

	// **** fetch Names DB

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
	fetchNames = (nameIds) => {
		if(nameIds.length === 0){
			return;
		}
		api.fetchNames(nameIds).then(names => {
			this.setState({
				names
			});
		});
	};
	currentContest(){
		return this.state.contests[this.state.currentContestId];
	}
	lookupName = (nameId) => {
		// Fix bug undefine nameId because it's unavaible right now
		if(!this.state.names || !this.state.names[nameId]){
			return {
				name: '...'
			};
		}
		return this.state.names[nameId];
	};
	addName = (newName, contestId) => {
		// api
		api.addName(newName, contestId).then(resp =>
			this.setState({
				contests:{
					...this.state.contests,
					[resp.updateContest._id]: resp.updateContest
				},
				names:{
					...this.state.names,
					[resp.newName._id]: resp.newName
				}
			})
		)
		.catch(console.error);
	};
	currentContent(){
		// **** before Refactor 
		// if(this.state.currentContestId){
		// 	return <Contest {...this.state.contests[this.state.currentContestId]}/>
		// }
		// **** before Refactor

		// **** after Refactor
		if(this.state.currentContestId){
			return <Contest 
					contestListClick={this.fetchContestList}
					fetchNames={this.fetchNames}
					lookupName={this.lookupName}
					addName={this.addName}
					{...this.currentContest()}/>
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