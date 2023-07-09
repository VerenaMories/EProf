import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ico from "../images/ico.png";
import maths from "../images/maths.png";
import icon10 from "../images/icon10.png";
import { Col, Row } from "react-bootstrap";
// import CardCompomnent from "../CardComponent/CardCompomnent";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useNavigate } from "react-router-dom";
import { Virtual } from "swiper";
import verena from "../images/ins.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";

// Import Swiper styles
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

  // theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
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

export default function Sheets() {
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

  const [diplomaData, setDiplomaData] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState(null);
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const [expanded, setExpanded] = React.useState("panel1");

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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  function NavIns(v) {
    navigate("/singleTeacher/" + v);
  }
  useEffect(() => {
    let url = `https://eprof-zu1o.onrender.com/adminSheet/all`;
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
      // Remove the last "&" character from the URL
      url = url.slice(0, -1);
    }

    axios
      .get(url)
      .then((response) => {
        setAllFilter(response.data.sheets);
        // console.log(response.data.sheets);
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
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  function Nav(s) {
    if (sessionStorage.getItem("loggedIn", true)) {
      const token = sessionStorage.getItem("token");
      // Send code to API using axios
      axios
        .post(
          "https://eprof-zu1o.onrender.com/user/addToCart/" + s,
          {},
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          // handle success response
          navigate("/cart/" + s);
        })
        .catch((error) => {
          // console.log(error);
          // handle error response
        });
    } else {
      navigate("/registerR");
    }
  }
  return (
    <>
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
            <Fade top duration={1000} delay={500}>
              <h2>Sheets</h2>
            </Fade>
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none" }} title="">
                  Home
                </Link>
              </li>
              <li>
                <span>Sheets</span>
              </li>
            </ul>
          </div>
          <h2 class="page-titlee">
            <span style={{ fontFamily: "flanella", color: "#c5892b" }}>E</span>{" "}
            <span style={{ color: "#3c719a", fontFamily: "azonix" }}>
              {" "}
              PROF
            </span>
          </h2>
        </div>
      </section>
      <div className="container p-3">
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            class
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ fontSize: "20px" }}>Diploma</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Row style={{ margin: "1%" }}>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-9">
                      <div class=" text-center justify-content-center ">
                        <div class="card-body show  ">
                          <div class="row">
                            <div class="col">
                              {/* <h5><b>Diploma</b></h5> */}
                              {/* <p> What are you studying ay hagaa?  </p> */}
                            </div>
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
                                      boxShadow:
                                        "0 0 10px rgba(21, 87, 153, 1)",
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
                            <div class="col">
                              {/* <p class="text-muted">Select the Diploma you are enrolled in</p> */}
                            </div>
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
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography style={{ fontSize: "20px" }}>Study year</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-11">
                    <div class=" text-center justify-content-center ">
                      <div class="card-body show  ">
                        <div class="row">
                          <div class="col">
                            {/* <h5><b>Study year</b></h5>
                                            <p> Which grade are you in ?  </p> */}
                          </div>
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
                          </Fade>
                        </section>
                        <div class="row justify-content-center">
                          <div class="col">
                            {/* <p class="text-muted">Select the Diploma you are enrolled in</p> */}
                          </div>
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
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontSize: "20px" }}>Subject</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-9">
                    <div class=" text-center justify-content-center ">
                      <div class="card-body show  ">
                        <div class="row">
                          <div class="col">
                            {/* <h5><b>Subject</b></h5>
                                            <p> What are you studying ay hagaa?  </p> */}
                          </div>
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
                          <div class="col">
                            {/* <p class="text-muted">Select the Diploma you are enrolled in</p> */}
                          </div>
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
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography style={{ fontSize: "20px" }}>Instructor</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-9">
                    <div class=" text-center justify-content-center ">
                      <div class="card-body show  ">
                        <div class="row">
                          <div class="col">
                            {/* <h5><b>Instructor</b></h5>
                                            <p> Select which instructor  </p> */}
                          </div>
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
                          <div class="col">
                            {/* <p class="text-muted">Select the Diploma you are enrolled in</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <section className="classes-sec" style={{ paddingBottom: "20px" }}>
          <div className="classes-sec">
            <div class="carousel slide container" style={{ paddingTop: "4%" }}>
              <div class="carousel-inner row">
                <Fade bottom duration={1000} delay={1000}>
                  <Carousel
                    responsive={{
                      desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                        partialVisibilityGutter: 40, // adjust this value as needed
                      },
                      tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                        partialVisibilityGutter: 30, // adjust this value as needed
                      },
                      mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 20, // adjust this value as needed
                      },
                    }}
                    additionalTransfrom={0}
                    arrows
                    // autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="carousel-container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="carousel-item-padding-40-px"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                  >
                    {AllFilter.map((item) => (
                      <div
                        className="classes-col"
                        style={{ paddingRight: "3%" }}
                        key={item._id}
                      >
                        <div
                          className="class-thumb"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={item.img}
                            alt=""
                            // className="w-100"
                            style={{
                              borderRadius: "10px 10px 0 0",
                              height: "500px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />

                          <a
                            onClick={() => Nav(item._id)}
                            title=""
                            className="crt-btn"
                            style={{
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              lineHeight: "42px",
                              borderRadius: "100px",
                              background:
                                "linear-gradient(180deg, #fdc830, #c5892b)",
                              textAlign: "center",
                            }}
                          >
                            <img src={icon10} alt="" />
                          </a>
                        </div>
                        <div
                          className="class-info"
                          style={{
                            padding: "24px 15px 15px",
                            border: "1px solid #d6d6d6",
                            borderTop: "0",
                            borderRadius: "0 0 10px 10px",
                            // height:'185px'
                          }}
                        >
                          <h3>
                            <a
                              //  onClick={() => Nav(item._id)}
                              style={{
                                textDecoration: "none",
                                color: "#3c719a",
                                cursor: "pointer",
                                transition: "all 0.4s ease-in-out",
                              }}
                              title=""
                            >
                              {item ? item.name : "verena"}
                            </a>
                          </h3>
                          <div
                            className="row"
                            style={{
                              marginBottom: "13px",
                              // height:'50px'
                            }}
                          >
                            <div className="col-md-8">
                              <span style={{ color: "#c5892b" }}>
                                {item.description}
                              </span>
                            </div>
                            <div
                              className="col-md-4"
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              {" "}
                              <span
                                style={{ color: "#c5892b", textAlign: "right" }}
                              >
                                {item.subject ? item.subject.name : "verena"}
                              </span>
                            </div>
                          </div>

                          <div
                            className=" d-flex flex-wrap align-items-center"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div className="posted-by ">
                              <img
                                src={
                                  item.instructor.img
                                    ? item.instructor.img
                                    : verena
                                }
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
                                  display: "inline-block",
                                  color: "#575757",
                                  fontSize: "14.23px",
                                  paddingLeft: "7px",
                                  fontWeight: "600",
                                  cursor: "pointer",
                                }}
                              >
                                {item.instructor ? item.instructor.name : ""}
                              </a>
                            </div>
                            <strong
                              className="price"
                              style={{ color: "#3c719a" }}
                            >
                              {item.price} EGP{" "}
                            </strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </Fade>
              </div>{" "}
            </div>
          </div>{" "}
        </section>
      </div>
    </>
  );
}
