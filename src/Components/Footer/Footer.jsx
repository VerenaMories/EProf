import logo from '../images/logo.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import { Link } from 'react-router-dom';
import '../Home/Home.css'
import icon3 from '../images/icon3.png';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";
import Fade from 'react-reveal/Fade';

export default function Footer() {
	const today = new Date();
	const [Number, setNember] = useState('');
	const [workTime, setworkTime] = useState('');

	useEffect(() => {
		axios
		  .get("https://eprof-zu1o.onrender.com/admin/noOf")
		  .then((response) => {
			setNember(response.data);
			// console.log(response.data)
		  })
		  .catch((error) => {
			// console.log(error);
		  });
	  }, []);
	  useEffect(() => {
		axios
		  .get("https://eprof-zu1o.onrender.com/admin/workTime/644a5258e8d821837d8ea472")
		  .then((response) => {
			setworkTime(response.data.workTime);
			// console.log(response.data.workTime)
		  })
		  .catch((error) => {
			// console.log(error);
		  });
	  }, []);
	return (
		<>
			<section class="newsletter-section">
				<div class="container">
					<div className="row" style={{display:'flex', justifyContent:'center'}}>
				<div className="col-md-9">
			
				<div class="newsletter-sec">
						<div class="row align-items-center">
							<div class="counter-area">
							<Fade bottom duration={1000} delay={500}>	
								<div class="container">
									<div class="counter-wrapper bg_cover counter" >
										{isMobile?
										<div class="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<div class="colcounter-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.2s">
												<span class="counter-count"><span class="count" data-count="3652">{Number.noOfUsers}</span> +</span>
												<p style={{color:'rgb(60, 113, 154)', fontSize:'17px', fontWeight:'500', marginBottom:'0'}}>Enrollments</p>
											</div>
										</div>
										<div class="col counter-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.4s">
												<span class="counter-count"><span class="count" data-count="105">{Number.noOfInstructors}</span> +</span>
												<p style={{color:'rgb(60, 113, 154)', fontSize:'17px', fontWeight:'500', marginBottom:'0'}}>Instructors</p>
											</div>
										</div>
										<div class="col counter-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.6s">
												<span class="counter-count"><span class="count" data-count="120">{Number.noOfClassRooms}</span> +</span>
												<p style={{color:'rgb(60, 113, 154)', fontSize:'17px', fontWeight:'500', marginBottom:'0'}}>Classrooms</p>
											</div>
										</div>

									</div>
										:<div class="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<div class="col-sm-4 col-6 counter-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
												<div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.2s">
													<span class="counter-count"><span class="count" data-count="3652">{Number.noOfUsers}</span> +</span>
													<p style={{color:'rgb(60, 113, 154)', fontSize:'17px', fontWeight:'500', marginBottom:'0'}}>Enrollments</p>
												</div>
											</div>
											<div class="col-sm-4 col-6 counter-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
												<div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.4s">
													<span class="counter-count"><span class="count" data-count="105">{Number.noOfInstructors}</span> +</span>
													<p style={{color:'rgb(60, 113, 154)', fontSize:'17px', fontWeight:'500', marginBottom:'0'}}>Instructors</p>
												</div>
											</div>
											<div class="col-sm-4 col-6 counter-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
												<div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.6s">
													<span class="counter-count"><span class="count" data-count="120">{Number.noOfClassRooms}</span> +</span>
													<p style={{color:'rgb(60, 113, 154)', fontSize:'17px', fontWeight:'500', marginBottom:'0'}}>Classrooms</p>
												</div>
											</div>

										</div>}
										
									</div>
								</div></Fade>
							</div>
						</div>
					</div>
</div>
				</div>
					
				</div>
			</section>
			<footer>
				<div class="container">
					<div class="top-footer">
						<div class="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<div class="col-lg-2 col-md-6 col-sm-12">
								<div class="widget widget-about">
									<img src={logo} alt="" style={{  marginBottom:'0'}} />
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-12">
								<div className="row">
									<div className="col-md-4 col-sm-12">
										<div class="contact-info">
										<Fade bottom duration={1000} delay={500}>	
											<div class="contact-tt">
												<h6> <img src={icon1} alt="" /> Call</h6>
												<span>  <a style={{textDecoration:'none',color:'#212529'}} href="tel:0100 320 5413">+2 0100 320 5413 </a></span>
											</div>
											</Fade>
										</div>
									</div>
									<div className="col-md-4 col-sm-12">
										<div class="contact-info">
										<Fade bottom duration={1000} delay={500}>	
											<div class="contact-tt">
												<h6> <img src={icon2} alt="" /> Work Time</h6>
												<span style={{marginRight:'1%'}}>{workTime.day}</span>
												<span>{workTime.time}</span>

											</div></Fade>
										</div>
									</div>
									<div className="col-md-4 col-sm-12">
										<div class="contact-info">
										<Fade bottom duration={1000} delay={500}>	
											<div class="contact-tt">
												<h6>
													<i class="fa-sharp fa-solid fa-envelope" style={{ color: "#e8b02d", marginRight:'5px' }} ></i>
													Email Address</h6>
												<span><a style={{textDecoration:'none',color:'#212529'}} href="mailto:edu.eprof@gmail.com">edu.eprof@gmail.com</a></span>
											</div>
											</Fade>
										</div>
									</div>
								</div>

							</div>

							<div class="col-lg-4 col-md-6 col-sm-12">
								<div class="widget widget-links row">
									<ul className='col' style={{marginBottom:'0'}}>
									    <li><Link to='/' title="" style={{ textDecoration: 'none', color: '#000' }}>Home </Link></li>
										<li><Link to='/classes' title="" style={{ textDecoration: 'none', color: '#000' }}> Classes</Link></li>
										<li><Link to='/teachers' title="" style={{ textDecoration: 'none', color: '#000' }}>Instructor </Link></li>
										<li><Link to='/sheets' title="" style={{ textDecoration: 'none', color: '#000' }}>Sheets </Link></li>
										<li><Link to='/joinUs' title="" style={{ textDecoration: 'none', color: '#000' }}>Join Us </Link></li>

										

									</ul>
									<ul className='col' style={{marginBottom:'0'}}><li><Link to='/blog' title="" style={{ textDecoration: 'none', color: '#000' }}> Blogs</Link></li>
										<li><Link to='/about' title="" style={{ textDecoration: 'none', color: '#000' }}>About Us </Link></li>
										<li><Link to='/contact' title="" style={{ textDecoration: 'none', color: '#000' }}>Contact Us</Link></li>
										<li><Link className='specialCase' to='/terms' title="" style={{ textDecoration: 'none', color: '#000' }}>Terms & Conditions</Link></li>
										<li>
								<ul class="social-links" style={{padding:'0'}}>
									<li><a href="https://www.facebook.com/eprof.education/" target="_blank" title=""><i class="fab fa-facebook-f" style={{color:'#fff'}}></i></a></li>
									<li><a href="https://www.linkedin.com/company/92493189/admin/?feedType=following" target="_blank" title=""><i class="fab fa-linkedin-in"  style={{color:'#fff'}}></i></a></li>
									<li><a href="https://www.instagram.com/eprof.education" title="" target="_blank"><i class="fab fa-instagram"   style={{color:'#fff'}}></i></a></li>
									<li><a href="https://www.youtube.com/channel/UCxn6x0i8q8AoOFSThuH2lSQ" title="" target="_blank"><i class="fa-brands fa-youtube"  style={{color:'#fff'}}></i></a></li>

								</ul>
							</li>
										</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="bottom-footer" style={{paddingTop:'10px'}}>
						<div class="row align-items-center">
							<div class="col-lg-12 col-md-12 col-sm-12" >
								<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', fontWeight: '700', fontFamily: 'Segoe UI', color: '#000' ,textAlign:'center'}}>
									Copyright &copy; {today.getFullYear()} by{" "}
									<span>
										{" "}
										<a target="_blank"
											href="https://neoneg.com/"
											style={{
												cursor: "pointer",
												textDecoration: "none",
												color: "#000",
												fontWeight: '700',

											}}
										>
											NEON
										</a>{" "}
									</span>
									<a
										href=""
										style={{
											textDecoration: "none",
											fontWeight: '700', color: '#000'
										}}
										onClick={() => {
											window.open(`https://wa.me/+201113588988`);
										}}
									>
										<i
											className="fa-brands fa-whatsapp fs-5"
											style={{ color: "#000", marginRight: "10px" }}
										></i>
									</a>{" "}
								</p>						</div>
							
						</div>
					</div>
				</div>
			</footer>

		</>)
}
