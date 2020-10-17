import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="shop-footer py-5">
				{/* <div className="footer-basic"> */}
				<div className="shop-footer__list">
					<a href="/home">
						<i className="fa fa-home" />
					</a>
					<a href="/loja">
						<i className="icon ion-social-snapchat" />
					</a>
					<a href="/loja">
						<i className="icon ion-social-twitter" />
					</a>
					<a href="/loja">
						<i className="icon ion-social-facebook" />
					</a>
				</div>
				<ul className="list-inline">
					<li className="list-inline-item">
						<a href="#" className="shop-footer__link">
							Home
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="shop-footer__link">
							Services
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="shop-footer__link">
							About
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="shop-footer__link">
							Terms
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="shop-footer__link">
							Privacy Policy
						</a>
					</li>
				</ul>
				<p className="copyright">Candy Girls © 2017</p>
				{/* </div> */}
			</footer>
		);
	}
}

export default Footer;
