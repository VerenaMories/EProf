import React from "react";
import ro1 from "../images/ro1.png";
import ro2 from "../images/ro2.png";
import ro3 from "../images/ro3.png";
import tech1 from "../images/img5.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import icon10 from "../images/icon10.png";
import maths from "../images/maths.png";
import R from "../images/R.png";
import stopImage from "../images/stop.png";

import verena from "../images/ins.jpg";
import Carousel from "react-multi-carousel";
import Fade from "react-reveal/Fade";

export default function SingleTeacher() {
  const [singleTeacher, setSingleTeacher] = useState([]);
  const [singleTeacherClassRoom, setSingleTeacherClassRoom] = useState([]);

  const [teacherData, setTeacherData] = useState([]);

  // const navigate = useNavigate();
  let { _id } = useParams();
  async function getSingleTeacherClassRoom() {
    let { data } = await axios.get(
      "https://eprof-zu1o.onrender.com/classroom/instructorClassRooms/" + _id
    );

    setSingleTeacherClassRoom(data.classRoom);
    // console.log(data.classRoom);

    // console.log(data.instructor);
  }
  const navigate = useNavigate();

  function NavSingle(s) {
    navigate("/singleClass/" + s);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  async function getSingleTeacher() {
    let { data } = await axios.get(
      "https://eprof-zu1o.onrender.com/instructor/" + _id
    );

    setSingleTeacher(data.instructor);
    // console.log(data.instructor);
    setTeacherData(data.instructor);
    // console.log(data.instructor);

    // console.log(data.instructor);
  }
  // const studyYearId = singleTeacher.studyYearId;
  // const subjectId = singleTeacher.subjectId;
  // const diploma = singleTeacher.diploma;
  const studyYear = singleTeacher.studyYearId
    ? singleTeacher.studyYearId.name
    : "";
  const subjectId = singleTeacher.subjectId ? singleTeacher.subjectId.name : "";
  const diploma = singleTeacher.diploma ? singleTeacher.diploma.name : "";

  const studyYears = singleTeacher.studyYearId
    ? singleTeacher.studyYearId.map((name) => (
        <div key={name._id}>
          <h2>{name.name}</h2>
          <p>{name.diploma.name}</p>
        </div>
      ))
    : null;

  //   const studyYears = studyYearId.map((year) => (
  // 	<div key={year._id}>
  // 	  <h2>{year.year}</h2>
  // 	  <p>{year.diploma.name}</p>
  // 	</div>
  //   ));

  useEffect(() => {
    getSingleTeacher();
    getSingleTeacherClassRoom();
  }, []);
  function NavIns(v) {
    navigate("/singleTeacher/" + v);
  }
  return (
    <>
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
            <Fade top duration={1000} delay={500}>
              {" "}
              <h2>{singleTeacher.name}</h2>
            </Fade>
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none" }} title="">
                  Home
                </Link>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} title="">
                  Instructor
                </a>
              </li>
              <li>
                <span>{singleTeacher.name}</span>
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

      <section class="page-content">
        <div class="container">
          <div class="teacher-single-page">
            <div class="row">
              <div
                class="col-lg-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div class="teacher-coly" style={{ borderRadius: "10px" }}>
                  <Fade top duration={1000} delay={500}>
                    {" "}
                    <img
                      src={teacherData.img ? teacherData.img : verena}
                      style={{ width: "416px", height: "624px" }}
                      alt=""
                    />
                  </Fade>
                  {/* <ul class="social-icons" style={{ paddingLeft: '0px' }}>
										<li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
										<li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
										<li><a href="#" title=""><i class="fab fa-linkedin-in"></i></a></li>
									</ul> */}
                  {teacherData.socialMedia &&
                    Object.keys(teacherData.socialMedia).length > 0 && (
                      <ul className="social-icons">
                        {teacherData.socialMedia.whatsapp && (
                          <li>
                            <a
                              href={`https://wa.me/${teacherData.socialMedia.whatsapp}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-whatsapp"></i>
                            </a>
                          </li>
                        )}
                        {teacherData.socialMedia.facebook && (
                          <li>
                            <a
                              href={`https://www.facebook.com/${teacherData.socialMedia.facebook}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                        )}
                        {teacherData.socialMedia.linkedIn && (
                          <li>
                            <a
                              href={`https://www.linkedin.com/in/${teacherData.socialMedia.linkedIn}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    )}
                </div>
              </div>
              <div class="col-lg-8">
                <div class="teacher-content">
                  <Fade top duration={1000} delay={500}>
                    {" "}
                    <h3>Instructor</h3>
                  </Fade>
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-6">
                      <div class="rol-z">
                        {singleTeacher.assistant_number ? (
                          <>
                            <img src={ro1} alt="" />
                            <div class="rol-info">
                              <h3>Phone</h3>
                              <a
                                style={{ textDecoration: "none" }}
                                href={`https://wa.me/${singleTeacher.assistant_number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Fade left duration={1000} delay={500}>
                                  {" "}
                                  <span className="specialClass">
                                    {singleTeacher.assistant_number}
                                  </span>
                                </Fade>
                              </a>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-6">
                      <div class="rol-z">
                        <img src={ro2} alt="" />
                        <div class="rol-info">
                          <h3>Email</h3>

                          <a
                            style={{ textDecoration: "none" }}
                            href={`mailto:${singleTeacher.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Fade right duration={1000} delay={500}>
                              {" "}
                              <span className="specialClass">
                                {singleTeacher.email}
                              </span>
                            </Fade>
                          </a>
                          {/* <span>{singleTeacher.email}</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Fade bottom duration={1000} delay={500}>
                    {" "}
                    <p style={{ fontSize: "16px" }}>{singleTeacher.bio}</p>
                  </Fade>
                  <ul class="tech-detils">
                    {/* <li>
										<h3>DOB</h3>
										<span>15.03.1987</span>
									</li> */}
                    <li>
                      <h3 style={{ textAlign: "left" }}>Subject Name</h3>
                      {/* <span>{subjectId}</span> */}
                      <Fade right duration={1000} delay={500}>
                        <span style={{ whiteSpace: "pre" }}>
                          {studyYears
                            ? singleTeacher.subjectId.map((year, index) => (
                                <span key={year._id}>
                                  {year.name}
                                  {index < singleTeacher.subjectId.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))
                            : null}

                          {/* {teacherData.subjectId.map((d, i) => (
      <React.Fragment key={d._id}>
        {d.name}
        {i !== teacherData.subjectId.length - 1 && ", "}
      </React.Fragment>
    ))} */}
                        </span>{" "}
                      </Fade>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left" }}>Diploma</h3>
                      {singleTeacher.diploma && (
                        <Fade right duration={1000} delay={500}>
                          {" "}
                          <span>
                            {singleTeacher.diploma.map((d, i) => (
                              <React.Fragment key={d._id}>
                                {d.name}
                                {i !== singleTeacher.diploma.length - 1 && ", "}
                              </React.Fragment>
                            ))}
                          </span>
                        </Fade>
                      )}

                      {/* <span>{diploma.name}</span> */}
                    </li>
                    {/* <li>
											<h3>Study Year</h3>
											<span>{singleTeacher.studyYearId.year}</span>
										</li> */}
                    <li>
                      {/* <div>
    <h1>{studyYearId.name}</h1>
    <div>{studyYears}</div>
  </div> */}

                      <li>
                        <h3 style={{ textAlign: "left" }}>Study Year</h3>
                        {studyYears
                          ? singleTeacher.studyYearId.map((name, index) => (
                              <Fade right duration={1000} delay={500}>
                                <span key={name._id}>
                                  {name.name}
                                  {index < singleTeacher.studyYearId.length - 1
                                    ? " ,  "
                                    : ""}
                                </span>
                              </Fade>
                            ))
                          : null}
                      </li>

                      {/* <span>{singleTeacher.studyYearId.year}</span> */}
                    </li>{" "}
                    <li>
                      <h3 style={{ textAlign: "left" }}>Education</h3>
                      <Fade right duration={1000} delay={500}>
                        {" "}
                        <span>{singleTeacher.education}</span>
                      </Fade>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left" }}>Experience</h3>
                      <Fade right duration={1000} delay={500}>
                        {" "}
                        <span>{singleTeacher.experience} years</span>
                      </Fade>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 " style={{ paddingTop: "3%" }}>
                {singleTeacherClassRoom.length > 0 ? (
                  <Fade bottom duration={1000} delay={500}>
                    <h3
                      style={{
                        color: "#c5892b",
                        fontSize: "20px",
                        fontStyle: "italic",
                      }}
                    >
                      Instructor's Classrooms
                    </h3>
                  </Fade>
                ) : (
                  ""
                )}

                <section class="classes-page" style={{ paddingTop: "0" }}>
                  <div class="classes-section">
                    <div class="classes-sec">
                      <div class="row">
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
                            // showDots={true}
                            arrows={true}
                            // autoPlay={true}
                            autoPlaySpeed={3000}
                            infinite={true}
                            dotListClass="swiper-dot-list"
                            customTransition="all 1s"
                          >
                            {singleTeacherClassRoom.map(
                              (item) =>
                                // item.active === false && item.block === false ? (
                                //   <div
                                //     key={item._id}
                                //     style={{ display: "none", padding: "4%" }}
                                //   >
                                //     {" "}
                                //   </div>
                                // ) : item.active === true &&
                                //   item.block === true ? (
                                //   <div
                                //     key={item._id}
                                //     style={{ display: "none", padding: "4%" }}
                                //   >
                                //     {" "}
                                //   </div>
                                // ) : (
                                item.active &&
                                !item.block && (
                                  <div key={item._id} style={{ padding: "4%" }}>
                                    {item.active === false ? (
                                      ""
                                    ) : (
                                      <div
                                        className="classes-col"
                                        style={{ marginBottom: "0" }}
                                      >
                                        <div
                                          className="class-thumb"
                                          style={{ height: "300px" }}
                                        >
                                          <div style={{ position: "relative" }}>
                                            <span
                                              className="badger"
                                              style={{ color: "#fff" }}
                                            >
                                              {" "}
                                              {item.offline === true
                                                ? "center"
                                                : "online"}
                                            </span>

                                            <img
                                              onClick={() =>
                                                NavSingle(item._id)
                                              }
                                              src={item.img}
                                              alt=""
                                              className="w-100"
                                              style={{
                                                height: "300px",
                                                cursor: "pointer",
                                              }}
                                            />
                                          </div>
                                          {item.openBuy === false &&
                                          item.free === false ? (
                                            <a
                                              onClick={() =>
                                                NavSingle(item._id)
                                              }
                                              title=""
                                              className="crt-btn"
                                            >
                                              <img src={stopImage} alt="" />
                                            </a>
                                          ) : item.openBuy === false &&
                                            item.free === true ? (
                                            <a
                                              onClick={() =>
                                                NavSingle(item._id)
                                              }
                                              title=""
                                              className="crt-btn"
                                            >
                                              <img src={R} alt="" />
                                            </a>
                                          ) : (
                                            <a
                                              onClick={() =>
                                                NavSingle(item._id)
                                              }
                                              title=""
                                              className="crt-btn"
                                            >
                                              <img src={icon10} alt="" />
                                            </a>
                                          )}
                                        </div>
                                        <div className="class-info">
                                          <h3>
                                            <a
                                              onClick={() =>
                                                NavSingle(item._id)
                                              }
                                              style={{
                                                textDecoration: "none",
                                                color: "#3c719a",
                                                cursor: "pointer",
                                              }}
                                              title=""
                                            >
                                              {item.name}
                                            </a>
                                          </h3>
                                          <div
                                            className="row"
                                            style={{
                                              marginBottom: "15px",
                                              justifyContent: "space-between",
                                              display: "flex",
                                            }}
                                          >
                                            <div className="col">
                                              <span
                                                style={{ color: "#c5892b" }}
                                              >
                                                {item.studyYear.name}
                                              </span>
                                            </div>
                                            <div
                                              className="col"
                                              style={{ textAlign: "end" }}
                                            >
                                              {" "}
                                              <span
                                                style={{
                                                  color: "#c5892b",
                                                  textAlign: "end",
                                                }}
                                              >
                                                {item.subject.name}
                                              </span>
                                            </div>
                                          </div>

                                          <div
                                            className="d-flex flex-wrap align-items-center"
                                            style={{
                                              justifyContent: "space-between",
                                            }}
                                          >
                                            <div className="posted-by">
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
                                                onClick={() =>
                                                  NavIns(item.instructor._id)
                                                }
                                                title=""
                                                style={{
                                                  textDecoration: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                {item.instructor.name}
                                              </a>
                                            </div>
                                            <strong
                                              className="price"
                                              style={{ margin: "0" }}
                                            >
                                              {item.free === true
                                                ? "Free"
                                                : item.openBuy
                                                ? item.price + " EGP"
                                                : ""}
                                            </strong>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )
                            )}
                          </Carousel>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
