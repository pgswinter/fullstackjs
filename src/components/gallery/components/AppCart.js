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

export default connect(mapStateToProps,mapDispatchToProps)(AppCart)