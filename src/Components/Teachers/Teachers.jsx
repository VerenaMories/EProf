import React from 'react'
import plus from '../images/plus.png';
import { Link } from 'react-router-dom';
import verena from '../images/img5.jpg';
import omar from '../images/img8.jpg';

export default function Teachers() {
  return (
<>
<section class="pager-section">
			<div class="container">
				<div class="pager-content text-center">
					<h2>Teachers</h2>
					<ul>
						<li><a href="#" title="">Home</a></li>
						<li><span>Teachers</span></li>
					</ul>
				</div>
                <h2 class="page-titlee"><span style={{fontFamily:'flanella', color:'#c5892b'}}>E</span> <span style={{color:'#3c719a' , fontFamily:'azonix'}}> PROF</span></h2>
			</div>
		</section>

        <section class="page-content">
			<div class="container">
				<div class="teachers-section p-0">
					<div class="teachers">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={verena} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>verena mories </Link></h3>
										<span style={{color:'#c5892b'}}>English Teacher</span>
									</div> 
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={omar} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Faadi Al Rahman</Link></h3>
										 <span style={{color:'#c5892b'}}>Instructor</span>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={verena} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Merna shawky</Link></h3>
										< span style={{color:'#c5892b'}}>Art Teacher</span>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={omar} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Nour Assem</Link></h3>
									<span  style={{color:'#c5892b'}}	>Teacher</span>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={omar} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Youssef el Sewefy</Link></h3>
										<span style={{color:'#c5892b'}}>English Teacher</span>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={omar} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Salah Muhamed</Link></h3>
										<span  style={{color:'#c5892b'}}>Instructor</span>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={omar} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Omar Sameh</Link></h3>
										<span style={{color:'#c5892b'}}>Art Teacher</span>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
								<div class="teacher">
									<div class="teacher-img">
										<img src={verena} alt="" class="w-100"/>
										<div class="sc-div">
											<ul style={{paddingLeft:'0px'}}>
												<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
												<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
											</ul>
											<span><img src={plus} alt=""/></span>
										</div>
									</div>
									<div class="teacher-info">
										<h3><Link to='/singleTeacher' title="" style={{textDecoration:'none' , color:'#3c719a'}}>Verena Mories</Link></h3>
							 		<span style={{color:'#c5892b'}}	>Teacher</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div class="mdp-pagiation">
					<nav aria-label="Page navigation example">
						<ul class="pagination">
					    	<li class="page-item"><a class="page-link" href="#">1</a></li>
					    	<li class="page-item"><a class="page-link active" href="#">2</a></li>
					    	<li class="page-item"><a class="page-link" href="#">3</a></li>
					    	<li class="page-item"><a class="page-link" href="#">4</a></li>
					    	<li class="page-item"><a class="page-link" href="#">...</a></li>
					    	<li class="page-item"><a class="page-link" href="#">15</a></li>
					  	</ul>
					</nav>
				</div> */}
			</div>
		</section>

	
</>  )
}
