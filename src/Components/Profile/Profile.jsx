import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, Form, ProgressBar, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import defImage from "../images/PngItem_1503945.png";
import "./style.css";

const Profile = ({ userMain }) => {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(1);
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [number, setNumber] = useState("");
  const [courseGet, setCourseGet] = useState([]);
  const [progress, setProgress] = useState(0);

  const [stats, setStats] = useState({ baby: "baby", baby: "baby" });
//   async function logOut() {
//     let { data } = await axios.get(
//       "https://student-system.herokuapp.com/user_logout/" +
//         sessionStorage.getItem("user_id")
//     );
//     console.log("tm l logout b ngah");
//     sessionStorage.clear();
//     sessionStorage.clear();
//     window.location.replace("/");
//   }
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];

  useEffect(() => {
    axios
      .get(
        "https://student-system.herokuapp.com/show_student/" +
          sessionStorage.getItem("user_id")
      )
      .then((res) => {
        setUser(res.data);
        setName({
          first: res.data.name.split(";")[0],
          last: res.data.name.split(";")[1],
        });
        setNumber(res.data.number);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://student-system.herokuapp.com/show_home/" +
          sessionStorage.getItem("user_id")
      )
      .then((res) => {
        console.log(res.data);
        setStats(res.data);
        setCourseGet(res.data.courses);
        console.log(courseGet);
      })
      .catch((err) => {
        console.log(err);
      });
    document.documentElement.scrollTop = 0;
  }, []);

  const courseList = courseGet.map((course) => {
    return (
      <tbody key={course.id}>
        <tr>
          {/* <img src={course.image} alt={course.name} /> */}
          <td>{course.name}</td>
          {/* <p>Instructor: {course.instructor}</p>
        <p>Price: {course.price}</p> */}
          <td>
            {" "}
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: `${course.progress}%` }}
              aria-valuenow={`${course.progress}`}
              aria-valuemax="100"
            >
              {course.progress}%
            </div>
          </td>
          {/* <p>{course.progress}%</p> */}
        </tr>
      </tbody>
    );
  });
  const handleEdit = (e) => {
    e.preventDefault();
    console.log(name, number);
    const formData = new FormData();
    formData.append("name", name.first + " " + name.last);
    formData.append("number", number);
    formData.append("email", user.email);
    formData.append("password", "123");

    axios
      .patch(
        "https://student-system.herokuapp.com/update_student/" +
          sessionStorage.getItem("user_id"),
        formData
      )
      .then((res) => {
        console.log(res);
        setUser({
          ...user,
          name: name.first + " " + name.last,
          number: number,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log(newPassword, oldPassword);
    if (newPassword !== confirmPassword) {
      setAlert("The new password and the confirm password do not match.");
      return;
    } else if (newPassword === oldPassword) {
      setAlert("The new password is the same as the old password.");
      return;
    } else {
      setAlert("");
    }

    const body = {
      old_password: oldPassword,
      new_password: newPassword,
      email: user.email,
    };

    axios
      .patch("https://student-system.herokuapp.com/forget_password", body)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          setActive(3);
        //   logOut();
        } else {
          setAlert("Wrong old password.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="section "></div>
      <div class="section page-banner">
        <div
        className="p-3"
          style={{
            // backgroundColor: "rgba(0,0,0,0.4)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:'#3c719a'
          }}
        >
          <div
            class="container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div class="page-banner-content">
              {/* <ul class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">About</li>
                    </ul> */}
              <h2 class="title" style={{ color: "#3c719a" }}>
                Your <span>Profile.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Row
        style={{
          paddingTop: "5%",
          paddingBottom: "2%",
          width: "80%",
          margin: "auto",
        }}
      >
        <Col xs={3} className="menrow">
          <div
            className={active === 1 ? "menitem active" : "menitem"}
            onClick={() => {
              setActive(1);
            }}
          >
            <i
              class="fa fa-tachometer fa-lg"
              aria-hidden="true"
              style={{ color: "#3c719a", marginRight: "2%" }}
            ></i>
            <span className="forFont"> Dashboard </span>
          </div>
          <div
            className={active === 2 ? "menitem active" : "menitem"}
            onClick={() => {
              setActive(2);
            }}
          >
            <i
              class="fa fa-address-card fa-lg"
              aria-hidden="true"
              style={{ color: "#3c719a", marginRight: "2%" }}
            ></i>
            <span className="forFont"> Profile </span>
          </div>
          <div
            className={active === 4 ? "menitem active" : "menitem"}
            onClick={() => {
            //   setActive(4);
            }}
          >
            <i
              class="fa fa-address-card fa-lg"
              aria-hidden="true"
              style={{ color: "#3c719a", marginRight: "2%" }}
            ></i>
            <span className="forFont"> Change Password </span>
          </div>
          <div
            className={active === 3 ? "menitem active" : "menitem"}
            onClick={() => {
              setActive(3);
              // sessionStorage.clear();
              // sessionStorage.clear();
              // window.location.replace("/");
            //   logOut();
            }}
          >
            <i
              class="fa fa-sign-out fa-lg"
              aria-hidden="true"
              style={{ color: "#3c719a", marginRight: "2%" }}
            ></i>
            <span className="forFont"> Logout </span>
          </div>
        </Col>
        <Col xs={9}>
          {active === 2 && (
            <>
              <section
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p className="goodmoring">
                  {" "}
                  Happy {dayName}, {user.name && user.name.replace(";", " ")}
                </p>
                <div className="imgdiv">
                  <img
                    src={
                      sessionStorage.getItem("user_image") &&
                      sessionStorage.getItem("user_image") !== "undefined"
                        ? sessionStorage.getItem("user_image")
                        : defImage
                    }
                    // src={
                    // 	sessionStorage.getItem("user_image")
                    // 		? sessionStorage.getItem("user_image")
                    // 		: defImage
                    // }
                  />
                </div>
              </section>
              <section>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name.first}
                        onChange={(e) => {
                          setName({ ...name, first: e.target.value });
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={name.last}
                        onChange={(e) => {
                          setName({ ...name, last: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        placeholder="1234 Main St"
                        disabled
                        value={user.email}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Number</Form.Label>
                      <Form.Control
                        placeholder="Enter your Number"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                  <button
                    class="btn btn-primary btnHover"
                    style={{
                      marginTop: "30px",
                      padding: "18px 32px 18px 32px",
                      border: "#3c719a 1px solid",
                      borderRadius: "50px",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                    onClick={(e) => {
                      handleEdit(e);
                    }}
                    disabled={
                      name.first + " " + name.last === user.name &&
                      number === user.number
                        ? true
                        : false
                    }
                  >
                    Submit Changes<i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Form>
              </section>
            </>
          )}
          {active === 1 && (
            <>
              <section
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p className="goodmoring">
                  Happy {dayName}, {user.name && user.name.replace(";", " ")}
                </p>
                <div className="imgdiv">
                  <img
                    src={
                      sessionStorage.getItem("user_image") &&
                      sessionStorage.getItem("user_image") !== "undefined"
                        ? sessionStorage.getItem("user_image")
                        : defImage
                    }
                  />
                </div>
              </section>
              <section style={{ paddingTop: "3%" }}>
                <div className="introdiv">
                  <p style={{ fontSize: "17px" }}>
                    Welcome to our online platform! We're excited to have you
                    join our community of learners. Our platform offers engaging
                    tools and resources to help you succeed. Our team is
                    dedicated to providing support whenever you need it. We're
                    committed to making your learning experience fun,
                    challenging, and rewarding. Let's get started!
                  </p>
                </div>
                <Row
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "2%",
                    paddingLeft: "1%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    style={{
                      marginBottom: "2%",
                      fontSize: "24px",
                      fontFamily: "Poppins",
                      fontWeight: "800",
                    }}
                  >
                    Dashboard
                  </h4>
                  <Col xs={3} className="about-item" style={{ padding: "0" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <i class="fa fa-book fa-2x" aria-hidden="true"></i>
                        </div>
                        <div class="item-title"></div>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontSize: "27px", fontFamily: "Sora" }}>
                        {stats.enrolled}
                      </p>
                    </div>
                    <h3
                      className="title"
                      style={{
                        fontFamily: "Sora",
                        fontSize: "20px",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      Enrolled Courses
                    </h3>
                  </Col>
                  <Col xs={3} className="about-item" style={{ padding: "0" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <i
                            class="fa fa-graduation-cap fa-2x"
                            aria-hidden="true"
                          ></i>{" "}
                        </div>
                        <div class="item-title"></div>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontSize: "27px", fontFamily: "Sora" }}>
                        {stats.active}
                      </p>
                    </div>
                    <h3
                      className="title"
                      style={{
                        fontFamily: "Sora",
                        fontSize: "20px",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      Active Courses
                    </h3>
                  </Col>
                  <Col xs={3} className="about-item" style={{ padding: "0" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <i class="fa fa-trophy fa-2x" aria-hidden="true"></i>
                        </div>
                        <div class="item-title"></div>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontSize: "27px", fontFamily: "Sora" }}>
                        {stats.completed}
                      </p>
                    </div>
                    <h3
                      className="title"
                      style={{
                        fontFamily: "Sora",
                        fontSize: "20px",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      Completed Courses
                    </h3>
                  </Col>
                </Row>
                <section>
                <div className="profileMain" style={{display:'flex', alignItems:'center'}}>
{/* <h2 className='my-3'>Login Now</h2> */}



<div className="container" >
    <div className="row" style={{display:'flex', alignItems:'center'}}>
        <div className="col-md-10" >
            <div style={{display:'flex', alignItems:'center'}}>
{/* <img src={logo} alt="" style={{width:'60%'}} /> */}
<Table>
                    <thead style={{ color:'#000' }}>
                      <tr>
                        <th>Wallet History</th>
                       
                      </tr>
                    </thead>
                    <tbody>
    <tr>
      <th scope="row">Type</th>
      <td>Before</td>
      <td>Amount</td>
      <td>After</td>
      <td>Date</td>

    </tr></tbody>
                  </Table>
</div>
        </div>
       
    </div>
</div>

     
    
    </div>
                  {/* <h4 style={{ marginBottom: "1%" }}>QBank</h4> */}
                  {/* <Table>
                    <thead style={{ backgroundColor: "#fff8ef" }}>
                      <tr>
                        <th>My Courses / QBank</th>
                        <th
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          Progress
                        </th>
                      </tr>
                    </thead>
                    {courseList}
                  </Table> */}
                </section>
              </section>
            </>
          )}
          {active === 4 && (
            <>
              {alert !== "" && <Alert variant="danger">{alert}</Alert>}
              <section
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p className="goodmoring">
                  Happy {dayName}, {user.name.replace(";", " ")}
                </p>
                <div className="imgdiv">
                  <img
                    src={
                      sessionStorage.getItem("user_image") &&
                      sessionStorage.getItem("user_image") !== "undefined"
                        ? sessionStorage.getItem("user_image")
                        : defImage
                    }
                  />
                </div>
              </section>
              <section>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Old Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter old password"
                        value={oldPassword}
                        onChange={(e) => {
                          setOldPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Confirm New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>

                  <button
                    class="btn btn-primary btnHover"
                    style={{
                      marginTop: "30px",
                      padding: "18px 32px 18px 32px",
                      border: "#3c719a 1px solid",
                      borderRadius: "50px",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                    onClick={(e) => {
                      handleChangePassword(e);
                    }}
                    disabled={
                      oldPassword == "" ||
                      newPassword == "" ||
                      confirmPassword == ""
                    }
                  >
                    Submit Changes<i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Form>
              </section>
            </>
          )}
        </Col>
      </Row>
      {/* <Footer /> */}
    </>
  );
};

export default Profile;
