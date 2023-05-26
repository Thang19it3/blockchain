import React, { Component } from 'react'
import "../components/sell.css"

export class Sell extends Component {
	render() {
		return (
			<div className="col-md-12 sell">
				<div className="col-md-4 sell1">
					<h1>Sell Product</h1>
					<form 
						onSubmit={(event) => {
							event.preventDefault()
							const name = this.productName.value
							const img = this.productImg.value
							const pk = this.productPk.value
							const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
							this.props.createProduct(name, price, img, pk)
						}}>
						<div className="form-group mr-sm-2 sell-name">
							<label htmlFor="productName">Product Name</label>
							<input
							id="productName"
							type="text"
							ref={(input) => { this.productName = input }}
							className="form-control"
							placeholder="iPhone 12 Pro"
							required />
						</div>
						<div className="form-group mr-sm-2 sell-price">
							<label htmlFor="productPrice">Product Price</label>
							<input
							id="productPrice"
							type="text"
							ref={(input) => { this.productPrice = input }}
							className="form-control"
							placeholder="1.2"
							required />
						</div>
						<div className="form-group mr-sm-2 sell-price">
							<label htmlFor="productImg">Product Image</label>
							<input
							id="productImg"
							type="text"
							ref={(input) => { this.productImg = input }}
							className="form-control"
							placeholder="Image"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="productPk">Product Type</label>
							<select id="productPk" className="form-control" ref={(input) => { this.productPk = input }}>
								<option value="1">Phone</option>
								<option value="2">Picture</option>
							</select>
						</div>
						
						<button type="submit" className="btn btn-info">POST</button>
					</form>
				</div>
				<hr className="my-4"/>
				<div className = 'col-md-8' >
				<h5 className='h5k'>Your Products</h5>
				<table className="table table-bordered" style={{width: '100%', marginLeft: '100px'}}>
					<thead>
						<tr style={{ textAlign: 'center'}}>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col">Image</th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.filter(p => p.owner === this.props.account).length > 0
							? this.props.products
								.filter(p => p.owner === this.props.account)
								.map((product, key) => {
								return (
									<tr key={key}>
										<th scope="row">{key+1}</th>
										<td>{product.name}</td>
										<td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</td>
										<td style={{ width: '120px'}}><img src={product.img} style={{ width: '100px', height: '100px'}} alt=""/></td>
									</tr>
								)
								})
							: <tr><td colSpan="3" className="text-center">You not have any products yet.</td></tr>
						}
					</tbody>
				</table>
				</div>
			</div>
		)
	}
}

export default Sell
