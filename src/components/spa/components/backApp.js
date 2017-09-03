import React, {Component} from 'react';
// get data from api folder
import axios from 'axios';
import {connect} from 'react-redux';
import actions from '../redux/actions';

class App extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			inputText: 'App here',
			contests: this.props.initialContest
		}
	};
	componentDidMount(){
		axios.get('/api/contests')
			.then(resp=>{
				this.setState({
					contests: resp.data.contests
				})
			})
			.catch(console.error)
	}
	handleChange(e){
		this.setState({
			inputText: e.target.value
		})
	}
	handleSubmit(e){
		e.preventDefault()
		this.props.dispatch(actions.renderText(this.state.inputText))
	}
	render(){
		return(
			<div>
				<ul>
					{
						this.state.contests.map(contest=>{
							return <li key={contest.id}>{contest.categoryName} . {contest.contestName}</li>
						})
					}
				</ul>
				<p>state was initial from App: {this.state.inputText}</p>
				<p>state will be changed. Data get from a Object at Client. Process at Store. Connect by Dispatch. Solution will be process at Actions. Result:</p>
				<ul>
					{
						this.props.todos.map(todo=>{
							return <li key={todo.id}>{todo.text}</li>
						})
					}
				</ul>
				<input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
				<button onClick={this.handleSubmit.bind(this)}>Submit</button>
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
export default connect(mapStateToProps)(App)