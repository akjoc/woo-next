const Product = ( props ) => {
	const { product } = props;
	return (
		<div className="col-12 col-md-3 mb-3">
			<div className="card">
				<h3 className="card-header text-center">{product.name}</h3>
				<img
					src={ product.images[0].src }
					alt="Product image"/>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">${ product.price }</h6>
					<a href="" className="btn btn-secondary text-center">View</a>
				</div>
			</div>

		</div>
	);
}

export default Product;