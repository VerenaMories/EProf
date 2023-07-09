// import React from 'react'
import icon10 from "../images/icon10.png";
import plus from "../images/plus.png";
import verena from "../images/ins.jpg";
import stopImage from "../images/stop.png";

import { Link } from "react-router-dom";
import maths from "../images/maths.png";
import R from "../images/R.png";
import Fade from 'react-reveal/Fade';

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function Search() {
  const [singleTeacher, setSingleTeacher] = useState([]);
  //   const [teacherData, setTeacherData] = useState([]);

  // const navigate = useNavigate();
  let { name } = useParams();

  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/search?name=" + name)
      .then((response) => {
        setSingleTeacher(response.data.all);
        // console.log(response.data.all);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const navigate = useNavigate();

  function NavInstructor(s) {
    navigate("/singleTeacher/" + s);
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
          <Fade top duration={1000} delay={500}>	   <h2>Search</h2></Fade>
            <ul>
              <li>
              <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link>
              </li>
              <li>
                <span>Search</span>
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
          {/* <h2 >Shelly</h2> */}
        </div>
      </section>
      <div className="container">
        <div class="classes-section">
          <div class="classes-sec">
            <div class="row">
              {
              singleTeacher.length > 0?
              
              singleTeacher.map((item) => (
                <div className="col-lg-3 col-md-6 col-sm-6 p-3" key={item._id}>
                  {item.check === "classRoom" ? (
                    item.active === false ? (
                      ""
                    ) : (
                      <div className="classes-col">
                        <div className="class-thumb">
                          <div style={{ position: "relative" }}>
                          <span className="badger"  style={{color:'#fff'}}> {item.offline === true ? "center" : "online"}</span>
                           
                            <img
                            onClick={() => Nav(item._id)}
                              src={item.img}
                              alt=""
                              style={{ height: "300px", width: "100%", cursor:'pointer' }}
                            />
                          </div>
                          {item.check === "classRoom" ? (
                           
                          item.openBuy === false && item.free === false ? (
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
                          )
                          ) 
                          : (
                            <div class="teachers-section p-0">
                              {" "}
                              <div className="teachers">
                                <div className="teacher">
                                  <div className="teacher-img">
                                    <div class="sc-div">
                                      <ul style={{ paddingLeft: "0px" }}>
                                        <li>
                                          <a target='_blank'
                                            href={`https://wa.me/${item.socialMedia.whatsapp}`}
                                            title=""
                                          >
                                            <i class="fab fa-whatsapp"></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a target='_blank'
                                            href={`https://www.linkedin.com/in/${item.socialMedia.linkedIn}`}
                                            title=""
                                          >
                                            <i class="fab fa-linkedin-in"></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a target='_blank'
                                            href={`https://www.facebook.com/${item.socialMedia.facebook}`}
                                            title=""
                                          >
                                            <i class="fab fa-facebook-f"></i>
                                          </a>
                                        </li>
                                      </ul>
                                      <span>
                                        <img src={plus} alt="" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="class-info">
                          <h3>
                            <a
                              style={{
                                textDecoration: "none",
                                color: "#3c719a",
                                cursor: "pointer",
                              }}
                              onClick={
                                item.check === "classRoom"
                                  ? () => Nav(item._id)
                                  : () => NavInstructor(item._id)
                              }
                            >
                              {item.name}
                            </a>
                          </h3>
                          {item.check === "classRoom" ? (
                            <div
                              className="row"
                              style={{ marginBottom: "20px",display:'flex',justifyContent:'space-between' }}
                            >
                              <div className="col">
                                <span style={{ color: "#c5892b" }}>
                                  {item.studyYear.name}
                                </span>
                              </div>
                              <div
                                className="col"
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                }}
                              >
                                {" "}
                                <span
                                  style={{
                                    color: "#c5892b",
                                    textAlign: "right",
                                  }}
                                >
                                  
                                  {item.subject.name}
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="d-flex flex-wrap align-items-center" style={{justifyContent:'space-between'}}>
                            {item.check === "classRoom" ? (
                              <div className="posted-by">
                                <img
                                // src={item.img ? item.img : verena}
                                  src={item.instructor.img? item.instructor.img:verena}
                                  alt=""
                                  style={{ width: "45px" ,height:'45px',borderRadius:'50%'}}
                                />
                                <a
    onClick={() => NavInstructor(item.instructor._id)}                                  title=""
                                  style={{ textDecoration: "none", cursor:'pointer' }}
                                >
                                  {item.instructor.name == null
                                    ? item.name
                                    : item.instructor.name}
                                </a>
                              </div>
                            ) : (
                              item.number
                            )}
                            <strong className="price" style={{margin:'0'}}>
                              {item.check === "classRoom"
                                ? item.free === true
                                  ? "Free":item.openBuy === false
                                  ? ""
                                  : item.price + " EGP"
                                : item.experience + " Years"}
                            </strong>
                          </div>
                        </div>
                      </div>
                    )
                  ) : item.block === true ? (
                    ""
                  ) : (
                    <div className="teachers-section">
                      <div className="teachers">
                        <div class="teacher">
                          <div class="teacher-img">
                            <img   src={item.img ? item.img : verena} alt=""  onClick={() => NavInstructor(item._id)} style={{height:'50vh', width:'100%',cursor:'pointer'}} />
                            <div class="sc-div">
                            <ul style={{ paddingLeft: "0px" }}>
            {item.socialMedia && item.socialMedia.whatsapp && (
              <li>
                <a target='_blank'
                  href={`https://wa.me/${item.socialMedia.whatsapp}`}
                  title=""
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
            )}
            {item.socialMedia && item.socialMedia.linkedIn && (
              <li>
                <a target='_blank'
                  href={`https://www.linkedin.com/in/${item.socialMedia.linkedIn}`}
                  title=""
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            )}
            {item.socialMedia && item.socialMedia.facebook && (
              <li>
                <a target='_blank'
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
                                onClick={() => NavInstructor(item._id)}
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

                            {item
                          ? item.subjectId.map((name, index) => (
                              <span style={{ color: "#c5892b",display:'inline' }} key={name._id}>
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
                    </div>
                  )}
                </div>
              ))
              :
              <h2 style={{textAlign:'center',paddingTop:'3%'}}>There's no Instructor or Classroom with this name</h2>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
