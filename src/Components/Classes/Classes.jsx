import React from 'react'
import icon10 from '../images/icon10.png';
import { Link } from 'react-router-dom';
import maths from '../images/maths.png';

export default function Classes() {
  return (
<>
<section class="pager-section">
			<div class="container">
				<div class="pager-content text-center">
					<h2>Classes </h2>
					<ul>
						<li><a href="#" title="">Home</a></li>
						<li><span>Classes</span></li>
					</ul>
				</div>
                <h2 class="page-titlee"><span style={{fontFamily:'flanella', color:'#c5892b'}}>E</span> <span style={{color:'#3c719a' , fontFamily:'azonix'}}> PROF</span></h2>
			</div>
		</section>
        <section class="classes-page">
			<div class="container">
				<div class="classes-banner">
					<span>Try now </span>
					<h2>Start Investing in You</h2>
					<a href="" style={{textDecoration:'none'}} title="" class="btn-default">Classes <i class="fa fa-long-arrow-alt-right"></i></a>
				</div>
				<div class="classes-section">
					<div class="classes-sec">
						<div class="row">
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Basic English Speaking and Grammar</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title=""  style={{textDecoration:'none'}}>Amanda Kern</a>
											</div>
											<strong class="price">45 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Natural Sciences &amp; Mathematics Courses</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title="" style={{textDecoration:'none'}}>Gy  psy Hardinge</a>
											</div>
											<strong class="price">67 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Environmental Studies &amp; Earth Sciences</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title="" style={{textDecoration:'none'}}>M  argje Jutten</a>
											</div>
											<strong class="price">89 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Hospitality, Leisure &amp; Sports Courses</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src='' alt=""/>
												<a href="#" title="" style={{textDecoration:'none'}}>H  ubert Franck</a>
											</div>
											<strong class="price">67 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Basic English Speaking and Grammar</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title=""  style={{textDecoration:'none'}}>Amanda Kern</a>
											</div>
											<strong class="price">45 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Natural Sciences &amp; Mathematics Courses</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title="" style={{textDecoration:'none'}}>Gy  psy Hardinge</a>
											</div>
											<strong class="price">67 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Environmental Studies &amp; Earth Sciences</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title="" style={{textDecoration:'none'}}>M  argje Jutten</a>
											</div>
											<strong class="price">89 EGP </strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="classes-col">
									<div class="class-thumb">
										<img src={maths} alt="" class="w-100"/>
										<a href="#" title="" class="crt-btn">
											<img src={icon10} alt=""/>
										</a>
									</div>
									<div class="class-info">
										<h3><Link to='/singleClass' style={{textDecoration:'none', color:'#3c719a'}} title="">Hospitality, Leisure &amp; Sports Courses</Link></h3>
										<span style={{color:'#c5892b'}}>Mon-Fri</span>
										<span style={{color:'#c5892b'}}>10 AM - 12 AM</span>
										<div class="d-flex flex-wrap align-items-center">
											<div class="posted-by">
												<img src="https://via.placeholder.com/26x26" alt=""/>
												<a href="#" title="" style={{textDecoration:'none'}}>H  ubert Franck</a>
											</div>
											<strong class="price">67 EGP </strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</section>
</>  )
}
