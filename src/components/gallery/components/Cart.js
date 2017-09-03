<<<<<<< HEAD
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

=======
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

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default Cart