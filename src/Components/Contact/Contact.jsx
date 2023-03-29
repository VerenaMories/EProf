import React from 'react'
import icon17 from '../images/icon17.png';
import icon16 from '../images/icon16.png';
import icon15 from '../images/icon15.png';

export default function Contact() {
	return (
		<>

			<section class="pager-section">
				<div class="container">
					<div class="pager-content text-center">
						<h2>Contact Us</h2>
						<ul>
							<li><a href="#" title="">Home</a></li>
							<li><span>Contact Us</span></li>
						</ul>
					</div>
					<h2 class="page-titlee"><span style={{ fontFamily: 'flanella', color: '#c5892b' }}>E</span> <span style={{ color: '#3c719a', fontFamily: 'azonix' }}> PROF</span></h2>
					{/* <h2 >Shelly</h2> */}
				</div>
			</section>

			<section class="page-content">
				<div class="container">
					<div class="mdp-map">
						{/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
					</div>
					<div class="mdp-contact">
						<div class="row">
							<div class="col-lg-8 col-md-7">
								<div class="comment-area">
									<h3>Add Comment</h3>
									<form id="contact-form" method="post" action="#">
										<div class="response"></div>
										<div class="row">
											<div class="col-lg-6">
												<div class="form-group">
													<input type="text" name="name" class="name" placeholder="Name" required />
												</div>
											</div>
											<div class="col-lg-6">
												<div class="form-group">
													<input type="email" name="email" class="email" placeholder="Email" required />
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-group">
													<textarea name="message" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-submit">
													<button type="button" id="submit" class="btn-default">Send Now <i class="fa fa-long-arrow-alt-right"></i></button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-lg-4 col-md-5">
								<div class="mdp-our-contacts">
									<h3>Our Contacts</h3>
									<ul>
										<li>
											<div class="d-flex flex-wrap">
												<div class="icon-v">
													<img src={icon15} alt="" />
												</div>
												<div class="dd-cont">
													<h4>Call</h4>
													<span>+2 0100 320 5413</span>
												</div>
											</div>
										</li>
										<li>
											<div class="d-flex flex-wrap">
												<div class="icon-v">
													<img src={icon16} alt="" />
												</div>
												<div class="dd-cont">
													<h4>Work Time</h4>
													<span>Sun - Thrus 8 AM - 9 PM</span>
												</div>
											</div>
										</li>
										<li>
											<div class="d-flex flex-wrap">
												<div class="icon-v">
													<i class="fa-sharp fa-solid fa-envelope" style={{ color: "#e8b02d" }} ></i>
												</div>
												<div class="dd-cont">
													<h4>Email Address</h4>
													<span>edu.eprof@gmail.com</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>)
}
