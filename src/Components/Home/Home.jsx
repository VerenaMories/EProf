import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
// import logo2 from '../images/logo.png';
import icon1 from '../images/icon1.png';
import logo2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/p4905879.jpg';
import icon7 from '../images/p3753670.jpg';
import icon8 from '../images/p8599.jpg';
import icon9 from '../images/p4905784.jpg';
import icon10 from '../images/icon10.png';
import thanwya from '../images/00000.png'
import plus from '../images/plus.png';
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import { Slide } from "./testimonial.jsx";
import { useRef } from 'react';
import classroom from '../images/classroom (1).jpg'
import classroom1 from '../images/classroom (2).jpg'
import classroom2 from '../images/classroom (3).jpg'
import classroom3 from '../images/classroom (4).jpg'
import myproject from '../images/My project1.jpg';
import myproject2 from '../images/My project2.jpg';
import myproject3 from '../images/My project3.jpg';
import myproject4 from '../images/My project4.jpg';
import myproject5 from '../images/myprojuct5.jpg';
import myproject6 from '../images/myProject6.jpg';
import myProject7 from '../images/myproject7.jpg';
import myProject8 from '../images/myproject8.jpg';
import defImage from "../images/PngItem_1503945.png";
import Carousel from './Carousel';
import TeacherCarousel from './TeacherCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Home.css';
import maths from '../images/maths.png';
import ico from '../images/ico.png';
import verena from '../images/img5.jpg';
import omar from '../images/img8.jpg';
import AccordionComp from '../AccordionComponent/AccordionComp';


export default function Home() {
	const [selectedOption, setSelectedOption] = useState('');
	const [showSecondDropdown, setShowSecondDropdown] = useState(false);
	const [showSecondDropdown2, setShowSecondDropdown2] = useState(false);
	const [showSecondDropdown3, setShowSecondDropdown3] = useState(false);
	const [selectedOption2, setSelectedOption2] = useState('');
	const [showSecondDropdown1, setShowSecondDropdown1] = useState(false);
	const [showSecondDropdown22, setShowSecondDropdown22] = useState(false);
	const [showSecondDropdown33, setShowSecondDropdown33] = useState(false);
	const [showSecondDropdown44, setShowSecondDropdown44] = useState(false);
	const [selectedOption3, setSelectedOption3] = useState('');
	const [showSecondDropdown11, setShowSecondDropdown11] = useState(false);
	const [showSecondDropdown222, setShowSecondDropdown222] = useState(false);
	const [showSecondDropdown333, setShowSecondDropdown333] = useState(false);
	const [selectedOption4, setSelectedOption4] = useState('');
	const [showSecondDropdown111, setShowSecondDropdown111] = useState(false);
	const [showSecondDropdown2222, setShowSecondDropdown2222] = useState(false);
	const [showSecondDropdown3333, setShowSecondDropdown3333] = useState(false);
	const [selectedOptionInstructor, setSelectedOptionInstructor] = useState('');
	const [showSecondDropdownInstructor1, setShowSecondDropdownInstructor1] = useState(false);
	const [showSecondDropdownInstructor2, setShowSecondDropdownInstructor2] = useState(false);
	const [showSecondDropdownInstructor3, setShowSecondDropdownInstructor3] = useState(false);
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
		setShowSecondDropdown(event.target.value === 'selectOne');
		setShowSecondDropdown2(event.target.value === 'optionTwo');
		setShowSecondDropdown3(event.target.value === 'optionThree');

	};
	const handleOptionChange2 = (event) => {
		setSelectedOption2(event.target.value);
		setShowSecondDropdown1(event.target.value === 'subOptionOne');
		setShowSecondDropdown22(event.target.value === 'subOptionTwo');
		setShowSecondDropdown33(event.target.value === 'subOptionThree');
		setShowSecondDropdown44(event.target.value === 'subOptionFour');

	};
	const handleOptionChange3 = (event) => {
		setSelectedOption3(event.target.value);
		setShowSecondDropdown11(event.target.value === 'subOptionOne1');
		setShowSecondDropdown222(event.target.value === 'subOptionTwo1');
		setShowSecondDropdown333(event.target.value === 'subOptionThree1');

	};
	const handleOptionChange4 = (event) => {
		setSelectedOption4(event.target.value);
		setShowSecondDropdown111(event.target.value === 'subOptionOne11');
		setShowSecondDropdown2222(event.target.value === 'subOptionTwo11');
		setShowSecondDropdown3333(event.target.value === 'subOptionThree11');

	};
	const handleOptionChangeInstructor = (event) => {
		setSelectedOptionInstructor(event.target.value);
		setShowSecondDropdownInstructor1(event.target.value === 'subOptionOneEnglish');
		setShowSecondDropdownInstructor2(event.target.value === 'subOptionTwoMaths');
		setShowSecondDropdownInstructor3(event.target.value === 'subOptionThreeBiology');

	};
	const today = new Date();

	function stuff() {
		ref.current?.goNext();
	}
	const ref = React.useRef(StackedCarousel);
	useEffect(() => {
		setInterval(1000);
		console.log("i fire once");
	}, []);
	const data = [
		{
			image: ` ${classroom}`,
			//   text: <a style={{textDecoration:'none', color:'#fff'}}> <p> With Numbers: What is the average salary and lifestyle of a physician in the USA?
			// <br />  <span> Maps Team | January 27, 2023</span> 
			//   </p>  
			//      ,
			//   </a>
		},
		{
			image: `${classroom1}`,
			//   text: <a  style={{textDecoration:'none', color:'#fff'}}><p>How to Apply for an ECFMG Certification?    <br />
			//   <br />  <span> Maps Team | January 27, 2023</span> 
			//   </p>   </a>  
		},
		{
			image: `${classroom2}`,
			// text: <a  style={{textDecoration:'none', color:'#fff'}}> <p>What is the USMLE?
			//   <br />  <span> Maps Team | January 27, 2023</span> 
			//       </p> </a>

		},
		{
			image: `${classroom3}`,
			//   text: <a  style={{textDecoration:'none', color:'#fff'}}><p>How to Apply for an ECFMG Certification?    <br />
			//   <br />  <span> Maps Team | January 27, 2023</span> 
			//   </p>   </a> 
		},

	];
	return (
		<>
			<div class="wrapper">

				<div class="main-section">


					<section class="main-banner">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-lg-7 col-md-7">
									<div class="banner-text wow fadeInLeft homeLeft" data-wow-duration="1000ms">
										<h2>The Smarter  Way to Learn With <span style={{ fontFamily: 'flanella', color: '#c5892b' }}>E</span> <span style={{ color: '#3c719a', fontFamily: 'azonix' }}> PROF</span> </h2>
										<p>find great instructors, access essential courses, and track your overall progress.</p>
										<form class="search-form">
											<input type="text" name="search" placeholder="Search " />
											<button><i class="fa fa-search"></i></button>
										</form>
									</div>
								</div>
								<div class="col-lg-5 col-md-5">
									<div class="banner-img wow zoomIn homeImage" data-wow-duration="1000ms">
										<img src={thanwya} alt="" />
									</div>
									<div class="elements-bg wow zoomIn homeCircle" data-wow-duration="1000ms"></div>
								</div>
							</div>
						</div>
					</section>
					{/* <span style={{fontFamily:'script' , fontSize:'36px' , paddingLeft:'5%'}}> Les francophones se réunissent</span>	 */}
					<h2 class="main-title"><span style={{ fontFamily: 'flanella', color: '#c5892b' }}>E</span> <span style={{ color: '#3c719a', fontFamily: 'azonix' }}> PROF</span>  </h2>

				</div>

				<section class="about-us-section">
					<div class="container">
						<div class="section-title text-center">
							<h1
								style={{
									paddingTop: "0",
									fontStyle: "italic",
									fontWeight: "600",
									fontSize: "40px",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<div id="fragment1">Welcome to <span style={{ fontFamily: 'flanella', color: '#c5892b' }}>E</span> <span style={{ color: '#3c719a', fontFamily: 'azonix' }}> PROF</span></div>
							</h1>
							{/* <h2></h2> */}
							<p>Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus interdum, mauris quis cursus sodales, urn</p>
						</div>
						<div class="about-sec">
							<div class="container">
								<div class="row">

									<div class="col-lg-3 col-md-6 col-sm-6 aboutItem" >
										<div class="about-item">
											<div class="abt-col wow fadeInUp item-icon-title AboutItem" data-wow-duration="1000ms" data-wow-delay="600ms" style={{ maxWidth: '20.438rem', height: '21rem', backgroundColor: 'transparent' }}>
												<div class="item-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<img src={icon9} alt="" />
												</div>
												<h3 style={{ textAlign: 'center', color: '#000' }} className="title">Online Classroom</h3>
												<p style={{ color: '#000' }}>An online environment that allows teachers and students to interact, you will have videos , live sessions and online quizzes altogether in one place.</p>
											</div>
										</div>


									</div>
									<div class="col-lg-3 col-md-6 col-sm-6">
										<div class="about-item">
											<div class="abt-col wow fadeInUp item-icon-title AboutItem1" data-wow-duration="1000ms" data-wow-delay="600ms" style={{ maxWidth: '20.438rem', height: '21rem', backgroundColor: 'transparent' }}>
												<div class="item-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<img src={icon7} alt="" />
												</div>
												<h3 style={{ textAlign: 'center', color: '#000' }} className="title">Center classroom</h3>
												<p style={{ color: '#000' }}>Students attend their lectures on ground and continue their experience online with online quizzes and assessments.</p>
											</div>
										</div>

									</div>
									<div class="col-lg-3 col-md-6 col-sm-6">
										<div class="about-item">
											<div class="abt-col wow fadeInUp item-icon-title AboutItem2" data-wow-duration="1000ms" data-wow-delay="600ms" style={{ maxWidth: '20.438rem', height: '21rem', backgroundColor: 'transparent' }}>
												<div class="item-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<img src={icon5} alt="" />
												</div>
												<h3 style={{ textAlign: 'center', color: '#000' }} className="title">Revisions</h3>
												<p style={{ color: '#000' }}>Refresh your memory and finish with the fast track of all the subjects that will get you prepared to the final exams in the best way possible.</p>
											</div>
										</div>



									</div>

									<div class="col-lg-3 col-md-6 col-sm-6">
										<div class="about-item">
											<div class="abt-col wow fadeInUp item-icon-title AboutItem3" data-wow-duration="1000ms" data-wow-delay="600ms" style={{ maxWidth: '20.438rem', height: '21rem', backgroundColor: 'transparent' }}>
												<div class="item-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<img src={icon8} alt="" />
												</div>
												<h3 style={{ textAlign: 'center', color: '#000' }} className="title">Exams</h3>
												<p style={{ color: '#000' }}>Assess yourself with online weekly and monthly exams on all your learning chapter from the best instructors in the field.</p>
											</div>
										</div>

									</div>

								</div>
							</div>
						</div>
						{/* <div class="abt-img">
					<ul class="masonary" style={{position:'relative', height:'588px'}}>
						<li class="width1 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'0px', top:'0', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href='/' data-group="set1" title="" class="html5lightbox"><img src={myproject} alt=""/></a></li>
						<li class="width2 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'199px', top:'0', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1440x961" data-group="set1" title="" class="html5lightbox"><img src={myproject3} alt=""/></a></li>
						<li class="width3 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'496px', top:'0', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/2064x1376" data-group="set1" title="" class="html5lightbox"><img src={myproject4} alt=""/></a></li>
						<li class="width4 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'693px', top:'0', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1504x1004" data-group="set1" title="" class="html5lightbox"><img src={myproject6} alt=""/></a></li>
						<li class="width5 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'873px', top:'0', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1440x960" data-group="set1" title="" class="html5lightbox"><img src={myProject8} alt=""/></a></li>
						<li class="width6 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'693px', top:'211px', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1393x929" data-group="set1" title="" class="html5lightbox"><img src={myProject7} alt=""/></a></li>
						<li class="width7 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'891px', top:'211px', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1840x1228" data-group="set1" title="" class="html5lightbox"><img src="https://via.placeholder.com/1840x1228" alt=""/></a></li>
						<li class="width8 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'1089px', top:'211px', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1404x936" data-group="set1" title="" class="html5lightbox"><img src="https://via.placeholder.com/1404x936" alt=""/></a></li>
						<li class="width9 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'199px', top:'379px', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/750x502" data-group="set1" title="" class="html5lightbox"><img src={myproject2} alt=""/></a></li>
						<li class="width10 wow zoomIn" data-wow-duration="1000ms" style={{position:'absolute', left:'496px', top:'329px', visibility:'visible', animationDuration:'1000ms', animationName:'jb'}}><a href="https://via.placeholder.com/1500x1000" data-group="set1" title="" class="html5lightbox"><img src={myproject5} alt=""/></a></li>
					</ul>
				</div> */}
					</div>
				</section>

				<div className="classes-section">
					<div className="container">
						<div className="row">

						</div>
					</div>
				</div>


				<section class="classes-section">
					<div class="container">
						<div class="sec-title">
							<h2>Our Classes</h2>
							<p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus</p>
						</div>

						<div class="classes-sec">

							<div id="carouselExampleInterval" class="carousel slide container" data-bs-ride="carousel">
								<div class="carousel-inner row">
									<AccordionComp />
									<Swiper
										style={{ marginTop: "2%" }}
										// install Swiper modules
										modules={[Navigation, Pagination, Scrollbar, A11y]}
										spaceBetween={50}
										slidesPerView={4}
										navigation
										loop
										autoplay
										pagination={{ clickable: true }}
										//   scrollbar={{ draggable: true }}
										onSwiper={(swiper) => console.log(swiper)}
										onSlideChange={() => console.log('slide change')}
									>
										<SwiperSlide>
											<div class="classes-col">
												<div class="class-thumb">
													<img src={maths} alt="" class="w-100" />
													<a href="#" title="" class="crt-btn">
														<img src={icon10} alt="" />
													</a>
												</div>
												<div class="class-info">
													<h3><a href="#" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Basic English Speaking and Grammar</a></h3>
													<span style={{ color: '#c5892b' }}>Mon-Fri</span>
													<span style={{ color: '#c5892b' }}>10 AM - 12 AM</span>
													<div class="d-flex flex-wrap align-items-center">
														<div class="posted-by">
															<img src={ico} alt="" />
															<a href="#" title="" style={{ textDecoration: 'none' }}>Verena Mories</a>
														</div>
														<strong class="price" style={{ color: '#3c719a' }}>45 EGP</strong>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide> <div class="classes-col">
											<div class="class-thumb">
												<img src={maths} alt="" class="w-100" />
												<a href="#" title="" class="crt-btn">
													<img src={icon10} alt="" />
												</a>
											</div>
											<div class="class-info">
												<h3><a href="#" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Basic English Speaking and Grammar</a></h3>
												<span style={{ color: '#c5892b' }}>Mon-Fri</span>
												<span style={{ color: '#c5892b' }}>10 AM - 12 AM</span>
												<div class="d-flex flex-wrap align-items-center">
													<div class="posted-by">
														<img src={ico} alt="" />
														<a href="#" title="" style={{ textDecoration: 'none' }}>Verena Mories</a>
													</div>
													<strong class="price" style={{ color: '#3c719a' }}>45 EGP</strong>
												</div>
											</div>
										</div></SwiperSlide>
										<SwiperSlide> <div class="classes-col">
											<div class="class-thumb">
												<img src={maths} alt="" class="w-100" />
												<a href="#" title="" class="crt-btn">
													<img src={icon10} alt="" />
												</a>
											</div>
											<div class="class-info">
												<h3><a href="#" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Basic English Speaking and Grammar</a></h3>
												<span style={{ color: '#c5892b' }}>Mon-Fri</span>
												<span style={{ color: '#c5892b' }}>10 AM - 12 AM</span>
												<div class="d-flex flex-wrap align-items-center">
													<div class="posted-by">
														<img src={ico} alt="" />
														<a href="#" title="" style={{ textDecoration: 'none' }}>Verena Mories</a>
													</div>
													<strong class="price" style={{ color: '#3c719a' }}>45 EGP</strong>
												</div>
											</div>
										</div></SwiperSlide>
										<SwiperSlide>  <div class="classes-col">
											<div class="class-thumb">
												<img src={maths} alt="" class="w-100" />
												<a href="#" title="" class="crt-btn">
													<img src={icon10} alt="" />
												</a>
											</div>
											<div class="class-info">
												<h3><a href="#" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Basic English Speaking and Grammar</a></h3>
												<span style={{ color: '#c5892b' }}>Mon-Fri</span>
												<span style={{ color: '#c5892b' }}>10 AM - 12 AM</span>
												<div class="d-flex flex-wrap align-items-center">
													<div class="posted-by">
														<img src={ico} alt="" />
														<a href="#" title="" style={{ textDecoration: 'none' }}>Verena Mories</a>
													</div>
													<strong class="price" style={{ color: '#3c719a' }}>45 EGP</strong>
												</div>
											</div>
										</div></SwiperSlide>
									</Swiper>
								</div>
								{/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
							</div>
							{/* <div class="col-lg-3">
							<div class="classes-col wow fadeInUp" data-wow-duration="1000ms">
								<div class="class-thumb">
									<img src={maths} alt="" style={{width:'50%'}}/>
									<a href="contacts.html" title="" class="crt-btn">
										<img src={icon10} alt=""/>
									</a>
								</div>
								<div class="class-info">
									<h3><a href="class-single.html" title="">Basic English Speaking and Grammar</a></h3>
									<span>Mon-Fri</span>
									<span>10 AM - 12 AM</span>
									<div class="d-flex flex-wrap align-items-center">
										<div class="posted-by">
											<img src={ico} alt=""/>
											<a href="#" title="">Verena Mories</a>
										</div>
										<strong class="price">$45</strong>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="classes-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
								<div class="class-thumb">
									<img src="https://via.placeholder.com/1970x1326" alt="" style={{width:'50%'}}/>
									<a href="contacts.html" title="" class="crt-btn">
										<img src={icon10} alt=""/>
									</a>
								</div>
								<div class="class-info">
									<h3><a href="class-single.html" title="">Natural Sciences & Mathematics Courses</a></h3>
									<span>Mon-Fri</span>
									<span>10 AM - 12 AM</span>
									<div class="d-flex flex-wrap align-items-center">
										<div class="posted-by">
											<img src={ico} alt=""/>
											<a href="#" title="">Gypsy Hardinge</a>
										</div>
										<strong class="price">$67</strong>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="classes-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
								<div class="class-thumb">
									<img src="https://via.placeholder.com/1440x960" alt="" style={{width:'50%'}}/>
									<a href="contacts.html" title="" class="crt-btn">
										<img src={icon10} alt=""/>
									</a>
								</div>
								<div class="class-info">
									<h3><a href="class-single.html" title="">Environmental Studies & Earth Sciences</a></h3>
									<span>Mon-Fri</span>
									<span>10 AM - 12 AM</span>
									<div class="d-flex flex-wrap align-items-center">
										<div class="posted-by">
											<img src={ico} alt=""/>
											<a href="#" title="">Margje Jutten</a>
										</div>
										<strong class="price">$89</strong>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="classes-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
								<div class="class-thumb">
									<img src="https://via.placeholder.com/1296x864" alt="" style={{width:'50%'}}/>
									<a href="contacts.html" title="" class="crt-btn">
										<img src={icon10} alt=""/>
									</a>
								</div>
								<div class="class-info">
									<h3><a href="class-single.html" title="">Hospitality, Leisure & Sports Courses</a></h3>
									<span>Mon-Fri</span>
									<span>10 AM - 12 AM</span>
									<div class="d-flex flex-wrap align-items-center">
										<div class="posted-by">
											<img src={ico} alt=""/>
											<a href="#" title="">Hubert Franck</a>
										</div>
										<strong class="price">$67</strong>
									</div>
								</div>
							</div>
						</div> */}


							<div class="lnk-dv text-center">
								<Link to='/classes' style={{ textDecoration: 'none' }} title="" class="btn-default">Classes <i class="fa fa-long-arrow-alt-right"></i></Link>
							</div>
						</div>
					</div>
				</section>

				<section class="teachers-section">
					<div class="container">
						<div class="section-title text-center">
							<h2>Our Awesome <br /> Instructors</h2>
							<p>Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra, bibendum justo eget, lacinia dui. Donec ligula ligula, elementum sit amet</p>
						</div>
						<div class="teachers">
							{/* <TeacherCarousel/> */}
							<div class="row">
								<Swiper
									// install Swiper modules
									modules={[Navigation, Pagination, Scrollbar, A11y]}
									spaceBetween={50}
									slidesPerView={3}
									navigation
									autoplay
									loop
									pagination={{ clickable: true }}
									//   scrollbar={{ draggable: true }}
									onSwiper={(swiper) => console.log(swiper)}
									onSlideChange={() => console.log('slide change')}
								>
									<SwiperSlide><div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth" style={{ width: '100%' }}>
										<div class="teacher">
											<div class="teacher-img">
												<img src={omar} alt="" style={{ width: '100%' }} />
												<div class="sc-div">
													<ul style={{ paddingLeft: '0px' }}>
														<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
													</ul>
													<span><img src={plus} alt="" /></span>
												</div>
											</div>
											<div class="teacher-info">
												<h3><a href="" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Nour Assem</a></h3>
												<span style={{ color: '#c5892b' }}>English Teacher</span>
											</div>
										</div>
									</div></SwiperSlide>
									<SwiperSlide><div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth" style={{ width: '100%' }}>
										<div class="teacher">
											<div class="teacher-img">
												<img src={verena} alt="" style={{ width: '100%' }} />
												<div class="sc-div">
													<ul style={{ paddingLeft: '0px' }}>
														<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
													</ul>
													<span><img src={plus} alt="" /></span>
												</div>
											</div>
											<div class="teacher-info">
												<h3><a href="" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Verena Mories</a></h3>
												<span style={{ color: '#c5892b' }}>Instructor</span>
											</div>
										</div>
									</div></SwiperSlide>
									<SwiperSlide><div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth" style={{ width: '100%' }}>
										<div class="teacher">
											<div class="teacher-img">
												<img src={omar} alt="" style={{ width: '100%' }} />
												<div class="sc-div">
													<ul style={{ paddingLeft: '0px' }}>
														<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
													</ul>
													<span><img src={plus} alt="" /></span>
												</div>
											</div>
											<div class="teacher-info">
												<h3><a href="" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Omar Sameh</a></h3>
												<span style={{ color: '#c5892b' }}>Art Teacher</span>
											</div>
										</div>
									</div></SwiperSlide>
									<SwiperSlide><div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth" style={{ width: '100%' }}>
										<div class="teacher">
											<div class="teacher-img">
												<img src={omar} alt="" style={{ width: '100%' }} />
												<div class="sc-div">
													<ul style={{ paddingLeft: '0px' }}>
														<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
														<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
													</ul>
													<span><img src={plus} alt="" /></span>
												</div>
											</div>
											<div class="teacher-info">
												<h3><a href="" title="" style={{ textDecoration: 'none', color: '#3c719a' }}>Youssef El Sewefy</a></h3>
												<span style={{ color: '#c5892b' }}>Instructors</span>
											</div>
										</div>
									</div></SwiperSlide>

								</Swiper>

								{/* 						
						<div class="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
							<div class="teacher">
								<div class="teacher-img">
									<img src="https://via.placeholder.com/1336x2004" alt="" style={{width:'100%'}}/>
									<div class="sc-div">
										<ul>
											<li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
											<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
											<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
										</ul>
										<span><img src={plus} alt=""/></span>
									</div>
								</div>
								<div class="teacher-info">
									<h3><a href="teacher-single.html" title=""  style={{textDecoration:'none'}}>Chikelu Obasea</a></h3>
									<span>Art Teacher</span>
								</div>
							</div>
						</div> */}

							</div>
						</div>
					</div>
				</section>

				{/* <section class="course-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="find-course">
							<div class="sec-title">
								<h2>Find Your Course</h2>
								<p>ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor sit</p>
								<h3><img src="assets/img/icon11.png" alt=""/>Call: <strong>+2 342 5446 67</strong></h3>
							</div>
							<div class="course-img">
								<img src="https://via.placeholder.com/476x526" alt=""/>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="courses-list">
							<div class="course-card wow fadeInLeft" data-wow-duration="1000ms">
								<div class="d-flex flex-wrap align-items-center">
									<ul class="course-meta">
										<li>
											<img src="assets/img/icon12.png" alt=""/>
											29/07/2020
										</li>
										<li>
											11AM to 15PM
										</li>
									</ul>
									<span>FREE</span>
								</div>
								<h3><a href="event-single.html" title="">Digital Transformation Conference</a></h3>
								<div class="d-flex flex-wrap">
									<div class="posted-by">
										<img src={ico} alt=""/>
										<a href="#" title="">Verena Mories</a>
									</div>
									<span class="locat"><img src="assets/img/loct.png" alt="" />43 castle road 517 district</span>
								</div>
							</div>
							<div class="course-card wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="400ms">
								<div class="d-flex flex-wrap align-items-center">
									<ul class="course-meta">
										<li>
											<img src="assets/img/icon12.png" alt=""/>
											29/07/2020
										</li>
										<li>
											11AM to 15PM
										</li>
									</ul>
									<span>$16</span>
								</div>
								<h3><a href="event-single.html" title="">Environment conference</a></h3>
								<div class="d-flex flex-wrap">
									<div class="posted-by">
										<img src={ico} alt=""/>
										<a href="#" title="">Cvita Doleschall</a>
									</div>
									<span class="locat"><img src="assets/img/loct.png" alt="" />43 castle road 517 district</span>
								</div>
							</div>
							<div class="course-card wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="600ms">
								<div class="d-flex flex-wrap align-items-center">
									<ul class="course-meta">
										<li>
											<img src="assets/img/icon12.png" alt=""/>
											29/07/2020
										</li>
										<li>
											11AM to 15PM
										</li>
									</ul>
									<span>$8</span>
								</div>
								<h3><a href="event-single.html" title="">Campus clean workshop</a></h3>
								<div class="d-flex flex-wrap">
									<div class="posted-by">
										<img src={ico} alt=""/>
										<a href="#" title="">Helena Brauer</a>
									</div>
									<span class="locat"><img src="assets/img/loct.png" alt="" />43 castle road 517 district</span>
								</div>
							</div>
						</div>
						<a href="events.html" title="" class="all-btn">All Events <i class="fa fa-long-arrow-alt-right"></i></a>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</section> */}

				{/* <section class="blog-section">
			<div class="container">
				<div class="section-title text-center">
					<h2>Recent News</h2>
					<p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacusMorbi lorem sem, aliquet</p>
				</div>
				<div class="blog-posts">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="blog-post">
								<div class="blog-thumbnail">
									<img src={maths} alt="" style={{width:'50%'}}/>
									<span class="category">English</span>
								</div>
								<div class="blog-info">
									<ul class="meta">
										<li><a href="#" title="">17/09/2020</a></li>
										<li><a href="#" title="">by Admin</a></li>
										<li><img src="assets/img/icon13.png" alt="" /><a href="#" title="">Teachers,</a><a href="#" title=""> School</a></li>
									</ul>
									<h3><a href="post.html" title="">Campus clean workshop</a></h3>
									<p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet</p>
									<a href="post.html" title="" class="read-more">Read <i class="fa fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="blog-post">
								<div class="blog-thumbnail">
									<img src="https://via.placeholder.com/1440x960" alt="" style={{width:'50%'}}/>
									<span class="category">English</span>
								</div>
								<div class="blog-info">
									<ul class="meta">
										<li><a href="#" title="">17/09/2020</a></li>
										<li><a href="#" title="">by Admin</a></li>
										<li><img src="assets/img/icon13.png" alt="" /><a href="#" title="">Teachers,</a><a href="#" title=""> School</a></li>
									</ul>
									<h3><a href="post.html" title="">Campus clean workshop</a></h3>
									<p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet</p>
									<a href="post.html" title="" class="read-more">Read <i class="fa fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="blog-post">
								<div class="blog-thumbnail">
									<img src={maths} alt="" style={{width:'50%'}}/>
									<span class="category">English</span>
								</div>
								<div class="blog-info">
									<ul class="meta">
										<li><a href="#" title="">17/09/2020</a></li>
										<li><a href="#" title="">by Admin</a></li>
										<li><img src="assets/img/icon13.png" alt="" /><a href="#" title="">Teachers,</a><a href="#" title=""> School</a></li>
									</ul>
									<h3><a href="post.html" title="">Campus clean workshop</a></h3>
									<p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet</p>
									<a href="post.html" title="" class="read-more">Read <i class="fa fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */}

				{/* <section class="newsletter-section">
			<div class="container">
				<div class="newsletter-sec">
					<div class="row align-items-center">
						<div class="col-lg-4">
							<div class="newsz-ltr-text">
								<h2>Join us <br /> and stay tuned!</h2>
								<a href="contacts.html" title="" class="btn-default">Join Us <i class="fa fa-long-arrow-alt-right"></i></a>
							</div>
						</div>
						<div class="col-lg-8">
							<form class="newsletter-form">
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<input type="text" name="name" placeholder="Name"/>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<input type="email" name="email" placeholder="Email"/>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group select-tg">
											<select>
												<option>Class</option>
												<option>Class</option>
												<option>Class</option>
												<option>Class</option>
												<option>Class</option>
												<option>Class</option>
											</select>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section> */}



			</div>
			<div className="container">
				<div className="row">
					<div className="card card-carrier">
						<div style={{ position: "relative" }}>
							<ResponsiveContainer
								carouselRef={ref}
								dots={true}
								render={(width, carouselRef) => {
									let currentVisibleSlide = 3;
									if (width <= 1280) currentVisibleSlide = 3;
									if (width <= 720) currentVisibleSlide = 1;
									return (
										<StackedCarousel
											dots={true}
											ref={carouselRef}
											slideComponent={Slide}
											slideWidth={565}
											carouselWidth={width}
											data={data}
											maxVisibleSlide={5}

											customScales={[1, 0.75, 0.5, 0.45]}
											transitionTime={450}
											currentVisibleSlide={3}
											fadeDistance={0.1}
										/>
									);
								}}

							/>
							<div
								className="card-button testimonial-left-button"
								size="small"
								onClick={() => ref.current?.goBack()}
							>
								<i class="fa-solid fa-angle-left "></i>      </div>
							<div
								className="card-button testimonial-right-button"
								size="small"
								onClick={() => ref.current?.goNext()}
							>
								<i class="fa-solid fa-angle-right "></i>
							</div>

						</div>
					</div>
				</div>

			</div>



		</>
	)
}
