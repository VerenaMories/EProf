import React from 'react';
import './Cart.css';
import thumb1 from '../images/thumb1.jpg';
import thumb2 from '../images/thumb2.jpg';

export default function Cart() {
  return (
<>
<section class="page-banner-section">
			<div class="container">
				<h1>Cart</h1>
				{/* <ul class="page-depth">
					<li><a href="index.html">Studiare</a></li>
					<li><a href="cart.html">Cart</a></li>
				</ul> */}
			</div>
		</section>
        <section class="cart-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="cart-box">
							<table class="shop_table table-responsive">
								<thead>
									<tr>
										<th class="product-remove">&nbsp;</th>
										<th class="product-thumbnail">&nbsp;</th>
										<th class="product-name">Product</th>
										<th class="product-price">Price</th>
										<th class="product-quantity">Quantity</th>
										<th class="product-subtotal">Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="product-remove">
											<a href="/" style={{textDecoration:'none', color:'#000'}} class="remove">×</a>
										</td>
										<td class="product-thumbnail">
											<a href="/"><img src={thumb1} alt=""/></a>
										</td>
										<td class="product-name">
											<a href="/" style={{textDecoration:'none', color:'#000'}}>Introduction Web Design with HTML</a>
										</td>
										<td class="product-price">
											244.0 EGP
										</td>
										<td class="product-quantity">
											<input type="number" value="1"/>
										</td>
										<td class="product-subtotal">244.0 EGP</td>
									</tr>
									<tr>
										<td class="product-remove">
											<a href="/" style={{textDecoration:'none', color:'#000'}} class="remove">×</a>
										</td>
										<td class="product-thumbnail">
											<a href="/" ><img src={thumb2} alt=""/></a>
										</td>
										<td class="product-name">
											<a href="/" style={{textDecoration:'none', color:'#000'}}>Distance Learning MBA Management</a>
										</td>
										<td class="product-price">
											29.99 EGP										</td>
										<td class="product-quantity">
											<input type="number" value="1"/>
										</td>
										<td class="product-subtotal">
											29.99 EGP										</td>
									</tr>
									<tr class="coupon-line"> 
										<td colspan="6" class="actions">
											<input type="text" name="coupon_code" placeholder="Coupon code"/>
											<button type="submit">Update cart</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="sidebar">
							<div class="widget cart-widget">
								<h2>Cart Totals</h2>
								<table>
									<tbody>
										<tr class="cart-subtotal">
											<th>Subtotal</th>
											<td>273.99</td>
										</tr>
										<tr class="order-total">
											<th>Total</th>
											<td>273.99</td>
										</tr>
									</tbody>
								</table>
								<a href="/" class="checkout-button" style={{textDecoration:'none'}}>Proceed to checkout</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
</>  )
}
