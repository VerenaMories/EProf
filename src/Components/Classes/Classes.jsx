import icon10 from "../images/icon10.png";
import { Link } from "react-router-dom";
import maths from "../images/maths.png";
import R from "../images/R.png";
import stopImage from "../images/stop.png";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import verena from "../images/ins.jpg";
import Fade from 'react-reveal/Fade';

export default function Classes() {
  const canvasRef = useRef(null);
  const [classRoomData, setClassRoomData] = useState([]);
    const [classRoomDataeach, setClassRoomDataeach] = useState([]);

  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/classroom/all")
      .then((response) => {
        // console.log(response.data.classRoom);
        setClassRoomData(response.data.classRoom);
        setClassRoomDataeach(response.data.classRoom)
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
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
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
          <Fade top duration={1000} delay={500}> <h2>Classes </h2></Fade>
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none" }} title="">
                  Home
                </Link>
              </li>
              <li>
                <span>Classes</span>
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
      <section class="classes-page">
        <div class="container">
          <div class="classes-section">
            <div class="classes-sec">
              <div class="row">
                {classRoomData.map((item) =>
                  item.active === false && item.block === false ? (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      key={item._id}
                      style={{ display: "none" }}
                    >
                      {" "}
                    </div>
                  ) : item.active === true && item.block === true ? (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      key={item._id}
                      style={{ display: "none" }}
                    >
                      {" "}
                    </div>
                  ) : (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={item._id}>
                       <Fade bottom duration={1000} delay={500}>
                      <div className="classes-col">
                        <div
                          className="class-thumb"
                          style={{ height: "300px" }}
                        >
                          <div style={{ position: "relative" }}>
                            <span className="badger" style={{ color: "#fff" }}>
                              {" "}
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
                          {/* {sessionStorage.getItem("loggedIn", true) ? :""} */}

                          {item.openBuy === false && item.free === false ? (
                            <a
                              onClick={() => Nav(item._id)}
                              title=""
                              className="crt-btn"
                            >
                              <img src={stopImage} alt="" />
                            </a>
                          ) : item.openBuy === false && item.free === true ? (
                            <a
                              onClick={() => Nav(item._id)}
                              title=""
                              className="crt-btn"
                            >
                              <img src={R} alt="" />
                            </a>
                          ) : (
                            <a
                              onClick={() => Nav(item._id)}
                              title=""
                              className="crt-btn"
                            >
                              <img src={icon10} alt="" />
                            </a>
                          )}
                        </div>
                        <div
                          className="class-info"
                          style={{ maxHeight: "30vh" }}
                        >
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
                              {/* {item.name} */}
                            </a>
                          </h3>
                          <div
                            className="row"
                            style={{
                              marginBottom: "4%",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="col">
                              <span style={{ color: "#c5892b" }}>
                                {item.studyYear.name}
                              </span>
                            </div>
                            <div
                              className="col"
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              {" "}
                              <span
                                style={{ color: "#c5892b", textAlign: "right" }}
                              >
                                {item.subject ? item.subject.name : ""}
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
                              />{" "}
                              <a
                                onClick={() => NavIns(item.instructor._id)}
                                title=""
                                style={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                              >
                                {item.instructor ? item.instructor.name : ""}
                              </a>
                            </div>
                            <strong className="price" style={{ margin: "0" }}>
                              {item.openBuy===false?"":item.free===true?"Free":  item.students.length > 0 &&
                              Array.isArray(item.students)
                                ? item.students.map((student) => {
                                  // console.log(student.student._id)
                                    const user_id =
                                      sessionStorage.getItem("user_id");
                                    if (student.student._id === user_id) {
                                    //  console.log('here')
                                      return item.openBuy === false
                                        ? ""
                                        : item.free === true
                                        ? "Free"
                                        : // : item.students.length === 0
                                        "" // Don't render price
                                    } else {
                                      return item.price+' EGP';
                                    }
                                  })
                                : item.openBuy === false
                                ? ""
                                : item.free === true
                                ? "Free"
                                : // : item.students.length === 0
                                  item.price + " EGP"
                              
                              }

                             
                            </strong>
                          </div>
                        </div>
                      </div>{" "}</Fade>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
