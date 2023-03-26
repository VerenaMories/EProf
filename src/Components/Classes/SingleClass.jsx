import React from 'react';
import classBanner from '../images/class-single-banner.jpg';
import classGallery from '../images/class-gallery1.jpg';
import { Link } from 'react-router-dom';
import icon15 from '../images/icon15.png';
import icon16 from '../images/icon16.png';
import icon17 from '../images/icon17.png';
import ci1 from '../images/ci1.png';

export default function SingleClass() {
  return (
<>
<section class="class-single-banner">
			<img src={classBanner} alt="" class="w-100"/>
		</section>
<section class="page-content style2">
			<div class="container">
				<div class="row">
					<div class="col-xl-8 col-lg-8">
						<div class="class-single-content">
							<h2>Basic English Speaking and Grammar</h2>
							<ul class="meta-box">
								<li><Link to='/' style={{textDecoration:'none'}} title="">Home</Link></li>
								<li><span>Classes</span></li>
							</ul>
                            <div class="class-gallery">
								<div class="class-gallery-img">
									<a href="" title="" class="html5lightbox" data-group="set1">
										<img src={classGallery} alt=""/>
									</a>
								</div>
								
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.</p>
							<p>Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.</p>
						

							<h3>Activities Involved</h3>
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-6">
									<ul class="ordrd">
										<li>Sensory Time</li>
										<li>Free Play with Technology Corner</li>
										<li>Puppet shows and skits</li>
									</ul>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6">
									<ul class="ordrd">
										<li>Creative Time</li>
										<li>Language Readiness</li>
										<li>Opportunities for fine and gross motor</li>
									</ul>
								</div>
							</div>
							<Link to='/contact' style={{textDecoration:'none'}} title="" class="btn-default">Enroll Now <i class="fa fa-long-arrow-alt-right"></i></Link>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4">
						<div class="sidebar class-sidebar">
							<div class="widget widget-information">
								<h3 class="widget-title">Class Information</h3>
								<ul>
									<li>
										<h4>Mon-Fri</h4>
										<span>10 AM - 12 AM</span>
									</li>
									<li>
										<h4>Age</h4>
										<span>9-14 Years</span>
									</li>
									<li>
										<h4>Class Size</h4>
										<span>20-30 Kids</span>
									</li>
									<li>
										<h4>Coures Duration</h4>
										<span>25 hours</span>
									</li>
								</ul>
								<div class="tech-info">
									<div class="tech-tble">
										<img src="https://via.placeholder.com/54x54" alt=""/>
										<div class="tch-info">
											<h3>Hubert Franck</h3>
											<span>English Teacher</span>
										</div>
									</div>
									<Link to='/contact' style={{textDecoration:'none'}} title="" class="btn-default">Enroll Now <i class="fa fa-long-arrow-alt-right"></i></Link>
								</div>
							</div>
							<div class="widget widget-class">
								<div class="wd-class-post">
									<div class="wd-class-thumb">
										<img src={ci1} alt=""/>
									</div>
									<div class="wd-class-info">
										<h3>Class Program</h3>
										<span>Adobe Acrobat file, 123 КB</span>
									</div>
								</div>
							</div>
							
							<div class="widget widget-contact-dp mdp-contact">
								<div class="mdp-our-contacts">
									<h3>Our Contacts</h3>
									<ul>
										<li>
											<div class="d-flex flex-wrap">
												<div class="icon-v">
													<img src={icon15} alt=""/>
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
													<img src={icon16} alt=""/>
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
													<img src={icon17} alt=""/>
												</div>
												<div class="dd-cont">
													<h4> Email Address</h4>
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
			</div>
		</section>
</>  )
}
