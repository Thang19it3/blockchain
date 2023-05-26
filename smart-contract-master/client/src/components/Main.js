import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../components/main.css"
import img1 from "../img/img_03_1080x.png";
import img2 from "../img/img_04_1080x.png";
import img4 from "../img/img_07_1728x.png";

class Main extends Component {

	render() {
		return (
			<div className='main'>
				<div className="banner">
					<div className='row'>
						<div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 banner-text'>
							<h4>2022 COLLECTION</h4>
							<h1>DISCOVER TOP <br/> RATED ITEMS</h1>
							<Link to="/buy"><button>BUY NOW</button></Link>
						</div>
						<div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                			<img src={img4} alt="" />
            			</div>
					</div>
				</div>
				<div className='container banner1'>
					<div className='row'>
						<div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                			<img src={img2} alt=""/>
            			</div>
            			<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 banner-text">
                			<h4>FEATURED MAC ACCESSORIES</h4>
                			<h1>MAKE THE PERFECT <br/> CONNECTION</h1>
                			<Link to="/sell"><button>SELL NOW</button></Link>
            			</div>
					</div>
				</div>
				<div className='container banner-icon'>
					<div className='row'>
						<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 banner-icon1">
                			<i class='bx bxs-plane'></i>
                			<h3>FREE SHIP</h3>
                			<p>On all orders over $100kc</p>
            			</div>
            			<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 banner-icon1">
                			<i class='bx bxs-plane'></i>
                			<h3>FREE SHIP</h3>
                			<p>On all orders over $100kc</p>
            			</div>
            			<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 banner-icon1">
                			<i class='bx bx-reset'></i>
                			<h3>30 DAYS GUARANTEE</h3>
                			<p>30-days free return policy</p>
            			</div>
					</div>
				</div>
				<div className='container banner2'>
					<div className='row'>
						<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                			<img src={img1} alt=""/>
            			</div>
            			<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 banner2-text">
                			<h4>VALENTINE’S DAY GIFTS</h4>
                			<h1>SAY IT FROM THE HEART.</h1>
                			<button>SELL NOW</button>
            			</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Main;
