import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import def from "../images/def.png";
import { isMobile } from "react-device-detect";
import Fade from "react-reveal/Fade";

const Register = () => {
  const [Governorate, setGovernorate] = useState([]);
  const [diploma, setDiploma] = useState([]);
  const [languages, setlanguages] = useState([]);

  const [selectedGovernorateId, setSelectedGovernorateId] = useState(null);
  const [Area, setArea] = useState([]);
  const [eachDiploma, seteachDiploma] = useState([]);
  const [lang, setLang] = useState([]);

  const [selectedDiplomaId, setSelectedDiplomaId] = useState(null);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/allDiploma")
      .then((response) => {
        setDiploma(response.data.diploma);
        // console.log(response.data.diploma);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const handleStudyYearChange = (e) => {
    const selectedIdDiploma = e.target.value;
    setSelectedDiplomaId(selectedIdDiploma);
    axios
      .get(`https://eprof-zu1o.onrender.com/admin/diploma/${selectedIdDiploma}`)
      .then((response) => {
        seteachDiploma(response.data);
        // setLang(response.data[0]);
        setLang(response.data[0].languages);

        // console.log(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/admin/allGovernorate")
      .then((response) => {
        setGovernorate(response.data.governorate);
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const handleGovernorateChange = (e) => {
    const selectedId = e.target.value;
    setSelectedGovernorateId(selectedId);
    axios
      .get(`https://eprof-zu1o.onrender.com/admin/governorate/${selectedId}`)
      .then((response) => {
        setArea(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  // const [fileUrl , setFileURL]=useState(null)
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // console.log(Login);
    axios
      .post("https://eprof-zu1o.onrender.com/auth/login", Login)
      .then((response) => {
        // console.log(response.data);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("image", response.data.img);
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("user_email", response.data.email);
        sessionStorage.setItem("user_id", response.data._id);
        sessionStorage.setItem("code", response.data.code);

        sessionStorage.setItem("diploma", response.data.studyYear.diploma._id);

        if (
          sessionStorage.getItem("token") &&
          sessionStorage.getItem("loggedIn", true)
        ) {
          // Check if the user is logged in and has a course ID set in local storage

          navigate("/");
        }
      })
      .catch((error) => {
        // console.log(error);
        swal("Error", "Login failed. Please try again!", "error");
      });
  };
  const [step, setStep] = useState(1);
  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  const renderFormFields = () => {
    switch (step) {
      case 1:
        return (
          <div style={{ paddingBottom: "3%" }}>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    autoComplete="off"
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-user-graduate"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("firstName").focus();
                    }}
                  >
                    First Name
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    autocomplete="off"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-user-graduate"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("lastName").focus();
                    }}
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div className="form__group field">
                  {isMobile ? (
                    <select
                      style={{ width: "180px" }}
                      className="form__field"
                      name="gender"
                      id="gender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    >
                      <option value=""></option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  ) : (
                    <select
                      style={{ width: "280px" }}
                      className="form__field"
                      name="gender"
                      id="gender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    >
                      <option value=""></option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  )}

                  <div className="iconWrap">
                    <i className="fa-solid fa-venus-mars"></i>
                  </div>
                  <label
                    htmlFor="gender"
                    className="form__label"
                    onClick={() => {
                      document.getElementById("gender").focus();
                    }}
                  >
                    Gender
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autocomplete="off"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-at"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("email").focus();
                    }}
                  >
                    Email
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    class="form__field"
                    name="password"
                    required
                    id="password"
                    type={show1 ? "text" : "Password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div
                    className="ourx"
                    onClick={() => {
                      setShow1(!show1);
                    }}
                  >
                    {/* <i
                                  class="fa fa-eye fa-2xs"
                                  aria-hidden="true"
                                  style={{ color: show1 ? "#ffc600" : "black" }}
                                ></i> */}
                  </div>
                  <label
                    for="password"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("password").focus();
                    }}
                  >
                    Password
                  </label>
                </div>
              </div>
            </div>
            {/* <input
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="off"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            /> */}
            <label style={{ width: "50%" }}>
              <input
                type="file"
                placeholder="Image"
                autocomplete="off"
                onChange={uploadImage}
                style={{ width: "100%" }}
              />
            </label>{" "}
            {/* Add other fields for Step 1 */}
          </div>
        );
      case 2:
        return (
          <div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <DatePicker
                    format="dd/MM/yyyy"
                    className="form__field datePicker"
                    id="birthDate"
                    name="birthDate"
                    onChange={(date) =>
                      setFormData({ ...formData, birthDate: date })
                    }
                    value={formData.birthDate}
                    // onChange={onChange}
                    //  value={value}
                  />

                  {/* <Calendar  
                 className="form__field" id="birthDate"
              name="birthDate"
  onChange={(date) =>
    setFormData({ ...formData, birthDate: date })
  }
  value={formData.birthDate || new Date()}
/> */}
                  {/* <input
                    className="form__field"
              type="text"
              id="birthDate"
              name="birthDate"
              placeholder="birthDate"
              autocomplete="off"
              value={formData.birthDate}
              onChange={(e) =>
                setFormData({ ...formData, birthDate: e.target.value })
              }
            />   */}
                  <div className="iconWrap">
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                  {/* <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("birthDate").focus();
                    }}
                  >
                    Birth Date
                  </label> */}
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    autocomplete="off"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("phone").focus();
                    }}
                  >
                    Phone
                  </label>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="text"
                    name="parent"
                    id="parent"
                    placeholder="parent"
                    autocomplete="off"
                    value={formData.parent}
                    onChange={(e) =>
                      setFormData({ ...formData, parent: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-user-group"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("parent").focus();
                    }}
                  >
                    Parent
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="number"
                    name="parentPhone"
                    id="parentPhone"
                    placeholder="parentPhone"
                    autocomplete="off"
                    value={formData.parentPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, parentPhone: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("parentPhone").focus();
                    }}
                  >
                    Parent Phone
                  </label>
                </div>
              </div>
            </div>

            {/* Add other fields for Step 2 */}
          </div>
        );
      case 3:
        return (
          <div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  <input
                    className="form__field"
                    type="text"
                    name="school"
                    id="school"
                    placeholder="School"
                    autocomplete="off"
                    value={formData.school}
                    onChange={(e) =>
                      setFormData({ ...formData, school: e.target.value })
                    }
                  />
                  <div className="iconWrap">
                    <i class="fa-solid fa-school-flag"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("school").focus();
                    }}
                  >
                    School
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  {isMobile ? (
                    <select
                      className="form__field"
                      style={{ width: "180px" }}
                      id="governorate"
                      name="governorate"
                      onChange={handleGovernorateChange}
                    >
                      <option value=""></option>
                      {Governorate.map((x) => (
                        <option key={x._id} value={x._id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      className="form__field"
                      style={{ width: "280px" }}
                      id="governorate"
                      name="governorate"
                      onChange={handleGovernorateChange}
                    >
                      <option value=""></option>
                      {Governorate.map((x) => (
                        <option key={x._id} value={x._id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  )}

                  <div className="iconWrap">
                    <i class="fa-solid fa-layer-group"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("governorate").focus();
                    }}
                  >
                    Select Governorate
                  </label>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  {isMobile ? (
                    <select
                      className="form__field"
                      style={{ width: "180px" }}
                      name="area"
                      id="area"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                    >
                      <option value=""></option>
                      {Area.map((x) => (
                        <option key={x._id} value={x._id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      className="form__field"
                      style={{ width: "280px" }}
                      name="area"
                      id="area"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                    >
                      <option value=""></option>
                      {Area.map((x) => (
                        <option key={x._id} value={x._id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  )}

                  <div className="iconWrap">
                    <i class="fa-solid fa-layer-group"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("area").focus();
                    }}
                  >
                    Select Area
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  {isMobile ? (
                    <select
                      name="diploma"
                      id="diploma"
                      className="form__field"
                      style={{ width: "180px" }}
                      onChange={handleStudyYearChange}
                    >
                      <option value=""></option>
                      {diploma.map((s) => (
                        <option key={s._id} value={s._id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      name="diploma"
                      id="diploma"
                      className="form__field"
                      style={{ width: "280px" }}
                      onChange={handleStudyYearChange}
                    >
                      <option value=""></option>
                      {diploma.map((s) => (
                        <option key={s._id} value={s._id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  )}

                  <div className="iconWrap">
                    <i class="fa-solid fa-building-flag"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("diploma").focus();
                    }}
                  >
                    Select Diploma
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  {isMobile ? (
                    <select
                      className="form__field"
                      style={{ width: "180px" }}
                      id="studyYear"
                      name="studyYear"
                      value={formData.studyYear}
                      onChange={(e) =>
                        setFormData({ ...formData, studyYear: e.target.value })
                      }
                    >
                      <option value=""></option>
                      {eachDiploma.map((x) => (
                        <option key={x._id} value={x._id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      className="form__field"
                      style={{ width: "280px" }}
                      id="studyYear"
                      name="studyYear"
                      value={formData.studyYear}
                      onChange={(e) =>
                        setFormData({ ...formData, studyYear: e.target.value })
                      }
                    >
                      <option value=""></option>
                      {eachDiploma.map((x) => (
                        <option key={x._id} value={x._id}>
                          {x.name}
                        </option>
                      ))}
                    </select>
                  )}

                  <div className="iconWrap">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("studyYear").focus();
                    }}
                  >
                    Select Study Year
                  </label>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "2%", position: "relative" }}>
              <div style={{ margin: "auto" }}>
                <div class="form__group field">
                  {isMobile ? (
                    <select
                      className="form__field"
                      style={{ width: "180px" }}
                      id="languages"
                      name="languages"
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                    >
                      <option value=""></option>
                      {/* {eachDiploma.map((diploma) => */}
                      {lang.map((language) => (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      ))}
                      {/* )}  */}
                    </select>
                  ) : (
                    <select
                      className="form__field"
                      style={{ width: "280px" }}
                      id="languages"
                      name="languages"
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                    >
                      <option value=""></option>
                      {/* {eachDiploma.map((diploma) => */}
                      {lang.map((language) => (
                        <option key={language} value={language}>
                          {language}
                        </option>
                      ))}
                      {/* )}  */}
                    </select>
                  )}

                  <div className="iconWrap">
                    <i class="fa-solid fa-language"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("languages").focus();
                    }}
                  >
                    Select Language
                  </label>
                </div>
              </div>
            </div>

            {/* Add other fields for Step 3 */}
          </div>
        );
      // Add more cases for other steps as needed
      default:
        return null;
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    parentPhone: "",
    phone: "",
    gender: "",
    birthDate: "",
    parent: "",
    area: "",
    studyYear: "",
    school: "",
    language: "",
  });
  const uploadImage = (x) => {
    const file = x.target.files[0];

    if (file) {
      const formDataNew = new FormData();
      formDataNew.append("file", file);

      axios
        .post("https://eprof-zu1o.onrender.com/data/upload", formDataNew)
        .then((response) => {
          // console.log(response.data);
          setFormData({ ...formData, img: response.data.url });
          // console.log(formData)
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://eprof-zu1o.onrender.com/auth/signup", formData)
      .then((response) => {
        // console.log(response.data);
        swal({
          title: "Enter verification code",
          content: "input",
          button: {
            text: "OK",
            closeModal: false,
          },
        }).then((value) => {
          const verificationCode = value;
          axios
            .post(`https://eprof-zu1o.onrender.com/auth/verifyEmail`, {
              verificationCode,
            })
            .then((response) => {
              // console.log(response.data);
              swal(
                "Success",
                "Verification code submitted go to login!",
                "success"
              ).then(() => {
                window.location.reload();
              });
            })
            .catch((error) => {
              // console.log(error);
              swal("Oops!", "Please try again!", "error");
            });
        });
      })
      .catch((error) => {
        // console.log(error);
        swal("Oops!", "Please try again!", "error");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const forgotPassLink = document.getElementById('forgot-pass');

  function openForgotPassword() {
    Swal.fire({
      title: "Forgot your password?",
      text: "Please enter your email address:",
      input: "email",
      inputPlaceholder: "Enter your email address",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        return axios
          .post("https://eprof-zu1o.onrender.com/auth/forgetPassword", {
            email,
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            Swal.showValidationMessage(error.response.data.message);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const { verificationCode } = result.value;
        Swal.fire({
          title: "Reset your password",
          html:
            "<p>Enter the verification code you received in your email:</p>" +
            '<input id="swal-input1" class="swal2-input">' +
            "<p>Enter your new password:</p>" +
            '<input id="swal-input2" type="password" class="swal2-input">',
          focusConfirm: false,
          allowOutsideClick: false,
          showCancelButton: true,
          confirmButtonText: "Reset",
          showLoaderOnConfirm: true,
          preConfirm: () => {
            const verificationCode =
              Swal.getPopup().querySelector("#swal-input1").value;
            const password =
              Swal.getPopup().querySelector("#swal-input2").value;
            return axios
              .post(`https://eprof-zu1o.onrender.com/auth/resetPassword`, {
                verificationCode: verificationCode,
                password: password,
              })
              .then((response) => {
                // console.log(response.data);
                return response.data;
              })
              .catch((error) => {
                Swal.showValidationMessage(error.response.data.message);
              });
          },
        }).then((result) => {
          if (result.isConfirmed) {
            // console.log(result);
            Swal.fire({
              title: "Success!",
              text: result.value.message,
              icon: "success",
            });
          }
        });
      }
    });
  }

  return (
    <>
      <div id="container " className="webView">
        <div id="cover">
          <h1 class="sign-up">Hello, Friend!</h1>
          <p class="sign-up">
            Enter your personal details
            <br /> and start a journey with us
          </p>
          <a class="button sign-up" href="#cover">
            Sign Up
          </a>
          <h1 class="sign-in">Welcome Back!</h1>
          <p class="sign-in" style={{ color: "#fff" }}>
            To keep connected with us please
            <br /> login with your personal info
          </p>
          <br />
          <a class="button sub sign-in" href="#login">
            Sign in
          </a>
        </div>
        <div id="login">
          <Fade top duration={1000} delay={500}>
            {" "}
            <h1 style={{ paddingTop: "38%" }}>Sign In</h1>
          </Fade>
          <form onSubmit={handleSubmitLogin}>
            <Fade top duration={1000} delay={500}>
              <div style={{ paddingBottom: "2%", position: "relative" }}>
                <div style={{ margin: "auto" }}>
                  <div class="form__group field">
                    <input
                      className="form__field"
                      id="email1"
                      type="email"
                      placeholder="Email"
                      autocomplete="off"
                      value={Login.email}
                      onChange={(e) =>
                        setLogin({ ...Login, email: e.target.value })
                      }
                    />
                    <div className="iconWrap">
                      <i class="fa-solid fa-at"></i>
                    </div>
                    <label
                      for="name"
                      class="form__label"
                      onClick={() => {
                        document.getElementById("email1").focus();
                      }}
                    >
                      Email
                    </label>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade top duration={1000} delay={500}>
              <div style={{ paddingBottom: "2%", position: "relative" }}>
                <div style={{ margin: "auto" }}>
                  <div class="form__group field">
                    <input
                      class="form__field"
                      name="password"
                      required
                      id="password1"
                      type={show2 ? "text" : "Password"}
                      placeholder="Password"
                      value={Login.password}
                      onChange={(e) =>
                        setLogin({ ...Login, password: e.target.value })
                      }
                    />
                    <div className="iconWrap">
                      <i class="fa-solid fa-lock"></i>
                    </div>
                    <div
                      className="ourx"
                      onClick={() => {
                        setShow1(!show2);
                      }}
                    >
                      {/* <i
                                  class="fa fa-eye fa-2xs"
                                  aria-hidden="true"
                                  style={{ color: show2 ? "#ffc600" : "black" }}
                                ></i> */}
                    </div>
                    <label
                      for="password"
                      class="form__label"
                      onClick={() => {
                        document.getElementById("password1").focus();
                      }}
                    >
                      Password
                    </label>
                  </div>
                </div>
              </div>
            </Fade>
            {/* <input
              type="password"
              placeholder="Password"
              autocomplete="off"
              value={Login.password}
              onChange={(e) => setLogin({ ...Login, password: e.target.value })}
            />
            <br /> */}
            <Fade top duration={1000} delay={500}>
              {" "}
              <a
                id="forgot-pass"
                onClick={openForgotPassword}
                style={{ cursor: "pointer" }}
              >
                Forgot your password?
              </a>
            </Fade>
            <br />
            <input class="submit-btn" type="submit" value="Sign In" />
          </form>
        </div>
        <div id="register">
          <Fade top duration={1000} delay={500}>
            {" "}
            <h3>Create Account</h3>
          </Fade>
          <Fade top duration={1000} delay={500}>
            {" "}
            <p> Use your email for registration:</p>
          </Fade>
          <form onSubmit={handleSubmit} ref={formRef}>
            {renderFormFields()}
            {step > 1 && (
              <button className="btn-default m-2" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {step < 3 ? (
              <button className="btn-default m-2" onClick={handleNext}>
                Next
              </button>
            ) : (
              <input type="submit" class="submit-btn" value="Submit" />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
