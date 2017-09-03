<<<<<<< HEAD
import React, {Component} from 'react'

class ProductItem extends Component{
	render(){
		return(
			<div className="product-item">
				<img src="" alt=""/>
				<label htmlFor="" className="id-product">{this.props.product.id}</label>
				<label className="name-product">{this.props.product.name}</label>
				<label htmlFor="" className="price-product">{this.props.product.price}</label>
				<a href="">Buy</a>
			</div>
		)
	}
}

=======
import React, {Component} from 'react'

class ProductItem extends Component{
	render(){
		return(
			<div className="product-item">
				<img src="" alt=""/>
				<label htmlFor="" className="id-product">{this.props.product.id}</label>
				<label className="name-product">{this.props.product.name}</label>
				<label htmlFor="" className="price-product">{this.props.product.price}</label>
				<a href="">Buy</a>
			</div>
		)
	}
}

>>>>>>> 0e6d5c887faedebb7f96c8cb6d8977747a7f80b5
export default ProductItem