import React from 'react';
import ro1 from '../images/ro1.png';
import ro2 from '../images/ro2.png';
import ro3 from '../images/ro3.png';
import tech1 from '../images/tech1.jpg';

export default function SingleTeacher() {
	return (
		<>
			<section class="pager-section">
				<div class="container">
					<div class="pager-content text-center">
						<h2>Faadi Al Rahman</h2>
						<ul>
							<li><a href="#" title="">Home</a></li>
							<li><a href="#" title="">Teachers</a></li>
							<li><span>Each Teacher</span></li>
						</ul>
					</div>
					<h2 class="page-titlee"><span style={{ fontFamily: 'flanella', color: '#c5892b' }}>E</span> <span style={{ color: '#3c719a', fontFamily: 'azonix' }}> PROF</span></h2>
				</div>
			</section>

			<section class="page-content">
				<div class="container">
					<div class="teacher-single-page">
						<div class="row">
							<div class="col-lg-4" style={{ display: 'flex', justifyContent: 'center' }}>
								<div class="teacher-coly" style={{ borderRadius: '10px' }}>
									<img src={tech1} alt="" />
									<ul class="social-icons" style={{ paddingLeft: '0px' }}>
										<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
										<li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
										<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="teacher-content">
									<h3>Instructor</h3>
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-6">
											<div class="rol-z">
												<img src={ro1} alt="" />
												<div class="rol-info">
													<h3>Phone</h3>
													<span>+2 342 5446 67</span>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-sm-6">
											<div class="rol-z">
												<img src={ro2} alt="" />
												<div class="rol-info">
													<h3>Email</h3>
													<span>name@domain.com</span>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-sm-6">
											<div class="rol-z style2">
												<img src={ro3} alt="" />
												<div class="rol-info">
													<h3><span title="">Call Teacher <br /> Now</span></h3>
												</div>
											</div>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.</p>
									<ul class="tech-detils">
										{/* <li>
										<h3>DOB</h3>
										<span>15.03.1987</span>
									</li> */}
										<li>
											<h3>Education</h3>
											<span>Music School of Music Arts</span>
										</li>
										<li>
											<h3>Experience</h3>
											<span>10 years</span>
										</li>
									</ul>
									{/* <div class="skills-tech">
										<h3>Personal Skills</h3>
										<div class="progess-row">
											<h3>Teaching</h3>
											<div class="progress">
												<div class="progress-bar wow slideInLeft bg-clr1" data-wow-duration="1000ms" role="progressbar" style={{ width: '100%', visibility: 'visible', animationDuration: '1000ms', animationName: 'ub' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<span>100% </span>
										</div>
										<div class="progess-row">
											<h3>Speaking</h3>
											<div class="progress">
												<div class="progress-bar wow slideInLeft bg-clr2" role="progressbar" style={{ width: '80%', visibility: 'visible', animationDuration: '1000ms', animationName: 'ub' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<span>80% </span>
										</div>
										<div class="progess-row">
											<h3>Family Support</h3>
											<div class="progress">
												<div class="progress-bar wow slideInLeft bg-clr3" role="progressbar" style={{ width: '85%', visibility: 'visible', animationDuration: '1000ms', animationName: 'ub' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<span>85% </span>
										</div>
										<div class="progess-row">
											<h3>Children's Well-being</h3>
											<div class="progress">
												<div class="progress-bar wow slideInLeft bg-clr4" role="progressbar" style={{ width: '90%', visibility: 'visible', animationDuration: '1000ms', animationName: 'ub' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<span>90% </span>
										</div>
									</div> */}
									<p>Quisque congue ultrices nibh, id consectetur velit consectetur ut. Suspendisse porttitor vulputate imperdiet. Proin rhoncus, mauris sit amet consectetur laoreet, mauris mi volutpat urna, at molestie urna libero quis leo. Pellentesque ut molestie nisi. Suspendisse ut nulla eleifend ligula vulputate tincidunt sed eget orci.</p>
									<p>Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem.</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>)
}
