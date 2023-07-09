import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, Form, ProgressBar, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import defImage from "../images/PngItem_1503945.png";
import "./style.css";
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, DateCalendar } from '@mui/x-date-pickers';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { useRef } from "react";
import BasicInfo from "./BasicInfo";
import EducationalInfo from "./EducationalInfo";
import PersonalInfo from "./PersonalInfo";
import iddesign from '../images/iddesign.png';
import swal from 'sweetalert';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}
const initialValue = dayjs('2022-05-1');

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🌚' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

const Profile = ({ userMain }) => {
  const [activeSection, setActiveSection] = useState("basicInfo");
  const handleClick = (section) => {
    setActiveSection(section);
  };

  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };
  
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
  const [profile, setprofile] = useState({});

  const [miniProfile, setMiniprofile] = useState({});
  // const [myWallet2, setmyWallet2] = useState([]);

  const [myWallet, setmyWallet] = useState([]);
//   const columns = [
//     { field: '_id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: ' Name', width: 130 },
//     { field: 'walletBefore', headerName: 'before', width: 130 },
//     { field: 'price', headerName: 'price', width: 130 },
//     { field: 'walletAfter', headerName: 'after', width: 130 },
//     { field: 'date', headerName: 'date', width: 130 },


// ];
const rows = myWallet.map((item, index) => ({
  id: index + 1,
  col1: item.name,
  col2: item.walletBefore,
  col3: item.price,
  col4: item.walletAfter,
  col5: item.date,
}));

const columns = [
  { field: 'col1', headerName: 'Name', width: 250 },
  { field: 'col2', headerName: 'Wallet Before', width: 200 },
  { field: 'col3', headerName: 'Price', width: 200 },
  { field: 'col4', headerName: 'Wallet After', width: 200 },
  { field: 'col5', headerName: 'Date', width: 200 },

];
  const [stats, setStats] = useState({ baby: "baby", baby: "baby" });
  // async function logOut() {
  //   let { data } = await axios.get(
  //     "https://student-system.herokuapp.com/user_logout/" +
  //       sessionStorage.getItem("user_id")
  //   );
  //   console.log("tm l logout b ngah");
  //   sessionStorage.clear();
  //   sessionStorage.clear();
  //   window.location.replace("/");
  // }
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
    const token = sessionStorage.getItem('token'); // retrieve token value from session storage
axios.get('https://eprof-zu1o.onrender.com/user/walletHistory', {
  headers: {
    'Authorization': ` ${token}` // set Authorization header with token value
  }
})
.then(response => {
  // console.log(response.data);
  setmyWallet(response.data);
  // setmyWallet2(response.data);
})
.catch(error => {
  // console.log(error);
});
 
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token'); // retrieve token value from session storage
axios.get('https://eprof-zu1o.onrender.com/user/me', {
  headers: {
    'Authorization': ` ${token}` // set Authorization header with token value
  }
})
.then(response => {
  // console.log(response.data);
  setprofile(response.data.user)
  setMiniprofile(response.data)

})
.catch(error => {
  // console.log(error.response.data.error);
  if (error.response.data.error==="Token is not in database"){
    sessionStorage.clear();
    navigate('/');
  }
});
  
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
 
  const handleChangePassword = (e) => {
    e.preventDefault();
   
    const token = sessionStorage.getItem('token');
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      // email: user.email,
    };

    axios
      .post("https://eprof-zu1o.onrender.com/auth/changePassword", body, {
        headers: {
          'Authorization': ` ${token}` // set Authorization header with token value
        }
      })
      .then((res) => {
        // console.log(res);
        if (res.data.success === true) {
          setActive(3);
          // logOut();
          swal("Good job!", "your password changed!", "success");

        } else {
          setAlert("Wrong old password.");
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const [formData, setFormData] = useState({
   
    img: "",
  
  });
  const sendData = (data) => {
    const token = sessionStorage.getItem("token");
  
    axios.patch('https://eprof-zu1o.onrender.com/user/update', data, {
      headers: {
        Authorization: ` ${token}`,
      },
    })
      .then(response => {
        // console.log(response.data);
        swal("Good job!", "Your Data has been sent successfully!", "success");
        sessionStorage.setItem("image", response.data.img);
        window.location.reload()

      })
      .catch(error => {
        // console.log(error);
        swal("Oops!", "Please try again!", "error");
      });
  };
  
  const uploadImage = (x) => {
    const formDataNew = new FormData();
    formDataNew.append("file", x.target.files[0]);
    // console.log(x.target.files[0]);

    axios
      .post("https://eprof-zu1o.onrender.com/data/upload", formDataNew)
      .then((response) => {
        // console.log(response.data);
        const updatedFormData = { ...formData, img: response.data.url };
        setFormData(updatedFormData);
        sendData(updatedFormData);      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <>
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
          <Fade top duration={1000} delay={500}> <h2>Your Profile</h2></Fade>
            <ul>
              <li>
              <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link>
              </li>
              <li>
                <span>Your Profile</span>
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
   
      <Row
        style={{
          paddingTop: "5%",
          paddingBottom: "2%",
          // width: "80%",
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
          <span className="forFont"> Dashboard</span>
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
              setActive(4);
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
              sessionStorage.clear();
              sessionStorage.clear();
              window.location.replace("/");
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
               <Fade top duration={1000} delay={500}>   <p className="goodmoring">
                  {" "}
                  Happy {dayName}, {profile.firstName }
                </p></Fade>
                <div className="imgdiv" style={{ position: 'relative' , height:'20vh', maxWidth:'18vw'}}>
                  <img
                    src={
                      sessionStorage.getItem("image") &&
                      sessionStorage.getItem("image") !== "undefined"
                        ? sessionStorage.getItem("image")
                        : defImage
                    }
                    // src={
                    // 	sessionStorage.getItem("image")
                    // 		? sessionStorage.getItem("image")
                    // 		: defImage
                    // }
                  />
                  <label htmlFor="imageInput" className="pencil" >
    <i className="fa-solid fa-pencil" title="Change Image"  style={{fontSize:'16px', color:'#fff'}}></i>
  </label>
  <input
    id="imageInput"
    type="file"
    accept="image/*"
    onChange={uploadImage}
    style={{ display: "none" }}
  />
  <div style={{ position: 'absolute', top: 0, right: '-10px', width: '20px', height: '20px', backgroundColor: '#fff', transform: 'rotate(45deg)', zIndex: -1 }}></div>
                   {/* <label>
              Profile Image :{" "}
              <input
                type="file"
                placeholder="Image"
                autocomplete="off"
                onChange={uploadImage}
              />
            </label>{" "} */}
                </div>
              </section>
              <section>
              <table>
              <Fade top duration={1000} delay={500}> 
                  <thead>
        <tr style={{borderBottom: '1px solid lightgrey',    display: 'flex', gap: '1.5rem'}}>
          <th

            className={activeSection === "basicInfo" ? "active" : ""}
            onClick={() => handleClick("basicInfo")}
          >
            Basic Info
          </th>
          <th
            className={activeSection === "educationalInfo" ? "active" : ""}
            onClick={() => handleClick("educationalInfo")}
          >
            Educational Info
          </th>
          <th
            className={activeSection === "personalInfo" ? "active" : ""}
            onClick={() => handleClick("personalInfo")}
          >
            Personal Info
          </th>
        </tr>
      </thead></Fade>
      <tbody>
        <tr>
          <td style={{ display: activeSection !== "educationalInfo" && activeSection !== "personalInfo" ? "block" : "none" }}>
            {activeSection === "basicInfo" && <BasicInfo />}
          </td>
          <td  style={{ display: activeSection !== "personalInfo"  ? "block" : "none" }}>
            {activeSection === "educationalInfo" && <EducationalInfo />}
          </td>
          <td>
            {activeSection === "personalInfo" && <PersonalInfo />}
          </td>
         
        </tr>
      </tbody>
    </table>
               
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
               <Fade top duration={1000} delay={500}>   <p className="goodmoring">
                  Happy {dayName}, {profile.firstName }
                </p></Fade>
                <div className="imgdiv">
                  <img
                    src={
                      sessionStorage.getItem("image") &&
                      sessionStorage.getItem("image") !== "undefined"
                        ? sessionStorage.getItem("image")
                        : defImage
                    }
                  />
                </div>
              </section>
              <section style={{ paddingTop: "3%" }}>
            
                <Row
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "2%",
                    paddingLeft: "1%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                   <Fade left duration={1000} delay={500}> <h4
                    style={{
                      marginBottom: "2%",
                      fontSize: "24px",
                      fontFamily: "Poppins",
                      fontWeight: "800",
                    }}
                  >
                    Dashboard
                  </h4></Fade>
               
               
                  <Col  className="about-item" style={{ padding: "0" }}>
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
                    <Fade bottom duration={1000} delay={500}> 
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontSize: "27px", fontFamily: "Sora" }}>
                        {miniProfile.enrolled?miniProfile.enrolled:0}
                      </p>
                    </div></Fade>
                    <Fade bottom duration={1000} delay={500}>   
                         <h3
                      className="title"
                      style={{
                        fontFamily: "Sora",
                        fontSize: "16px",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      Enrolled Courses
                    </h3></Fade>
                  </Col>
                  <Col  className="about-item" style={{ padding: "0" }}>
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
                    <Fade bottom duration={1000} delay={500}> 
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontSize: "27px", fontFamily: "Sora" }}>
                        {miniProfile.active}
                      </p>
                    </div></Fade>
                    <Fade bottom duration={1000} delay={500}> 
                    <h3
                      className="title"
                      style={{
                        fontFamily: "Sora",
                        fontSize: "16px",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      Active Courses
                    </h3></Fade>
                  </Col>
                  <Col  className="about-item" style={{ padding: "0" }}>
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
                    <Fade bottom duration={1000} delay={500}> 
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontSize: "27px", fontFamily: "Sora" }}>
                        {miniProfile.completed}
                      </p>
                    </div></Fade>
                    <Fade bottom duration={1000} delay={500}> 
                      <h3
                      className="title"
                      style={{
                        fontFamily: "Sora",
                        fontSize: "16px",
                        fontWeight: "300",
                        textAlign: "center",
                      }}
                    >
                      Completed Courses
                    </h3></Fade>
                  </Col>
                </Row>
                <section>
                <div  style={{display:'flex', alignItems:'center'}}>
{/* <h2 className='my-3'>Login Now</h2> */}



<div className="container" >
    <div className="row" style={{display:'flex', alignItems:'center'}}>
        <div className="col-md-12" >
            <div style={{display:'flex', alignItems:'center'}}>
{/* <img src={logo} alt="" style={{width:'60%'}} /> */}
{/* <Table> */}
              <div style={{ height: 300, width: "100%" }}>  <DataGrid rows={rows} columns={columns} /></div> 
                  {/* </Table> */}
</div>
        </div>
       
    </div>
</div>

     
    
    </div>
              
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
       <Fade top duration={1000} delay={500}>          <p className="goodmoring">
                  Happy {dayName}, {profile.firstName}
                </p></Fade>
                <div className="imgdiv">
                  <img
                    src={
                      sessionStorage.getItem("image") &&
                      sessionStorage.getItem("image") !== "undefined"
                        ? sessionStorage.getItem("image")
                        : defImage
                    }
                  />
                </div>
              </section>
              <section>
                <Form>
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridEmail"> */}
                      {/* <Form.Label>Old Password</Form.Label> */}

                      <div class="form__group field">
                      <input
              className="form__field"
              style={{width:'250px'}}
              type="password"
              id="oldPass"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
         <div className="iconWrap2">
                                <i class="fa-solid fa-lock"></i>
                              </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("oldPass").focus();
                    }}
                  >
              Old Password
                  </label>
                     
                       </div>

                  </Row>
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridEmail"> */}
                      {/* <Form.Label>New Password</Form.Label> */}
                      <div class="form__group field">
                      <input
              className="form__field"
              style={{width:'250px'}}
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              id="newPass"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
         <div className="iconWrap2">
                                <i class="fa-solid fa-lock"></i>
                              </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("newPass").focus();
                    }}
                  >
              New Password
                  </label>
                     
                       </div>
              
                  </Row>

                  <button
                    class="btn btn-primary btnHover"
                    style={{
                      marginTop: "13px",
                      marginBottom: "13px",                      padding: "18px 32px 18px 32px",
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
                      newPassword == "" 
                     
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
