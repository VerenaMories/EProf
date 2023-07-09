import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ico from "../images/ico.png";
import maths from "../images/maths.png";
import icon10 from "../images/icon10.png";
import R from "../images/R.png";
import stopImage from "../images/stop.png";

import { Col, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import { Virtual } from "swiper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import verena from "../images/ins.jpg";
import Fade from "react-reveal/Fade";

import "swiper/css";
import "swiper/css/virtual";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "0px 0 6px rgba(21, 87, 153, 1)",
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",

  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordionComp() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [selectedDiploma, setselectedDiploma] = useState(null);
  const [StudyYearNew, setStudyYearNew] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedStudyYear, setSelectedStudyYear] = useState(null);
  const [subjectData, setsubjectData] = useState([]);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedinstructor, setSelectedinstructor] = useState(null);
  const [Instructor, setInstructor] = useState([]);
  const [AllFilter, setAllFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [expanded, setExpanded] = React.useState("panel1");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const payNow = (id) => {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    axios
      .post(
        "https://eprof-zu1o.onrender.com/classroom/buy/" + id,
        {},
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        //  sessionStorage.setItem('enrolled', true)
        swal("Good job!", response.data.message, "success");
      })
      .catch((error) => {
        // console.log(error);
        swal("Oops!", error.response.data, "error");
      });
  };
  const [diplomaData, setDiplomaData] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState(null);
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  useEffect(() => {
    let url = `https://eprof-zu1o.onrender.com/classroom/all`;
    if (
      selectedStudyYear ||
      selectedinstructor ||
      selectedSubject ||
      selectedDiploma
    ) {
      url += `?`;
      if (selectedStudyYear) {
        url += `studyYear=${selectedStudyYear}&`;
        // console.log("aywa study");
      }
      if (selectedinstructor) {
        url += `instructor=${selectedinstructor}&`;
        // console.log("aywa instructor");
      }
      if (selectedSubject) {
        url += `subject=${selectedSubject}&`;
        // console.log("aywa subject");
      }
      if (selectedDiploma) {
        url += `diploma=${selectedDiploma}&`;
        // console.log("aywa diploma");
      }
      url = url.slice(0, -1);
    }

    axios
      .get(url)
      .then((response) => {
        setAllFilter(response.data.classRoom);
        // console.log(response.data.classRoom);
        // console.log("ashtar shatora");
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [selectedStudyYear, selectedinstructor, selectedSubject, selectedDiploma]); // Empty dependency array

  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/allDiploma")
      .then((response) => {
        setDiplomaData(response.data.diploma);
        // console.log(response.data.diploma);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  useEffect(() => {
    let url = `https://eprof-zu1o.onrender.com/admin/allStudyYear`;
    if (selectedDiploma) {
      url += `?`;
      if (selectedDiploma) {
        url += `diploma=${selectedDiploma}`;
        // console.log("aywa diploma");
      }
      // url = url.slice(0, -1);
    }
    axios
      .get(url)
      .then((response) => {
        setStudyYearNew(response.data.studyYear);
        console.log(response.data.studyYear);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [selectedDiploma]);
  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/allSubjects")
      .then((response) => {
        setsubjectData(response.data.subject);
        // console.log(response.data.subject);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  useEffect(() => {
    let url = `https://eprof-zu1o.onrender.com/instructor/all`;
    if (selectedStudyYear || selectedSubject || selectedDiploma) {
      url += `?`;
      if (selectedStudyYear) {
        url += `studyYear=${selectedStudyYear}&`;
        // console.log("aywa study");
      }

      if (selectedSubject) {
        url += `subject=${selectedSubject}&`;
        // console.log("aywa subject");
      }
      if (selectedDiploma) {
        url += `diploma=${selectedDiploma}&`;
        // console.log("aywa diploma");
      }
    }
    axios
      .get(url)
      .then((response) => {
        setInstructor(response.data.instructor);
        // console.log(response.data.instructor);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [selectedStudyYear, selectedSubject, selectedDiploma]);

  const handleSelectChange3 = (subjectId, event) => {
    setSelectedSubject(subjectId);
    setSelectedValue2(subjectId);
    setExpanded("panel4");
  };
  const handleSelectChange2 = (instructorId, event) => {
    setSelectedinstructor(instructorId);
    setSelectedValue3(instructorId);
  };
  const handleSelectChange4 = (id, event, diplomaId) => {
    setSelectedValue1(id);
    setselectedDiploma(diplomaId);
    setExpanded("panel2");

    // Handle any other logic related to the selection
  };
  // const handleSelectChange4 = (event, diplomaId) => {
  //   setselectedDiploma(event.target.value, diplomaId);
  //   setSelectedValue1(event.target.value, diplomaId);
  // };
  const handleSelectChange1 = (id, event) => {
    setSelectedStudyYear(id);
    setSelectedValue(id);
    setExpanded("panel3");
  };

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(newExpanded);
    console.log(panel);
    setExpanded(newExpanded ? panel : false);
  };
  const navigate = useNavigate();
  function NavIns(v) {
    navigate("/singleTeacher/" + v);
  }
  function Nav(s) {
    navigate("/singleClass/" + s);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          class
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{ fontSize: "20px" }}>Diploma</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Row style={{ margin: "1%" }}>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-9">
                    <div class=" text-center justify-content-center ">
                      <div class="card-body show  ">
                        <section
                          className="row"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Fade bottom duration={1000} delay={500}>
                            <Carousel
                              swipeable={false}
                              draggable={true}
                              // showDots={true}
                              responsive={responsive}
                              ssr={true}
                              infinite={true}
                              // autoPlay={true}
                              autoPlaySpeed={3000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              deviceType="desktop"
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                            >
                              {diplomaData.map((diploma, index) => (
                                <div
                                  key={diploma._id}
                                  virtualIndex={index}
                                  className={`card ${
                                    selectedValue1 === diploma._id
                                      ? "selected"
                                      : ""
                                  }`}
                                  style={{
                                    margin: "7%",
                                    paddingBottom: "0px",
                                    backgroundColor: "transparent",
                                    boxShadow: "0 0 10px rgba(21, 87, 153, 1)",
                                    cursor: "pointer",
                                  }}
                                  onClick={(e) =>
                                    handleSelectChange4(
                                      diploma._id,
                                      e,
                                      diploma._id
                                    )
                                  }
                                >
                                  <i
                                    className="fa-solid fa-graduation-cap card-img-top fs-1"
                                    style={{
                                      padding: ".5rem",
                                      color: "rgb(197, 137, 43)",
                                    }}
                                  ></i>
                                  <div className="card-body">
                                    <p
                                      className="card-text"
                                      style={{
                                        fontSize: "18.29px",
                                        fontWeight: "500",
                                        textTransform: "capitalize",
                                        color: "rgb(60, 113, 154)",
                                      }}
                                    >
                                      {diploma ? diploma.name : ""}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </Carousel>
                          </Fade>
                        </section>
                        <div class="row justify-content-center">
                          <div class="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <CardCompomnent helper={"step1"} handleChange={() => setExpanded('panel2')} /> */}
            </Row>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography style={{ fontSize: "20px" }}>Study year</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-11">
                  <div class=" text-center justify-content-center ">
                    <div class="card-body show  ">
                      <div class="row">
                        <div class="col"></div>
                      </div>
                      <section
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Fade bottom duration={1000} delay={500}>
                          <Carousel
                            swipeable={false}
                            draggable={true}
                            // showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            // autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            deviceType="desktop"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                          >
                            {StudyYearNew.map((studyYear, index) => (
                              <div
                                key={studyYear._id}
                                virtualIndex={index}
                                className={`card ${
                                  selectedValue === studyYear._id
                                    ? "selected"
                                    : ""
                                }`}
                                style={{
                                  margin: "7%",
                                  paddingBottom: "0px",
                                  backgroundColor: "transparent",
                                  boxShadow: "0 0 10px rgba(21, 87, 153, 1)",
                                  cursor: "pointer",
                                }}
                                onClick={(e) =>
                                  handleSelectChange1(studyYear._id, e)
                                }
                              >
                                <i
                                  class="fa-solid fa-book  fs-1"
                                  style={{
                                    padding: ".5rem",
                                    color: "rgb(197, 137, 43)",
                                  }}
                                ></i>
                                <div className="card-body">
                                  <p
                                    className="card-text"
                                    style={{
                                      fontSize: "18.29px",
                                      fontWeight: "500",
                                      textTransform: "capitalize",
                                      color: "rgb(60, 113, 154)",
                                    }}
                                  >
                                    {studyYear ? studyYear.name : ""}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </Carousel>
                        </Fade>{" "}
                      </section>
                      <div class="row justify-content-center">
                        <div class="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography style={{ fontSize: "20px" }}>Subject</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-9">
                  <div class=" text-center justify-content-center ">
                    <div class="card-body show  ">
                      <div class="row">
                        <div class="col"></div>
                      </div>
                      <section
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Fade bottom duration={1000} delay={500}>
                          <Carousel
                            swipeable={false}
                            draggable={true}
                            // showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            // autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            deviceType="desktop"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                          >
                            {subjectData.map((subject, index) => (
                              <div
                                key={subject._id}
                                virtualIndex={index}
                                className={`card ${
                                  selectedValue2 === subject._id
                                    ? "selected"
                                    : ""
                                }`}
                                style={{
                                  margin: "7%",
                                  paddingBottom: "0px",
                                  backgroundColor: "transparent",
                                  boxShadow: "0 0 10px rgba(21, 87, 153, 1)",
                                  cursor: "pointer",
                                }}
                                onClick={(e) =>
                                  handleSelectChange3(subject._id, e)
                                }
                              >
                                <i
                                  class="fa-solid fa-book-open  fs-1"
                                  style={{
                                    padding: ".5rem",
                                    color: "rgb(197, 137, 43)",
                                  }}
                                ></i>
                                <div className="card-body">
                                  <p
                                    className="card-text"
                                    style={{
                                      fontSize: "18.29px",
                                      fontWeight: "500",
                                      textTransform: "capitalize",
                                      color: "rgb(60, 113, 154)",
                                    }}
                                  >
                                    {subject ? subject.name : ""}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </Carousel>
                        </Fade>
                      </section>
                      <div class="row justify-content-center">
                        <div class="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography style={{ fontSize: "20px" }}>Instructor</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-9">
                  <div class=" text-center justify-content-center ">
                    <div class="card-body show  ">
                      <div class="row">
                        <div class="col"></div>
                      </div>
                      <section
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Fade bottom duration={1000} delay={500}>
                          <Carousel
                            swipeable={false}
                            draggable={true}
                            // showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            // autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            deviceType="desktop"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                          >
                            {Instructor.map((instructor, index) => (
                              <div
                                key={instructor._id}
                                virtualIndex={index}
                                className={`card ${
                                  selectedValue3 === instructor._id
                                    ? "selected"
                                    : ""
                                }`}
                                style={{
                                  margin: "7%",
                                  paddingBottom: "0px",
                                  backgroundColor: "transparent",
                                  boxShadow: "0 0 10px rgba(21, 87, 153, 1)",
                                  cursor: "pointer",
                                }}
                                onClick={(e) =>
                                  handleSelectChange2(instructor._id, e)
                                }
                              >
                                <i
                                  class="fa-solid fa-person-chalkboard fs-1"
                                  style={{
                                    padding: ".5rem",
                                    color: "rgb(197, 137, 43)",
                                  }}
                                ></i>
                                <div className="card-body">
                                  <p
                                    className="card-text"
                                    style={{
                                      fontSize: "18.29px",
                                      fontWeight: "500",
                                      textTransform: "capitalize",
                                      color: "rgb(60, 113, 154)",
                                    }}
                                  >
                                    {instructor ? instructor.name : ""}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </Carousel>
                        </Fade>
                      </section>
                      <div class="row justify-content-center">
                        <div class="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="row p-3">
        <Fade bottom duration={1000} delay={500}>
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 1,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 1,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1,
              },
            }}
            containerClass="swiper-container"
            itemClass="swiper-slide"
            //  // showDots={true}
            arrows={true}
            // autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            dotListClass="swiper-dot-list"
            customTransition="all 1s"
          >
            {AllFilter.map(
              (item) =>
                // item.active === false && item.block === false ? (
                //   <div
                //     className="swiper-slide hidden-slide"
                //     key={item._id}
                //     style={{ display: "none" }}
                //   ></div>
                // ) : item.active === true && item.block === true ? (
                //   <div
                //     key={item._id}
                //     className="swiper-slide hidden-slide"
                //     style={{ display: "none" }}
                //   ></div>
                // ) : (
                item.active &&
                !item.block && (
                  <div key={item._id}>
                    <div className="classes-col" style={{ paddingRight: "2%" }}>
                      <div className="class-thumb" style={{ height: "300px" }}>
                        <div style={{ position: "relative" }}>
                          <span className="badger" style={{ color: "#fff" }}>
                            {item.offline === true ? "center" : "online"}
                          </span>
                          <img
                            onClick={() => Nav(item._id)}
                            src={item.img}
                            alt=""
                            className="w-100"
                            style={{ height: "300px", cursor: "pointer" }}
                          />
                        </div>
                        {/* {sessionStorage.getItem("loggedIn", true) ? ( */}
                        <div>
                          {item.openBuy === false && item.free === false ? (
                            <a
                              onClick={() => {
                                Nav(item._id);
                                toggleOpen();
                              }}
                              title=""
                              className="crt-btn"
                            >
                              <img src={stopImage} alt="" />
                            </a>
                          ) : item.openBuy === false && item.free === true ? (
                            <a
                              onClick={() => {
                                Nav(item._id);
                                toggleOpen();
                              }}
                              title=""
                              className="crt-btn"
                            >
                              <img src={R} alt="" />
                            </a>
                          ) : (
                            <a
                              onClick={() => {
                                Nav(item._id);
                                // toggleOpen();
                              }}
                              title=""
                              className="crt-btn"
                            >
                              <img src={icon10} alt="" />
                            </a>
                          )}
                          {/* {isOpen && (
                  <div className="sc-bBXxYQ kUrUbg">
                    <div className="dSDkyS">
                      <button className="close-button" onClick={toggleOpen}>
                        <i className="fa-regular fa-circle-xmark fs-3"></i>
                      </button>
                      <h6>buy from my wallet </h6>
                      <button
                        className="btn-default"
                        onClick={() => payNow(item._id)}
                      >
                        Pay now
                      </button>
                    </div>
                  </div>
                )} */}
                        </div>
                        {/* // ) : (
            //   <a onClick={() => Nav(item._id)} title="" className="crt-btn">
            //     <img src={icon10} alt="" />
            //   </a>
            // )} */}
                      </div>
                      <div className="class-info" style={{ height: "155px" }}>
                        <h3>
                          <a
                            onClick={() => Nav(item._id)}
                            style={{
                              textDecoration: "none",
                              color: "#3c719a",
                              cursor: "pointer",
                            }}
                            title=""
                          >
                            {item ? item.name : ""}
                          </a>
                        </h3>
                        <div className="row" style={{ marginBottom: "13px" }}>
                          <div className="col">
                            <span style={{ color: "#c5892b" }}>
                              {item.studyYear.name ? item.studyYear.name : ""}
                            </span>
                          </div>
                          <div
                            className="col"
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <span
                              style={{ color: "#c5892b", textAlign: "right" }}
                            >
                              {item.subject.name}
                            </span>
                          </div>
                        </div>
                        <div
                          className="d-flex flex-wrap align-items-center"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="posted-by">
                            <img
                              src={
                                item.instructor.img
                                  ? item.instructor.img
                                  : verena
                              }
                              // src={item.instructor.img}
                              alt=""
                              style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                              }}
                            />
                            <a
                              onClick={() => NavIns(item.instructor._id)}
                              title=""
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                              }}
                            >
                              {item.instructor.name}
                            </a>
                          </div>
                          <strong className="price" style={{ margin: "0" }}>
                            {item.openBuy === false
                              ? "Free"
                              : item.free === true
                              ? "Free"
                              : item.price + " EGP"}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </Carousel>
        </Fade>
      </div>
    </>
  );
}
