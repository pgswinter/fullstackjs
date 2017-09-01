import React, {Component} from 'react'
import ProductItem from './ProductList'

class Cart extends Component{
	render(){
		return(
			<div className="cart">
				<div className="notify-number"><i className="fa fa-cart"></i></div>
				<ul>
					<li>
						<ProductItem />
					</li>
				</ul>
			</div>
		)
	}
}

export default Cart