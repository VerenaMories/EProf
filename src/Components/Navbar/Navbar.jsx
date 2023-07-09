import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../images/Branding book WIDE.png";
import defImage from "../images/PngItem_1503945.png";
import France from "../images/france-flag.png";
import walletStatus from "../images/170848ebd6.png";
import visa from "../images/visa.png";
import codeimage from "../images/code.png";
import "./Navbar.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate  } from 'react-router-dom';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import wallet from "../images/wallet.png";
export default function Navbar({ ar, setAr, userData, logOut  }) {

  function verena(){
  document.querySelector(".navbar-toggler").click();
 }
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setprofile] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const [showRechargeContent, setShowRechargeContent] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [notifications, setNotification] = useState({ buysNotifications: [], enrolledNotifications: [] });
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);

  const [code, setCode] = useState("");
  const [seen, setSeen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');

  };

  const toggleOpen = () => {
    if (isOpen) {
      // Reset state variables when closing the modal
      setShowRechargeContent(false);
      setShowCodeInput(false);
      setSelectedOption("");
    }
    setIsOpen(!isOpen);
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
      setShowSendSection(true);

     
    } else {
      // Render default content if no option is selected
    }
  };
  

  useEffect(() => {
    const token = sessionStorage.getItem('token'); // retrieve token value from session storage
axios.get('https://eprof-zu1o.onrender.com/classRoom/notification', {
  headers: {
    'Authorization': ` ${token}` // set Authorization header with token value
  }
})
.then(response => {
  // console.log(response.data);
  setNotification(response.data)

})
.catch(error => {
  // console.log(error);
});
   
  }, []);
  const toggleNotificationCenter = () => {
    setShowNotificationCenter(!showNotificationCenter);
    setSeen(false);
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
        swal("Good job!", "Code valid successful!", "success").then(() => {
          window.location.reload()
           });

        // handle success response
      })
      .catch((error) => {
        // console.log(error);
        swal("Oops!", "Please try again!", "error").then(() => {
          window.location.reload()
           });

        // handle error response
      });
  };
  const [showSendSection, setShowSendSection] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token"); // retrieve token value from session storage
    axios
      .get("https://eprof-zu1o.onrender.com/user/me", {
        headers: {
          Authorization: ` ${token}`, // set Authorization header with token value
        },
      })
      .then((response) => {
        // console.log(response.data);
        setprofile(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  const flag = sessionStorage.getItem("loggedIn");
  // console.log(sessionStorage.getItem("image"));
  return (
    <>
    
      <nav
        class="navbar navbar-expand-lg "
        style={{ backgroundColor: "rgba(60, 113, 154, 0.4)" }}
      >
        <div className="container-fluid navigation-bar">
          {isMobile? <Link to='/' className="navbar-brand" style={{ width: "22%" }}>
            <img src={logo} alt="" style={{ width: "100%" }} />
          </Link>: <Link  to='/' className="navbar-brand" style={{ width: "15%" }}>
            <img src={logo} alt="" style={{ width: "48%" }} />
          </Link>}
         
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ width: "100%" }}
          >
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                paddingRight: "2%",
              }}
            >
              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
              >
                <span className="footerlikeNav">
                  <Link
                    class="nav-link active"
                    to="/"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena}  >
                    Home
                  </Link>
                </span>
              </li>

              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
              >
                {" "}
                <span className="footerlikeNav">
                  <Link
                    to="/classes"
                    class="nav-link"
                    href="classes.html"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena}  >
                    Classes
                  </Link>
                </span>
              </li>
              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
              >
                <span className="footerlikeNav">
                  <Link
                    to="/teachers"
                    class="nav-link"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena}>
                    Instructors
                  </Link>
                </span>
                {/* <ul>
										<li><a class="nav-link" href="teacher-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Teacher Single</a></li>
									</ul> */}
              </li>
              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
                >
                <span className="footerlikeNav">
                  <Link
                    to="/sheets"
                    class="nav-link"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena}  >
                    Sheets
                  </Link>
                </span>
                {/* <ul>
										<li><a class="nav-link" href="teacher-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Teacher Single</a></li>
									</ul> */}
              </li>
              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
             >
                <span className="footerlikeNav">
                  <Link
                    class="nav-link"
                    to="/blog"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena}  >
                    Blogs
                  </Link>
                </span>
              </li>
              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
              >
                <span className="footerlikeNav">
                  <Link
                    class="nav-link"
                    to="/about"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena} >
                    About Us
                  </Link>
                </span>
              </li>

              {/* <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "17px",
                marginRight: '3%'

              }}><span className='footerlikeNav'><Link class="nav-link" to='/terms' title="" style={{ textDecoration: 'none', color: '#fff' }}>Terms & Conditions</Link></span></li> */}
              <li
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginRight: "3%",
                }}
               >
                <span className="footerlikeNav">
                  <Link
                    class="nav-link"
                    to="/contact"
                    title=""
                    style={{ textDecoration: "none", color: "#fff" }}
                    onClick={verena}  >
                    Contact Us
                  </Link>
                </span>
              </li>
            
            </ul>
  
  {isMobile?
   <ul
   style={{
     // paddingRight: "2rem",
     paddingLeft: "0",
     marginBottom: "0px",
     display: "flex",
     justifyContent: "space-evenly",
     alignItems: "center",
   }}
 >
   {flag?(
                <div>
  <li>
        <a  onClick={toggleNotificationCenter}>
          <i className="fa-solid fa-bell " style={{ color: 'rgb(60, 113, 154)', position: 'relative' ,cursor:'pointer',fontSize: "1.5rem",paddingTop:"11px"}}>
          {(notifications.buysNotifications.length > 0 || notifications.enrolledNotifications.length > 0) && seen ? (
        <span
          style={{
            position: 'absolute',
            top: '4x',
            right: '-4px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgb(197, 137, 43)',
            zIndex: '1'
          }}
        ></span>
      ) : null}
          </i>
        </a>
      </li>
 {showNotificationCenter && (
  <div className="notification-center">
    {/* <div className="row"> */}
      {/* <h2>Buy Notifications:</h2> */}
      <ul>
        {notifications.buysNotifications.map(notification => (
          <div className="row">
       {notification.notification ?     <h2>Buy Notifications:</h2>: null}
          <ul>
          <li key={notification._id}>
          {notification.notification ? <h3>{notification.name}</h3>: null}
            <p>{notification.notification}</p>
          </li> </ul></div>
        ))}
      </ul>
      {/* <h2>Enrolled Notifications:</h2>
      <ul> */}
        {notifications.enrolledNotifications.map(notification => (
          <div className="row">
          {notification.notification ?   <h2>Buy Notifications:</h2>: null}
          <ul>
         <li key={notification._id}>
         {notification.notification ?   <h3>{notification.name}</h3>: null}
            <p>{notification.notification}</p>
          </li>   </ul></div>
        ))}
   
    {/* </div> */}
  </div>
)}</div>
              ):("")}
     {flag ? (
     
     <li >
       {" "}
       <div style={{ textAlign: "center" }}>
         <div style={{ maxWidth: "9vw" }}>
           <div className="Apphere">
             <img
               style={{ width: "100%" }}
               src={wallet}
               alt="Wallet"
               onClick={toggleOpen}
             />
           
             {isOpen && (
         <div className="overlaythere22">
                 <div className="modalhere">
                   <button
                     className="close-button"
                     onClick={toggleOpen}
                   >
                     <i className="fa-regular fa-circle-xmark fs-3"></i>
                   </button>
                   {showRechargeContent ? (
                     <div>
                       <p className="p-button">Recharge wallet</p>

                       <img
                         className={`image-button111 ${
                           selectedOption === "visa"
                             ? "selected"
                             : ""
                         }`}
                         src={visa}
                         alt=""
                         style={{ width: "53%" ,cursor:'pointer'}}
                         onClick={() =>
                           handlePaymentOptionClick("visa")
                         }
                       />
                       <img
                         className={`image-button2 ${
                           selectedOption === "code"
                             ? "selected"
                             : ""
                         }`}
                         src={codeimage}
                         alt=""
                         style={{ width: "45%" ,cursor:'pointer'}}
                         onClick={() =>
                           handlePaymentOptionClick("code")
                         }
                       />
                       {/* Add the content for recharging the wallet here */}
                       <p className="p-buttonsec2">
                         Charge wallet with recharge code or Credit Card,
                         There's a Tax on the amount, will be shown
                         in the step at the end.
                       </p>
                       <button
                         className="close-button-charge222 btn-defaultEx"
                         onClick={() =>
                           setShowRechargeContent(false)
                         }
                       >
                         Back to Wallet
                       </button>
                       {showSendSection  && (
                      <div style={{position: 'fixed',
                       top: '30%',
                       right: '4%',
                       bottom: '0',
                       width: '90%',
                       height: '45%',
                       backgroundColor: '#3c719a',
                       display: 'flex',
                       justifyContent: 'flex-end',
                       alignItems:' center',
                       zIndex: '99999999999',
                       borderRadius: '20px'}}>
                      <div style={{backgroundColor:'#3c719a', width:'97%', height:'42vh', zIndex:'99999999999', position:'absolute',top:'0',borderRadius:'20px'}}>
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
                         style={{ width: "72%" ,cursor:'pointer'}}
                        
                       />
                           <input
                           style={{width: '69%',
                             height: '50px',
                             color: '#575757',
                             fontSize: '14.23px',
                             padding: '0 20px',
                             border: '2px solid #f6f4f4',
                             top: '58%',
                             left:'13%',
                             position: 'absolute',
                             borderRadius: '30px'}}
                             type="text"
                             value={code}
                             onChange={(e) =>
                               setCode(e.target.value)
                             }
                             placeholder="Enter Your Code"
                           />
                           <button className="close-button-chargee2 btn-defaultEx2" onClick={handleSendButtonClick}>
                             Send
                           </button>
                         </div>
                         </div>   
                       )}
                       {!showCodeInput &&  !showSendSection &&(
                         <button
                           className="close-button-charge2 btn-defaultEx2"
                           onClick={handleNextButtonClick}
                         >
                           Next
                         </button>
                       )}
                       {/* <button className="close-button-charge2 btn-defaultEx2" onClick={handleNextButtonClick}>Next</button> */}
                     </div>
                   ) : (
                     <div>
                       <p className="p-button">Wallet Information</p>
                       {isMobile?   <img
                         className="image-button23"
                         src={walletStatus}
                         style={{ width:'45%'}}
                         alt=""
                       /> :   <img
                         className="image-button23"
                         src={walletStatus}
                         style={{ width:'23%'}}
                         alt=""
                       />}
                    
                       <p className="p-buttonsec22">
                         Your Balance is {profile.user.wallet?profile.user.wallet:'0'} EGP
                       </p>
                       <button
                         className="close-button-charge22 btn-defaultEx"
                         onClick={toggleRechargeContent}
                       >
                         Charge Wallet
                       </button>
                     </div>
                   )}
                 </div>
               </div>
             )}
           </div>
           {/* <img style={{ width: '50%' }} src={wallet} /> */}
         </div>
       </div>
     </li>
   ) : (
     ""
   )}
   <li >
     {/* <Link to='/profile' style={{ textAlign: "center" }}> */}

     <div style={{ maxWidth: "3vw", borderRadius: "50%" }}>
       {/* <img style={{ borderRadius: "50%", width: '80%' }} src={defImage} /> */}

       <li>
         <div style={{ textAlign: "center" }}>
           {flag ? (
             <Link to="/profile" style={{ textDecoration: "none" }} onClick={verena}>
               <div style={{ width: "50px",height:'50px', borderRadius: "50%",display:'flex',alignItems:'center' }}>
               {sessionStorage.getItem("image") &&
                 sessionStorage.getItem("image") === "undefined" ? (
                   <>
                     <i
                       class="fa-solid fa-user-graduate fs-1"
                       style={{ color: "rgb(197, 137, 43)" }}
                     ></i>
                   </>
                 ) : (
                   <img
                     alt="src"
                     src={sessionStorage.getItem("image")}
                     style={{width:'100%', borderRadius: "50%" }}
                   />
                 )}
               </div>
               {/* {console.log(sessionStorage.getItem("user_image"))} */}
             </Link>
           ) : (
             <Link
               to="/registerR"
               style={{ textDecoration: "none" }}
             >
               <i
                 class="fa-solid fa-user-graduate fs-1"
                 style={{ color: "rgb(197, 137, 43)" }}
               ></i>

            
             </Link>
           )}
         </div>
       </li>

     </div>

   </li>
 
   {flag ? (  <li >
       <div style={{ maxWidth: "10vw", borderRadius: "50%" }}>
         <button
           className="btn "
           onClick={handleLogout}
         >
           <i class="fa-solid fa-arrow-right-from-bracket fs-4" style={{color:'rgb(197, 137, 43)'}}></i>
         </button>
       </div>
     </li>):''}
     <li>
     <div>
      
     </div>
   </li>
 </ul>
  : <ul
              style={{
                // paddingRight: "2rem",
                paddingLeft: "0",
                marginBottom: "0px",
                width: "20%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {flag?(
                <div>
  <li>
        <a  onClick={toggleNotificationCenter}>
          <i className="fa-solid fa-bell " style={{ color: 'rgb(60, 113, 154)', position: 'relative' ,cursor:'pointer',fontSize: "1.5rem",paddingTop:"11px"}}>
          {(notifications.buysNotifications.length > 0 || notifications.enrolledNotifications.length > 0) && seen ? (
        <span
          style={{
            position: 'absolute',
            top: '4px',
            right: '-4px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgb(197, 137, 43)',
            zIndex: '1'
          }}
        ></span>
      ) : null}
          </i>
        </a>
      </li>
 {showNotificationCenter && (
  <div className="notification-center">
    <div className="row">
      <h2>Buy Notifications:</h2>
      <ul>
        {notifications.buysNotifications.map(notification => (
          <li key={notification._id}>
              {notification.notification ? <h3>{notification.name}</h3>: null}
            <p>{notification.notification}</p>
          </li>
        ))}
      </ul>
      <h2>Enrolled Notifications:</h2>
      <ul>
        {notifications.enrolledNotifications.map(notification => (
          <li key={notification._id}>
            {notification.notification ?  <h3>{notification.name}</h3>: null}
            <p>{notification.notification}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}</div>
              ):("")}
                {flag ? (
                <li >
                  {" "}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ maxWidth: "5vw" }}>
                      <div className="Apphere">
                        <img
                          style={{ width: "50%" }}
                          src={wallet}
                          alt="Wallet"
                          onClick={toggleOpen}
                        />
                      
                        {isOpen && (
                    <div className="overlaythere">
                            <div className="modalhere">
                              <button
                                className="close-button"
                                onClick={toggleOpen}
                              >
                                <i className="fa-regular fa-circle-xmark fs-3"></i>
                              </button>
                              {showRechargeContent ? (
                                <div>
                                  <p className="p-button">Recharge wallet</p>

                                  <img
                                    className={`image-button1 ${
                                      selectedOption === "visa"
                                        ? "selected"
                                        : ""
                                    }`}
                                    src={visa}
                                    alt=""
                                    style={{ width: "30%",cursor:'pointer' }}
                                    onClick={() =>
                                      handlePaymentOptionClick("visa")
                                    }
                                  />
                                  <img
                                    className={`image-button2 ${
                                      selectedOption === "code"
                                        ? "selected"
                                        : ""
                                    }`}
                                    src={codeimage}
                                    alt=""
                                    style={{ width: "30%" ,cursor:'pointer'}}
                                    onClick={() =>
                                      handlePaymentOptionClick("code")
                                    }
                                  />
                                  {/* Add the content for recharging the wallet here */}
                                  <p className="p-buttonsec2">
                                    Charge wallet with recharge code or Credit Card,
                                    There's a Tax on the amount, will be shown
                                    in the step at the end.
                                  </p>
                                  <button
                                    className="close-button-charge btn-defaultEx"
                                    onClick={() =>
                                      setShowRechargeContent(false)
                                    }
                                  >
                                    Back to Wallet
                                  </button>
                                  {showSendSection  && (
                                 <div style={{position: 'fixed',
                                  top: '30%',
                                  right: '30%',
                                  bottom: '0',
                                  width: '45%',
                                  height: '45%',
                                  backgroundColor: '#3c719a',
                                  display: 'flex',
                                  justifyContent: 'flex-end',
                                  alignItems:' center',
                                  zIndex: '99999999999',
                                  borderRadius: '20px'}}>
                                 <div style={{backgroundColor:'#3c719a', width:'97%', height:'42vh', zIndex:'99999999999', position:'absolute',top:'0',borderRadius:'20px'}}>
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
                                    className={`image-button `}
                                    src={codeimage}
                                    alt=""
                                    style={{ width: "30%" }}
                                   
                                  /> 
                                      <input
                                      style={{width: '40%',
                                        height: '50px',
                                        color: '#575757',
                                        fontSize: '14.23px',
                                        padding: '0 20px',
                                        border: '2px solid #f6f4f4',
                                        top: '52%',
                                        left:'30%',
                                        position: 'absolute',
                                        borderRadius: '30px'}}
                                        type="text"
                                        value={code}
                                        onChange={(e) =>
                                          setCode(e.target.value)
                                        }
                                        placeholder="Enter Your Code"
                                      />
                                      <button className="close-button-charge2 btn-defaultEx2" onClick={handleSendButtonClick}>
                                        Send
                                      </button>
                                    </div></div>   
                                  )}
                                  {!showCodeInput &&  !showSendSection &&(
                                    <button
                                      className="close-button-charge2 btn-defaultEx2"
                                      onClick={handleNextButtonClick}
                                    >
                                      Next
                                    </button>
                                  )}
                                  {/* <button className="close-button-charge2 btn-defaultEx2" onClick={handleNextButtonClick}>Next</button> */}
                                </div>
                              ) : (
                                <div>
                                  <p className="p-button">Wallet Information</p>
                                  <img
                                    className="image-button"
                                    src={walletStatus}
                                    style={{ width:'29%'}}
                                    alt=""
                                  />
                                  <p className="p-buttonsec">
                                    Your Balance is {profile.user.wallet?profile.user.wallet:"0"} EGP
                                  </p>
                                  <button
                                    className="close-button-charge btn-defaultEx"
                                    onClick={toggleRechargeContent}
                                  >
                                    Charge Wallet
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* <img style={{ width: '50%' }} src={wallet} /> */}
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )}
              <li >
                {/* <Link to='/profile' style={{ textAlign: "center" }}> */}

                <div style={{ maxWidth: "3vw", borderRadius: "50%" }}>
                  {/* <img style={{ borderRadius: "50%", width: '80%' }} src={defImage} /> */}

                  <li>
                    <div style={{ textAlign: "center" }}>
                      {flag ? (
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                          <div style={{ width: "50px",height:'50px', borderRadius: "50%" ,display:'flex',alignItems:'center'}}>
                          {sessionStorage.getItem("image") &&
                            sessionStorage.getItem("image") === "undefined" ? (
                              
                                <i
                                  class="fa-solid fa-user-graduate fs-1"
                                  style={{ color: "rgb(197, 137, 43)" }}
                                ></i>
                             
                            ) : (
                              <img
                                alt="src"
                                src={sessionStorage.getItem("image")}
                                style={{width:'100%', borderRadius: "50%" }}
                              />
                            )}
                          </div>
                          {/* {console.log(sessionStorage.getItem("user_image"))} */}
                        </Link>
                      ) : (
                        <Link
                          to="/registerR"
                          style={{ textDecoration: "none" }}
                        >
                          <i
                            class="fa-solid fa-user-graduate fs-1"
                            style={{ color: "rgb(197, 137, 43)" }}
                          ></i>

                          {/* <i
                      class="fa-regular fa-user "
                     
                    ></i> */}
                        </Link>
                      )}
                    </div>
                  </li>

                  {/* <button
    className="btn "
    onClick={() => {
      window.location.replace("/registerR")
    }}
  >
    <i class="fa-solid fa-user-graduate fs-1" style={{color:'rgb(197, 137, 43)'}}></i>
  </button>    */}
                </div>
                {/* </Link> */}
              </li>
            
              {flag ? (  <li >
                  <div style={{ maxWidth: "10vw", borderRadius: "50%" }}>
                    <button
                      className="btn "
                      onClick={handleLogout}
                    >
                      <i class="fa-solid fa-arrow-right-from-bracket fs-4" style={{color:'rgb(197, 137, 43)'}}></i>
                    </button>
                  </div>
                </li>):''}
                <li>
                <div>
                 
                </div>
              </li>
            </ul>}
           
          </div>
        </div>
      </nav>
    </>
  );
}
