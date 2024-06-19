const Product = ( props ) => {
	const { product } = props;
	return (
		<div className="card mb-3" >
			<h3 className="card-header text-center">{product.name}</h3>
			<img
			     src={ product.images[0].src }
			     alt="Product image"/>
			<div className="card-body text-center">
				<h6 className="card-subtitle mb-3">${ product.price }</h6>
			</div>

		</div>
	);
}

export default Product;