import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../img/phone-shop.png'
import "../components/navbar.css"

class Navbar extends Component {

	render() {
		return (
			<div className='hihi'>
				<div className='topTop'>
					<div className='col-md-6'>
						<h6 style={{ fontFamily: 'Teko', lineHeight:'30px'}}>Your account: <b>{this.props.account}</b></h6>
					</div>
					<div className='col-md-6'>
						<h6 style={{float: 'right', fontFamily: 'Teko', lineHeight: '30px'}}>Balance: <b>{this.props.balance}</b> ETH </h6>
					</div>
				</div>
				<div className='topBar'>
            		<div className='topLeft'>
                		<ul className='topItem'>
                   			<li className = {this.props.active === 'buy' ? 'nav-item active' : 'nav-item'}>
								   <Link to="/buy" style={{ textDecoration: 'none', color: 'black', fontWeight: '900'}}>
									   <h3>BUY</h3>
								   </Link>
							</li>
                		</ul>
            		</div>
            		<div className='topCenter'>
						<Link to="/" rel="noopener noreferrer">
                			<img src={logo1}  className='topImg' alt=''/>
						</Link>
            		</div>
            		<div className='topRight'>
                		<ul className='topItem'>
                   			<li className={this.props.active === 'sell' ? 'nav-item active' : 'nav-item'}>
							   <Link to="/sell" style={{textDecoration: 'none', color: 'black', fontWeight: '900'}}>
								   <h3>SELL</h3>
							   </Link>
							</li>
                		</ul>
            		</div>
        		</div>
			</div>
		);
	}
}

export default Navbar;
