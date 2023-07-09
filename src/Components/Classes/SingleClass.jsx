import React from "react";
import location from "../images/cir3.png";
import classBanner from "../images/class-single-banner.jpg";
import classGallery from "../images/class-gallery1.jpg";
// import { Link } from 'react-router-dom';
import icon15 from "../images/icon15.png";
import icon16 from "../images/icon16.png";
import icon17 from "../images/icon17.png";
import visa from "../images/visa.png";
import codeimage from "../images/code.png";
import walletStatus from "../images/170848ebd6.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import ci1 from "../images/ci1.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import icon10 from "../images/icon10.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import maths from "../images/maths.png";
import verena from "../images/ins.jpg";
import swal from "sweetalert";
import wallet from "../images/wallet.png";
import {
  Player,
  ControlBar,
  ForwardControl,
  ReplayControl,
  BigPlayButton,
  PlaybackRateMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";
import { isMobile } from "react-device-detect";
export default function SingleClass() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  //  &&  (new Date(p.students.dateJoin).getTime() + p.timeLimit *24* 60 * 60 * 1000) >= currentDateTime)
  useEffect(() => {
    axios.get("https://worldtimeapi.org/api/timezone/Africa/Cairo")
      .then((response) => response.json())
      .then((data) => setCurrentDateTime(new Date(data.datetime)));
  }, []);

  const renderPrice = (p) => {
    const user_id = sessionStorage.getItem("user_id");
    const isLoggedIn = user_id !== null;
    if (isLoggedIn) {
      const isStudent = p.students.some(
        (student) => student.student === user_id
      );
      if (isStudent) {
        return null; // Don't render price if the user is a student
      }
      if (p.free === true) {
        return  <a
       
        
        style={{ textDecoration: "none"   ,  float: 'right'}}
      >
    Free
        
      </a> ; // Display "Free" if the lecture is free
      } else if (p.openBuy === true) {
        const currentDate = currentDateTime.getTime();

        const isDateValid =
          p.students.length > 0 &&
          Array.isArray(p.students) &&
          p.students.some(
            (student) =>
              student.student === user_id &&
              new Date(student.dateJoin).getTime() +
                p.timeLimit * 24 * 60 * 60 * 1000 >=
                currentDate
          );
        if (isDateValid) {
          return null; // Don't render price if date is not valid
        } else {
          return (
            <>
              <a
                // to='/registerR'
                onClick={(e) => {
                  toggleOpen(e);
                  setidLec(p._id);
                }}
                style={{ textDecoration: "none"   ,  float: 'right' }}
              >
                {p.price}
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ color: "rgb(197, 137, 43)" }}
                ></i>
              </a>
{isMobile?<div>
                {isOpen && (
                  <div className="overlaythere10">
                    <div className="modalhere">
                      <button className="close-button" onClick={toggleOpen}>
                        <i className="fa-regular fa-circle-xmark fs-3"></i>
                      </button>
                      {showRechargeContent ? (
                        <div>
                          <p className="p-button">Recharge wallet</p>

                          <img
                            className={`image-button16 ${
                              selectedOption === "visa" ? "selected" : ""
                            }`}
                            src={visa}
                            alt=""
                            style={{
                              width: "45%",
                            }}
                            onClick={() => handlePaymentOptionClick("visa")}
                          />
                          <img
                            className={`image-button26 ${
                              selectedOption === "code" ? "selected" : ""
                            }`}
                            src={codeimage}
                            alt=""
                            style={{
                              width: "40%",
                            }}
                            onClick={() => handlePaymentOptionClick("code")}
                          />
                          {/* Add the content for recharging the wallet here */}
                          <p className="p-buttonsec26">
                            Charge wallet with Credit Card, You can also use a
                            recharge code to add money to your wallet.
                          </p>
                          <button
                            className="close-button-charge265 btn-defaultEx26"
                            onClick={() => setShowRechargeContent(false)}
                          >
                            Back to Wallet
                          </button>
                          {showCodeInput && (
                            <div
                              style={{
                                position: "fixed",
                                top: "30%",
                                right: "4%",
                                bottom: "0",
                                width: "90%",
                                height: "45%",
                                backgroundColor: "#3c719a",
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: " center",
                                zIndex: "99999999999",
                                borderRadius: "20px",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#3c719a",
                                  width: "97%",
                                  height: "42vh",
                                  zIndex: "99999999999",
                                  position: "absolute",
                                  top: "0",
                                  borderRadius: "20px",
                                }}
                              >
                                <button
                                  className="close-button"
                                  onClick={toggleOpen}
                                >
                                  <i className="fa-regular fa-circle-xmark fs-3"></i>
                                </button>
                                <p className="p-buttonThird">
                                  Enter recharge code
                                </p>
                                <img
                                  className={`image-buttonn `}
                                  src={codeimage}
                                  alt=""
                                  style={{ width: "72%" }}
                                />
                                <input
                                  style={{
                                    width: "69%",
                                    height: "50px",
                                    color: "#575757",
                                    fontSize: "14.23px",
                                    padding: "0 20px",
                                    border: "2px solid #f6f4f4",
                                    top: "58%",
                                    left: "13%",
                                    position: "absolute",
                                    borderRadius: "30px",
                                  }}
                                  type="text"
                                  value={code}
                                  onChange={(e) => setCode(e.target.value)}
                                />
                                {/* <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                              /> */}

                                <button
                                  className="close-button-chargee2 btn-defaultEx2"
                                  onClick={handleSendButtonClick}
                                >
                                  Send
                                </button>
                                {/* <button onClick={handleSendButtonClick}>
                                Send
                              </button> */}
                              </div>{" "}
                            </div>
                          )}
                          {!showCodeInput && (
                            <button
                              className="close-button-charge26 btn-defaultEx2"
                              onClick={handleNextButtonClick}
                            >
                              Next
                            </button>
                          )}
                          {/* <button className="close-button-charge2 btn-defaultEx2" onClick={handleNextButtonClick}>Next</button> */}
                        </div>
                      ) : p.paymentMethod === "Code" ? (
                        <div>
                          <p className="p-button">Write your Code</p>
                          <input
                            className="form-control"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "25%",
                            }}
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                          />
                          <button
                            className="close-button-charge btn-defaultEx"
                            onClick={handleSendButtonClick2}
                          >
                            Send
                          </button>
                        </div>
                      ) : p.paymentMethod === "Wallet" ? (
                        <div>
                          <p className="p-button"> Wallet Information</p>
                          <img
                            style={{
                              position: "absolute",
                              top: "22%",
                              left: "10%",
                              width: "25%",
                            }}
                            className="image-button"
                            src={walletStatus}
                            alt=""
                          />
                          <p
                            className="p-buttonsec"
                            style={{
                              position: "absolute",
                              top: "55%",
                              left: "10%",
                            }}
                          >
                            Your Balance is {profile.wallet} EGP
                          </p>
                          <button
                            style={{
                              position: "absolute",
                              top: "80%",
                              left: "10%",
                            }}
                            className="close-button-charge btn-defaultEx"
                            onClick={toggleRechargeContent}
                          >
                            Charge Wallet
                          </button>
                          <button
                            style={{
                              position: "absolute",
                              top: "80%",
                              left: "65%",
                            }}
                            className="close-button-charge btn-defaultEx"
                            onClick={payNow}
                          >
                            Pay now
                          </button>
                        </div>
                      ) : p.paymentMethod === "Both" ? (
                        <div>
                          <p className="p-button">
                            Which way do you want to get the lecture?
                            {/* {p.paymentMethod} */}
                          </p>
                          <img
                            className={`image-button2 ${
                              selectedOption === "code" ? "selected" : ""
                            }`}
                            src={codeimage}
                            alt=""
                            style={{ width: "55%",left:'45%' }}
                            onClick={() => {
                              // console.log("alooo code");
                              handlePaymentOptionClick("code");
                            }}
                          />
                          <img
                            style={{
                              position: "absolute",
                              top: "22%",
                              left: "10%",
                              width: "30%",
                            }}
                            className={`image-button ${
                              selectedOption === "wallet" ? "selected" : ""
                            }`}
                            onClick={() => {
                              // console.log("alooo");
                              handlePaymentOptionClick("wallet");
                            }}
                            src={walletStatus}
                            alt=""
                          />
                          {selectedOption === "wallet" && (
                            <div>
                              {/* <img
                                style={{
                                  position: "absolute",
                                  top: "22%",
                                  left: "10%",
                                  width: "20%",
                                }}
                                className="image-button"
                                src={walletStatus}
                                alt=""
                              /> */}
                              <p
                                className="p-buttonsec"
                                style={{
                                  position: "absolute",
                                  top: "55%",
                                  left: "23%",
                                }}
                              >
                                Your Balance is {profile.wallet} EGP
                              </p>
                              <button
                                style={{
                                  position: "absolute",
                                  top: "68%",
                                  left: "24%",
                                }}
                                className="close-button-charge btn-defaultEx"
                                onClick={toggleRechargeContent}
                              >
                                Charge Wallet
                              </button>
                              <button
                                style={{
                                  position: "absolute",
                                  top: "82%",
                                  left: "28%",
                                }}
                                className="close-button-charge btn-defaultEx"
                                onClick={payNow} // Added the payNow function as the onClick handler
                              >
                                Buy Lecture
                              </button>
                            </div>
                          )}
                          {selectedOption === "code" && (
                            <div>
                              <input
                                className="form-control"
                                placeholder="Enter your code"
                                style={{
                                  position: "absolute",
                                  top: "59%",
                                  left: "25%",
                                }}
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                              />
                              <button
                                style={{
                                  position: "absolute",
                                  top: "80%",
                                  left: "27%",
                                }}
                                className="close-button-charge btn-defaultEx"
                                onClick={handleSendButtonClickBoth}
                              >
                                Buy Lecture
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        ""
                      )}{" "}
                    </div>
                  </div>
                )}
              </div>:
              <div>
              {isOpen && (
                <div className="overlaythere">
                  <div className="modalhere">
                    <button className="close-button" onClick={toggleOpen}>
                      <i className="fa-regular fa-circle-xmark fs-3"></i>
                    </button>
                    {showRechargeContent ? (
                      <div>
                        <p className="p-button">Recharge wallet</p>

                        <img
                          className={`image-button16 ${
                            selectedOption === "visa" ? "selected" : ""
                          }`}
                          src={visa}
                          alt=""
                          style={{
                            width: "45%",
                            cursor:'pointer'
                          }}
                          onClick={() => handlePaymentOptionClick("visa")}
                        />
                        <img
                          className={`image-button26 ${
                            selectedOption === "code" ? "selected" : ""
                          }`}
                          src={codeimage}
                          alt=""
                          style={{
                            width: "40%",
                            cursor:'pointer'
                          }}
                          onClick={() => handlePaymentOptionClick("code")}
                        />
                        {/* Add the content for recharging the wallet here */}
                        <p className="p-buttonsec26 text-center" style={{top:'50%'}}>
                          Charge wallet with Credit Card, You can also use a
                          recharge code to add money to your wallet.
                        </p>
                        <button
                          className="close-button-charge265 btn-defaultEx26"
                          onClick={() => setShowRechargeContent(false)}
                        >
                          Back to Wallet
                        </button>
                        {showCodeInput && (
                          <div
                            style={{
                              position: "fixed",
                              top: "30%",
                              right: "25%",
                              bottom: "0",
                              width: "50%",
                              height: "45%",
                              backgroundColor: "#3c719a",
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: " center",
                              zIndex: "99999999999",
                              borderRadius: "20px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#3c719a",
                                width: "97%",
                                height: "42vh",
                                zIndex: "99999999999",
                                position: "absolute",
                                top: "0",
                                borderRadius: "20px",
                              }}
                            >
                              <button
                                className="close-button"
                                onClick={toggleOpen}
                              >
                                <i className="fa-regular fa-circle-xmark fs-3"></i>
                              </button>
                              <p className="p-buttonThird">
                                Enter recharge code
                              </p>
                              <img
                                className={`image-buttonn `}
                                src={codeimage}
                                alt=""
                                style={{ width: "32%",left:'29%' }}
                              />
                              <input
                                style={{
                                  
                                  height: "50px",
                                  color: "#575757",
                                  fontSize: "14.23px",
                                  padding: "0 20px",
                                  border: "2px solid #f6f4f4",
                                  top: "58%",
                                  left: "25%",
                                  position: "absolute",
                                  borderRadius: "30px",
                                }}
                                placeholder="Enter Code"
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                              />
                              {/* <input
                              type="text"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                            /> */}

                              <button
                                className="close-button-chargee2 btn-defaultEx2"
                                onClick={handleSendButtonClick}
                              >
                                Send
                              </button>
                              {/* <button onClick={handleSendButtonClick}>
                              Send
                            </button> */}
                            </div>{" "}
                          </div>
                        )}
                        {!showCodeInput && (
                          <button
                            className="close-button-charge26 btn-defaultEx2"
                            onClick={handleNextButtonClick}
                          >
                            Next
                          </button>
                        )}
                        {/* <button className="close-button-charge2 btn-defaultEx2" onClick={handleNextButtonClick}>Next</button> */}
                      </div>
                    ) : p.paymentMethod === "Code" ? (
                      <div>
                        <p className="p-button">Write your Code</p>
                        <input
                          className="form-control"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "25%",
                          }}
                          type="text"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                        <button
                          className="close-button-charge btn-defaultEx"
                          onClick={handleSendButtonClick2}
                        >
                          Send
                        </button>
                      </div>
                    ) : p.paymentMethod === "Wallet" ? (
                      <div>
                        <p className="p-button"> Wallet Information</p>
                        <img
                          style={{
                            position: "absolute",
                            top: "22%",
                            left: "10%",
                            width: "25%",
                          }}
                          className="image-button"
                          src={walletStatus}
                          alt=""
                        />
                        <p
                          className="p-buttonsec"
                          style={{
                            position: "absolute",
                            top: "55%",
                            left: "10%",
                          }}
                        >
                          Your Balance is {profile.wallet} EGP
                        </p>
                        <button
                          style={{
                            position: "absolute",
                            top: "80%",
                            left: "10%",
                          }}
                          className="close-button-charge btn-defaultEx"
                          onClick={toggleRechargeContent}
                        >
                          Charge Wallet
                        </button>
                        <button
                          style={{
                            position: "absolute",
                            top: "80%",
                            left: "65%",
                          }}
                          className="close-button-charge btn-defaultEx"
                          onClick={payNow}
                        >
                          Pay now
                        </button>
                      </div>
                    ) : p.paymentMethod === "Both" ? (
                      <div>
                        <p className="p-button">
                          Which way do you want to get the lecture?
                          {/* {p.paymentMethod} */}
                        </p>
                        <img
                          className={`image-button2 ${
                            selectedOption === "code" ? "selected" : ""
                          }`}
                          src={codeimage}
                          alt=""
                          style={{ width: "40%",left:'45%',top:'30%' }}
                          onClick={() => {
                            // console.log("alooo code");
                            handlePaymentOptionClick("code");
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            top: "22%",
                            left: "10%",
                            width: "25%",
                          }}
                          className={`image-button ${
                            selectedOption === "wallet" ? "selected" : ""
                          }`}
                          onClick={() => {
                            // console.log("alooo");
                            handlePaymentOptionClick("wallet");
                          }}
                          src={walletStatus}
                          alt=""
                        />
                        {selectedOption === "wallet" && (
                          <div>
                            {/* <img
                              style={{
                                position: "absolute",
                                top: "22%",
                                left: "10%",
                                width: "20%",
                              }}
                              className="image-button"
                              src={walletStatus}
                              alt=""
                            /> */}
                            <p
                              className="p-buttonsec"
                              style={{
                                position: "absolute",
                                top: "68%",
                                left: "35%",
                              }}
                            >
                              Your Balance is {profile.wallet} EGP
                            </p>
                            <button
                              style={{
                                position: "absolute",
                                top: "80%",
                                left: "15%",
                              }}
                              className="close-button-charge btn-defaultEx"
                              onClick={toggleRechargeContent}
                            >
                              Charge Wallet
                            </button>
                            <button
                              style={{
                                position: "absolute",
                                top: "80%",
                                left: "60%",
                              }}
                              className="close-button-charge btn-defaultEx"
                              onClick={payNow} // Added the payNow function as the onClick handler
                            >
                              Buy Lecture
                            </button>
                          </div>
                        )}
                        {selectedOption === "code" && (
                          <div>
                            <input
                              className="form-control"
                              placeholder="Enter your code"
                              style={{
                                position: "absolute",
                                top: "63%",
                                left: "25%",
                              }}
                              type="text"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                            />
                            <button
                              style={{
                                position: "absolute",
                                top: "80%",
                                left: "36%",
                              }}
                              className="close-button-charge btn-defaultEx"
                              onClick={handleSendButtonClickBoth}
                            >
                              Buy Lecture
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      ""
                    )}{" "}
                  </div>
                </div>
              )}
            </div>
              }
              
            </>
          ); // Display the price and cart icon if the lecture is available for purchase, and show the overlay content when isOpen is true
        }
        // const currentDateTime = new Date().getTime();
        // console.log(currentDateTime);

        //  if (p.openBuy === true&&
        //     p.students.length > 0 &&
        //     Array.isArray(p.students)
        //     &&
        //     new Date(p.students.dateJoin).getTime() +
        //       p.timeLimit * 24 * 60 * 60 * 1000 >=
        //       currentDateTime
        //   ) {
        //     const isStudent = p.students.some(
        //       (student) => student.student === user_id
        //     );
        //     if (isStudent) {
        //       return null; // Don't render price if the user is a student
        //     }
        //   }
        //   console.log(currentDateTime)
      } 
      
      else {
        // User is logged out
        // Redirect to the register page
        return 
         
        <Link to="/registerR"
        style={{ textDecoration: "none"   ,  float: 'right' }}
      >
        {p.price}
        <i
          className="fa-solid fa-cart-shopping"
          style={{ color: "rgb(197, 137, 43)" }}
        ></i>
      </Link>
      }
    }
    else{
      return(
      <Link to="/registerR"
      style={{ textDecoration: "none"   ,  float: 'right' }}
    >
      {p.price}
      <i
        className="fa-solid fa-cart-shopping"
        style={{ color: "rgb(197, 137, 43)" }}
      ></i>
    </Link>)
    }
    return null;

    // Don't render anything if none of the cases match
  };

  {
    /**date */
  }
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [singleSheetClassRoom, setSingleSheetClassRoom] = useState([]);
  const [singleClass, setSingleClass] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [subLecture, setSubLecture] = useState([]);

  const [showRechargeContent, setShowRechargeContent] = useState(false);

  const navigate = useNavigate();
  function NavSheet(s) {
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
  const newDate = new Date();
  useEffect(() => {
    axios
      .get("https://eprof-zu1o.onrender.com/adminSheet/classRooms/" + _id)
      .then((response) => {
        console.log(response.data);
        setSingleSheetClassRoom(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  function nav(s, s2) {
    // console.log(s);
    navigate("/lecture/" + s + "/" + s2);
  }
  function navEachTeacher(s) {
    navigate("/singleTeacher/" + s);
  }
  var groupBy = function (data, key) {
    // `data` is an array of objects, `key` is the key (or property accessor) to group by
    // reduce runs this anonymous function on each element of `data` (the `item` parameter,
    // returning the `storage` parameter at the end
    return data.reduce(function (storage, item) {
      // get the first instance of the key by which we're grouping
      var group = item[key].name;

      // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
      storage[group] = storage[group] || [];

      // add this item to its group within `storage`
      storage[group].push(item);

      // return the updated storage to the reduce function, which will then loop through the next
      return storage;
    }, {}); // {} is the initial value of the storage
  };
  useEffect(() => {
    const user_id = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("token");
    axios
      .get(
        "https://eprof-zu1o.onrender.com/lecture/classroom_lectures/" + _id,
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log(groupBy(response.data.response, "section"));
        // console.log(newDate);

        setLecture(groupBy(response.data.response, "section"));
        setSubLecture(response.data.response);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  let { _id } = useParams();
  async function getSingleClass() {
    let { data } = await axios.get(
      "https://eprof-zu1o.onrender.com/classroom/" + _id
    );

    setSingleClass(data.classRoom);
    console.log(data.classRoom);
    //   setTeacherData(data.instructor);
    //   console.log(data.instructor);
    // console.log(data.instructor);
  }
  const playerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [enroll, setEnroll] = useState("");
  const [idLec, setidLec] = useState("");

  const toggleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const payNow = () => {
    const token = sessionStorage.getItem("token");
    if (code === null || code === "") {
      axios
        .post(
          "https://eprof-zu1o.onrender.com/lecture/buy/" + idLec,
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
          swal("Good job!", response.data.message, "success").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => {
          // console.log(error);
          swal("Oops!", "error", "error");
          // .then(() => {
          //   window.location.reload()
          //    });
        });
    } else {
      axios
        .post(
          "https://eprof-zu1o.onrender.com/lecture/buyCode/" + idLec,
          { code },
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          // handle success response
          swal("Good job!", response.data.message, "success").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => {
          // console.log(error);
          // handle error response
          swal("Oops!", error.response.data, "error");
        });
    }
    // console.log(token);
  };
  const followInstructor = () => {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    axios
      .post(
        "https://eprof-zu1o.onrender.com/classroom/enroll/" + _id,
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
        setEnroll(response.data);
        window.location.reload();

        // sessionStorage.setItem("enrolled", true);
        // swal("Good job!", "Your Data has been sent successfully!", "success");
      })
      .catch((error) => {
        // console.log(error);
        // swal("Oops!", "Please try again!", "error");
      });
  };
  // async function followInstructor() {
  // 	const token = sessionStorage.getItem('token');
  // 	 await axios.post(
  // 	  "https://eprof-zu1o.onrender.com/classroom/enroll/" + _id
  // 	  , {
  // 		headers: {
  // 		  'Authorization': ` ${token}` // set Authorization header with token value
  // 		}});

  // 	// setSingleClass(data.classRoom);
  // 	console.log('posted');
  //   //   setTeacherData(data.instructor);
  //   //   console.log(data.instructor);
  // 	// console.log(data.instructor);

  //   }

  // const instructor=singleClass.instructor;
  const subjectinstructor = singleClass.instructor
    ? singleClass.instructor.name
    : "";
  const imageinstructor = singleClass.instructor
    ? singleClass.instructor.img
    : "";
  const subjectinstructorID = singleClass.instructor
    ? singleClass.instructor._id
    : "";
  const subjectName = singleClass.subject ? singleClass.subject.name : "";
  // const studyYear=singleClass.studyYear;
  const studyYear = singleClass.studyYear ? singleClass.studyYear.name : "";
  const days = singleClass.days;

  useEffect(() => {
    getSingleClass();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [profile, setprofile] = useState({});

  const [code, setCode] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleRechargeContent = () => {
    setShowRechargeContent(true);
  };
  const handlePaymentOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    if (selectedOption === "visa") {
      // console.log("visa");
    } else if (selectedOption === "code") {
      // console.log("code");
      setShowCodeInput(true);
      //       return (
      //         <div>
      //          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} style={{ display: 'block', margin: '20px 0' }} />
      // <button onClick={handleSendButtonClick} style={{ display: 'block' }}>Send</button>

      //         </div>
      //       );
    } else {
      // Render default content if no option is selected
    }
  };
  const handleSendButtonClick = () => {
    const token = sessionStorage.getItem("token");
    // Send code to API using axios
    axios
      .post(
        "https://eprof-zu1o.onrender.com/user/addToWallet",
        { code },
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        swal("Success", "Code valid successful!", "success").then(() => {
          window.location.reload();
        });

        // handle success response
      })
      .catch((error) => {
        // console.log(error);
        swal("Error", "Please try again!", "error");
      });
  };
  const handleSendButtonClickBoth = () => {
    const token = sessionStorage.getItem("token");
    if (code === null || code === "") {
      axios
        .post(
          "https://eprof-zu1o.onrender.com/classroom/buy/" + _id,
          {},
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          swal("Good job!", response.data.message, "success").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => {
          // console.log(error);
          swal("Oops!", error.response.data, "error");
        });
    } else {
      axios
        .post(
          "https://eprof-zu1o.onrender.com/classroom/buyCode/" + _id,
          { code },
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          // handle success response
          swal("Good job!", response.data.message, "success").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => {
          // console.log(error);
          // handle error response
          swal("Oops!", error.response.data.message, "error");
        });
    }
  };

  const handleSendButtonClick2 = () => {
    const token = sessionStorage.getItem("token");
    // Send code to API using axios
    axios
      .post(
        "https://eprof-zu1o.onrender.com/classroom/buyCode/" + _id,
        { code },
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        swal("Good job!", response.data.message, "success").then(() => {
          window.location.reload();
        });
        // handle success response
      })
      .catch((error) => {
        // console.log(error);
        swal("Oops!", error.response.data.message, "error");
        // handle error response
      });
  };
  useEffect(() => {
    const token = sessionStorage.getItem("token"); // retrieve token value from session storage
    axios
      .get("https://eprof-zu1o.onrender.com/user/me", {
        headers: {
          Authorization: ` ${token}`, // set Authorization header with token value
        },
      })
      .then((response) => {
        // console.log(response.data.user);
        setprofile(response.data.user);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  return (
    <>
      <section class="class-single-banner">
        <img
          src={singleClass.img}
          alt=""
          class="w-100"
          style={{ maxHeight: "60vh" }}
        />
      </section>
      <section class="page-content style2">
        <div class="container">
          {isMobile ? (
            <div class="row">
              <div
                class="col-xl-4 col-lg-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div class="sidebar class-sidebar">
                  <div class="widget widget-information">
                    <h3 class="widget-title">Class Information</h3>
                    <ul style={{ paddingLeft: "0" }}>
                      <li>
                        <ul
                          style={{
                            borderBottom: "none",
                            padding: "0",
                            width: "100%",
                          }}
                        >
                          {singleClass.offLineData &&
                            singleClass.offLineData.map((date) => {
                              const dateTime = new Date(
                                `2023-05-15T${date.time}:00`
                              );
                              const hours = dateTime.getHours();
                              const minutes = dateTime.getMinutes();
                              const hours12 = hours % 12 || 12;
                              const amOrPm = hours < 12 ? "AM" : "PM";
                              const formattedTime = `${hours12}:${
                                minutes < 10 ? "0" : ""
                              }${minutes} ${amOrPm}`;

                              return (
                                <li
                                  key={date._id}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  {singleClass.offline === true ? (
                                    <h4
                                      style={{
                                        marginRight: "0",
                                        marginBottom: "0",
                                      }}
                                    >
                                      <ul
                                        style={{
                                          borderBottom: "none",
                                          paddingLeft: "0",
                                          paddingBottom: "0",
                                        }}
                                      >
                                        <li>{date.day}</li>
                                      </ul>
                                    </h4>
                                  ) : (
                                    ""
                                  )}
                                  <span>
                                    {formattedTime}{" "}
                                    <a href={date.location} target="_blank">
                                      <img src={location} alt="" />
                                    </a>
                                  </span>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li>
                        <h4>Grade</h4>
                        <span>{studyYear}</span>
                      </li>

                      {Array.isArray(singleClass.students) &&
                      singleClass.openBuy === true &&
                      singleClass.students.length > 0 ? (
                        singleClass.students.map((student) => {
                          const user_id = sessionStorage.getItem("user_id");
                          if (student.student === user_id) {
                            return null; // Don't render price
                          } else {
                            return (
                              <li key={student.student}>
                                <h4>Price</h4>
                                <span>{singleClass.price} EGP</span>
                              </li>
                            );
                          }
                        })
                      ) : singleClass.openBuy === true ? (
                        <li>
                          <h4>Price</h4>
                          <span>{singleClass.price} EGP</span>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                    <div class="tech-info">
                      <div class="tech-tble">
                        <img
                          src={imageinstructor ? imageinstructor : verena}
                          alt=""
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                          }}
                        />
                        <div class="tch-info">
                          <a
                            href=""
                            onClick={() => navEachTeacher(subjectinstructorID)}
                            style={{ textDecoration: "none" }}
                          >
                            <h3>{subjectinstructor}</h3>
                          </a>
                          <span style={{ color: "rgb(197, 137, 43)" }}>
                            {subjectName} Instructor
                          </span>
                        </div>
                      </div>
                      {/* {singleClass.students?'':    */}
                      {sessionStorage.getItem("loggedIn", true) ? (
                        singleClass.openBuy === false  ? (
                          ""
                        ) : singleClass.openBuy === false ? (
                          <a
                            onClick={() => followInstructor()}
                            style={{
                              textDecoration: "none",
                              marginBottom: "2%",
                              width: "100%",
                            }}
                            title=""
                            class="btn-default"
                          >
                            {singleClass.studentsEnrolled.length > 0
                              ? "UnEnroll"
                              : "Enroll Now"}
                            {/* {enroll.message=== "UnFollow"?'UnEnroll':'Enroll Now'} */}
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        ) : singleClass.openBuy === true? (
                          <a
                            onClick={() => followInstructor()}
                            style={{
                              textDecoration: "none",
                              marginBottom: "2%",
                              width: "100%",
                            }}
                            title=""
                            class="btn-default"
                          >
                            {singleClass.studentsEnrolled.length > 0
                              ? "UnEnroll"
                              : "Enroll Now"}
                            {/* {enroll.message=== "UnFollow"?'UnEnroll':'Enroll Now'} */}
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        ) : (
                          ""
                        )
                      ) : singleClass.openBuy === false ? (
                        ""
                      ) : singleClass.openBuy === false? (
                        <Link
                          to="/registerR"
                          style={{
                            textDecoration: "none",
                            marginBottom: "2%",
                            width: "100%",
                          }}
                          title=""
                          class="btn-default"
                        >
                          Enroll Now <i class="fa fa-long-arrow-alt-right"></i>
                        </Link>
                      ) : singleClass.openBuy === true  ? (
                        <Link
                          to="/registerR"
                          style={{
                            textDecoration: "none",
                            marginBottom: "2%",
                            width: "100%",
                          }}
                          title=""
                          class="btn-default"
                        >
                          Enroll Now <i class="fa fa-long-arrow-alt-right"></i>
                        </Link>
                      ) : (
                        ""
                      )}
                      {/* singleClass.students?'': */}
                      {sessionStorage.getItem("loggedIn", true) ? (
                        singleClass.free === true ? (
                          ""
                        ) : singleClass.openBuy === false &&
                          singleClass.free === false ? (
                          ""
                        ) : singleClass.openBuy === false &&
                          singleClass.free === true ? (
                          ""
                        ) : singleClass.openBuy === true &&
                          singleClass.free === false &&
                          singleClass.students.length > 0 &&
                          Array.isArray(singleClass.students) &&
                          singleClass.students.some(
                            (student) =>
                              student.student ===
                                sessionStorage.getItem("user_id") &&
                              new Date(student.dateJoin).getTime() +
                                singleClass.durationExp * 24 * 60 * 60 * 1000 >=
                                currentDateTime
                          ) ? (
                          ""
                        ) : (
                          <Link
                            onClick={toggleOpen1}
                            style={{ textDecoration: "none", width: "100%" }}
                            title=""
                            class="btn-default"
                          >
                            {/* {console.log(singleClass)} */}
                            Buy Class <i class="fa fa-long-arrow-alt-right"></i>
                          </Link>
                        )
                      ) : singleClass.free === true ? (
                        ""
                      ) : singleClass.openBuy === false &&
                        singleClass.free === false ? (
                        ""
                      ) : singleClass.openBuy === false &&
                        singleClass.free === true ? (
                        ""
                      ) : singleClass.openBuy === true &&
                        singleClass.free === false ? (
                        <Link
                          to="/registerR"
                          style={{ textDecoration: "none", width: "100%" }}
                          title=""
                          class="btn-default"
                        >
                          Buy Class <i class="fa fa-long-arrow-alt-right"></i>
                        </Link>
                      ) : (
                        ""
                      )}
                      {isOpen1 && (
                        <div className="overlaythere77">
                          <div className="modalhere">
                            <button
                              className="close-button"
                              onClick={toggleOpen1}
                            >
                              <i className="fa-regular fa-circle-xmark fs-3"></i>
                            </button>
                            {showRechargeContent ? (
                              <div>
                                <p className="p-button">Recharge wallet</p>

                                <img
                                  className={`image-button1 ${
                                    selectedOption === "visa" ? "selected" : ""
                                  }`}
                                  src={visa}
                                  alt=""
                                  style={{ width: "50%" ,left:'1%'}}
                                  onClick={() =>
                                    handlePaymentOptionClick("visa")
                                  }
                                />
                                <img
                                  className={`image-button2 ${
                                    selectedOption === "code" ? "selected" : ""
                                  }`}
                                  src={codeimage}
                                  alt=""
                                  style={{ width: "40%" }}
                                  onClick={() =>
                                    handlePaymentOptionClick("code")
                                  }
                                />
                                {/* Add the content for recharging the wallet here */}
                                <p className="p-buttonsec2">
                                  Charge wallet with Credit Card, You can also
                                  use a recharge code to add money to your
                                  wallet.
                                </p>
                                <button
                                  className="close-button-charge99 btn-defaultEx"
                                  onClick={() => setShowRechargeContent(false)}
                                >
                                  Back to Wallet
                                </button>
                                {showCodeInput && (
                                  <div
                                    style={{
                                      position: "fixed",
                                      top: "30%",
                                      right: "4%",
                                      bottom: "0",
                                      width: "90%",
                                      height: "45%",
                                      backgroundColor: "#3c719a",
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      alignItems: " center",
                                      zIndex: "99999999999",
                                      borderRadius: "20px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        backgroundColor: "#3c719a",
                                        width: "97%",
                                        height: "42vh",
                                        zIndex: "99999999999",
                                        position: "absolute",
                                        top: "0",
                                        borderRadius: "20px",
                                      }}
                                    >
                                      <button
                                        className="close-button"
                                        onClick={toggleOpen}
                                      >
                                        <i className="fa-regular fa-circle-xmark fs-3"></i>
                                      </button>
                                      <p className="p-buttonThird">
                                        Enter recharge code
                                      </p>
                                      <img
                                        className={`image-buttonn `}
                                        src={codeimage}
                                        alt=""
                                        style={{ width: "72%" }}
                                      />
                                      <input
                                        style={{
                                          width: "69%",
                                          height: "50px",
                                          color: "#575757",
                                          fontSize: "14.23px",
                                          padding: "0 20px",
                                          border: "2px solid #f6f4f4",
                                          top: "58%",
                                          left: "13%",
                                          position: "absolute",
                                          borderRadius: "30px",
                                        }}
                                        type="text"
                                        value={code}
                                        onChange={(e) =>
                                          setCode(e.target.value)
                                        }
                                      />
                                      <button
                                        className="close-button-chargee2 btn-defaultEx2"
                                        onClick={handleSendButtonClick}
                                      >
                                        Send
                                      </button>
                                    </div>{" "}
                                  </div>
                                )}
                                {!showCodeInput && (
                                  <button
                                    className="close-button-charge2 btn-defaultEx2"
                                    onClick={handleNextButtonClick}
                                  >
                                    Next
                                  </button>
                                )}
                                {/* <button className="close-button-charge2 btn-defaultEx2" onClick={handleNextButtonClick}>Next</button> */}
                              </div>
                            ) : singleClass.paymentMethod === "Code" ? (
                              <div>
                                <p className="p-button">Write your code</p>
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "25%",
                                    left: "18%",
                                    width: "60%",
                                  }}
                                  className="image-button"
                                  src={codeimage}
                                  alt=""
                                />
                                <input
                                  className="form-control"
                                  placeholder="Enter code"
                                  style={{
                                    position: "absolute",
                                    top: "59%",
                                    left: "25%",
                                  }}
                                  type="text"
                                  value={code}
                                  onChange={(e) => setCode(e.target.value)}
                                />
                                <button
                                  className="close-button-charge btn-defaultEx"
                                  onClick={handleSendButtonClick2}
                                  style={{
                                    position: "absolute",
                                    top: "80%",
                                    left: "40%",
                                  }}
                                >
                                  Send
                                </button>
                              </div>
                            ) : singleClass.paymentMethod === "Wallet" ? (
                              <div>
                                <p className="p-button"> Wallet Information</p>
                                <img
                                  className="image-button77"
                                  src={walletStatus}
                                  style={{ width: "41%" }}
                                  alt=""
                                />
                                <p className="p-buttonsec77">
                                  Your Balance is {profile.wallet} EGP
                                </p>
                                <button
                                  className="close-button-charge77 btn-defaultEx"
                                  onClick={toggleRechargeContent}
                                >
                                  Charge Wallet
                                </button>
                                <button
                                  style={{
                                    position: "absolute",
                                    top: "80%",
                                    left: "60%",
                                  }}
                                  className="close-button-charge btn-defaultEx"
                                  onClick={handleSendButtonClickBoth}
                                >
                                  Pay now
                                </button>
                              </div>
                            ) : singleClass.paymentMethod === "Both" ? (
                              <div>
                                <p className="p-button">
                                  Which way do you want to get the classroom?
                                </p>
                                {/**Hello */}
                                <img
                                  className={`image-button2 ${
                                    selectedOption === "code" ? "selected" : ""
                                  }`}
                                  src={codeimage}
                                  alt=""
                                  style={{ width: "55%" ,top:'31%',left:'45%'}}
                                  onClick={() =>
                                    handlePaymentOptionClick("code")
                                  }
                                />
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "22%",
                                    left: "5%",
                                    width: "40%",
                                  }}
                                  className={`image-button ${
                                    selectedOption === "wallet"
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handlePaymentOptionClick("wallet")
                                  }
                                  src={walletStatus}
                                  alt=""
                                />
                                {selectedOption === "wallet" && (
                                  <div>
                                  
                                    <p
                                      className="p-buttonsec"
                                      style={{
                                        position: "absolute",
                                        top: "57%",
                                        left: "25%",
                                      }}
                                    >
                                      Your Balance is {profile.wallet} EGP
                                    </p>
                                    <button
                                      style={{
                                        position: "absolute",
                                        top: "65%",
                                        left: "25%",
                                      }}
                                      className="close-button-charge btn-defaultEx"
                                      onClick={toggleRechargeContent}
                                    >
                                      Charge Wallet
                                    </button>
                                    <button
                                      style={{
                                        position: "absolute",
                                        top: "80%",
                                        left: "25%",
                                      }}
                                      className="close-button-charge btn-defaultEx"
                                      onClick={handleSendButtonClickBoth}
                                    >
                                      Buy Classroom
                                    </button>
                                  </div>
                                )}
                                {selectedOption === "code" && (
                                  <div>
                                    <input
                                      className="form-control"
                                      placeholder="Enter your code"
                                      style={{
                                        position: "absolute",
                                        top: "59%",
                                        left: "25%",
                                      }}
                                      type="text"
                                      value={code}
                                      onChange={(e) => setCode(e.target.value)}
                                    />

                                    <button
                                      style={{
                                        position: "absolute",
                                        top: "80%",
                                        left: "25%",
                                      }}
                                      className="close-button-charge btn-defaultEx"
                                      onClick={handleSendButtonClickBoth}
                                    >
                                      Buy Classroom
                                    </button>
                                  </div>
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8">
                <div class="class-single-content">
                  <h2>{singleClass.name}</h2>
                  {/* <ul class="meta-box">
                 <li>
                   <Link to="/" style={{ textDecoration: "none" }} title="">
                     Home
                   </Link>
                 </li>
                 <li>
                   <span>Classes</span>
                 </li>
               </ul> */}
                  <div class="class-gallery">
                    <div class="class-gallery-img">
                      <a
                        href=""
                        title=""
                        class="html5lightbox"
                        data-group="set1"
                      >
                        {/* <img src={singleClass.img} alt="" style={{borderRadius:'20px'}} /> */}
                      </a>
                    </div>
                  </div>
                  <p style={{ fontSize: "20px" }}>{singleClass.description} </p>
                </div>
                <div className="classLectureContent">
                  <>
                    <Accordion defaultActiveKey="0" style={{ marginTop: "4%" }}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header
                        // onClick={() => {
                        //   console.log(omarImage);
                        //   setOmarImage(p);
                        // }}
                        >
                          <i
                            class="fa-brands fa-youtube"
                            style={{ marginRight: "2px" }}
                          ></i>{" "}
                          Your Lectures
                        </Accordion.Header>
                        <Accordion.Body>
                          {Object.keys(lecture).map((l, index) => (
                            <Accordion style={{ marginBottom: "1%" }}>
                              {" "}
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                  <div
                                    key={index}
                                    className="row"
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                    }}
                                  >
                                    <div
                                      className="col"
                                      style={{ float: "left" }}
                                    >
                                      {" "}
                                      {l ? l : ""}
                                    </div>
                                  </div>{" "}
                                </Accordion.Header>
                                <Accordion.Body>
                                  {lecture[l]
                                    .sort((a, b) => a.order - b.order)
                                    .map((p, index) =>
                                      p.active === true ? (
                                        <Accordion.Body
                                          value={p._id}
                                          key={index}
                                          style={{ paddingBottom: "0" }}
                                        >
                                          <span
                                            // onClick={() => nav(p.classRoom)}
                                            style={{
                                              color: "#000",
                                              cursor: "pointer",
                                              fontFamily: "Poppins",
                                              fontSize: "16px",
                                            }}
                                          >
                                             {p.block===false?
                                            <Accordion>
                                              <Accordion.Item eventKey="2">
                                               <Accordion.Header>
                                                  <div
                                                    className="row"
                                                    style={{
                                                      display: "flex",
                                                      width: "100%",
                                                    }}
                                                  >
                                                    <div
                                                      className="col"
                                                      style={{ float: "left" }}
                                                    >
                                                      {p.name ? p.name : ""}
                                                    </div>
                                                    <div
                                                      className="col"
                                                      style={{ float: "right" }}
                                                    >
                                                      {renderPrice(p)}
                                                    </div>
                                                  </div>
                                                </Accordion.Header>
                                                
                                                <Accordion.Body>
                                                  {p.subLecs &&
                                                    p.subLecs.map(
                                                      (s, index) => (
                                                        <Accordion.Body
                                                          key={index}
                                                          value={s._id}
                                                        >
                                                          <Accordion>
                                                            <Accordion.Item eventKey="3">
                                                              <Accordion.Header>
                                                                {s.name
                                                                  ? s.name
                                                                  : ""}
                                                              </Accordion.Header>
                                                              <Accordion.Body>
                                                                <p
                                                                  style={{
                                                                    fontSize:
                                                                      "18px",
                                                                  }}
                                                                >
                                                                  <br />
                                                                  {p.students
                                                                    .length >
                                                                    0 &&
                                                                  Array.isArray(
                                                                    p.students
                                                                  ) &&
                                                                  p.students.some(
                                                                    (student) =>
                                                                      student.student ===
                                                                        sessionStorage.getItem(
                                                                          "user_id"
                                                                        ) &&
                                                                      new Date(
                                                                        student.dateJoin
                                                                      ).getTime() +
                                                                        p.timeLimit *
                                                                          24 *
                                                                          60 *
                                                                          60 *
                                                                          1000 >=
                                                                        currentDateTime
                                                                  ) ? (
                                                                    p.free ===
                                                                    true ? (
                                                                      isMobile ? (
                                                                        <a
                                                                          onClick={() => {
                                                                            nav(
                                                                              p._id,
                                                                              s._id
                                                                            );
                                                                          }}
                                                                        >
                                                                        {s.video&&
                                                                            s
                                                                              .video
                                                                              .name ?  <i
                                                                            className="fa-brands fa-youtube fs-3"
                                                                            style={{
                                                                              color:
                                                                                "rgb(197, 137, 43)",
                                                                              paddingRight:
                                                                                "1%",
                                                                            }}
                                                                          ></i>:""}
                                                                          {s.video &&
                                                                            s
                                                                              .video
                                                                              .name}{" "}
                                                                          {/* Access video name here */}
                                                                        </a>
                                                                      ) : isMobile ? (
                                                                        <div className="row"> 
                                                                          <div className="col-md-1">  <a
                                                                        onClick={() => {
                                                                          // document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      >
                                                                        {s.video&&
                                                                            s
                                                                              .video
                                                                              .name ?
                                                                         <i
                                                                            className="fa-brands fa-youtube fs-3"
                                                                            style={{
                                                                              color:
                                                                                "rgb(197, 137, 43)",
                                                                              paddingRight:
                                                                                "2%",
                                                                            }}
                                                                          ></i>:""}</a></div>
                                                                          <div className="col-md-11"> <a
                                                                        onClick={() => {
                                                                          // document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      > {s.video &&
                                                                            s
                                                                              .video
                                                                              .name} </a></div>

                                                                       
                                                                       
                                                                         {" "}
                                                                          {/* Access video name here */}
                                                                       </div>
                                                                      ) : (
                                                                      <div className="row"> 
                                                                        <div className="col-md-1"> <a
                                                                      onClick={() => {
                                                                        document.documentElement.requestFullscreen();
                                                                        nav(
                                                                          p._id,
                                                                          s._id
                                                                        );
                                                                      }}
                                                                    > {s.video &&
                                                                      s
                                                                        .video
                                                                        .name?<i
                                                                            className="fa-brands fa-youtube fs-3"
                                                                            style={{
                                                                              color:
                                                                                "rgb(197, 137, 43)",
                                                                              paddingRight:
                                                                                "2%",
                                                                            }}
                                                                          ></i>:""}</a></div>
                                                                        <div className="col-md-11"> <a
                                                                      onClick={() => {
                                                                        document.documentElement.requestFullscreen();
                                                                        nav(
                                                                          p._id,
                                                                          s._id
                                                                        );
                                                                      }}
                                                                    > {s.video &&
                                                                            s
                                                                              .video
                                                                              .name}</a></div>
                                                                         
                                                                        
                                                                        {" "}
                                                                          {/* Access video name here */}
                                                                        </div>
                                                                      )
                                                                    ) : (
                                                                      <div className="row">
                                                                         
                                                                        <div className="col-md-1">   <a
                                                                        onClick={() => {
                                                                          document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      >
                                                                        {s.video &&
                                                                            s
                                                                              .video
                                                                              .name?
                                                                        <i
                                                                          className="fa-brands fa-youtube fs-3"
                                                                          style={{
                                                                            color:
                                                                              "rgb(197, 137, 43)",
                                                                            paddingRight:
                                                                              "1%",
                                                                          }}
                                                                        ></i>:""}</a> </div>
                                                                        <div className="col-md-1">
                                                                        <a
                                                                        onClick={() => {
                                                                          document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      > {s.video &&
                                                                          s
                                                                            .video
                                                                            .name}</a>
                                                                           </div>
                                                                    
                                                                     {" "}
                                                                        {/* Access video name here */}
                                                                      </div>
                                                                    )
                                                                  ) : (
                                                                    <div className="row">
                                                                      <div className="col-md-1">  <a>
                                                                      {s.video &&
                                                                            s
                                                                              .video
                                                                              .name ?
                                                                         <i
                                                                        className="fa-brands fa-youtube fs-3"
                                                                        style={{
                                                                          color:
                                                                            "rgb(197, 137, 43)",
                                                                          paddingRight:
                                                                            "1%",
                                                                        }}
                                                                      ></i>:""}</a></div> <div className="col-md-11">
                                                                    <a>  {s.video &&
                                                                        s.video
                                                                          .name}</a></div>
                                                                   
                                                                    {" "}
                                                                      {/* Access video name here */}
                                                                    </div>
                                                                  )}

                                                                  {Array.isArray(
                                                                    s.file
                                                                  ) &&
                                                                    s.file.map(
                                                                      (
                                                                        v,
                                                                        index
                                                                      ) => (
                                                                        <div
                                                                          key={
                                                                            index
                                                                          }
                                                                        >
                                                                          <a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          >
                                                                            <i
                                                                              className="fa-regular fa-file-pdf fs-3"
                                                                              style={{
                                                                                color:
                                                                                  "rgb(197, 137, 43)",
                                                                                paddingBottom:
                                                                                  "2%",
                                                                              }}
                                                                            ></i>{" "}
                                                                            {
                                                                              v.name
                                                                            }
                                                                          </a>
                                                                        </div>
                                                                      )
                                                                    )}

                                                                  {Array.isArray(
                                                                    s.url
                                                                  ) &&
                                                                    s.url.map(
                                                                      (
                                                                        v,
                                                                        index
                                                                      ) => (
                                                                        <div
                                                                          key={
                                                                            index
                                                                          }
                                                                        >
                                                                          <div className="row">
                                                                          
                                                                            <div className="col-md-1">
                                                                            <a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          > <i
                                                                              className="fa-solid fa-link fs-3"
                                                                              style={{
                                                                                color:
                                                                                  "rgb(197, 137, 43)",
                                                                                paddingBottom:
                                                                                  "2%",
                                                                              }}
                                                                            ></i> </a></div>
                                                                            <div className="col-md-11" style={{float:'left'}}><a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          >
                                                                            {
                                                                              v.name
                                                                            } </a></div>
                                                                         </div>
                                                                        </div>
                                                                      )
                                                                    )}
                                                                </p>
                                                              </Accordion.Body>
                                                            </Accordion.Item>
                                                          </Accordion>
                                                        </Accordion.Body>
                                                      )
                                                    )}
                                                </Accordion.Body>
                                                {/* <Accordion.Header>
                                 <div
                                   className="row"
                                   style={{
                                     display: "flex",
                                     width: "100%",
                                   }}
                                 >
                                   <div
                                     className="col"
                                     style={{ float: "left" }}
                                   >
                                     {" "}
                                     {p.section.name ? p.section.name : ""}
                                   </div>
                                 </div>
                               </Accordion.Header> */}
                                              </Accordion.Item>
                                            </Accordion>:<div style={{display:'none'}}></div>}
                                            {/* {p.file.name}  */}
                                          </span>
                                          {/* <a href={p.file.url} target='_blank'><i class="fa-regular fa-file-lines"></i></a> */}
                                          <br />
                                          {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${p.video.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                        </Accordion.Body>
                                      ) : (
                                        <div style={{ display: "none" }}></div>
                                      )
                                    )}
                                </Accordion.Body>{" "}
                              </Accordion.Item>{" "}
                            </Accordion>
                          ))}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </>
                  {/* <Player
                         ref={playerRef}
                         autoPlay={false}
                         src='https://rr4---sn-hpazene7.c.drive.google.com/videoplayback?expire=1683131998&ei=HlZSZKOlIpbkhgblm5mQDA&ip=41.237.130.74&cp=QVRNVUJfUFlXSVhPOjFBQ2x6eXdTQjV4cF9la2RLaGxzOC1TTzdOci1JUnhHT1FYdHUwMWJyS0w&id=0660987d27d29b4d&itag=22&source=webdrive&requiressl=yes&mh=KB&mm=32&mn=sn-hpazene7&ms=su&mv=m&mvi=4&pl=22&ttl=transient&susc=dr&driveid=1r06zFr9scYTRQ7P1MpjKFoPg3GCZ0Ewc&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=59.303&lmt=1649069639380528&mt=1683117184&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAJm2kdABCnkg5Xcj6bnopxgjzqvSWBzj_-T_5P2rF51uAiAh7t8_RwFgUCKzrze5GAq21hBG8RRhrsPH4lqo_dUVbQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgfnKI9IgED4YoMmAIiMVvOxnj_9VMw7mKBObdSly6IMsCIQDT24bKiDFkfnbiXD8O5ld8e5UZkcge6hv88SL2zQMygg==&cpn=R1Akqp6VUP6TQHrt&c=WEB_EMBEDDED_PLAYER&cver=1.20230430.00.00'
                         width="100%"
                         height="100%"
                         controlBarClassName="my-custom-class"
                         playbackRate={0.5}
                         onPlay={() => {
                           const currentTime =
                             playerRef.current.getState().player.currentTime;
                           sessionStorage.setItem("progress", currentTime);
                           onButtonClickHandler();
                         }}
                         onPause={() => {
                           const currentTime =
                             playerRef.current.getState().player.currentTime;
                           sessionStorage.setItem("progress", currentTime);
                         }}
                         onEnded={async () => {
                           if (showLessons.viewed != showLessons.duration) {
                             const currentTime =
                               playerRef.current.getState().player.currentTime;

                             let response = await axios.post(
                               "https://student-system.herokuapp.com/read_lesson/" +
                                 real_id +
                                 "/" +
                                 sessionStorage.getItem("user_id"),
                               { duration: currentTime }
                             );
                           }
                         }}
                       >
                         <BigPlayButton position="center" />

                         <ControlBar autoHide={false} className="my-class">
                           <ReplayControl seconds={10} order={2} />
                           <ForwardControl seconds={10} order={3} />
                           <PlaybackRateMenuButton
                             rates={[2,1.75, 1.5, 1, 0.75, 0.5]}
                           />
                         </ControlBar>
                       </Player> */}
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    {singleSheetClassRoom.length > 0 ? (
                      <h3
                        style={{
                          color: "#c5892b",
                          fontSize: "20px",
                          fontStyle: "italic",
                          paddingTop: "5%",
                        }}
                      >
                        Classroom's Sheets
                      </h3>
                    ) : (
                      ""
                    )}

                    <section>
                      <div class="classes-section">
                        <div class="classes-sec">
                          <div class="row">
                          <Carousel
  responsive={{
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
                              {singleSheetClassRoom.map((item) => (
                                <SwiperSlide>
                                  <div
                                    className="classes-col p-3"
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
                                          height: "50vh",
                                          width: "100%",
                                          objectFit: "cover",
                                        }}
                                      />

                                      <a
                                        onClick={() => NavSheet(item._id)}
                                        title=""
                                        className="crt-btn"
                                        style={{
                                          position: "absolute",
                                          cursor: "pointer",
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
                                        style={{ marginBottom: "13px" }}
                                      >
                                        <div className="col-md-8">
                                          <span style={{ color: "#c5892b" }}>
                                            {item.description}
                                          </span>
                                        </div>
                                        <div
                                          className="col-md-4"
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
                                            {item.subject
                                              ? item.subject.name
                                              : "verena"}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="d-flex flex-wrap align-items-center">
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
                                            onClick={() =>
                                              navEachTeacher(
                                                item.instructor._id
                                              )
                                            }
                                            title=""
                                            style={{
                                              textDecoration: "none",
                                              display: "inline-block",
                                              color: "#575757",
                                              fontSize: "14.23px",
                                              paddingLeft: "7px",
                                              fontWeight: "600",
                                            }}
                                          >
                                            {item.instructor
                                              ? item.instructor.name
                                              : ""}
                                          </a>
                                        </div>
                                        <strong className="price">
                                          {item.price} EGP{" "}
                                        </strong>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Carousel>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="row">
              <div class="col-xl-8 col-lg-8">
                <div class="class-single-content">
                  <h2>{singleClass.name}</h2>
                  {/* <ul class="meta-box">
                 <li>
                   <Link to="/" style={{ textDecoration: "none" }} title="">
                     Home
                   </Link>
                 </li>
                 <li>
                   <span>Classes</span>
                 </li>
               </ul> */}
                  <div class="class-gallery">
                    <div class="class-gallery-img">
                      <a
                        href=""
                        title=""
                        class="html5lightbox"
                        data-group="set1"
                      >
                        {/* <img src={singleClass.img} alt="" style={{borderRadius:'20px'}} /> */}
                      </a>
                    </div>
                  </div>
                  <p style={{ fontSize: "20px" }}>{singleClass.description} </p>
                </div>
                <div className="classLectureContent">
                  <>
                    <Accordion defaultActiveKey="0" style={{ marginTop: "4%" }}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header
                        // onClick={() => {
                        //   console.log(omarImage);
                        //   setOmarImage(p);
                        // }}
                        >
                          <i
                            class="fa-brands fa-youtube"
                            style={{ marginRight: "2px" }}
                          ></i>{" "}
                          Your Lectures
                        </Accordion.Header>
                        <Accordion.Body>
                          {Object.keys(lecture).map((l, index) => (
                            <Accordion style={{ marginBottom: "1%" }}>
                              {" "}
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                  <div
                                    key={index}
                                    className="row"
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                    }}
                                  >
                                    <div
                                      className="col"
                                      style={{ float: "left" }}
                                    >
                                      {" "}
                                      {l ? l : ""}
                                    </div>
                                  </div>{" "}
                                </Accordion.Header>
                                <Accordion.Body>
                                  {lecture[l]
                                    .sort((a, b) => a.order - b.order)
                                    .map((p, index) =>
                                      p.active === true ? (
                                        <Accordion.Body
                                          value={p._id}
                                          key={index}
                                          style={{ paddingBottom: "0" }}
                                        >
                                          <span
                                            // onClick={() => nav(p.classRoom)}
                                            style={{
                                              color: "#000",
                                              cursor: "pointer",
                                              fontFamily: "Poppins",
                                              fontSize: "16px",
                                            }}
                                          >
                                            <Accordion>
                                              <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                  <div
                                                    className="row"
                                                    style={{
                                                      display: "flex",
                                                      width: "100%",
                                                    }}
                                                  >
                                                    <div
                                                      className="col"
                                                      style={{ float: "left" }}
                                                    >
                                                      {p.name ? p.name : ""}
                                                    </div>
                                                    <div
                                                      className="col"
                                                      style={{ float: "right" }}
                                                    >
                                                      {renderPrice(p)}
                                                    </div>
                                                  </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                  {p.subLecs &&
                                                    p.subLecs.map(
                                                      (s, index) => (
                                                        <Accordion.Body
                                                          key={index}
                                                          value={s._id}
                                                        >
                                                          <Accordion>
                                                            <Accordion.Item eventKey="3">
                                                              <Accordion.Header>
                                                                {s.name
                                                                  ? s.name
                                                                  : ""}
                                                              </Accordion.Header>
                                                              <Accordion.Body>
                                                                <p
                                                                  style={{
                                                                    fontSize:
                                                                      "18px",
                                                                  }}
                                                                >
                                                                  <br />
                                                                  {p.students
                                                                    .length >
                                                                    0 &&
                                                                  Array.isArray(
                                                                    p.students
                                                                  ) &&
                                                                  p.students.some(
                                                                    (student) =>
                                                                      student.student ===
                                                                        sessionStorage.getItem(
                                                                          "user_id"
                                                                        ) &&
                                                                      new Date(
                                                                        student.dateJoin
                                                                      ).getTime() +
                                                                        p.timeLimit *
                                                                          24 *
                                                                          60 *
                                                                          60 *
                                                                          1000 >=
                                                                        currentDateTime
                                                                  ) ? (
                                                                    p.free ===
                                                                    true ? (
                                                                      isMobile ? (
                                                                        <div className="row"> 
                                                                          <div className="col-md-1"> 
                                                                          <a
                                                                        onClick={() => {
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      >{s.video &&
                                                                        s
                                                                          .video
                                                                          .name ?
                                                                          <i
                                                                            className="fa-brands fa-youtube fs-3"
                                                                            style={{
                                                                              color:
                                                                                "rgb(197, 137, 43)",
                                                                              paddingRight:
                                                                                "1%",
                                                                            }}
                                                                          ></i>:""}</a></div>
                                                                          <div className="col-md-11">
                                                                          <a
                                                                        onClick={() => {
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      >  {s.video &&
                                                                            s
                                                                              .video
                                                                              .name} </a></div>
                                                                      
                                                                         {" "}
                                                                          {/* Access video name here */}
                                                                       </div>
                                                                      ) : (
                                                                        <div className="row">   
                                                                          <div className="col-md-1"> <a
                                                                        onClick={() => {
                                                                          document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      >
                                                                         {s.video &&
                                                                            s
                                                                              .video
                                                                              .name ?
                                                                        <i
                                                                          className="fa-brands fa-youtube fs-3"
                                                                          style={{
                                                                            color:
                                                                              "rgb(197, 137, 43)",
                                                                            paddingRight:
                                                                              "1%",
                                                                          }}
                                                                        ></i>:""}</a></div>
                                                                          <div className="col-md-11"><a
                                                                        onClick={() => {
                                                                          document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      > {s.video &&
                                                                          s
                                                                            .video
                                                                            .name}</a></div>
                                                                     
                                                                       
                                                                       {" "}
                                                                        {/* Access video name here */}
                                                                   </div>
                                                                      )
                                                                      ) 
                                                                    : (
                                                                      <div className="row"> 
                                                                   
                                                                      <div className="col-md-1">   <a>
                                                                      {s.video &&
                                                                            s
                                                                              .video
                                                                              .name ?
                                                                        <i
                                                                        className="fa-brands fa-youtube fs-3"
                                                                        style={{
                                                                          color:
                                                                            "rgb(197, 137, 43)",
                                                                          paddingRight:
                                                                            "1%",
                                                                        }}
                                                                      ></i>:""}</a></div>
                                                                      <div className="col-md-11"> <a>{s.video &&
                                                                        s.video
                                                                          .name}</a></div>
                                                                    
                                                                     {" "}
                                                                      
                                                                      {/* Access video name here */}
                                                                    </div>
                                                                  )):( p.free ===
                                                                    true ? (
                                                                      isMobile ? ( 
                                                                        <div className="row">
                                                                      
                                                                          <div className="col-md-1">   <a
                                                                          onClick={() => {
                                                                            nav(
                                                                              p._id,
                                                                              s._id
                                                                            );
                                                                          }}
                                                                        >
                                                                          {s.video &&
                                                                            s
                                                                              .video
                                                                              .name ?
                                                                          <i
                                                                            className="fa-brands fa-youtube fs-3"
                                                                            style={{
                                                                              color:
                                                                                "rgb(197, 137, 43)",
                                                                              paddingRight:
                                                                                "1%",
                                                                            }}
                                                                          ></i>:""}</a> </div>
                                                                          <div className="col-md-11"><a
                                                                          onClick={() => {
                                                                            nav(
                                                                              p._id,
                                                                              s._id
                                                                            );
                                                                          }}
                                                                        > {s.video &&
                                                                            s
                                                                              .video
                                                                              .name}</a></div>
                                                                        
                                                                         {" "}
                                                                          {/* Access video name here */}
                                                                        </div>
                                                                      ) : (
                                                                        <div className="row">
                                                                        <div className="col-md-1"> <a
                                                                        onClick={() => {
                                                                          document.documentElement.requestFullscreen();
                                                                          nav(
                                                                            p._id,
                                                                            s._id
                                                                          );
                                                                        }}
                                                                      > 
                                                                      {s.video &&
                                                                            s
                                                                              .video
                                                                              .name ?
                                                                      <i
                                                                      className="fa-brands fa-youtube fs-3"
                                                                      style={{
                                                                        color:
                                                                          "rgb(197, 137, 43)",
                                                                        paddingRight:
                                                                          "1%",
                                                                      }}
                                                                    ></i>:""}</a></div><div className="col-md-11">  <a
                                                                    onClick={() => {
                                                                      document.documentElement.requestFullscreen();
                                                                      nav(
                                                                        p._id,
                                                                        s._id
                                                                      );
                                                                    }}
                                                                  > {s.video &&
                                                                      s
                                                                        .video
                                                                        .name}</a></div>
                                                                       
                                                                      {" "}
                                                                        {/* Access video name here */}
                                                                      </div>
                                                                      )
                                                                      ) 
                                                                    : (
                                                                      <div className="row">
                                                                    
                                                                      <div className="col-md-1"><a>
                                                                   {s.video  &&
                                                                        s.video
                                                                          .name?<i
                                                                        className="fa-brands fa-youtube fs-3"
                                                                        style={{
                                                                          color:
                                                                            "rgb(197, 137, 43)",
                                                                          paddingRight:
                                                                            "1%",
                                                                        }}
                                                                      ></i>: ""}</a></div>
                                                                      <div className="col-md-11"><a>
                                                                      {s.video &&
                                                                        s.video
                                                                          .name}{" "}</a></div>
                                                                      
                                                                      {/* Access video name here */}
                                                                    </div>
                                                                  ))}

                                                                  {Array.isArray(
                                                                    s.file
                                                                  ) &&
                                                                    s.file.map(
                                                                      (
                                                                        v,
                                                                        index
                                                                      ) => (
                                                                        <div
                                                                          key={
                                                                            index
                                                                          }
                                                                        >
                                                                          <div className="row">
                                                                          
                                                                            <div className="col-md-1">
                                                                            <a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          >
                                                                          {v.name? <i
                                                                              className="fa-regular fa-file-pdf fs-3"
                                                                              style={{
                                                                                color:
                                                                                  "rgb(197, 137, 43)",
                                                                                paddingBottom:
                                                                                  "2%",
                                                                              }}
                                                                            ></i>:""}</a> </div>
                                                                            <div className="col-md-11">
                                                                            <a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          >
                                                                            {
                                                                              v.name
                                                                            } </a></div>
                                                                         </div>
                                                                        </div>
                                                                      )
                                                                    )}

                                                                  {Array.isArray(
                                                                    s.url
                                                                  ) &&
                                                                    s.url.map(
                                                                      (
                                                                        v,
                                                                        index
                                                                      ) => (
                                                                        <div
                                                                          key={
                                                                            index
                                                                          }
                                                                        >
                                                                          <div className="row">
                                                                          
                                                                            <div className="col-md-1">
                                                                            <a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          >
                                                                            <i
                                                                              className="fa-solid fa-link fs-3"
                                                                              style={{
                                                                                color:
                                                                                  "rgb(197, 137, 43)",
                                                                                paddingBottom:
                                                                                  "2%",
                                                                              }}
                                                                            ></i> </a></div>
                                                                         <div className="col-md-11">  <a
                                                                            style={{
                                                                              textDecoration:
                                                                                "none",
                                                                              color:
                                                                                "#000",
                                                                            }}
                                                                            onClick={() => {
                                                                              if (
                                                                                p.free ===
                                                                                true
                                                                              ) {
                                                                                window.open(
                                                                                  v.url
                                                                                );
                                                                              } else {
                                                                                const user_id =
                                                                                  sessionStorage.getItem(
                                                                                    "user_id"
                                                                                  );
                                                                                if (
                                                                                  Array.isArray(
                                                                                    p.students
                                                                                  ) &&
                                                                                  p.students.some(
                                                                                    (
                                                                                      student
                                                                                    ) =>
                                                                                      student.student ===
                                                                                      user_id
                                                                                  )
                                                                                ) {
                                                                                  window.open(
                                                                                    v.url
                                                                                  );
                                                                                }
                                                                              }
                                                                            }}
                                                                          > {
                                                                              v.name
                                                                            } </a></div>
                                                                         </div>
                                                                        </div>
                                                                      )
                                                                    )}
                                                                </p>
                                                              </Accordion.Body>
                                                            </Accordion.Item>
                                                          </Accordion>
                                                        </Accordion.Body>
                                                      )
                                                    )}
                                                </Accordion.Body>
                                                {/* <Accordion.Header>
                                 <div
                                   className="row"
                                   style={{
                                     display: "flex",
                                     width: "100%",
                                   }}
                                 >
                                   <div
                                     className="col"
                                     style={{ float: "left" }}
                                   >
                                     {" "}
                                     {p.section.name ? p.section.name : ""}
                                   </div>
                                 </div>
                               </Accordion.Header> */}
                                              </Accordion.Item>
                                            </Accordion>{" "}
                                            {/* {p.file.name}  */}
                                          </span>
                                          {/* <a href={p.file.url} target='_blank'><i class="fa-regular fa-file-lines"></i></a> */}
                                          <br />
                                          {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${p.video.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                        </Accordion.Body>
                                      ) : (
                                        <div style={{ display: "none" }}></div>
                                      )
                                    )}
                                </Accordion.Body>{" "}
                              </Accordion.Item>{" "}
                            </Accordion>
                          ))}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </>
                  {/* <Player
                         ref={playerRef}
                         autoPlay={false}
                         src='https://rr4---sn-hpazene7.c.drive.google.com/videoplayback?expire=1683131998&ei=HlZSZKOlIpbkhgblm5mQDA&ip=41.237.130.74&cp=QVRNVUJfUFlXSVhPOjFBQ2x6eXdTQjV4cF9la2RLaGxzOC1TTzdOci1JUnhHT1FYdHUwMWJyS0w&id=0660987d27d29b4d&itag=22&source=webdrive&requiressl=yes&mh=KB&mm=32&mn=sn-hpazene7&ms=su&mv=m&mvi=4&pl=22&ttl=transient&susc=dr&driveid=1r06zFr9scYTRQ7P1MpjKFoPg3GCZ0Ewc&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=59.303&lmt=1649069639380528&mt=1683117184&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAJm2kdABCnkg5Xcj6bnopxgjzqvSWBzj_-T_5P2rF51uAiAh7t8_RwFgUCKzrze5GAq21hBG8RRhrsPH4lqo_dUVbQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgfnKI9IgED4YoMmAIiMVvOxnj_9VMw7mKBObdSly6IMsCIQDT24bKiDFkfnbiXD8O5ld8e5UZkcge6hv88SL2zQMygg==&cpn=R1Akqp6VUP6TQHrt&c=WEB_EMBEDDED_PLAYER&cver=1.20230430.00.00'
                         width="100%"
                         height="100%"
                         controlBarClassName="my-custom-class"
                         playbackRate={0.5}
                         onPlay={() => {
                           const currentTime =
                             playerRef.current.getState().player.currentTime;
                           sessionStorage.setItem("progress", currentTime);
                           onButtonClickHandler();
                         }}
                         onPause={() => {
                           const currentTime =
                             playerRef.current.getState().player.currentTime;
                           sessionStorage.setItem("progress", currentTime);
                         }}
                         onEnded={async () => {
                           if (showLessons.viewed != showLessons.duration) {
                             const currentTime =
                               playerRef.current.getState().player.currentTime;

                             let response = await axios.post(
                               "https://student-system.herokuapp.com/read_lesson/" +
                                 real_id +
                                 "/" +
                                 sessionStorage.getItem("user_id"),
                               { duration: currentTime }
                             );
                           }
                         }}
                       >
                         <BigPlayButton position="center" />

                         <ControlBar autoHide={false} className="my-class">
                           <ReplayControl seconds={10} order={2} />
                           <ForwardControl seconds={10} order={3} />
                           <PlaybackRateMenuButton
                             rates={[2,1.75, 1.5, 1, 0.75, 0.5]}
                           />
                         </ControlBar>
                       </Player> */}
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    {singleSheetClassRoom.length > 0 ? (
                      <h3
                        style={{
                          color: "#c5892b",
                          fontSize: "20px",
                          fontStyle: "italic",
                          paddingTop: "5%",
                        }}
                      >
                        Classroom's Sheets
                      </h3>
                    ) : (
                      ""
                    )}

                    <section>
                      <div class="classes-section">
                        <div class="classes-sec">
                          <div class="row">
                          <Carousel
  responsive={{
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
                             {singleSheetClassRoom.map((item) => (
                                <SwiperSlide>
                                  <div
                                    className="classes-col p-3"
                                    key={item._id}
                                    // style={{ width: "40%" }}
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
                                          height: "50vh",
                                          width: "100%",
                                          objectFit: "cover",
                                        }}
                                      />

                                      <a
                                        onClick={() => NavSheet(item._id)}
                                        title=""
                                        className="crt-btn"
                                        style={{
                                          position: "absolute",
                                          cursor: "pointer",
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
                                        style={{ marginBottom: "13px" }}
                                      >
                                        <div className="col-md-8">
                                          <span style={{ color: "#c5892b" }}>
                                            {item.description}
                                          </span>
                                        </div>
                                        <div
                                          className="col-md-4"
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
                                            {item.subject
                                              ? item.subject.name
                                              : "verena"}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="d-flex flex-wrap align-items-center">
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
                                            onClick={() =>
                                              navEachTeacher(
                                                item.instructor._id
                                              )
                                            }
                                            title=""
                                            style={{
                                              textDecoration: "none",
                                              display: "inline-block",
                                              color: "#575757",
                                              fontSize: "14.23px",
                                              paddingLeft: "7px",
                                              fontWeight: "600",
                                            }}
                                          >
                                            {item.instructor
                                              ? item.instructor.name
                                              : ""}
                                          </a>
                                        </div>
                                        <strong className="price">
                                          {item.price} EGP{" "}
                                        </strong>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Carousel>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4">
                <div class="sidebar class-sidebar">
                  <div class="widget widget-information">
                    <h3 class="widget-title">Class Information</h3>
                    <ul style={{ paddingLeft: "0" }}>
                      <li>
                        <ul
                          style={{
                            borderBottom: "none",
                            padding: "0",
                            width: "100%",
                          }}
                        >
                          {singleClass.offLineData &&
                            singleClass.offLineData.map((date) => {
                              const dateTime = new Date(
                                `2023-05-15T${date.time}:00`
                              );
                              const hours = dateTime.getHours();
                              const minutes = dateTime.getMinutes();
                              const hours12 = hours % 12 || 12;
                              const amOrPm = hours < 12 ? "AM" : "PM";
                              const formattedTime = `${hours12}:${
                                minutes < 10 ? "0" : ""
                              }${minutes} ${amOrPm}`;

                              return (
                                <li
                                  key={date._id}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  {singleClass.offline === true ? (
                                    <h4
                                      style={{
                                        marginRight: "0",
                                        marginBottom: "0",
                                      }}
                                    >
                                      <ul
                                        style={{
                                          borderBottom: "none",
                                          paddingLeft: "0",
                                          paddingBottom: "0",
                                        }}
                                      >
                                        <li>{date.day}</li>
                                      </ul>
                                    </h4>
                                  ) : (
                                    ""
                                  )}
                                  <span>
                                    {formattedTime}{" "}
                                    <a href={date.location} target="_blank">
                                      <img src={location} alt="" />
                                    </a>
                                  </span>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li>
                        <h4>Grade</h4>
                        <span>{studyYear}</span>
                      </li>

                      {Array.isArray(singleClass.students) &&
                      singleClass.openBuy === true &&
                      singleClass.students.length > 0 ? (
                        singleClass.students.map((student) => {
                          const user_id = sessionStorage.getItem("user_id");
                          if (student.student === user_id) {
                            return null; // Don't render price
                          } else {
                            return (
                              <li key={student.student}>
                                <h4>Price</h4>
                                <span>{singleClass.price} EGP</span>
                              </li>
                            );
                          }
                        })
                      ) : singleClass.openBuy === true ? (
                        <li>
                          <h4>Price</h4>
                          <span>{singleClass.price} EGP</span>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                    <div class="tech-info">
                      <div class="tech-tble">
                        <img
                          src={imageinstructor ? imageinstructor : verena}
                          alt=""
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                          }}
                        />
                        <div class="tch-info">
                          <a
                            href=""
                            onClick={() => navEachTeacher(subjectinstructorID)}
                            style={{ textDecoration: "none" }}
                          >
                            <h3>{subjectinstructor}</h3>
                          </a>
                          <span style={{ color: "rgb(197, 137, 43)" }}>
                            {subjectName} Instructor
                          </span>
                        </div>
                      </div>
                      {/* {singleClass.students?'':    */}
                      {sessionStorage.getItem("loggedIn", true) ? (
                        singleClass.openBuy === false  ? (
                          ""
                        ) : singleClass.openBuy === false ? (
                          <a
                            onClick={() => followInstructor()}
                            style={{
                              textDecoration: "none",
                              marginBottom: "2%",
                              width: "100%",
                            }}
                            title=""
                            class="btn-default"
                          >
                            {singleClass.studentsEnrolled.length > 0
                              ? "UnEnroll"
                              : "Enroll Now"}
                            {/* {enroll.message=== "UnFollow"?'UnEnroll':'Enroll Now'} */}
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        ) : singleClass.openBuy === true? (
                          <a
                            onClick={() => followInstructor()}
                            style={{
                              textDecoration: "none",
                              marginBottom: "2%",
                              width: "100%",
                            }}
                            title=""
                            class="btn-default"
                          >
                            {singleClass.studentsEnrolled.length > 0
                              ? "UnEnroll"
                              : "Enroll Now"}
                            {/* {enroll.message=== "UnFollow"?'UnEnroll':'Enroll Now'} */}
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        ) : (
                          ""
                        )
                      ) : singleClass.openBuy === false  ? (
                        ""
                      ) : singleClass.openBuy === false ? (
                        <Link
                          to="/registerR"
                          style={{
                            textDecoration: "none",
                            marginBottom: "2%",
                            width: "100%",
                          }}
                          title=""
                          class="btn-default"
                        >
                          Enroll Now <i class="fa fa-long-arrow-alt-right"></i>
                        </Link>
                      ) : singleClass.openBuy === true ? (
                        <Link
                          to="/registerR"
                          style={{
                            textDecoration: "none",
                            marginBottom: "2%",
                            width: "100%",
                          }}
                          title=""
                          class="btn-default"
                        >
                          Enroll Now <i class="fa fa-long-arrow-alt-right"></i>
                        </Link>
                      ) : (
                        "hello"
                      )}
                      {/* singleClass.students?'': */}
                      {sessionStorage.getItem("loggedIn", true) ? (
                        singleClass.free === true ? (
                          ""
                        ) : singleClass.openBuy === false &&
                          singleClass.free === false ? (
                          ""
                        ) : singleClass.openBuy === false &&
                          singleClass.free === true ? (
                          ""
                        ) : singleClass.openBuy === true &&
                          singleClass.free === false &&
                          singleClass.students.length > 0 &&
                          Array.isArray(singleClass.students) &&
                          singleClass.students.some(
                            (student) =>
                              student.student ===
                                sessionStorage.getItem("user_id") &&
                              new Date(student.dateJoin).getTime() +
                                singleClass.durationExp * 24 * 60 * 60 * 1000 >=
                                currentDateTime
                          ) ? (
                          ""
                        ) : (
                          <Link
                            onClick={toggleOpen1}
                            style={{ textDecoration: "none", width: "100%" }}
                            title=""
                            class="btn-default"
                          >
                            {/* {console.log(singleClass)} */}
                            Buy Class <i class="fa fa-long-arrow-alt-right"></i>
                          </Link>
                        )
                      ) : singleClass.free === true ? (
                        ""
                      ) : singleClass.openBuy === false &&
                        singleClass.free === false ? (
                        ""
                      ) : singleClass.openBuy === false &&
                        singleClass.free === true ? (
                        ""
                      ) : singleClass.openBuy === true &&
                        singleClass.free === false ? (
                        <Link
                          to="/registerR"
                          style={{ textDecoration: "none", width: "100%" }}
                          title=""
                          class="btn-default"
                        >
                          Buy Class <i class="fa fa-long-arrow-alt-right"></i>
                        </Link>
                      ) : (
                        ""
                      )}
                      {isOpen1 && (
                        <div className="overlaythere">
                          <div className="modalhere">
                            <button
                              className="close-button"
                              onClick={toggleOpen1}
                            >
                              <i className="fa-regular fa-circle-xmark fs-3"></i>
                            </button>
                            {showRechargeContent ? (
                              <div>
                                <p className="p-button">Recharge wallet</p>

                                <img
                                  className={`image-button1 ${
                                    selectedOption === "visa" ? "selected" : ""
                                  }`}
                                  src={visa}
                                  alt=""
                                  style={{ width: "40%",left:'10%',cursor:'pointer' }}
                                  onClick={() =>
                                    handlePaymentOptionClick("visa")
                                  }
                                />
                                <img
                                  className={`image-button2 ${
                                    selectedOption === "code" ? "selected" : ""
                                  }`}
                                  src={codeimage}
                                  alt=""
                                  style={{ width: "40%" ,cursor:'pointer'}}
                                  onClick={() =>
                                    handlePaymentOptionClick("code")
                                  }
                                />
                                {/* Add the content for recharging the wallet here */}
                                <p className="p-buttonsec2">
                                  Charge wallet with your Credit Card,
                                 You can also use a
                                  recharge code to add money to your wallet.
                                </p>
                                <button
                                  className="close-button-charge btn-defaultEx"
                                  onClick={() => setShowRechargeContent(false)}
                                >
                                  Back to Wallet
                                </button>
                                {showCodeInput && (
 <div
 style={{
   position: "fixed",
   top: "30%",
   right: "25%",
   bottom: "0",
   width: "50%",
   height: "45%",
   backgroundColor: "#3c719a",
   display: "flex",
   justifyContent: "flex-end",
   alignItems: " center",
   zIndex: "99999999999",
   borderRadius: "20px",
 }}
>
 <div
   style={{
     backgroundColor: "#3c719a",
     width: "97%",
     height: "42vh",
     zIndex: "99999999999",
     position: "absolute",
     top: "0",
     borderRadius: "20px",
   }}
 >
   <button
     className="close-button"
     onClick={toggleOpen}
   >
     <i className="fa-regular fa-circle-xmark fs-3"></i>
   </button>
   <p className="p-buttonThird">
     Enter recharge code
   </p>
   <img
     className={`image-buttonn `}
     src={codeimage}
     alt=""
     style={{ width: "32%",left:'29%' }}
   />
   <input
     style={{
       
       height: "50px",
       color: "#575757",
       fontSize: "14.23px",
       padding: "0 20px",
       border: "2px solid #f6f4f4",
       top: "58%",
       left: "25%",
       position: "absolute",
       borderRadius: "30px",
     }}
     placeholder="Enter Code"
     type="text"
     value={code}
     onChange={(e) => setCode(e.target.value)}
   />
   {/* <input
   type="text"
   value={code}
   onChange={(e) => setCode(e.target.value)}
 /> */}

   <button
     className="close-button-chargee2 btn-defaultEx2"
     onClick={handleSendButtonClick}
   >
     Send
   </button>
   {/* <button onClick={handleSendButtonClick}>
   Send
 </button> */}
 </div>{" "}
</div>


                                  // <div>
                                  //   <p className="p-button">
                                  //     Enter recharge code
                                  //   </p>

                                  //   <input
                                  //     type="text"
                                  //     value={code}
                                  //     onChange={(e) => setCode(e.target.value)}
                                  //   />
                                  //   <button onClick={handleSendButtonClick}>
                                  //     Send
                                  //   </button>
                                  // </div>
                                )}
                                {!showCodeInput && (
                                  <button
                                    className="close-button-charge2 btn-defaultEx2"
                                    onClick={handleNextButtonClick}
                                  >
                                    Next
                                  </button>
                                )}
                                {/* <button className="close-button-charge2 btn-defaultEx2" onClick={handleNextButtonClick}>Next</button> */}
                              </div>
                            ) : singleClass.paymentMethod === "Code" ? (
                              <div>
                                <p className="p-button">Write your Code</p>
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "25%",
                                    left: "30%",
                                    width: "40%",
                                  }}
                                  className="image-button"
                                  src={codeimage}
                                  alt=""
                                />
                                <input
                                  className="form-control"
                                  placeholder="Enter code"
                                  style={{
                                    position: "absolute",
                                    top: "59%",
                                    left: "28%",
                                  }}
                                  type="text"
                                  value={code}
                                  onChange={(e) => setCode(e.target.value)}
                                />
                                <button
                                  className="close-button-charge btn-defaultEx"
                                  onClick={handleSendButtonClick2}
                                  style={{
                                    position: "absolute",
                                    top: "80%",
                                    left: "44%",
                                  }}
                                >
                                  Send
                                </button>
                              </div>
                            ) : singleClass.paymentMethod === "Wallet" ? (
                              <div>
                                <p className="p-button"> Wallet Information</p>
                                <img
                                  className="image-button"
                                  src={walletStatus}
                                  style={{ width: "30%",left:'35%' }}
                                  alt=""
                                />
                                <p className="p-buttonsec"  style={{left:'37%'}}>
                                  Your Balance is {profile.wallet} EGP
                                </p>
                                <button
                                  className="close-button-charge btn-defaultEx"
                                  onClick={toggleRechargeContent}
                                  style={{left:'10%'}}
                                >
                                  Charge Wallet
                                </button>
                                <button
                                  style={{
                                    position: "absolute",
                                    top: "80%",
                                    left: "65%",
                                  }}
                                  className="close-button-charge btn-defaultEx"
                                  onClick={handleSendButtonClickBoth}
                                >
                                  Pay now
                                </button>
                              </div>
                            ) : singleClass.paymentMethod === "Both" ? (
                              <div>
                                <p className="p-button">
                                  Which way do you want to get the classroom?
                                </p>
                                {/**Hello */}
                                <img
                                  className={`image-button2 ${
                                    selectedOption === "code" ? "selected" : ""
                                  }`}
                                  src={codeimage}
                                  alt=""
                                  style={{ width: "40%",cursor:'pointer' }}
                                  onClick={() =>
                                    handlePaymentOptionClick("code")
                                  }
                                />
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "22%",
                                    left: "10%",
                                    width: "20%",cursor:'pointer'
                                  }}
                                  className={`image-button ${
                                    selectedOption === "wallet"
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handlePaymentOptionClick("wallet")
                                  }
                                  src={walletStatus}
                                  alt=""
                                />
                                {selectedOption === "wallet" && (
                                  <div>
                                    <img
                                      style={{
                                        position: "absolute",
                                        top: "22%",
                                        left: "10%",
                                        width: "20%",
                                      }}
                                      className="image-button"
                                      src={walletStatus}
                                      alt=""
                                    />
                                    <p
                                      className="p-buttonsec"
                                      style={{
                                        position: "absolute",
                                        top: "65%",
                                        left: "10%",
                                      }}
                                    >
                                      Your Balance is {profile.wallet} EGP
                                    </p>
                                    <button
                                      style={{
                                        position: "absolute",
                                        top: "80%",
                                        left: "10%",
                                      }}
                                      className="close-button-charge btn-defaultEx"
                                      onClick={toggleRechargeContent}
                                    >
                                      Charge Wallet
                                    </button>
                                    <button
                                      style={{
                                        position: "absolute",
                                        top: "80%",
                                        left: "65%",
                                      }}
                                      className="close-button-charge btn-defaultEx"
                                      onClick={handleSendButtonClickBoth}
                                    >
                                      Buy Classroom
                                    </button>
                                  </div>
                                )}
                                {selectedOption === "code" && (
                                  <div>
                                    <input
                                      className="form-control"
                                      placeholder="Enter your code"
                                      style={{
                                        position: "absolute",
                                        top: "57%",
                                        left: "25%",
                                      }}
                                      type="text"
                                      value={code}
                                      onChange={(e) => setCode(e.target.value)}
                                    />

                                    <button
                                      style={{
                                        position: "absolute",
                                        top: "80%",
                                        left: "33%",
                                      }}
                                      className="close-button-charge btn-defaultEx"
                                      onClick={handleSendButtonClickBoth}
                                    >
                                      Buy Classroom
                                    </button>
                                  </div>
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
