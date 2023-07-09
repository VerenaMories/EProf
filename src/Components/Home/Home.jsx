import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
// import logo2 from '../images/logo.png';
import icon1 from "../images/icon1.png";
import logo2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/p4905879.jpg";
import icon7 from "../images/p3753670.jpg";
import icon8 from "../images/p8599.jpg";
import icon9 from "../images/p4905784.jpg";
import icon10 from "../images/icon10.png";
import thanwya from "../images/00000.png";
import plus from "../images/plus.png";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { Slide } from "./testimonial.jsx";
import { useRef } from "react";
import classroom from "../images/classroom (1).jpg";
import classroom1 from "../images/classroom (2).jpg";
import classroom2 from "../images/classroom (3).jpg";
import classroom3 from "../images/classroom (4).jpg";
import myproject from "../images/My project1.jpg";
import myproject2 from "../images/My project2.jpg";
import myproject3 from "../images/My project3.jpg";
import myproject4 from "../images/My project4.jpg";
import myproject5 from "../images/myprojuct5.jpg";
import myproject6 from "../images/myProject6.jpg";
import myProject7 from "../images/myproject7.jpg";
import myProject8 from "../images/myproject8.jpg";
import defImage from "../images/PngItem_1503945.png";
// import Carousel from './Carousel';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Home.css";
import maths from "../images/maths.png";
import ico from "../images/ico.png";
import verena from "../images/ins.jpg";
import omar from "../images/img8.jpg";
import AccordionComp from "../AccordionComponent/AccordionComp";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Search from "./Search";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";

export default function Home() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/allImgs")
      .then((response) => {
        setImgs(response.data.imgs);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2000, min: 992 },
      items: 1,
    },
  };
  const isMobileView = /Mobi|Android/i.test(navigator.userAgent); // Check if the user is in mobile view

  const [classRoomData, setClassRoomData] = useState([]);
  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/classroom/all")
      .then((response) => {
        const updatedData = response.data.classRoom.map((item) => {
          const reader = new FileReader();
          reader.readAsDataURL(new Blob([item.img]));
          return new Promise((resolve) => {
            reader.onloadend = () => {
              item.img = reader.result;
              resolve(item);
            };
          });
        });
        Promise.all(updatedData).then((data) => {
          setClassRoomData(data);
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const [teacherData, setTeacherData] = useState([]);
  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/instructor/all")
      .then((response) => {
        setTeacherData(response.data.instructor);
        //   console.log(response.data.instructor)
      })
      .catch((error) => {
        //   console.log(error);
      });
  }, []);
  // const navigate = useNavigate();

  function NavTeacher(m) {
    navigate("/singleTeacher/" + m);
  }
  function Nav(s) {
    navigate("/singleClass/" + s);
  }

  const [selectedOption, setSelectedOption] = useState("");
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [showSecondDropdown2, setShowSecondDropdown2] = useState(false);
  const [showSecondDropdown3, setShowSecondDropdown3] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");
  const [showSecondDropdown1, setShowSecondDropdown1] = useState(false);
  const [showSecondDropdown22, setShowSecondDropdown22] = useState(false);
  const [showSecondDropdown33, setShowSecondDropdown33] = useState(false);
  const [showSecondDropdown44, setShowSecondDropdown44] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("");
  const [showSecondDropdown11, setShowSecondDropdown11] = useState(false);
  const [showSecondDropdown222, setShowSecondDropdown222] = useState(false);
  const [showSecondDropdown333, setShowSecondDropdown333] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState("");
  const [showSecondDropdown111, setShowSecondDropdown111] = useState(false);
  const [showSecondDropdown2222, setShowSecondDropdown2222] = useState(false);
  const [showSecondDropdown3333, setShowSecondDropdown3333] = useState(false);
  const [selectedOptionInstructor, setSelectedOptionInstructor] = useState("");
  const [showSecondDropdownInstructor1, setShowSecondDropdownInstructor1] =
    useState(false);
  const [showSecondDropdownInstructor2, setShowSecondDropdownInstructor2] =
    useState(false);
  const [showSecondDropdownInstructor3, setShowSecondDropdownInstructor3] =
    useState(false);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowSecondDropdown(event.target.value === "selectOne");
    setShowSecondDropdown2(event.target.value === "optionTwo");
    setShowSecondDropdown3(event.target.value === "optionThree");
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
    setShowSecondDropdown1(event.target.value === "subOptionOne");
    setShowSecondDropdown22(event.target.value === "subOptionTwo");
    setShowSecondDropdown33(event.target.value === "subOptionThree");
    setShowSecondDropdown44(event.target.value === "subOptionFour");
  };
  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
    setShowSecondDropdown11(event.target.value === "subOptionOne1");
    setShowSecondDropdown222(event.target.value === "subOptionTwo1");
    setShowSecondDropdown333(event.target.value === "subOptionThree1");
  };
  const handleOptionChange4 = (event) => {
    setSelectedOption4(event.target.value);
    setShowSecondDropdown111(event.target.value === "subOptionOne11");
    setShowSecondDropdown2222(event.target.value === "subOptionTwo11");
    setShowSecondDropdown3333(event.target.value === "subOptionThree11");
  };
  const handleOptionChangeInstructor = (event) => {
    setSelectedOptionInstructor(event.target.value);
    setShowSecondDropdownInstructor1(
      event.target.value === "subOptionOneEnglish"
    );
    setShowSecondDropdownInstructor2(
      event.target.value === "subOptionTwoMaths"
    );
    setShowSecondDropdownInstructor3(
      event.target.value === "subOptionThreeBiology"
    );
  };
  const today = new Date();

  function stuff() {
    ref.current?.goNext();
  }
  const ref = React.useRef(StackedCarousel);
  useEffect(() => {
    setInterval(1000);
    // console.log("i fire once");
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://eprof-zu1o.onrender.com/blog/all`)
      .then((res) => {
        if (res.data) {
          let arr = res.data.map((one) => {
            return {
              image: ` ${one.img}`,
              text: (
                <Link
                  to={`/singleBlog/${one._id}`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {" "}
                  <p style={{ marginBottom: "0", color: "#fff" }}>
                    {" "}
                    {one.titleEnglish}
                    <br />{" "}
                    {/* <span>
						{" "}
						Maps Team | {format(new Date(one.date), "MMM dd, yyyy")}
					  </span> */}
                  </p>{" "}
                </Link>
              ),
            };
          });
          setData((prevData) => prevData.concat(arr));
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  }, []);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/search?name=")
      .then((response) => {
        setAllData(response.data.all);
        // console.log(response.data.all)
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const navigate = useNavigate();

  function Navall(s) {
    navigate("/search/" + s);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let searchTerm = document.querySelector('input[name="search"]').value || "";
    searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

    Navall(searchTerm);
    // console.log(`Searching for: ${searchTerm}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  const handleSearchClick = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const maxVisibleSlide = 3; // Set the maximum number of visible slides

  return (
    <>
      <div class="wrapper">
        <div class="main-section">
          <section class="main-banner">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-7 col-md-7">
                  <div
                    class="banner-text wow fadeInLeft homeLeft"
                    data-wow-duration="1000ms"
                  >
                    <h2>
                      The Smarter Way to Learn With{" "}
                      <span
                        style={{ fontFamily: "flanella", color: "#c5892b" }}
                      >
                        E
                      </span>{" "}
                      <span style={{ color: "#3c719a", fontFamily: "azonix" }}>
                        {" "}
                        PROF
                      </span>{" "}
                    </h2>
                    <p>
                      Find great instructors, access essential courses, and
                      track your overall progress.
                    </p>
                    <form class="search-form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        onKeyDown={handleKeyDown}
                      />
                      <button type="submit" onClick={handleSearchClick}>
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                    {/* {allData.map(item => (
										<form class="search-form" key={item._id}>
											<input type="text" name="search" placeholder="Search" />
											<a
											  onClick={() => Navall(item.name)}
											><i class="fa fa-search"></i></a>
										</form>))} */}
                  </div>
                </div>
                <div class="col-lg-5 col-md-5">
                  <div
                    class="banner-img wow zoomIn homeImage"
                    data-wow-duration="1000ms"
                  >
                    <img src={thanwya} alt="" />
                  </div>
                  <div
                    class="elements-bg wow zoomIn homeCircle"
                    data-wow-duration="1000ms"
                  ></div>
                </div>
              </div>
            </div>
          </section>
          {/* <span style={{fontFamily:'script' , fontSize:'36px' , paddingLeft:'5%'}}> Les francophones se réunissent</span>	 */}
          <h2 class="main-title">
            <span style={{ fontFamily: "flanella", color: "#c5892b" }}>E</span>{" "}
            <span style={{ color: "#3c719a", fontFamily: "azonix" }}>
              {" "}
              PROF
            </span>{" "}
          </h2>
        </div>

        <section class="about-us-section">
          <div class="container">
            <div class="section-title text-center">
              <h1
                style={{
                  paddingTop: "0",
                  fontStyle: "italic",
                  fontWeight: "600",
                  fontSize: "35px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div id="fragment1">
                  Welcome to{" "}
                  <span style={{ fontFamily: "flanella", color: "#c5892b" }}>
                    E
                  </span>{" "}
                  <span style={{ color: "#3c719a", fontFamily: "azonix" }}>
                    {" "}
                    PROF
                  </span>
                </div>
              </h1>
              {/* <h2></h2> */}
              <Fade bottom duration={1000} delay={500}>
                {" "}
                <p>
                  It is an e-learning platform that strives to assist students
                  have a smart and intelligent future.
                </p>
              </Fade>
            </div>
            <div class="about-sec">
              <div class="container">
                <div class="row">
                  <Fade bottom duration={1000} delay={500}>
                    <Carousel
                      swipeable={false}
                      draggable={true}
                      //   showDots={true}
                      responsive={responsive}
                      ssr={true}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={3000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      deviceType="desktop"
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                      {imgs.map((img) => (
                        <img
                          src={img.img}
                          alt="carousel-img"
                          key={img._id}
                          style={{ width: "100%", height: "30vh" }}
                        />
                      ))}
                    </Carousel>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="classes-section">
          <div class="container">
            <div class="sec-title">
              <Fade left duration={1000} delay={500}>
                {" "}
                <h2>Our Classes</h2>
              </Fade>
              <Fade left duration={1000} delay={500}>
                <p>
                  We provide diploma lessons of all types to ensure that each
                  student finds the ideal solution for their future.
                </p>
              </Fade>
            </div>

            <div class="classes-sec">
              <div
                id="carouselExampleInterval"
                class="carousel slide container"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner row">
                  <AccordionComp />
                </div>
              </div>

              <div class="lnk-dv text-center">
                <Link
                  to="/classes"
                  style={{ textDecoration: "none", padding: "0 60px" }}
                  title=""
                  class="btn-default"
                >
                  <Fade bottom duration={1000} delay={500}>
                    Classes{" "}
                  </Fade>
                  <i class="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section class="teachers-section">
          <div class="container">
            <div class="section-title text-center">
              <Fade bottom duration={1000} delay={500}>
                {" "}
                <h2>
                  Our Awesome <br /> Instructors
                </h2>
              </Fade>
              <Fade bottom duration={1000} delay={500}>
                {" "}
                <p>
                  We guarantee that we have the best, most knowledgeable
                  instructors to provide you with the best educational service
                  possible.
                </p>
              </Fade>
            </div>
            <div class="teachers">
              {/* <TeacherCarousel/> */}
              <div class="row">
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlay
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className="hello"
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 3,
                      partialVisibilityGutter: 40,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                      partialVisibilityGutter: 30,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 2,
                      partialVisibilityGutter: 30,
                    },
                  }}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  {teacherData
                    .filter((item) => !item.block)
                    .map((item) => (
                      <div
                        class="col col-sm-12 full-wdth"
                        key={item._id}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div class="teacher">
                          <div class="teacher-img">
                            <img
                              src={item.img ? item.img : verena}
                              alt=""
                              onClick={() => NavTeacher(item._id)}
                              style={{
                                width: "376px",
                                height: "624px",
                                cursor: "pointer",
                              }}
                            />
                            <div class="sc-div">
                              <ul style={{ paddingLeft: "0px" }}>
                                {item.socialMedia &&
                                  item.socialMedia.whatsapp && (
                                    <li>
                                      <a
                                        target="_blank"
                                        href={`https://wa.me/${item.socialMedia.whatsapp}`}
                                        title=""
                                      >
                                        <i class="fab fa-whatsapp"></i>
                                      </a>
                                    </li>
                                  )}
                                {item.socialMedia &&
                                  item.socialMedia.linkedIn && (
                                    <li>
                                      <a
                                        target="_blank"
                                        href={`https://www.linkedin.com/in/${item.socialMedia.linkedIn}`}
                                        title=""
                                      >
                                        <i class="fab fa-linkedin-in"></i>
                                      </a>
                                    </li>
                                  )}
                                {item.socialMedia &&
                                  item.socialMedia.facebook && (
                                    <li>
                                      <a
                                        target="_blank"
                                        href={`https://www.facebook.com/${item.socialMedia.facebook}`}
                                        title=""
                                      >
                                        <i class="fab fa-facebook-f"></i>
                                      </a>
                                    </li>
                                  )}
                              </ul>
                              <span>
                                <img src={plus} alt="" />
                              </span>
                            </div>
                          </div>
                          <div class="teacher-info">
                            <h3>
                              <a
                                onClick={() => NavTeacher(item._id)}
                                title=""
                                style={{
                                  textDecoration: "none",
                                  color: "#3c719a",
                                  cursor: "pointer",
                                }}
                              >
                                {item.name}{" "}
                              </a>
                            </h3>
                            {item.subjectId
                              ? item.subjectId.map((name, index) => (
                                  <span
                                    style={{
                                      color: "#c5892b",
                                      display: "inline",
                                    }}
                                    key={name._id}
                                  >
                                    {name.name}
                                    {index < item.subjectId.length - 1
                                      ? " ,  "
                                      : ""}
                                  </span>
                                ))
                              : null}
                            {/* {console.log(item.subjectId?.name)} */}
                          </div>
                        </div>
                      </div>
                    ))}
                </Carousel>
                <div
                  class="lnk-dv text-center"
                  style={{ marginBottom: "3%", paddingTop: "3%" }}
                >
                  <Link
                    to="/teachers"
                    style={{ textDecoration: "none", padding: "0 60px" }}
                    title=""
                    class="btn-default"
                  >
                    <Fade bottom duration={1000} delay={500}>
                      Instructors
                    </Fade>
                    <i class="fa fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row">
          <Fade bottom duration={1000} delay={500}>
            <div className="card card-carrier">
              <div style={{ position: "relative" }}>
                {data.length >= (maxVisibleSlide + 1) / 2 ? (
                  <ResponsiveContainer
                    carouselRef={ref}
                    dots={true}
                    render={(width, carouselRef) => {
                      let currentVisibleSlide = 3;
                      if (width <= 1280) currentVisibleSlide = 3;
                      if (width <= 720) currentVisibleSlide = 1;
                      const responsiveSlideWidth = Math.floor(
                        width / currentVisibleSlide
                      );
                      const customScales = Array.from(
                        { length: (currentVisibleSlide + 3) / 2 },
                        (_, i) => {
                          return i === 0 ? 1 : 0.75; // Set the scales based on the number of visible slides
                        }
                      );
                      return (
                        <StackedCarousel
                          dots={true}
                          ref={carouselRef}
                          slideComponent={Slide}
                          slideWidth={responsiveSlideWidth}
                          carouselWidth={width}
                          data={data}
                          maxVisibleSlide={currentVisibleSlide}
                          // useGrabCursor
                          // disableSwipe={false}
                          customScales={customScales}
                          transitionTime={450}
                          currentVisibleSlide={currentVisibleSlide}
                          fadeDistance={0.1}
                        />
                      );
                    }}
                  />
                ) : (
                  <>
                    {data.map((blog) => (
                      <div key={blog._id}>
                        <p>{blog.titleEnglish}</p>
                        <img src={blog.img} alt="Blog" />
                      </div>
                    ))}
                  </>
                )}

                <div
                  className="card-button testimonial-left-button"
                  size="small"
                  onClick={() => ref.current?.goBack()}
                >
                  <i class="fa-solid fa-angle-left "></i>{" "}
                </div>
                <div
                  className="card-button testimonial-right-button"
                  size="small"
                  onClick={() => ref.current?.goNext()}
                >
                  <i class="fa-solid fa-angle-right "></i>
                </div>
                {/* <div className="owlDots text-center" >
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'12px', height:'12px' ,margin:'5px 5px', borderRadius:'50%', transition:'all .25s', backgroundColor:'#fff'}}></button>
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'12px', height:'12px' ,margin:'5px 5px', borderRadius:'50%', transition:'all .25s', backgroundColor:'#fff'}}></button>
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'23px', height:'10px' ,margin:'5px 5px', borderRadius:'10px',backgroundColor:'#ffc600', transition:'all .25s'}}></button>
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'12px', height:'12px' ,margin:'5px 5px', borderRadius:'50%', transition:'all .25s', backgroundColor:'#fff'}}></button>

        </div> */}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
