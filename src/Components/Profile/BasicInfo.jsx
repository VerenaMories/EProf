import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, Form, ProgressBar, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import defImage from "../images/PngItem_1503945.png";
import "./style.css";
import swal from 'sweetalert';

export default function BasicInfo() {
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const [user, setUser] = useState({});
    const [phone, setNumber] = useState("");
    const [email, setemail] = useState("");

    const [profile, setprofile] = useState({});
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        firstName,
        lastName,
       
        phone
      };
      sendData(data);
      }
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
        })
        .catch(error => {
        // console.log(error);			
        swal("Oops!", "Please try again!", "error");
  
        });
      }
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
    })
    .catch(error => {
      // console.log(error);
    });
     
      }, []);
  return (
   <>
    <Form method="post" onSubmit={handleSubmit} >
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridEmail"> */}
                      {/* <Form.Label>First Name</Form.Label> */}
                      <div class="col form__group field">
                      <input
              className="form__field"
              style={{width:'250px'}}
              type="text"
              id="firstName"
              name="firstName"
              placeholder={profile.firstName}
                        value={firstName}
                        onChange={(e) => {
                          setName( e.target.value );
                        }}
              autoComplete="off"
            />
            <div className="iconWrap2" style={{left:'10px'}}>
             <i class="fa-solid fa-user-graduate"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("firstName").focus();
                    }}
                  >
                 {profile.firstName}
                  </label>
                     
                       </div>
                    {/* </Form.Group>    */}
                     </Row>
                    <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridPassword"> */}
                      {/* <Form.Label>Last Name</Form.Label> */}
                      <div class="form__group field">
                      <input
              className="form__field"
              style={{width:'250px'}}
              type="text"
              id="lastName"
              name="lastName"
              placeholder={profile.lastName}
              value={lastName}
              onChange={(e) => {
                setLastName(  e.target.value );
              }}
              autoComplete="off"
            />
             <div className="iconWrap2" style={{left:'10px'}}>
             <i class="fa-solid fa-user-graduate"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("lastName").focus();
                    }}
                  >
             {profile.lastName}
                  </label>
                   </div>
                    {/* </Form.Group> */}
                  </Row>
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridAddress1"> */}
                      {/* <Form.Label>Email</Form.Label> */}
                      <div class="form__group field">
                      <input
                    className="form__field"
                    type="email"
                    style={{width:'250px'}}
                    name="email"
                    id="email"
                    placeholder="Email"
                    autocomplete="off"
                    disabled
                        value={profile.email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                  />
                   <div className="iconWrap2" style={{left:'10px'}}>
                    <i class="fa-solid fa-at"></i>
                  </div>
                  {/* <label
                    for="name"
                    class="form__label"
                    onClick={() => {
                      document.getElementById("email").focus();
                    }}
                  >
                    {profile.email}
                  </label> */}
                      {/* <Form.Control
                        type="text"
                        placeholder="1234 Main St"
                        disabled
                        value={profile.email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      /> */}
                      </div>
                    {/* </Form.Group>  */}
                    </Row><Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridAddress1"> */}
                      {/* <Form.Label>Number</Form.Label> */}
                
                      <div class="form__group field">
                      <input
                  className="form__field"
              type="number"
              style={{width:'250px'}}
              name="phone"
              id="phone"
              autocomplete="off"
              placeholder={profile.phone}
              value={phone}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <div className="iconWrap2" style={{left:'10px'}}>
               <i class="fa-solid fa-phone"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("phone").focus();
                    }}
                  >
                    {profile.phone}
                  </label>
                       </div>
                    {/* </Form.Group> */}
                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    {/* <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows={4} /> */}
                  </Form.Group>
                  <button
                    class="btn btn-primary btnHover"
                    style={{
                      marginTop: "13px",
                      marginBottom: "13px",

                      padding: "18px 32px 18px 32px",
                      border: "#3c719a 1px solid",
                      borderRadius: "50px",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  
                    type="submit" id="submit"  // disabled={
                    //   name.first + " " + name.last === user.name &&
                    //   number === user.number
                    //     ? true
                    //     : false
                    // }
                  >
                    Submit Changes<i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Form>
   </>
  )
}
