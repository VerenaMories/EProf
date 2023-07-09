import React, { useEffect, useState } from "react";
import icon17 from "../images/icon17.png";
import icon16 from "../images/icon16.png";
import icon15 from "../images/icon15.png";
import ro2 from "../images/ro2.png";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Fade from "react-reveal/Fade";

export default function JoinUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const [workTime, setworkTime] = useState("");
  const [subject, setSubject] = useState("");
  const [diploma, setDiploma] = useState("");
  const [studyYear, setstudyYear] = useState("");
  const [cv, setCv] = useState("");

  const [formData, setFormData] = useState({
    file: "",
  });
  const uploadFile = (x) => {
    const updatedFormData = new FormData();

    updatedFormData.append("file", x.target.files[0]);
    // console.log(x.target.files[0]);

    axios
      .post("https://eprof-zu1o.onrender.com/data/upload", updatedFormData)
      .then((response) => {
        // console.log(response.data);
        const updatedFormDataWithFile = {
          ...formData,
          file: response.data.url,
        };
        setFormData(updatedFormDataWithFile);
        sendData(updatedFormDataWithFile);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      number,
      studyYear,
      diploma,
      subject,
      cv: formData.file,
    };
    sendData(data);
  };

  const sendData = (data) => {
    axios
      .post("https://eprof-zu1o.onrender.com/instructorHiring/add", data, {
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
  return (
    <>
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
            <Fade top duration={1000} delay={500}>
              {" "}
              <h2>Join Us </h2>
            </Fade>
            <ul>
              <li>
                {" "}
                <Link to="/" style={{ textDecoration: "none" }} title="">
                  Home
                </Link>
              </li>
              <li>
                <span>Join Us</span>
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

      <section
        class="page-content"
        style={{ paddingTop: "10px", paddingBottom: "20px" }}
      >
        <div class="container">
          <div class="mdp-map">
            {/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
          </div>
          <div class="mdp-contact">
            <div
              class="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                class="col-lg-10 col-md-10"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div class="comment-area">
                  {/* <h3>Join Us</h3> */}
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
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            className="number"
                            placeholder="Number"
                            value={number}
                            onChange={(e) => setnumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="subject"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="diploma"
                            className="diploma"
                            placeholder="Diploma"
                            value={diploma}
                            onChange={(e) => setDiploma(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="studyYear"
                            className="studyYear"
                            placeholder="Study Year"
                            value={studyYear}
                            onChange={(e) => setstudyYear(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupFile01"
                          >
                            Upload CV
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            id="inputGroupFile01"
                            name="cv"
                            value={formData.cv}
                            onChange={uploadFile}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <Fade bottom duration={1000} delay={500}>
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
                        </Fade>{" "}
                      </div>
                    </div>
                  </form>

                  {/* <form id="contact-form" method="post" action="#">
										<div class="response"></div>
										<div class="row">
											<div class="col-lg-6">
												<div class="form-group">
													<input type="text" name="name" class="name" placeholder="Name" required />
												</div>
											</div>
											<div class="col-lg-6">
												<div class="form-group">
													<input type="email" name="email" class="email" placeholder="Email" required />
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-group">
													<textarea name="message" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-submit">
													<button type="button" id="submit" class="btn-default">Send Now <i class="fa fa-long-arrow-alt-right"></i></button>
												</div>
											</div>
										</div>
									</form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
