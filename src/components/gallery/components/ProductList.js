import React, {Component} from 'react'
import ProductItem from './ProductList'
class ProductList extends Component{
	render(){
		return(
			<ul>
				<li>
					<ProductItem />
				</li>
			</ul>
		)
	}
}

export default ProductList