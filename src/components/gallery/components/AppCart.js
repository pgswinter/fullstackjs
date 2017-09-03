<<<<<<< HEAD
import React, {Component} from 'react';
import ProductList from './ProductList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/cart_actions'
import Cart from './Cart'

class AppCart extends Component{
	render(){
		return (
			<div>
				<ProductList />
				<Cart />
			</div>
		)
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

=======
import React, {Component} from 'react';
import ProductList from './ProductList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/cart_actions'
import Cart from './Cart'

class AppCart extends Component{
	render(){
		return (
			<div>
				<ProductList />
				<Cart />
			</div>
		)
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default connect(mapStateToProps,mapDispatchToProps)(AppCart)