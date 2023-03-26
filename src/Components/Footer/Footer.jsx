import React from 'react'
import logo from '../images/logo.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import { Link } from 'react-router-dom';
import '../Home/Home.css'
import icon3 from '../images/icon3.png';
export default function Footer() {
    const today = new Date();

  return (
<>
<section class="newsletter-section">
			<div class="container">
				<div class="newsletter-sec">
					<div class="row align-items-center">
					<div class="counter-area">
        <div class="container">
            <div class="counter-wrapper bg_cover counter" >
                <div class="row" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div class="col-sm-4 col-6 counter-col" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.2s">
                            <span class="counter-count"><span class="count" data-count="3652">145,271</span> +</span>
                            <p>Enrollments</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-6 counter-col" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.4s">
                            <span class="counter-count"><span class="count" data-count="105">35</span> +</span>
                            <p>Instructors</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-6 counter-col" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div class="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.6s">
                            <span class="counter-count"><span class="count" data-count="120">51</span> +</span>
                            <p>Classrooms</p>
                        </div>
                    </div>
                   
                </div>
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
					<div class="row" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="widget widget-about">
								<img src={logo} alt="" style={{width:'60%'}}/>
								{/* <p>Vivamus porta efficitur nibh nec convallis. Vestibulum egestas eleifend justo. Ut tellus ipsum, accumsan</p> */}
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6">
							<div className="row">
								<div className="col-md-4">
								<div class="contact-info">
											
											<div class="contact-tt">
											<h6> <img src={icon1} alt=""/> Call</h6>
												<span>+2 0100 320 5413</span>
											</div>
										</div>
								</div>
								<div className="col-md-4">
								<div class="contact-info">
											
											<div class="contact-tt">
												<h6> <img src={icon2} alt=""/> Work Time</h6>
												<span>Sun - Thrus 8 AM - 9 PM</span>
											</div>
										</div>
								</div>
								<div className="col-md-4">
								<div class="contact-info">
											
											<div class="contact-tt">
										<h6>	<img src={icon3} alt=""/> Email Address</h6>
												<span>edu.eprof@gmail.com</span>
											</div>
										</div>
								</div>
							</div>
						
										
										
							{/* <div class="widget widget-contact">
								<ul class="contact-add">
									<li>
									
									</li>
									<li>
										
									</li>
									<li>
										
									</li>
								</ul>
							</div> */}
						</div>
						
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="widget widget-links">
								<h3 class="widget-title">Quick Links</h3>
								<ul>
									<li><Link to='/about' title="" style={{textDecoration:'none' , color:'#000'}}>About Us </Link></li>
									<li><Link to='/classes' title="" style={{textDecoration:'none' , color:'#000'}}> Classes</Link></li>
									<li><Link to='/teachers' title="" style={{textDecoration:'none' , color:'#000'}}>Instructor </Link></li>
							
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="bottom-footer">
					<div class="row align-items-center">
						<div class="col-lg-7 col-md-6 col-sm-6" >
                        <p  style={{margin:'0',    fontSize: '15px',lineHeight: '1.8', fontWeight:'700', fontFamily:'Segoe UI',color:'#000'}}>
                Copyright &copy; {today.getFullYear()} by{" "}
                <span>
                  {" "}
                  <a  target="_blank"
                    href="https://neoneg.com/"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#000",
                       fontWeight:'700',
                      
                    }}
                  >
                    NEON
                  </a>{" "}
                </span>
                <a
                  href=""
                  style={{ textDecoration: "none",
                  fontWeight:'700', color:'#000' }}
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
						<div class="col-lg-5 col-md-6 col-sm-6">
							<ul class="social-links">
								<li><a href="https://www.facebook.com/eprof.education/" target="_blank" title=""><i class="fab fa-facebook-f"></i></a></li>
								<li><a href="https://www.linkedin.com/company/92493189/admin/?feedType=following"  target="_blank" title=""><i class="fab fa-linkedin-in" ></i></a></li>
								<li><a href="https://www.instagram.com/eprof.education" title="" target="_blank"><i class="fab fa-instagram"  ></i></a></li>
								<li><a href="https://www.youtube.com/channel/UCxn6x0i8q8AoOFSThuH2lSQ" title="" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>

</>  )
}
