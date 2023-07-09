import React, { useEffect, useState } from "react";
import icon17 from "../images/icon17.png";
import icon16 from "../images/icon16.png";
import icon15 from "../images/icon15.png";
import ro2 from "../images/ro2.png";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Fade from "react-reveal/Fade";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [workTime, setworkTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    sendData(data);
  };
  useEffect(() => {
    axios
      .get(
        "https://eprof-zu1o.onrender.com/admin/workTime/644a5258e8d821837d8ea472"
      )
      .then((response) => {
        setworkTime(response.data.workTime);
        // console.log(response.data.workTime)
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const sendData = (data) => {
    axios
      .post("https://eprof-zu1o.onrender.com/contactUs/add", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
        swal(
          "Good job!",
          "Your Data has been sent successfully!",
          "success"
        ).then(window.location.reload());
      })
      .catch((error) => {
        // console.log(error);
        swal("Oops!", "Please try again!", "error");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
            <Fade top duration={1000} delay={500}>
              <h2>Contact Us</h2>
            </Fade>
            <ul>
              <li>
                {" "}
                <Link to="/" style={{ textDecoration: "none" }} title="">
                  Home
                </Link>
              </li>
              <li>
                <span>Contact Us</span>
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

      <section
        class="page-content"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div class="container">
          <div class="mdp-map">
            {/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
          </div>
          <div class="mdp-contact">
            <div class="row">
              <div class="col-lg-8 col-md-7">
                <div class="comment-area">
                  <Fade left duration={1000} delay={500}>
                    {" "}
                    <h3>Add Comment</h3>
                  </Fade>
                  <form id="contact-form" method="post" onSubmit={handleSubmit}>
                    <div className="response"></div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-submit">
                          <button
                            type="submit"
                            id="submit"
                            className="btn-default"
                          >
                            Send Now{" "}
                            <i className="fa fa-long-arrow-alt-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-4 col-md-5">
                <div class="mdp-our-contacts">
                  <Fade right duration={1000} delay={500}>
                    {" "}
                    <h3>Our Contacts</h3>
                  </Fade>
                  {isMobile ? (
                    <Fade top duration={1000} delay={500}>
                      <ul style={{ padding: "0" }}>
                        <li>
                          <div class="d-flex flex-wrap">
                            <div class="icon-v">
                              <img src={icon15} alt="" />
                            </div>
                            <div class="dd-cont">
                              <h4>Call</h4>
                              <span>
                                {" "}
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#575757",
                                  }}
                                  href="tel:0100 320 5413"
                                >
                                  +2 0100 320 5413
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex flex-wrap">
                            <div class="icon-v">
                              <img src={icon16} alt="" />
                            </div>
                            <div class="dd-cont">
                              <h4>Work Time</h4>
                              <span>
                                <span style={{ marginRight: "1%" }}>
                                  {workTime.day}
                                </span>
                                <br />
                                <span>{workTime.time}</span>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex flex-wrap">
                            <div class="icon-v">
                              <img src={ro2} alt="" />
                            </div>
                            <div class="dd-cont">
                              <h4>Email Address</h4>
                              <span>
                                {" "}
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#575757",
                                  }}
                                  href="mailto:edu.eprof@gmail.com"
                                >
                                  edu.eprof@gmail.com
                                </a>{" "}
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </Fade>
                  ) : (
                    <Fade top duration={1000} delay={500}>
                      <ul>
                        <li>
                          <div class="d-flex flex-wrap">
                            <div class="icon-v">
                              <img src={icon15} alt="" />
                            </div>
                            <div class="dd-cont">
                              <h4>Call</h4>
                              <span>
                                {" "}
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#575757",
                                  }}
                                  href="tel:0100 320 5413"
                                >
                                  +2 0100 320 5413
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex flex-wrap">
                            <div class="icon-v">
                              <img src={icon16} alt="" />
                            </div>
                            <div class="dd-cont">
                              <h4>Work Time</h4>
                              <span>
                                <span style={{ marginRight: "1%" }}>
                                  {workTime.day}
                                </span>
                                <br />
                                <span>{workTime.time}</span>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex flex-wrap">
                            <div class="icon-v">
                              <img src={ro2} alt="" />
                            </div>
                            <div class="dd-cont">
                              <h4>Email Address</h4>
                              <span>
                                {" "}
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "#575757",
                                  }}
                                  href="mailto:edu.eprof@gmail.com"
                                >
                                  edu.eprof@gmail.com
                                </a>{" "}
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </Fade>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
