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

export default ProductItem